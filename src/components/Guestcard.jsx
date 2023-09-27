import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';

function Guestcard({ name, imageUrl ,email}) {
  return (
    <Card>
      <Card.Img src={imageUrl} alt={""} />
      <Card.Body>
      <p>Guest added!</p>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{email}</Card.Title>

      </Card.Body>
    </Card>
  );
}

export default Guestcard;
