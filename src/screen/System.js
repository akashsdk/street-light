import React from 'react'
import '../styles/System.css'
import LightCart from '../Card/LightCart'
import { Col, Row } from 'antd';
import { Select } from 'antd';
import { AiFillCaretDown } from "react-icons/ai";

export default function System() {
  const { Option } = Select;
  return (
    <div>
      <div>
        <AiFillCaretDown className='SystemIcon' />
      </div>
      <div className='SystemButtonDiv'></div>
      <div>

        <div className='SystemDivLine'></div>
        <h2>Search to Select Area</h2>
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Search to Select Area"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Dhaka-1</Option>
          <Option value="1">Dhaka-2</Option>
          <Option value="1">Dhaka-3</Option>
        </Select>
      </div>
      <Row justify="center">
        <LightCart num='101' LDR='ON' Sensor='ON' />
        <LightCart num='' LDR='ON' Sensor='ON' />
        <LightCart num='100' LDR='ON' Sensor='OFF' />
        <LightCart num='102' LDR='OFF' Sensor='OFF' />
      </Row>
    </div>
  )
}