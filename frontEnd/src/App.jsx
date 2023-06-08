import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route exact path="/cadastro" element={<Cadastro />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
