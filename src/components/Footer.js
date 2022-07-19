import React from 'react'
import './Footer.css'
import Light from '../Image/Street Light.png'

export default function Footer() {
  return (
    <div className='FooterPage'>
      <div className='FooterLineDive'></div>
      <div className='FooterBody'>
        <div className='FooterFastDiv'>
          <h1>1ts div</h1>
        </div>
        <div className='FooterScendDiv'>
          <div className='FooterScendLeft'>
          <img src={Light} className="footerImage" />
          </div>
          <div>right</div>
        </div>
      </div>
    </div>
  )
}

