import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Cadastro from "./Cadastro";
import Ler from "./Ler";
import Editar from "./Editar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/:id" element={<Ler />} />
        <Route exact path="/edit/:id" element={<Editar />} />
      </Routes>
    </Router>
  );
}

export default App;
