import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      <Container className="mt-5">
        <h1>Welcome to Classic Event</h1>
        <p>Your Premier Event Planning Partner</p>
      </Container>

      <Container className="services mt-5" id="services">
        <h2>Services</h2>
        <Row>
          <Col>
            <h3>Event Planning</h3>
            <p>We plan and execute events that leave lasting impressions.</p>
          </Col>
          {/* Add more service columns here */}
        </Row>
      </Container>

      <Container className="about mt-5" id="about">
        <h2>About Us</h2>
        <p>We are a dedicated team of event planners committed to making your dreams come true.</p>
      </Container>

      <Container className="contact mt-5" id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or ready to plan your event? Contact us today!</p>
        <a href="mailto:contact@classicevent.com" className="btn btn-primary">Email Us</a>
      </Container>

      <footer className="footer mt-5">
        <Container>
          <p>&copy; {new Date().getFullYear()} Classic Event. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default HomePage;
