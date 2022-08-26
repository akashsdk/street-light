import React, { useState } from "react";
import './Profile.css'
import Diamond from '../Image/Profile.jpeg'
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { Link } from "react-router-dom";

import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { AiFillStar } from "react-icons/ai";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

export default function Profile(props) {
  const [hide, setHide] = React.useState(false)
  const auth = getAuth(app);
  function sayHello() {
    alert('Submited!');
  }

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.reload()
    }).catch((error) => {
      // An error happened.
    });
  }


  const db = getFirestore(app);
  const [name, setName] = useState()
  const [email, setemail] = useState()
  const [Phone_no, setphone] = useState()
  const [address, setAddress] = useState()
  const [uesr_id, setuser_id] = useState()

  const add = async () => {

    if (!name || !email || !Phone_no || !address) {
      console.log('Please fill all the inputs')
      message.error('Please fill all the inputs');
      return
    }
    try {
      message.success('Success!');
      await setDoc(doc(db, "user_data", auth.currentUser.uid), {
        name: name,
        email: email,
        phone: Phone_no,
        address: address,
        uesr_id: true,
      });
      console.log("Document written with ID: ");
      window.location.reload()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  return (
    <div className="profileDiv">
     

      <h2 className="profileH2">User Id </h2>
      <div className="profileInputDiv">
        <h3 className="profileInput">{auth.currentUser.uid}</h3>
      </div>


      <h2 className="profileH2">Name <AiFillStar className="profileStarIcon" /> </h2>
      <div className="profileInputDiv">
        <input onChange={e => setName(e.target.value)} type="text" className="profileInput" placeholder="Name" />
      </div>


      <h2 className="profileH2">Email ID <AiFillStar className="profileStarIcon" />  </h2>
      <div className="profileInputDiv">
        <input onChange={e => setemail(e.target.value)} type="text" className="profileInput" placeholder="Email Id" />
      </div>


      <h2 className="profileH2">Phone Number <AiFillStar className="profileStarIcon" /> </h2>
      <div className="profileInputDiv">
        <input onChange={e => setphone(e.target.value)} type="number" className="profileInput" placeholder="Phone Number" />
      </div>


      <h2 className="profileH2">Address <AiFillStar className="profileStarIcon" /> </h2>
      <div className="profileInputAddressDiv">
        <input onChange={e => setAddress(e.target.value)} type="text" className="profileInput2" placeholder="Address" />
      </div>


      <button type="submit" className="profileSubmit" onClick={add}>
        <h1 className="profileSubmitH1">Submit</h1>
      </button>
      <div>


        <Button type="link" className="profileForgetButton" danger>

          <Link to="/MainProfile">Go Back</Link>
        </Button>

        <Button type="link" className="profileForgetButton" danger>

          <Link to="/ChangePassword">Change Password</Link>
        </Button>
        <Button onClick={logout} type="link" className="profileForgetButton" danger>
          Log out
        </Button>

      </div>
      <div className="profileDownDiv"></div>
    </div>
  )
}
