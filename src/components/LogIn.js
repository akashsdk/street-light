import React from 'react';
import { Input, Button, Modal } from 'antd';
import "./LogIn.css";
import './ChangePassword.css'
import app from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import MovingText from 'react-moving-text'

const { confirm } = Modal;
const showConfirm = (msg) => {
    confirm({
        title: msg,
        icon: <ExclamationCircleOutlined />,
        content: 'Press "OK"',

        onOk() {
            console.log('OK');
        },

        onCancel() {
            console.log('Cancel');
        },
    });
};

export default function LogIn() {
    const [hide, setHide] = React.useState(false);

    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const auth = getAuth(app)

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                showConfirm(errorCode)
            });
    }



    return (
        <div className='LogINBody'>

            <div>
                <h1>Log In</h1>
                <h3>
                    user ID: "someone@gmail.com", {"\n"}
                    Password: "123456"
                </h3>

            </div>

            <div className='LogInBox'>

                <h2 className="changeh2">User ID <AiFillStar className="changeStarIcon" /></h2>
                <div className="changeInputDiv">
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} type='text' className="logInInput"
                        placeholder="User ID" />
                </div>


                <h2 className="changeh2">Password <AiFillStar className="changeStarIcon" /></h2>
                <div className="changeInputDiv">
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} type={hide ? "password" : 'text'}
                        className="logInInput" placeholder="Password" />
                    <a style={{
                        textDecoration: 'none'
                    }} onClick={() => setHide(!hide)}>
                        {
                            hide ? (<VscEyeClosed />) : (<VscEye />)
                        }
                    </a>
                </div>

                <button onClick={login} type="submit" className="chanheSubmit" >
                    <h1 className="chanheSubmitH1">Log In</h1>
                </button>

                <div className="chanheDownDiv"></div>
            </div>


        </div>
    )
}
