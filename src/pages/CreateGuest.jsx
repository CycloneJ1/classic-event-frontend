import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreateGuest(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const storedToken = localStorage.getItem("authToken");
    const guestData = { name, email };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/guests`, guestData, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });
      setName("");
      setEmail("");
      navigate("/guests");
    } catch (err) {
      setError("Error while adding the new guest.");
      console.error("Error while adding the new guest: ", err);
    }
  };

  return (
    <div className="Guest">
      <h3>Create Guest</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
          </Button>
      </Form>
    </div>
  );
}

export default CreateGuest;
