import Hero from "../hero/Hero";
// eslint-disable-next-line react/prop-types
const Home = ({movies}) => {
    return (
        <div>
            <Hero movies={movies} />
        </div>
    )
}

export default Home;