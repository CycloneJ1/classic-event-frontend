import { useState, useEffect } from "react";
import axios from "axios";
import eventService from "../services/Event.service";

function EventList() {
  const [events, setEvents] = useState([]);
  const [updatedEventData] = useState ([])
const storedToken = localStorage.getItem("authToken");

  const getAllEvents = () => {    
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/events`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error));
  };
  
  

  // eventService.getAllEvents()
  // .then((response)=>setEvents(response.data))
  // .catch((error)=> console.log(error))

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

  // const deleteEvent = (eventId) => {
  //   axios
  //     .delete(`${import.meta.env.VITE_API_URL}/api/delete/${eventId}`, {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then(() => {
  //       // Handle successful event deletion
  //       // You may want to navigate or show a success message here
  //       console.log("Event deleted successfully");
  //       getAllEvents(); // Refresh the event list after deleting
  //     })
  //     .catch((error) => console.error("Error deleting event:", error));
  // };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div c>
      <h1>These are your Events</h1>
      {events.map((event) => (
        <div key={event._id}>
          <p>{event.title}</p>
          <img src={event.imageUrl} alt={event.title} />
          <button onClick={() => updateEvents(event._id,updatedEventData)}>
            Update Event
          </button>
          {/* <button onClick={deleteEvent}>Delete Event</button> */}
        </div>

      ))}

    </div>
  );
}

export default EventList;
