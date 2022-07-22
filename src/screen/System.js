import React from 'react'
import '../styles/System.css'
import LightCart from '../Card/LightCart'
import { Col, Row } from 'antd';

export default function System() {
  return (
    <Row justify="center">
      <LightCart num='122' LDR='ON' Sensor='ON'/>
      <LightCart num='106' LDR='ON' Sensor='ON'/>
      <LightCart num='100' LDR='ON' Sensor='OFF'/>
      <LightCart num='102' LDR='OFF' Sensor='OFF'/>
    </Row>
  )
}