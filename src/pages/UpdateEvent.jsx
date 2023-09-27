import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventService from "../services/Event.service";

function UpdateEvent() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('authToken');

  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    // Fetch the event data from the server when the component mounts
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`,
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
      console.log(response.data)

      setTitle(response.data.title)
      setDescription(response.data.description)
      setImageUrl(response.data.imageUrl)
      })
      .catch((error) => console.error("Error fetching event data:", error));
  }, [eventId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const updateEvents = {
      title,
      description,
      imageUrl,
    };

    // Send a PUT request to update the event
    axios
      .put(`${import.meta.env.VITE_API_URL}/api/events/${eventId}`,updateEvents ,
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then(() => {
        console.log("Event updated successfully");
        // Redirect to the event details page after the update
        navigate(`/events`);
      })
      .catch((error) => console.error("Error updating event:", error));
  };

  return (
    <div className="updateEvents">
      <h3>Edit the Event</h3>

      <form onSubmit={handleFormSubmit}>
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

        {/* <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        /> */}

        <button type="submit">Update Event</button>
      </form>
    </div>
  );
}

export default UpdateEvent;
