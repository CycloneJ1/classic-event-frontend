import { useState, useEffect } from "react";
import axios from "axios";
import AddGuest from "../components/AddGuest";
import Guestcard from "../components/Guestcard";

const API_URL = "http://localhost:5005";

function GuestList() {
  const [guests, setGuests] = useState([]);

  const getAllGuests = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/guests`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setGuests(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGuests();
  }, []);

  return (
    <div>

      <div className="GuestList">
        <AddGuest refreshGuests={getAllGuests} />

        {guests.map((guest) => (
          <Guestcard key={guest._id} {...guest} />
        ))}
      </div>
    </div>
  );
}

export default GuestList;
