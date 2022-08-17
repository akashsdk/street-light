import React from 'react';
import { Input, Button, Modal } from 'antd';
import "./LogIn.css"
import app from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ExclamationCircleOutlined } from '@ant-design/icons';
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
        <div>
            <div>
                <div>
                
                </div>
            </div>
            
            <div>
                <h1>Log In</h1>
                <h3>
                    user ID: "someone@gmail.com", {"\n"}
                    Password: "123456"
                </h3>
                <div>
                    <Input onChange={(e) => {
                        setEmail(e.target.value)
                    }} className='logInInput' placeholder="UserID" />
                    <Input onChange={(e) => {
                        setPassword(e.target.value)
                    }} className='logInInput' placeholder="Password" />

                    <Button onClick={login} type="primary">Log In</Button>
                </div>
            </div>
        </div>
    )
}
