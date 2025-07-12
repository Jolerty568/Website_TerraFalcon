import "./contact.css";
import ContactFoto from "../../img/home/contact.jpg";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const handleCaptcha = (value: string | null) => {
    // value bevat de captcha-token, kan eventueel als hidden field worden meegestuurd
    // FormSubmit gebruikt dit niet, maar je kunt het opslaan als extra veld
    const captchaInput = document.getElementById(
      "captcha-token"
    ) as HTMLInputElement;
    if (captchaInput && value) captchaInput.value = value;
  };
  return (
    <div className="contact-container">
      <div className="contact-header fade-in">
        <img
          src={ContactFoto}
          alt="Contact TerraFalcon"
          className="contact-img"
        />
        <div className="contact-header-text">
          <h1 className="contact-title">Contacteer TerraFalcon</h1>
          <p className="contact-subtitle">
            Heb je een vraag, wil je een afspraak maken of direct hulp bij
            overlast? Vul het formulier in of neem telefonisch contact op!
          </p>
        </div>
      </div>
      <form
        className="fade-in"
        action="https://formsubmit.co/mikawijckmans@terrafalcon.be"
        method="POST"
        onSubmit={(e) => {
          const captchaInput = document.getElementById(
            "captcha-token"
          ) as HTMLInputElement;
          if (!captchaInput.value) {
            e.preventDefault();
            alert(
              "Bevestig eerst de captcha voordat je het formulier verstuurt."
            );
          }
        }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname">Voornaam</label>
            <input
              type="text"
              id="firstname"
              name="Voornaam"
              placeholder="Jouw voornaam"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Achternaam</label>
            <input
              type="text"
              id="lastname"
              name="Achternaam"
              placeholder="Jouw achternaam"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="E-mail"
              placeholder="Jouw e-mail"
              required
            />
          </div>
        </div>
        <div className="form-overlast-row">
          <label className="overlast-label">Welke soort overlast heb je?</label>
          <div className="overlast-radio-group">
            <label>
              <input
                type="radio"
                name="Overlast"
                value="Mollenoverlast"
                required
              />{" "}
              Mollenoverlast
            </label>
            <label>
              <input type="radio" name="Overlast" value="Wespenoverlast" />{" "}
              Wespenoverlast
            </label>
            <label>
              <input type="radio" name="Overlast" value="Vogeloverlast" />{" "}
              Vogeloverlast
            </label>
            <label>
              <input type="radio" name="Overlast" value="Andere" /> Andere
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Telefoon</label>
            <input
              type="tel"
              id="phone"
              name="Telefoon"
              placeholder="Jouw telefoonnummer"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Onderwerp</label>
            <input
              type="text"
              id="subject"
              name="Onderwerp"
              placeholder="Waarover gaat je vraag?"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Bericht</label>
          <textarea
            id="message"
            name="Bericht"
            rows={5}
            placeholder="Je bericht..."
            required
          ></textarea>
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" id="captcha-token" name="captcha-token" />
        <div className="form-group">
          <br />
          <ReCAPTCHA
            sitekey="6Le6_oArAAAAAG0yDYqa2qnFbQfgKE-PRGGlmrBB"
            onChange={handleCaptcha}
          />
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://terrafalcon.be/bedankt"
        />
        <button type="submit" className="contact-btn">
          Verstuur bericht
        </button>
      </form>
      <div className="contact-info-box fade-in">
        <h3>Direct contact</h3>
        <p>
          <a href="tel:+32483323646" className="contact-phone-link">
            +32 483 32 36 46
          </a>
        </p>
        <p>
          <a
            href="mailto:mikawijckmans@terrafalcon.be"
            className="contact-email-link"
          >
            mikawijckmans@terrafalcon.be
          </a>
        </p>
        <p>
          <strong>Regio:</strong> Lommel, Limburg, België
        </p>
      </div>
    </div>
  );
}

export default Contact;
