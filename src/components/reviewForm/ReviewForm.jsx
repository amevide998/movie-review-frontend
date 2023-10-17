import {Form, Button} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue}></Form.Control>
            </Form.Group>
            <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default ReviewForm;