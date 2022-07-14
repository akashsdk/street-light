import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './screen/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
       <AnimatedCursor />
      <Header/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
