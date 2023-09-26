import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreateGuest(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const storedToken = localStorage.getItem("authToken");
    const guestData = { name, email, imageUrl };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/guests`, guestData, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });
      setName("");
      setEmail("");
      setImageUrl("");
      navigate("/guests");
    } catch (err) {
      setError("Error while adding the new guest.");
      console.error("Error while adding the new guest: ", err);
    }
  };

  return (
    <div className="Guest">
      <h3>Create Guest</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateGuest;
