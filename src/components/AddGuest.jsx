import { useState } from "react";
import axios from "axios";

function AddGuest(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object representing the body of the POST request
        const guestData = { name, email };
        const storedToken = localStorage.getItem('authToken');

        axios
            .post(
                `${import.meta.env.VITE_API_URL}/api/guests`,
                guestData,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                // Reset the state to clear the inputs
                setName("");
                setEmail("");

                props.refreshGuests();
            })
            .catch((error) => console.log(error));
    };

}

export default AddGuest;
