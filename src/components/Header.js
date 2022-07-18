import React from 'react'
import './Header.css'
import { PageHeader } from 'antd';
import System from "../screen/System"
import About from '../screen/About';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";


export default function Header() {
  return (
    <div>
      <div className='headerDiv'>
        <div className='headerDivUp'>
          <PageHeader
            className="headerPageheader"
            onBack={() => null}
            title="Smart Street Lighting System"
            subTitle=""
          />
          <button className='headerButton'>
            <AiOutlineUser className='headerIcon' />
            <p>Akash</p>
          </button>
        </div>
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
