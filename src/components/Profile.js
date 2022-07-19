import React, { useState } from "react";
import './Profile.css'
import Diamond from '../Image/Profile.jpeg'

export default function Profile() {
  function sayHello() {
    alert('Submited!');
  }
  return (
    <div className="profileDiv">
      <h2 className="profileH2">Name</h2>
      <div className="profileInputDiv">
        <input type="text" className="profileInput" placeholder="Name" />
      </div>
      <h2 className="profileH2">Username</h2>
      <div className="profileInputDiv">
        <input type="text" className="profileInput" placeholder="Username" />
      </div>
      <h2 className="profileH2">Password</h2>
      <div className="profileInputDiv">
        <input type="text" className="profileInput" placeholder="Password" />
      </div>
      <h2 className="profileH2">Phone Number</h2>
      <div className="profileInputDiv">
        <input type="number" className="profileInput" placeholder="Phone Number" />
      </div>
      <button type="submit" className="profileSubmit" onClick={sayHello}>
        <h1 className="profileSubmitH1">Submit</h1>
      </button>
      <div>gjhhjhkh</div>
      <h1>hbjhgjhgS</h1>
    </div>
  )
}
