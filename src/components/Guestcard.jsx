import React from "react";

function Guestcard({ name, imageUrl, onDelete }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default Guestcard;
