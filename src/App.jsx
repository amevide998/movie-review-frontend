import './App.css'
import api from './api/axiosConfig';
import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header.jsx";
import Trailer from "./components/trailer/Trailer.jsx";
import Reviews from "./components/reviews/Reviews.jsx";


function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try{
      const response = await api.get("/api/v1/movies")
      setMovies(response.data);
    }catch (err){
      console.log(err);
    }
  }

    const getMovieData = async (movieId) => {
      try {
          const response = await api.get(`/api/v1/movies/${movieId}`);
          const singleMovie = response.data;
          const reviews = singleMovie.reviewsIds
          setMovie(singleMovie);
          setReviews(reviews);



      }catch (e){
          console.log("something wrong")
      }
    }

  useEffect(() => {
    getMovies();
  }, []);



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home movies={movies}/>} />
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
            <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews}  setReviews={setReviews} /> }></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
