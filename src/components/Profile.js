import React, { useState } from "react";
import './Profile.css'
import Diamond from '../Image/Profile.jpeg'
import { VscEyeClosed, VscEye } from "react-icons/vsc";

import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';


export default function Profile(props) {
  const [hide, setHide] = React.useState(false)
  function sayHello() {
    alert('Submited!');
  }
  
  return (
    <div className="profileDiv">
      <h2 className="profileH2">Name</h2>
      <div className="profileInputDiv">
        <input onChange={(e) => props.setName(e.target.value)} type="text" className="profileInput" placeholder="Name" />
      </div>
      <h2 className="profileH2">User ID</h2>
      <div className="profileInputDiv">
        <input type="text" className="profileInput" placeholder="UserID" />
      </div>
      <h2 className="profileH2">Password</h2>
      <div className="profileInputDiv">
        <input type={hide ? "password" : 'text'} className="profileInput" placeholder="Password" />
        <a style={{
          textDecoration: 'none'
        }} onClick={() => setHide(!hide)}>
          {
            hide ? (<VscEyeClosed />) : (<VscEye />)
          }
        </a>

      </div>
      <h2 className="profileH2">Phone Number</h2>
      <div className="profileInputDiv">
        <input type="number" className="profileInput" placeholder="Phone Number" />
      </div>
      <button type="submit" className="profileSubmit" onClick={sayHello}>
        <h1 className="profileSubmitH1">Submit</h1>
      </button>
      <div className="profileDownDiv"></div>
    </div>
  )
}
