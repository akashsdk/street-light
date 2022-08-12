import React from 'react'
import '../styles/System.css'
import LightCart from '../Card/LightCart'
import { Col, Row, Select, Button } from 'antd';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function System() {
  const { Option } = Select;
  const [hide, setHide] = React.useState(false)
  return (
    <div>
      <div>
        {hide ? (<AiFillCaretDown onClick={() => {
          setHide(!hide)
        }} className='SystemIcon' />) : (
          <AiFillCaretUp onClick={() => {
            setHide(!hide)
          }} className='SystemIcon' />
        )}
      </div>
      {hide ? (
        <div className='SystemButtonDiv'>
          <div>
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
          <div>
            <Button type="primary"  className='SystemButton'>
            <Link to="/AddLight">Add Light</Link>
            </Button>
          </div>
        </div>
      ) : (<></>)}

      <div className='SystemDivLine'></div>
      <Row justify="center">
        <LightCart num='101' LDR='ON' Sensor='ON' />
        <LightCart num='' LDR='ON' Sensor='ON' />
        <LightCart num='100' LDR='ON' Sensor='OFF' />
        <LightCart num='102' LDR='OFF' Sensor='OFF' />
      </Row>
    </div>
  )
}