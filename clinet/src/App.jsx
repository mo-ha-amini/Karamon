import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Component/Layout/Navbar";
import Footer from "./Component/Layout/footer";
import Home from "./Component/Home/index";
import Architecture from "./Component/Architecture/index";
import Handicraft from "./Component/Handicraft/index"
import AboutUs from "./Component/AboutUs/index";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element = { <Home />} />
          <Route path="/architecture" element = { <Architecture />} />
          <Route path="/handicraft" element = { <Handicraft />} />
          <Route path="/About" element = { <AboutUs />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
