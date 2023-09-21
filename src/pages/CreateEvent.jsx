import react from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";
import {useState} from "react"

function CreateEvent() {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or perform other actions
    console.log('Form submitted with data:', eventDetails);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="eventTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter event title"
            value={eventDetails.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="eventDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="eventLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Enter event location"
            value={eventDetails.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="eventDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            placeholder="Enter event description"
            value={eventDetails.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Event
        </Button>

      </Form>
    </Container>
  );
}
export default CreateEvent;