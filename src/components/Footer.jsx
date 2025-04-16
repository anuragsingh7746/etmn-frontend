import "../css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Address Section */}
        <div className="footer-section">
          <h4>Our Office</h4>
          <p>Ground Floor - 115 (AB-1),</p>
          <p>Manipal University Jaipur, Dahmi Kalan,</p>
          <p>Jaipur, Rajasthan - 303007 </p>
        </div>
        {/* Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about" className="footerlinks">About</a></li>
            <li><a href="/team" className="footerlinks">Team</a></li>
            <li><a href="/partners" className="footerlinks">Partners</a></li>
            <li><a href="/contact" className="footerlinks">Contact</a></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="footerlinks"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="footerlinks"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="footerlinks"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" className="footerlinks"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ETMN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
