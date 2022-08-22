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
import AddLight from './screen/AddLight';
import LogIn from './components/LogIn';
import ChangePassword from './components/ChangePassword';
import Loading from './Card/Loading';
import HeplLine from './Card/HeplLine';


import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
//import AnimatedCursor from "react-animated-cursor"
import app from './firebase'
import { getAuth,onAuthStateChanged } from "firebase/auth";



function App() {
  const [name,setName]=React.useState('Akash')
  const [userName,setEmail]=React.useState('User Id')
  const [user,setUser]=React.useState(null)
  const auth = getAuth(app);

  React.useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log(user)
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        setUser('ok')
      }
    });
  },[])
  
  if(!user){
    return(
      <Loading />
    )
  }

  if(user=='ok'){
    return(
      <LogIn setName={setEmail}/>
    )
  }
  return (
    <BrowserRouter>
      <div className="App">

        <Header name={name}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/System" element={<System />} />
          <Route path="/AddLight" element={<AddLight />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile setName={setName} name2={userName}/>} />
          <Route path="/ChangePassword" element={<ChangePassword  />} />
          <Route path='/Loading' element={<Loading />}  />
        </Routes>
        <Footer />


      </div>
    </BrowserRouter>
  );
}

export default App;


