import React from 'react';
import "./ChangePassword.css";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, message } from 'antd';

import { AiOutlineArrowLeft } from "react-icons/ai";


import { getAuth, updatePassword } from "firebase/auth";
import app from "../firebase";
export default function ChangePassword() {
    const [hide0, setHide0] = React.useState(true);
    const [hide1, setHide1] = React.useState(true);
    const [hide2, setHide2] = React.useState(true);
    const [d1, setD1] = React.useState();
    const [d2, setD2] = React.useState();
    const [password, oldPassword] = React.useState();



    // Firestore
    const auth = getAuth(app);
    // const user = auth.currentUser;
    // const newPassword = getASecureRandomPassword();

    // updatePassword(user, newPassword).then(() => {
    //     // Update successful.
    // }).catch((error) => {
    //     // An error ocurred
    //     // ...
    // });






    return (
        <div>
            <div className='ChangeBox'>

                <h2 className="changeh2">User Id <AiFillStar className="changeStarIcon" /></h2>
                <div className="changeInputDiv">
                    <h3 className="changeInput">{auth.currentUser.uid}</h3>
                </div>

                <h2 className="changeh2">Old Password <AiFillStar className="changeStarIcon" /></h2>
                <div className="changeInputDiv">
                    <input onChange={e => oldPassword(e.target.value)} type={hide0 ? "password" : 'text'} className="changeInput" placeholder="Old Password" />
                    <a style={{
                        textDecoration: 'none'
                    }} onClick={() => setHide0(!hide0)}>
                        {
                            hide0 ? (<VscEyeClosed />) : (<VscEye />)
                        }
                    </a>
                </div>

                <h2 className="changeh2">New Password <AiFillStar className="changeStarIcon" /></h2>
                <div className="changeInputDiv">
                    <input onChange={e => setD1(e.target.value)}
                      type={hide1 ? "password" : 'text'} className="changeInput" placeholder="New Password" />
                    <a style={{
                        textDecoration: 'none'
                    }} onClick={() => setHide1(!hide1)}>
                        {
                            hide1 ? (<VscEyeClosed />) : (<VscEye />)
                        }
                    </a>
                </div>

                <h2 className="changeh2"> Confirm Password <AiFillStar className="changeStarIcon" /></h2>
                <div className="changeInputDiv">
                    <input onChange={e => setD2(e.target.value)} 
                      type={hide2 ? "password" : 'text'} className="changeInput" placeholder="Confirm Password" />
                    <a style={{
                        textDecoration: 'none'
                    }} onClick={() => setHide2(!hide2)}>
                        {
                            hide2 ? (<VscEyeClosed />) : (<VscEye />)
                        }
                    </a>
                </div>

                <button type="submit" className="chanheSubmit"
                    onClick={() => {
                        if (d1 == d2) {
                            message.success('Success');
                            return ;

                        }
                        if (d1 != d2)
                        message.error('Password DoseNot Match');
                        return 0;

                    }}>
                    <h1 className="chanheSubmitH1">Submit</h1>
                </button>
                <div>
                    <Button type="link" className="chanheForgetBack" danger>
                        <Link to="/Profile">
                            <AiOutlineArrowLeft /> Back
                        </Link>
                    </Button>
                </div>
                <div className="chanheDownDiv"></div>
            </div>
        </div>
    )
}
