import React, { useState } from 'react';
import './Admin.css'
import { Button, Drawer, Radio, Space, message } from 'antd';
import { BsPower } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";



import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

export default function Admin() {
    const auth = getAuth(app);
    function sayHello() {
        alert('Submited!');
    }

    const logout = () => {
        signOut(auth).then(() => {
            message.logout('Log Out Success!');
            window.location.reload()
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className='adminBody'>
            <div className='adminHeader'>
                <div>
                    <AiOutlineMenu className='adminMenuIcon' />
                </div>

                <button onClick={logout} className='adminLogoutButton'>
                <p>Log Out</p>
                    < BsPower className='adminLogoutIcon'/>
                </button>
            </div>


        </div>
    )
}
