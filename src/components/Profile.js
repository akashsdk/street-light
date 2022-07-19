import React, { useState } from "react";
import './Profile.css'
import Diamond from '../Image/Profile.jpeg'

export default function Profile() {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setText(event.target[0].value)
  };

  return (
    <div className="profileDiv">
      <div className="profileImageDiv">
        <img src={Diamond} className="profileImage" />
      </div>
      <div className="profileNameDiv">
        <h1 className="profileNameDiv">{text}</h1>
      </div>
      <form onSubmit={handleSubmit} className="profileFrom">
        <div className="profileFromDiv">
          <h2>Name:</h2>
          <div>
            <input type="text" className="profileInput" />
          </div>

        </div>
        <button type="submit" className="profileSubmit">Submit</button>
      </form>

      <h1 className="profileFromff">ddd</h1>
      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
    </div>
  )
}
