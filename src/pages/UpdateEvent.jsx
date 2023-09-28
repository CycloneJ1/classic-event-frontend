import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, Col, Image } from "react-bootstrap";


function UpdateEvent() {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const storedToken = localStorage.getItem('authToken');

    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        // Fetch the event data from the server when the component mounts
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`,
                {
                    headers: { Authorization: `Bearer ${storedToken}` },
                })
            .then((response) => {
                console.log(response.data)

                setTitle(response.data.title)
                setDescription(response.data.description)
                setImageUrl(response.data.imageUrl)
            })
            .catch((error) => console.error("Error fetching event data:", error));
    }, [eventId]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const updateEvents = {
            title,
            description,
            imageUrl,
        };

        // Send a PUT request to update the event
        axios
            .put(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`, updateEvents,
                {
                    headers: { Authorization: `Bearer ${storedToken}` },
                })

            .then(() => {
                console.log("Event updated successfully");
                // Redirect to the event details page after the update
                navigate(`/events`);
            })
            .catch((error) => console.error("Error updating event:", error));
    };



    return (
        <Container>
        <h3 className="my-3">Update your Event</h3>
  
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
  
          <Form.Label>Your Image</Form.Label>
          <Form.Group className="mb-3">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="Event"
                fluid
                style={{ maxHeight:"10%" }}
              />
            )}
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Update Event
          </Button>
        </Form>
      </Container>
    );
}

export default UpdateEvent;
