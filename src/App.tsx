import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Diensten from "./pages/diensten/diensten";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Mollenoverlast from "./pages/diensten/mollenoverlast";
import Vogeloverlast from "./pages/diensten/vogeloverlast";
import Wespenoverlast from "./pages/diensten/wespenoverlast";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/diensten/mol" element={<Mollenoverlast />} />
        <Route path="/diensten/vogel" element={<Vogeloverlast />} />
        <Route path="/diensten/wesp" element={<Wespenoverlast />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
