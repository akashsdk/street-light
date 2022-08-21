import React from 'react';
import { Input, Button, Modal } from 'antd';
import "./LogIn.css";
import './ChangePassword.css'
import app from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiFillStar } from "react-icons/ai";

import Fade from 'react-reveal/Fade';
import TextAnimation from "react-text-animations";
import Logo1 from '../Image/Logo.png'
import { BsHeadset } from "react-icons/bs";

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

export default function LogIn(props) {
    const [hide, setHide] = React.useState(true);

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

            <div className='LogINfontDiv'>
                <img src={Logo1} className='LogINlogo' />
                <div className='LogINtextDiv'>
                    <h1>Smart</h1>
                    <h1 className='LogINtext'>
                        <TextAnimation.Slide target="Street"
                            text={['Street', 'Street', 'Street']}>
                            Street
                        </TextAnimation.Slide>
                    </h1>
                    <h1>Light</h1>
                </div>
            </div>

            <div className='LogInBox'>
                <div className='LogINdivBox'>

                    <h2 className="changeh2">User ID <AiFillStar className="changeStarIcon" /></h2>
                    <div className="changeInputDiv">
                        <input onChange={(e) => {
                            setEmail(e.target.value)
                        }} type='text' className="logInInput"
                            placeholder="User ID" />
                    </div>
                </div>
                <div>
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
                </div>
                <div>
                    <button onClick={login} type="submit" className="chanheSubmit" >
                        <h1 className="chanheSubmitH1">Log In</h1>
                    </button>

                    <div>
                        Castomar Care
                        <BsHeadset />
                    </div>

                    <div className="chanheDownDiv"></div>
                </div>
            </div>

            <div>
                <h3>
                    user ID: "someone@gmail.com", {"\n"}
                    Password: "123456"
                </h3>
            </div>

        </div>
    )
}
