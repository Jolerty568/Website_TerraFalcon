import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-main-row">
        <div className="footer-section footer-links">
          <ul>
            <li>
              <Link className="navlink" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/diensten">
                Onze diensten
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-location">
          <span>Regio</span>
          <br />
          <span>Lommel, Limburg, België</span>
        </div>
        <div className="footer-section footer-contact">
          <a href="tel:+32483323646" className="footer-phone-link">
            GSM: +32 483 32 36 46
          </a>
          <br />
          <br />
          <Link to="/contact" className="footer-contact-btn">
            Contacteer ons
          </Link>
        </div>
      </div>
      <div className="footer-bar">
        <div className="footer-socials-bar">
          <a
            href="https://www.facebook.com/profile.php?id=61573949003897"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/terrafalcon.be/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-copyright-bar">
          &copy; {new Date().getFullYear()} TerraFalcon. All rights reserved.
        </div>
        <div className="footer-privacy-bar">
          <Link className="link" to="/privacy">
            Privacybeleid
          </Link>
        </div>
      </div>
      <div className="copyright-spacer"></div>
    </footer>
  );
}

export default Footer;
