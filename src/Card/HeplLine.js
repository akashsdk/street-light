import React from 'react'
import './HeplLine.css';
import { Button, Checkbox, Form, Input,message } from 'antd';
import { getFirestore } from "firebase/firestore";
import app from '../firebase';
import { doc, setDoc } from "firebase/firestore";

export default function HeplLine() {
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
    <div className='HeplLinebox'>
      <Input placeholder="Nmae" onChange={e => setName(e.target.value)}/>;
      <Input placeholder="Email" onChange={e => setemail(e.target.value)}/>;
      <Input placeholder="Message" onChange={e => settext(e.target.value)}/>;
      <Button onClick={add} type="primary" htmlType="submit">submit</Button>
    </div>
  )
}
