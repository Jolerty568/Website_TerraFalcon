import "./mollenoverlast.css";
import WespFoto from "../../img/home/swarm-1903243_1280.jpg";

function Wespenoverlast() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Wespenoverlast</h1>
      <img
        src={WespFoto}
        alt="Wespenoverlast"
        style={{
          maxWidth: 320,
          width: "100%",
          borderRadius: 16,
          margin: "24px 0",
        }}
      />
      <p>
        Wespen in de tuin, op het terras of in huis? Wij verwijderen
        wespennesten snel, veilig en vakkundig. Neem contact op voor directe
        hulp!
      </p>
    </main>
  );
}

export default Wespenoverlast;
