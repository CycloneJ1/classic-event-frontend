import React from "react";

function Guestcard({ name, imageUrl, onDelete }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Guestcard;
