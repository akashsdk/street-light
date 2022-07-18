import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './screen/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import System from './screen/System';
import About from './screen/About';
import Contact from './screen/Contact';
import Profile from './components/Profile';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
//import AnimatedCursor from "react-animated-cursor"



function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/System" element={<System />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;


