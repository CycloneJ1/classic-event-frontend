import { useState, useEffect } from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';


import axios from "axios";

function EventList() {
  const [events, setEvents] = useState([]);
  const [updatedEventData] = useState([]);

  const storedToken = localStorage.getItem("authToken");

  const getAllEvents = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/events`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error));
  };


  useEffect(() => {
    getAllEvents();
  }, []);


  const updateEvents = (eventId, updatedEventData) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/api/update/${eventId}`, updatedEventData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        // Handle successful event update
        // You may want to navigate or show a success message here
        console.log("Event updated successfully");
        getAllEvents(); // Refresh the event list after updating
      })
      .catch((error) => console.error("Error updating event:", error));
  };

  const deleteEvent = (eventId) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        console.log("Event deleted successfully");
        getAllEvents();
      })
      .catch((error) => console.error("Error deleting event:", error));
  };


  useEffect(() => {
    getAllEvents();
  }, []);

  return (
<div>
  <h1>Events Created</h1>
  <Row>
    {events.map((event, index) => (
      <Col key={event._id} xs={12} sm={6} md={4}>
        <Card>
          <Card.Img variant="top" src={event.imageUrl} alt="" />
          <Card.Body>
          <span className="label">Event:</span>
            <Card.Title>{event.title}</Card.Title>
            <span className="label">Information:</span>
            <Card.Title>{event.description}</Card.Title>
            <Link to={`/events/update/${event._id}`}>
              <Button variant="primary">Update Event</Button>
            </Link>
            <Button variant="danger" onClick={() => deleteEvent(event._id)}>
              Delete Event
            </Button>
          </Card.Body>
        </Card>
      </Col>
      // Render a new row after every third card
      // {index % 3 === 2 && <div className="w-100"></div>}
    ))}
  </Row>
</div>
  );
}

export default EventList;
