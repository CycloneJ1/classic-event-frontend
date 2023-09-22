import react from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react"

const API_URL = "http://localhost:5174"


function CreateEvent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [guests, setGuests] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, date, location, imageUrl, guests };
    axios
      .post(`${API_URL}/api/events`, requestBody)
      .then((response) => {

        setTitle("");
        setDescription("");
        setDate("");
        setLocation("");
        setImageUrl("");
        setGuests("");

        // props.refreshProjects();
      })
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="Event">
        <h3>Create</h3>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>ImageUrl:</label>
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label>Guests:</label>
        <input
          type="text"
          name="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CreateEvent;