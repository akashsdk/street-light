import React from 'react'
import '../styles/Contact.css'
import Question from '../Image/question.png'

export default function Contact() {
  function sayMess() {
    alert('Sent!');
  }
  return (
    <div className='contactBody'>
      <div className='contactDiv'>
        <div className='contactLeftDiv'>
          <img src={Question} className="contactLeftDivImg" />
        </div>
        <div className='contactRightDiv'>
          <h2 style={{
            marginTop: '20px',
          }}>Got any question? Let’s talk about it.</h2>
          <div className="contactInputDiv">
            <input type="text" className="contactInput" placeholder="Name" />
          </div>
          <div className="contactInputDiv">
            <input type="text" className="contactInput" placeholder="E-mail" />
          </div>
          <div className="contactInputMegDiv">
            <input type="text" className="contactInputMeg" placeholder="Message..." />
          </div>
          <button type="submit" className="profileSubmit" onClick={sayMess}>
            <h1 className="profileSubmitH1">Send message</h1>
          </button>
        </div>
      </div>
    </div>
  )
}
