import React from 'react'
import './Footer.css'
import Light from '../Image/Street Light.png'
import LightLeft from '../Image/Street light2.png'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Col, Row } from 'antd';
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { Button } from 'antd';

export default function Footer() {

  const auth = getAuth(app);
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.reload()
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='FooterPage'>
      <div className='FooterLineDive'></div>
      <div className='FooterBody'>
        <div className='FooterFastDiv'>
          <h1 className='FooterFastDivText'>Smart Street Lighting System</h1>
        </div>
        <Row justify="center">
          <img src={Light} className="footerImage" />
          <div className='FooterScendMidel'>
            <h2 style={{
              color: 'white',
            }}>USEFUL LINKS</h2>
            <Link className="link-2" to="/">Home</Link>
            <Link className="link-2" to="/Profile">Profile</Link>
            <Link className="link-2" to="/System">System</Link>
            <Link className="link-2" to="/AddLight">Add Light</Link>
            <Link className="link-2" to="/About">About</Link>
            <Link className="link-2" to="/Contact">Contact</Link>
            <Button onClick={logout} type="link" className="footerLinkButton" danger>
              Log out
            </Button>
          </div>
          <img src={LightLeft} className="footerImage" />

        </Row>
      </div>
    </div>
  )
}

