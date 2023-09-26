import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddGuest(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object representing the body of the POST request
        const guestData = { name, email };

        // Get the token from localStorage
        const storedToken = localStorage.getItem('authToken');

        // Send the token through the request "Authorization" Headers
        axios
            .post(
                `${API_URL}/api/guests`,
                guestData,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                // Reset the state to clear the inputs
                setName("");
                setEmail("");

                // Invoke the callback function coming through the props
                // to refresh guest details or perform other actions as needed
                props.refreshGuests();
            })
            .catch((error) => console.log(error));
    };

}

export default AddGuest;
