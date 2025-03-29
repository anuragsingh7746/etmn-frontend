import React from "react";
import "../css/Contact.css";

const ContactUs = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-description">
          Have a question or want to work with us? Just drop a message below.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button className="button" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

