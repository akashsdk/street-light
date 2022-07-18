import React from 'react'
import './Header.css'
import { PageHeader } from 'antd';
import System from "../screen/System"
import About from '../screen/About';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className='headerDiv'>
        <PageHeader
          className="headerPageheader"
          onBack={() => null}
          title="Smart Street Lighting System"
          subTitle=""
        />
        <nav>
          <Link className="link-1" to="/">Home</Link>
          <Link className="link-1" to="/System">System</Link>
          <Link className="link-1" to="/About">About</Link>
          <Link className="link-1" to="/Contact">Contact</Link>
        </nav>
      </div>
      <div className='HeaderLineDiv'></div>
    </div>
  )
}
