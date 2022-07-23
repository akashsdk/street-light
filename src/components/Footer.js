import React from 'react'
import './Footer.css'
import Light from '../Image/Street Light.png'
import LightLeft from '../Image/Street light2.png'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Col, Row } from 'antd';

export default function Footer() {
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
              color:'white',
            }}>USEFUL LINKS</h2>
            <Link className="link-2" to="/">Home</Link>
            <Link className="link-2" to="/Profile">Profile</Link>
            <Link className="link-2" to="/System">System</Link>
            <Link className="link-2" to="/AddLight">Add Light</Link>
            <Link className="link-2" to="/About">About</Link>
            <Link className="link-2" to="/Contact">Contact</Link>
          </div>
          <img src={LightLeft} className="footerImage" />

        </Row>
      </div>
    </div>
  )
}

