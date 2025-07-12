import "./mollenoverlast.css";
import MolFoto from "../../img/home/mol.jpg";

function Mollenoverlast() {
  return (
    <div className="mol-container">
      <h1 className="mol-title">Mollenoverlast</h1>
      <p className="mol-subtitle">
        Last van molshopen in je tuin of op je terrein? Wij lossen het snel en
        diervriendelijk op!
      </p>
      <div className="mol-grid">
        <div className="mol-img-box">
          <img src={MolFoto} alt="Mol in de tuin" className="mol-img" />
        </div>
        <div className="mol-info-box">
          <h2>Wat is mollenoverlast?</h2>
          <p>
            Mollen kunnen in korte tijd flinke schade aanrichten aan gazons,
            sportvelden en landbouwgrond. Hun gangenstelsels zorgen voor
            verzakkingen en ontsierende molshopen. Dit kan gevaarlijk zijn voor
            spelende kinderen, huisdieren en machines.
          </p>
          <ul className="mol-list">
            <li>Onaantrekkelijke molshopen in het gras</li>
            <li>Beschadigde wortels van planten</li>
            <li>Verzakkingen in het gazon of sportveld</li>
            <li>Risico op struikelen of schade aan machines</li>
          </ul>
        </div>
      </div>
      <div className="mol-tips-cta">
        <div className="mol-tips">
          <h3>Tips om mollen te voorkomen</h3>
          <ul>
            <li>Houd het gazon goed belucht en gezond</li>
            <li>Verwijder voedselbronnen zoals emelten en engerlingen</li>
            <li>Gebruik geurige planten zoals keizerskroon</li>
          </ul>
        </div>
        <div className="mol-cta">
          <h3>Professionele hulp nodig?</h3>
          <p>
            Onze specialisten helpen je snel en effectief van mollenoverlast af.
            Neem vrijblijvend contact op voor advies of een afspraak!
          </p>
          <a href="/contact" className="mol-contact-btn">
            Contact opnemen
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mollenoverlast;
