import "./diensten.css";
import MolFoto from "../../img/home/mol.jpg";
import VogelFoto from "../../img/home/birds-4776407_1280.jpg";
import WespFoto from "../../img/home/swarm-1903243_1280.jpg";
import USPSection from "../../components/content/USPSection";

const DIENSTEN = [
  {
    key: "mol",
    title: "Mollenoverlast",
    img: MolFoto,
    desc: "Last van molshopen in je tuin of op je terrein? Wij zorgen voor een doeltreffende aanpak van mollenoverlast.",
    link: "/diensten/mollenoverlast",
  },
  {
    key: "vogel",
    title: "Vogeloverlast",
    img: VogelFoto,
    desc: "Duiven, kraaien of meeuwen die voor overlast zorgen? Wij bieden oplossingen voor verschillende vogelsoorten.",
    link: "/diensten/vogeloverlast",
  },
  {
    key: "wesp",
    title: "Wespenoverlast",
    img: WespFoto,
    desc: "Wespen in de tuin, op het terras of in huis? Wij verwijderen wespennesten snel, veilig en vakkundig.",
    link: "/diensten/wespenoverlast",
  },
];

function Diensten() {
  // Navigatie via window.location (zonder dynamische selectie)
  const handleClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <main className="diensten-main">
      <h1 className="diensten-title">Onze diensten</h1>
      <p className="diensten-sub">
        Klik op een dienst voor meer info over onze aanpak.
      </p>
      <div className="services-cards-row diensten-cards-row">
        {DIENSTEN.map((d) => (
          <button
            key={d.key}
            className="service-card dienst-card-btn"
            onClick={() => handleClick(d.link)}
            type="button"
          >
            <img src={d.img} alt={d.title} className="service-img" />
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </button>
        ))}
      </div>
      <USPSection />
    </main>
  );
}

export default Diensten;
