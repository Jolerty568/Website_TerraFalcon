import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Diensten from "./pages/diensten/diensten";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Mollenoverlast from "./pages/diensten/mollenoverlast";
import Vogeloverlast from "./pages/diensten/vogeloverlast";
import Wespenoverlast from "./pages/diensten/wespenoverlast";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import Bedankt from "./pages/bedankt/bedankt";
import Privacy from "./pages/privacy/privacy";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/diensten/mollenoverlast" element={<Mollenoverlast />} />
          <Route path="/diensten/vogeloverlast" element={<Vogeloverlast />} />
          <Route path="/diensten/wespenoverlast" element={<Wespenoverlast />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bedankt" element={<Bedankt />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
