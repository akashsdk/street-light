import React from 'react'
import '../styles/Contact.css'
import Question from '../Image/question.png'
import { message } from 'antd';

import { getFirestore } from "firebase/firestore";
import app from '../firebase';
import { doc, setDoc } from "firebase/firestore";


export default function Contact() {
  
  const db = getFirestore(app);
  const [name, setName] = React.useState()
  const [email, setemail] = React.useState()
  const [text, settext] =React.useState()

  const add = async () => {

    if (!name || !email || !text) {
      console.log('Please fill all the inputs')
      message.error('Please fill all the inputs');
      return
    }
    try {
      message.success('Success!');
      await setDoc(doc(db, "contact", name), {
        name: name,
        email: email,
        text: text,
      });
      console.log("Document written with ID: ");
      window.location.reload()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
            <input placeholder="Nmae" onChange={e => setName(e.target.value)}
             type="text" className="contactInput" />
          </div>
          <div className="contactInputDiv">
            <input onChange={e => setemail(e.target.value)}
            type="text" className="contactInput" placeholder="E-mail" />
          </div>
          <div className="contactInputMegDiv">
            <input onChange={e => settext(e.target.value)}
             type="text" className="contactInputMeg" placeholder="Message..." />
          </div>
          <button type="submit" className="profileSubmit" onClick={add}>
            <h1 className="profileSubmitH1">Send message</h1>
          </button>
        </div>
      </div>
    </div>
  )
}
