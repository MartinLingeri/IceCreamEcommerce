import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HaceTuPedido from "../components/haceTuPedido";
import Contacto from "../components/contacto";
import Conocenos from "../components/conocenos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HaceTuPedido />} />
        <Route path="/conocenos" exact element={<Conocenos />} />
        <Route path="/contacto" exact element={<Contacto />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
