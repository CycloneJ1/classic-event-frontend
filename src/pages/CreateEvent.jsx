import react from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react"

function CreateEvent(props) {
  const [title, setTitle] = useState()
  const [description,setDescription] = useState()
  const [date, setDate] = useState()
  const [location, setLocation] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [guests, setGuests] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, date, location, imageUrl, guests };
    const API_URL = "http://localhost:5174/events/create"
    axios
      .post(`${API_URL}/api/events`, requestBody)
      .then((response) => {

          setTitle("");
          setDescription("");
          setDate("");
          setLocation("");
          setImageUrl("");
          setGuests("");

          props.refreshProjects();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="AddProject">
      <h3>Create</h3>

      <form>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />


        <label>Date:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Location:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>ImageUrl:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label>Guests:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setGuests(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );

}
export default CreateEvent;