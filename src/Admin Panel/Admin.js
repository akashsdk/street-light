import React, { useState } from 'react';
import './Admin.css'
import { Button, Drawer, Radio, Space, message, Col, Row, Pagination } from 'antd';
import { BsPower } from "react-icons/bs";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";


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

    const [page, setPage] = React.useState(1)




    return (
        <div className='adminBody'>
            <div className='adminHeader'>

                <div className='adminHomeIconDiv'>
                    <AiFillHome className='adminHomeIcon' />
                    <h2 className='adminHomeText'>Dashbord</h2>
                </div>

                <div>
                    <BsPower onClick={logout} className='adminLogoutIcon' />
                </div>
            </div>
            <div className='adminScendBody'>
                <div className='adminLeft'>
                    <button onClick={()=>{
                        setPage(1)
                    }}>User Message </button>
                    <button onClick={()=>{
                        setPage(2)
                    }}>Light</button>
                    <button onClick={()=>{
                        setPage(3)
                    }}>Contact Me</button>
                    <button onClick={()=>{
                        setPage(4)
                    }}>Notice Board</button>
                </div>
                {
                    page==1?(
                        <div className='adminRight'>
                        User Message
                    </div>
                    ):
                    page==2?(
                        <div className='adminRight'>
                        Light
                    </div>
                    ):
                    page==3?(
                        <div className='adminRight'>
                        Contact Me
                    </div>
                    ):
                    page==4?(
                        <div className='adminRight'>
                        Notice Board
                    </div>
                    ):(<></>)
                }
            </div>
        </div>
    )
}
