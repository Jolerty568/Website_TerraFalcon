import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-main-row">
        <div className="footer-section footer-links">
          <ul>
            <li>
              <Link className="navlink" to="/about">
                Over ons
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/jobs">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/tewerk">
                Hoe gaan wij te werk
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/tarieven">
                Tarieven
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
          <span>GSM: 012 34 56 78</span>
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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
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
