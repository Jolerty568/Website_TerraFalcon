import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../img/FullLogo_NoBuffer.jpg";
import fav from "../../img/fav.png";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const offcanvas = document.getElementById("offcanvasDarkNavbar");
    if (!offcanvas) return;
    return () => {};
  }, []);

  return (
    <>
      {/* Hamburger button only visible on mobile */}
      <button
        className="mobile-offcanvas-btn d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Open menu"
        style={{ position: "fixed", top: 18, right: 18, zIndex: 2000 }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav
        className="navbar navbar-expand-lg custom-navbar"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <div className="logo-navbar" style={{ marginBottom: "20px" }}>
          <Link to="/">
            <img src={logo} alt="Bedrijfslogo" />
          </Link>
        </div>
        <div style={{ width: "100%" }}>
          {/* Verwijder de navbar-toggler uit de sticky navbar, alleen mobiel knopje blijft */}
          {/* Desktop nav links */}
          <ul
            className="navbar-nav offcanvas-nav d-none d-lg-flex"
            style={{ justifyContent: "flex-start", width: "100%" }}
          >
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/" ? " active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle${
                  location.pathname.startsWith("/diensten") ? " active" : ""
                }`}
                href="#"
                id="dienstenDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Onze diensten
              </a>
              <ul className="dropdown-menu" aria-labelledby="dienstenDropdown">
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/mol" ? " active" : ""
                    }`}
                    to="/diensten/mol"
                  >
                    Mollenoverlast
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/vogel" ? " active" : ""
                    }`}
                    to="/diensten/vogel"
                  >
                    Vogeloverlast
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/wesp" ? " active" : ""
                    }`}
                    to="/diensten/wesp"
                  >
                    Wespenoverlast
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten" ? " active" : ""
                    }`}
                    to="/diensten"
                  >
                    Alle diensten
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/tarieven" ? " active" : ""
                }`}
                to="/tarieven"
              >
                Tarieven
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/contact" ? " active" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Offcanvas only! */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
            <Link to="/">
              <img
                src={fav}
                alt="FavLogo"
                style={{ height: "50px", width: "auto", marginRight: "14px" }}
              />
            </Link>
            TerraFalcon
          </h5>
          {/* X knop verwijderd */}
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav offcanvas-nav">
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/" ? " active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle${
                  location.pathname.startsWith("/diensten") ? " active" : ""
                }`}
                href="#"
                id="offcanvasDienstenDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Onze diensten
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="offcanvasDienstenDropdown"
              >
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/mol" ? " active" : ""
                    }`}
                    to="/diensten/mol"
                  >
                    Mollenoverlast
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/vogel" ? " active" : ""
                    }`}
                    to="/diensten/vogel"
                  >
                    Vogeloverlast
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/wesp" ? " active" : ""
                    }`}
                    to="/diensten/wesp"
                  >
                    Wespenoverlast
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten" ? " active" : ""
                    }`}
                    to="/diensten"
                  >
                    Alle diensten
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/tarieven" ? " active" : ""
                }`}
                to="/tarieven"
              >
                Tarieven
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/contact" ? " active" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <br />
          {/* Footer content ONLY in offcanvas, not in normal navbar */}
          <div className="offcanvas-footer-content d-block">
            <div className="offcanvas-footer-sections">
              <div className="offcanvas-footer-section offcanvas-footer-location">
                <h6>Regio</h6>
                <span>TerraFalcon</span>
                <br />
                <span>Lommel, Limburg, België</span>
              </div>
              <div className="offcanvas-footer-section offcanvas-footer-contact">
                <h6>Contact</h6>
                <span>GSM: 012 34 56 78</span>
                <br />
                <Link
                  to="/contact"
                  className="footer-contact-btn"
                  style={{ marginTop: 8 }}
                >
                  Contacteer ons
                </Link>
              </div>
            </div>
            <div className="offcanvas-footer-bar">
              <div className="offcanvas-footer-socials">
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
              <div className="offcanvas-footer-copyright">
                &copy; {new Date().getFullYear()} TerraFalcon
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
