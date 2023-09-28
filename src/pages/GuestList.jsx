import { useState, useEffect } from "react";
import axios from "axios";
import Guestcard from "../components/Guestcard";
import guestService from "../services/guest.service";

function GuestList() {
  const [guests, setGuests] = useState([]);
  const [title, setTitle] = useState(""); // Assuming you have title and description state
  const [description, setDescription] = useState("");
  // const [imageUrl, setImageUrl] = useState("")

  const getAllGuests = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/guests`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setGuests(response.data))
      .catch((error) => console.log(error));
  };

  const createGuest = () => {
    const storedToken = localStorage.getItem("authToken");

    const requestBody = {
      title: title,
      description: description,
      // imageUrl: imageUrl,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/guests`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        // setImageUrl("")
        getAllGuests(); // Refresh the guest list
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGuests();
  }, []);

  return (
    <div>
      <h1>Guests added</h1>

      {guests.map((guest) => (
        <Guestcard
          key={guest._id}
          name={guest.name}
          imageUrl={guest.imageUrl}
        />
      ))}
    </div>
  );
}

export default GuestList;
