import "./usp.css";

export function USPSection() {
  return (
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
            Altijd snel ter plaatse in Noord-Limburg en omstreken. Je krijgt een
            vlotte, persoonlijke aanpak zonder wachttijden.
          </p>
        </div>
        <div className="service-card usp-card">
          <h3>Discreet & betrouwbaar</h3>
          <p>
            Geen opvallende wagens of reclame. Jouw privacy staat centraal en je
            kan rekenen op een eerlijke, transparante service.
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
  );
}

export default USPSection;
