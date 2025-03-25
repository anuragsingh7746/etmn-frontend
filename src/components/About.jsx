import "../css/About.css"; // Make sure to create this file in the same folder

const AboutUs = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <h1>About Us</h1>
          <p>
            We are a passionate group of innovators, creators, and strategists dedicated to building impactful solutions. Our mission is to empower communities through technology and collaboration.
          </p>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Jane Doe" />
              <h3>Jane Doe</h3>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="John Smith" />
              <h3>John Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Emma Brown" />
              <h3>Emma Brown</h3>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <h2>Our Partners</h2>
          <div className="partner-logos">
            <img src="https://via.placeholder.com/100x50?text=Partner+1" alt="Partner 1" />
            <img src="https://via.placeholder.com/100x50?text=Partner+2" alt="Partner 2" />
            <img src="https://via.placeholder.com/100x50?text=Partner+3" alt="Partner 3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

