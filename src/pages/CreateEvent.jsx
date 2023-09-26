import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import service from "../../src/services/file-upload.service";

function CreateEvent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleImageChange = async (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    try {
      const response = await service.uploadImage(uploadData);
      setImageUrl(response.imageUrl);
    } catch (err) {
      setError("Error while uploading the file.");
      console.error("Error while uploading the file: ", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 

    const storedToken = localStorage.getItem("authToken");
    const requestBody = { title, description, imageUrl };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/events`, requestBody, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });
      setTitle("");
      setDescription("");
      setImageUrl("");
      navigate("/events");
    } catch (err) {
      setError("Error while adding the new event.");
      console.error("Error while adding the new event: ", err);
    }
  };

  return (
    <div className="Event">
      <h3>Create Event</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => {imageUrl}}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
