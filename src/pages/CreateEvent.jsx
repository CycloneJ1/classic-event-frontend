import react from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react"


const API_URL = "http://localhost:5005"


function CreateEvent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const [location, setLocation] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [guests, setGuests] = useState([])
  const nameOptions = [
    { _id: "1", name: "Alice" },
    { _id: "2", name: "Bob" },
    { _id: "3", name: "Charlie" },
    { _id: "4", name: "David" },
    // Add more names as needed
  ];


  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    const requestBody = { title, description, date, guests };
    axios
      .post(`${API_URL}/api/events`, requestBody, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
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
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />


        <label>Date:</label>
        <input
          type="date" // Use type="date" for date input
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

        <label htmlFor="guests" className="form-label">
          Guests add & invite:
          <select
            name="guests"
            className="form-select select-custom"
            multiple
            value={guests}
            onChange={(e) => setGuests(Array.from(e.target.selectedOptions, (option) => option.value))}
          >
            {nameOptions.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
            {/* Your guest options here */}
          </select>
        </label>
        <div id="multiSelectHelp" className="form-text">
          To choose more than one, hold CTRL.
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateEvent;