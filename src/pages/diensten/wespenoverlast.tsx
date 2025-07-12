import "./mollenoverlast.css";
import WespFoto from "../../img/home/swarm-1903243_1280.jpg";

function Wespenoverlast() {
  return (
    <div className="mol-container">
      <h1 className="mol-title">Wespenoverlast</h1>
      <p className="mol-subtitle">
        Wespen in de tuin, op het terras of in huis? Wij verwijderen
        wespennesten snel, veilig en vakkundig!
      </p>
      <div className="mol-grid">
        <div className="mol-img-box">
          <img src={WespFoto} alt="Wespenoverlast" className="mol-img" />
        </div>
        <div className="mol-info-box">
          <h2>Wat is wespenoverlast?</h2>
          <p>
            Wespen kunnen voor veel hinder en gevaar zorgen, vooral in de
            zomermaanden. Ze bouwen hun nesten vaak in spouwmuren, onder
            dakranden of in de grond. Een wespennest in de buurt kan leiden tot
            pijnlijke steken, allergische reacties en angst bij kinderen en
            huisdieren.
          </p>
          <ul className="mol-list">
            <li>Pijnlijke steken en allergische reacties</li>
            <li>Overlast op terras, tuin of balkon</li>
            <li>Gevaar voor kinderen en huisdieren</li>
            <li>Nesten in huis, schuur of tuin</li>
          </ul>
        </div>
      </div>
      <div className="mol-tips-cta">
        <div className="mol-tips">
          <h3>Tips om wespen te voorkomen</h3>
          <ul>
            <li>Sluit afvalbakken goed af</li>
            <li>Laat geen zoetigheid of etensresten buiten staan</li>
            <li>Controleer regelmatig op beginnende nesten</li>
          </ul>
        </div>
        <div className="mol-cta">
          <h3>Professionele hulp nodig?</h3>
          <p>
            Wij verwijderen wespennesten snel, veilig en vakkundig. Neem direct
            contact op voor een snelle interventie!
          </p>
          <a href="/contact" className="mol-contact-btn">
            Contact opnemen
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wespenoverlast;
