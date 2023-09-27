import { useState, useEffect } from "react";
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
        <div key={event._id}>
          <h2>{event.title}</h2>
          <h2>{event.description}</h2>
          <img src={event.imageUrl} alt={event.title} />
          <Link to={`/events/update/${event._id}`}>
            <button>
              Update Event
            </button>
          </Link>



          <Link to={`/events/delete/${event._Id}`}>
          </Link>
          <button onClick={() => deleteEvent(event._id)}>
            Delete Event
          </button>
        </div>

      ))}

    </div>
  );
}

export default EventList;
