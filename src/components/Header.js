import React from 'react'
import './Header.css'
import { PageHeader } from 'antd';

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
          <a className="link-1" href="#">Home</a>
          <a className="link-1" href="#">System</a>
          <a className="link-1" href="#">About</a>
          <a className="link-1" href="#">Contact</a>
          
        </nav>
      </div>
      <div className='HeaderLineDiv'></div>
    </div>
  )
}
