import { Link } from "react-router-dom";
import "./home.css";
import AboutPhoto from "../../img/Mika.jpeg";
import ViteLogo from "../../img/datum.jpg";
import VogelFoto from "../../img/home/birds-4776407_1280.jpg";
import WespFoto from "../../img/home/swarm-1903243_1280.jpg";
import MolFoto from "../../img/home/mol.jpg";
import ContactFoto from "../../img/home/contact.jpg";
import DealFoto from "../../img/home/deal.jpg";
import OfferFoto from "../../img/home/offer.jpg";

function Home() {
  return (
    <>
      <main>
        <div className="content">
          <div>
            <div className="text-section">
              <h1>Welkom bij TerraFalcon</h1>
              <h3>
                Wij leveren dagelijks de beste service -<br />
                Lommel, Limburg en omstreken
                <br />
                Neem snel contact op!
              </h3>
              <br />
              <Link to="/contact" className="contact-button">
                Contacteer
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Over mij sectie */}
      <section className="about-me-banner">
        <div className="about-me-banner-inner">
          <div className="about-me-banner-photo">
            <img src={AboutPhoto} alt="Jouw naam" />
          </div>
          <div className="about-me-banner-text">
            <h2>Over mij</h2>
            <p>
              {/* Vul hier je persoonlijke voorsteltekst in! */}
              Hallo! Mijn naam is Mika Wijckmans Ik ben de drijvende kracht
              achter TerraFalcon.
              <br />
              <br />
              Mollen, wespen of vogeloverlast in Lommel, Pelt, Leopoldsburg,
              Hechtel-Eksel of omstreke?
              <br />
              Dan help ik je graag verder!
            </p>
          </div>
        </div>
      </section>

      {/* Onze diensten */}
      <section className="services-row">
        <h2 className="services-title">Onze diensten</h2>
        <div className="services-cards-row">
          <Link
            to="/diensten/mollenoverlast"
            className="service-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={MolFoto} alt="Mollenoverlast" className="service-img" />
            <h3>Mollenoverlast</h3>
            <p>
              Last van molshopen in je tuin of op je terrein? Wij zorgen voor
              een doeltreffende aanpak van mollenoverlast.
            </p>
          </Link>
          <Link
            to="/diensten/vogeloverlast"
            className="service-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={VogelFoto} alt="Vogeloverlast" className="service-img" />
            <h3>Vogeloverlast</h3>
            <p>
              Duiven, kraaien of meeuwen die voor overlast zorgen? Wij bieden
              oplossingen voor verschillende vogelsoorten.
            </p>
          </Link>
          <Link
            to="/diensten/wespenoverlast"
            className="service-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={WespFoto} alt="Wespenoverlast" className="service-img" />
            <h3>Wespenoverlast</h3>
            <p>
              Wespen in de tuin, op het terras of in huis? Wij bestrijden
              wespennesten snel, veilig en vakkundig.
            </p>
          </Link>
        </div>
      </section>

      {/* Stappenplan sectie */}
      <section className="steps-section" id="steps-section">
        <h2>Zo ga ik te werk</h2>
        <p className="section-desc">
          In 4 heldere stappen help ik je snel en vakkundig verder!
        </p>
        <div className="steps-list">
          <div className="step-item">
            <div className="step-img">
              <img src={ContactFoto} alt="Contact" />
            </div>
            <div className="step-number">1</div>
            <div className="step-title">Contact opnemen</div>
            <div className="step-desc">Stuur een bericht of bel voor info.</div>
          </div>
          <div className="step-item">
            <div className="step-img">
              <img src={ViteLogo} alt="afspraak" />
            </div>
            <div className="step-number">2</div>
            <div className="step-title">Afspraak maken</div>
            <div className="step-desc">We plannen samen een moment in.</div>
          </div>
          <div className="step-item">
            <div className="step-img">
              <img src={OfferFoto} alt="voorstel" />
            </div>
            <div className="step-number">3</div>
            <div className="step-title">Persoonlijk voorstel</div>
            <div className="step-desc">Ik maak een oplossing op maat.</div>
          </div>
          <div className="step-item">
            <div className="step-img">
              <img src={DealFoto} alt="Afloop" />
            </div>
            <div className="step-number">4</div>
            <div className="step-title">Afloop.</div>
            <div className="step-desc">Ik ga voor je aan de slag.</div>
          </div>
        </div>
      </section>

      {/* TerraFalcon voordelen sectie */}
      <section className="usp-section services-row">
        <div className="usp-left">
          <h2 className="usp-title">Waarom kiezen voor TerraFalcon?</h2>
          <p className="usp-intro">
            Op zoek naar een betrouwbare oplossing voor mollen, wespen of
            vogeloverlast? Ontdek waarom steeds meer mensen kiezen voor
            TerraFalcon:
          </p>
        </div>
        <div className="usp-cards-grid">
          <div className="service-card usp-card">
            <h3>Snelle & lokale service</h3>
            <p>
              Altijd snel ter plaatse in Noord-Limburg en omstreken. Je krijgt
              een vlotte, persoonlijke aanpak zonder wachttijden.
            </p>
          </div>
          <div className="service-card usp-card">
            <h3>Discreet & betrouwbaar</h3>
            <p>
              Geen opvallende wagens of reclame. Jouw privacy staat centraal en
              je kan rekenen op een eerlijke, transparante service.
            </p>
          </div>
          <div className="service-card usp-card">
            <h3>Veilig & milieubewust</h3>
            <p>
              We werken met veilige, ecologische methodes die het milieu en
              huisdieren respecteren. Jouw veiligheid primeert altijd.
            </p>
          </div>
          <div className="service-card usp-card">
            <h3>Advies op maat</h3>
            <p>
              Je krijgt altijd een helder advies en een oplossing die past bij
              jouw situatie. Ook na de interventie kan je bij ons terecht.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
