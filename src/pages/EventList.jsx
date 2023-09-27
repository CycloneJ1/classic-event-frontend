import { useState, useEffect } from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

import axios from "axios";
import eventService from "../services/Event.service";

function EventList() {
  const [events, setEvents] = useState([]);
  const [updatedEventData] = useState([]);
  // const [deletedEventData] = useState([])

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
      {events.map((event) => (
        <Card key={event._id}>
          <Card.Img variant="top" src={event.imageUrl} alt={event.title} />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Link to={`/events/update/${event._id}`}>
              <Button variant="primary">Update Event</Button>
            </Link>
            <Button variant="danger" onClick={() => deleteEvent(event._id)}>
              Delete Event
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default EventList;
