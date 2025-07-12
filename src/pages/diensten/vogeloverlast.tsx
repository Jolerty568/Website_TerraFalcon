import "./mollenoverlast.css";
import VogelFoto from "../../img/home/vogeloverlast.jpeg";

function Vogeloverlast() {
  return (
    <div className="mol-container">
      <h1 className="mol-title">Vogeloverlast</h1>
      <p className="mol-subtitle">
        Duiven, kraaien of meeuwen die voor overlast zorgen? Wij bieden een
        oplossing op maat!
      </p>
      <div className="mol-grid">
        <div className="mol-img-box">
          <img src={VogelFoto} alt="Vogeloverlast" className="mol-img" />
        </div>
        <div className="mol-info-box">
          <h2>Wat is vogeloverlast?</h2>
          <p>
            Vogels kunnen veel hinder veroorzaken in en rond woningen, bedrijven
            en openbare ruimtes. Denk aan vervuiling door uitwerpselen, lawaai,
            schade aan gebouwen en gezondheidsrisico's door parasieten.
          </p>
          <ul className="mol-list">
            <li>Vervuiling van terrassen, auto's en gebouwen</li>
            <li>Lawaai en verstoring van rust</li>
            <li>Schade aan dakgoten, zonnepanelen en isolatie</li>
            <li>Verspreiding van parasieten en ziektes</li>
          </ul>
        </div>
      </div>
      <div className="mol-tips-cta">
        <div className="mol-tips">
          <h3>Tips om vogeloverlast te beperken</h3>
          <ul>
            <li>Houd voedselresten buiten bereik van vogels</li>
            <li>Sluit openingen af waar vogels kunnen nestelen</li>
            <li>Plaats vogelwerende middelen zoals netten of strips</li>
          </ul>
        </div>
        <div className="mol-cta">
          <h3>Professionele hulp nodig?</h3>
          <p>
            Wij bieden effectieve en diervriendelijke oplossingen voor
            vogeloverlast. Neem contact op voor advies of een interventie!
          </p>
          <a href="/contact" className="mol-contact-btn">
            Contact opnemen
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vogeloverlast;
