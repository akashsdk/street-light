import React from 'react'
import "./Index.css"
import ImgMani from '../Image/StreetMaintenance.jpeg'

export default function Index() {
  return (
    <div className='indexBody'>
        <p className='indexFistP'>Street Light Maintenance</p>
        <img src={ImgMani} className="indexImgMani" />
    </div>
  )
}
