import "./privacy.css";

function Privacy() {
  return (
    <div className="privacy-container fade-in">
      <div className="privacy-content">
        <h1 className="privacy-title">Privacybeleid TerraFalcon</h1>
        <p className="privacy-intro">
          Wij nemen jouw privacy serieus. Op deze pagina lees je hoe TerraFalcon
          omgaat met jouw gegevens.
        </p>
        <h2 className="privacy-subtitle">Welke gegevens verzamelen wij?</h2>
        <ul className="privacy-list">
          <li>
            Contactgegevens die je invult via het contactformulier (naam,
            e-mail, telefoon, bericht).
          </li>
          <li>
            Technische gegevens zoals IP-adres en browserinformatie (voor
            beveiliging en statistieken).
          </li>
        </ul>
        <h2 className="privacy-subtitle">
          Waarvoor gebruiken wij deze gegevens?
        </h2>
        <ul className="privacy-list">
          <li>Om je aanvraag te verwerken en contact met je op te nemen.</li>
          <li>Voor het verbeteren van onze website en dienstverlening.</li>
          <li>Om misbruik en spam te voorkomen (o.a. via reCAPTCHA).</li>
        </ul>
        <h2 className="privacy-subtitle">
          Hoe lang bewaren wij jouw gegevens?
        </h2>
        <p>
          Je gegevens worden niet langer bewaard dan nodig is voor het doel
          waarvoor ze zijn verzameld. Je kunt altijd verzoeken om je gegevens te
          laten verwijderen.
        </p>
        <h2 className="privacy-subtitle">Delen wij jouw gegevens?</h2>
        <p>
          Nee, TerraFalcon verkoopt of deelt jouw gegevens niet met derden,
          tenzij dit wettelijk verplicht is.
        </p>
        <h2 className="privacy-subtitle">Cookies & tracking</h2>
        <p>
          TerraFalcon gebruikt alleen functionele cookies en Google reCAPTCHA
          voor beveiliging. Er worden geen marketing- of trackingcookies
          geplaatst.
        </p>
        <h2 className="privacy-subtitle">Jouw rechten</h2>
        <p>
          Je hebt recht op inzage, correctie en verwijdering van je
          persoonsgegevens. Neem hiervoor contact op via het contactformulier.
        </p>
        <h2 className="privacy-subtitle">Contact</h2>
        <p>
          Heb je vragen over ons privacybeleid? Neem gerust contact op via{" "}
          <a href="mailto:mikawijckmans@terrafalcon.be">
            mikawijckmans@terrafalcon.be
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Privacy;
