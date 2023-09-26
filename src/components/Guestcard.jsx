import React from "react";

function Guestcard({ name, email }) {
    return (
        <div className="guest-card">
            <h3>Name:{name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}

export default Guestcard;