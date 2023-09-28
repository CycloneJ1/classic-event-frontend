function HomePage() {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Classic Event</h1>
          <p>Your Premier Event Planning Partner</p>
        </div>
      </section>

      <section className="services" id="services">
        <h2></h2>
        <div className="service">
          <h3>Event Planning</h3>
          <p>We plan and execute events that leave lasting impressions.</p>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>We are a dedicated team of event planners committed to making your dreams come true.</p>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or ready to plan your event? Contact us today!</p>
        <a href="mailto:contact@classicevent.com" className="contact-button">Email Us</a>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Classic Event. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
