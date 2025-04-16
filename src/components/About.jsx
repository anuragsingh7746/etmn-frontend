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
              <img src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg" alt="Jane Doe" />
              <h3>Jane Doe</h3>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="team-member">
              <img src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg" alt="John Smith" />
              <h3>John Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?semt=ais_hybrid&w=740" alt="Emma Brown" />
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
            <img src="https://3dlabstore.com.hk/wp-content/uploads/2024/06/Ultimaker-logo-icon.jpeg" alt="Ultimaker" />
            <img src="https://media.licdn.com/dms/image/v2/C560BAQH8G-SAKyFPww/company-logo_200_200/company-logo_200_200/0/1630658792891/piltover_technologies_logo?e=1750291200&v=beta&t=DO5n2FAXqZM8Iz2-4d7G1CitY7qAPXiZWLMBYarXIdY" alt="Piltover" />
            <img src="https://media.licdn.com/dms/image/v2/D560BAQHZv34_EtqMJQ/company-logo_200_200/company-logo_200_200/0/1723546990982/all_about_startups_logo?e=1750291200&v=beta&t=mQOyor5xN6Flr1u6sUs1nTNRF9vLq1JHn69HD_naTCY" alt="All About Startup" />
            <img src="https://w7.pngwing.com/pngs/821/546/png-transparent-manipal-academy-of-higher-education-sikkim-manipal-university-sikkim-manipal-institute-of-technology-manipal-university-jaipur-student-text-people-logo.png" alt="Manipal" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

