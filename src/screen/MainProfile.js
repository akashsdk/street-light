import React, { useState } from 'react'
import "../styles/MainProfile.css"
import ProfilePhoto from "../Image/Pfofilephoto.jpeg"
import { AiOutlinePaperClip, AiOutlineLogout, AiFillEdit } from "react-icons/ai";



import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { Button } from 'antd';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";



export default function MainProfile() {
    const auth = getAuth(app);
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            window.location.reload()
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <div className='mainProfileTitelBody'>
                <Button onClick={logout} type="link" style={{ marginTop: '-15px' }} danger>
                    <AiOutlineLogout className='mainProfileTitelIcon' />
                </Button>

                <h1 className='mainProfileTitel'>Edit Profile</h1>
                <Link to="/Profile">
                    <AiFillEdit className='mainProfileTitelIcon' />
                </Link>

            </div>

            <div className='mainProfileBody'>
                <div className='mainProfileBox'>
                    <div className='mainProfileImgDiv'>
                        <img src={ProfilePhoto} className='mainProfileImg'>
                        </img>
                        <div className='mainProfileIconDiv'>
                            <AiOutlinePaperClip className='mainProfileIcon' />
                        </div>
                    </div>
                </div>


                <div className='mainProfileName'>
                    
                    <h2 className='mainProfilebosText'>Name:</h2>
                </div>

                <div className='mainProfileName'>
                    <h2 className='mainProfilebosText'>User ID:</h2>
                </div>

                <div className='mainProfileName'>
                    <h2 className='mainProfilebosText'>Phone No:</h2>
                </div>

                <div className='mainProfileName'>
                    <h2 className='mainProfilebosText'>E-mail:</h2>
                </div>

                <div className='mainProfileAddress'>
                    <h2 className='mainProfilebosText'>Address:</h2>
                </div>
            </div>
            <div style={{marginTop:'20px'}}></div>
        </div>
    )
}
