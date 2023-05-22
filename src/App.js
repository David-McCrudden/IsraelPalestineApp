import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sources from "./pages/Sources"
import About from "./pages/About"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
    <div className="App">
       <Router>
          <Navbar />
          <Routes>
            <Route exact path ='/' element = {<Home />} />
            <Route exact path ='/sources' element = {<Sources />} />
            <Route exact path ='/about' element = {<About />} />
          </Routes>
        </Router>

    </div>
  )
}

export default App;
