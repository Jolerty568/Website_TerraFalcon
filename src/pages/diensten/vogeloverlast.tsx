import "./mollenoverlast.css";
import VogelFoto from "../../img/home/birds-4776407_1280.jpg";

function Vogeloverlast() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Vogeloverlast</h1>
      <img
        src={VogelFoto}
        alt="Vogeloverlast"
        style={{
          maxWidth: 320,
          width: "100%",
          borderRadius: 16,
          margin: "24px 0",
        }}
      />
      <p>
        Duiven, kraaien of meeuwen die voor overlast zorgen? Wij bieden
        oplossingen voor verschillende vogelsoorten. Neem contact op voor advies
        en een aanpak op maat!
      </p>
    </main>
  );
}

export default Vogeloverlast;
