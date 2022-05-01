import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HaceTuPedido from "../components/haceTuPedido";
import PuntosDeVenta from "../components/puntosDeVenta";
import Contacto from "../components/contacto";
import Conocenos from "../components/conocenos";

function App() {
  return (
    <Router>
      <Flex minH="100vh" direction="column">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HaceTuPedido />} />
          <Route path="/puntosDeVenta" exact element={<PuntosDeVenta />} />
          <Route path="/conocenos" exact element={<Conocenos />} />
          <Route path="/contacto" exact element={<Contacto />} />
        </Routes>
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;
