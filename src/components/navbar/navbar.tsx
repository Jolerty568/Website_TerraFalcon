import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import biglogo from "../../img/logo.png";
import fav from "../../img/fav.png";

function Navbar() {
  const location = useLocation();

  // State voor logo zichtbaar
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // State om te detecteren of offcanvas open is
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  // Open/close events koppelen aan Bootstrap offcanvas
  useEffect(() => {
    const offcanvasEl = document.getElementById("offcanvasDarkNavbar");
    if (!offcanvasEl) return;
    const handleShow = () => setOffcanvasOpen(true);
    const handleHide = () => setOffcanvasOpen(false);
    offcanvasEl.addEventListener("show.bs.offcanvas", handleShow);
    offcanvasEl.addEventListener("hide.bs.offcanvas", handleHide);
    return () => {
      offcanvasEl.removeEventListener("show.bs.offcanvas", handleShow);
      offcanvasEl.removeEventListener("hide.bs.offcanvas", handleHide);
    };
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
        aria-label={offcanvasOpen ? "Sluit menu" : "Open menu"}
        style={{
          position: "fixed",
          top: 18,
          right: 18,
          zIndex: 2000,
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {offcanvasOpen ? (
          <span
            style={{
              fontSize: 24,
              lineHeight: 1,
              fontWeight: "bold",
              display: "inline-block",
              width: 24,
              height: 24,
              textAlign: "center",
            }}
          >
            &times;
          </span>
        ) : (
          <span
            className="navbar-toggler-icon"
            style={{ width: 24, height: 24, display: "inline-block" }}
          ></span>
        )}
      </button>
      <nav
        className="navbar navbar-expand-lg custom-navbar"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        {showLogo && (
          <div
            className="logo-navbar"
            style={{ marginBottom: "20px", paddingLeft: "24px" }}
          >
            <Link to="/">
              <img
                src={biglogo}
                alt="Bedrijfslogo"
                style={{ height: 110, width: "auto" }}
              />
            </Link>
          </div>
        )}
        <div style={{ width: "100%" }}>
          {/* Verwijder de navbar-toggler uit de sticky navbar, alleen mobiel knopje blijft */}
          {/* Desktop nav links */}
          <ul
            className="navbar-nav offcanvas-nav d-none d-lg-flex"
            style={{ justifyContent: "flex-start", width: "100%" }}
          >
            <li
              className="nav-item"
              style={{ display: "flex", alignItems: "center" }}
            >
              {!showLogo && (
                <img
                  src={biglogo}
                  alt="Logo"
                  style={{
                    height: 28,
                    width: "auto",
                    marginRight: 8,
                    verticalAlign: "middle",
                    marginLeft: 12,
                  }}
                />
              )}
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
                      location.pathname === "/diensten/mollenoverlast"
                        ? " active"
                        : ""
                    }`}
                    to="/diensten/mollenoverlast"
                  >
                    Mollenoverlast
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/vogeloverlast"
                        ? " active"
                        : ""
                    }`}
                    to="/diensten/vogeloverlast"
                  >
                    Vogeloverlast
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/wespenoverlast"
                        ? " active"
                        : ""
                    }`}
                    to="/diensten/wespenoverlast"
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
                  location.pathname === "/blog" ? " active" : ""
                }`}
                to="/blog"
              >
                Blog
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
                      location.pathname === "/diensten/mollenoverlast"
                        ? " active"
                        : ""
                    }`}
                    to="/diensten/mollenoverlast"
                  >
                    Mollenoverlast
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/vogeloverlast"
                        ? " active"
                        : ""
                    }`}
                    to="/diensten/vogeloverlast"
                  >
                    Vogeloverlast
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item${
                      location.pathname === "/diensten/wespenoverlast"
                        ? " active"
                        : ""
                    }`}
                    to="/diensten/wespenoverlast"
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
                  location.pathname === "/blog" ? " active" : ""
                }`}
                to="/blog"
              >
                Blog
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
                <span>
                  GSM: <a href="tel:+32483323646">+32 483 32 36 46</a>
                </span>
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
