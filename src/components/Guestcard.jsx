import React from "react";

function Guestcard({ name, email, image }) {
    return (
        <div className="guest-card">
            {<img src={image} alt={`Profile of ${name}`} />}
            <h3>Name of guest: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}

export default Guestcard;