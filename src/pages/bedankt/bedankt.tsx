import "./bedankt.css";
import ViteLogo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Bedankt() {
  return (
    <div className="bedankt-container">
      <div className="bedankt-content">
        <img src={ViteLogo} alt="TerraFalcon logo" className="bedankt-logo" />
        <h1 className="bedankt-title">Bedankt voor je bericht!</h1>
        <p className="bedankt-text">
          We hebben je aanvraag goed ontvangen.
          <br />
          Je krijgt zo snel mogelijk een reactie van ons.
          <br />
          Heb je dringende vragen? Bel ons gerust!
        </p>
        <Link to="/" className="bedankt-btn">
          Terug naar home
        </Link>
      </div>
    </div>
  );
}

export default Bedankt;
