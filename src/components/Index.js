import React from 'react'
import "./Index.css"
import ImgMani from '../Image/StreetMaintenance.jpeg'

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Col, Row } from 'antd';



export default function Index() {
  return (
    <div className='indexBody'>
      <Row >
        <div className='indexRowDiv'>
          <p className='indexFistP'>Street Light Maintenance</p>
          <img src={ImgMani} className="indexImgMani" />
        </div>
        
      </Row>
      

    </div>
  )
}
