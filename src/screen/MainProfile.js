import React, { useState } from 'react'
import "../styles/MainProfile.css"
import ProfilePhoto from "../Image/Pfofilephoto2.jpeg"

import { AiOutlinePaperClip, AiOutlineLogout, AiFillEdit } from "react-icons/ai";
import Loading from "../Card/Loading.js"
import Notfound from '../Admin Panel/Notfound';



import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { Button } from 'antd';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { onSnapshot, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, uploadBytes, ref } from 'firebase/storage'



export default function MainProfile(props) {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app)
    const storageRef = ref(storage, `image/${auth.currentUser.uid}.jpg`)
    const [file, setFile] = React.useState(ProfilePhoto)

    const [user, setUser] = React.useState(null)
    const domRef = React.useRef()
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            window.location.reload()
        }).catch((error) => {
            // An error happened.
        });
    }
    const unsub = onSnapshot(doc(db, "user_data", auth.currentUser.uid), (doc) => {
        setUser(doc.data())
    });
    const metadata = {
        contentType: 'image/jpeg',
    };
    const upload = (data) => {
        if (!data) {
            console.log('select a file')
            return
        }
        uploadBytes(storageRef, data, metadata).then(() => {
            console.log('success')
            download()
        })
    }
    const download = () => {
        getDownloadURL(storageRef).then(url => {
            updateDoc(doc(db, 'user_data', auth.currentUser.uid), {
                image: url
            }).then(() => {
                console.log('Database updated successfull')
            }).catch(err => {
                console.log(err.message)
            })
        })
    }
    const fileToDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })
    // const download=getDownloadURL(storageRef).then((url)=>{
    //     updateDoc(doc(db,'user_data',auth.currentUser.uid),{
    //             image:url
    //     }).then(()=>{
    //         console.log('Database updated successfull')
    //     }).catch(err=>{
    //         console.log(err.message)
    //     })

    // })
    React.useEffect(() => {
        unsub()
    }, [])
    return (
        <div>
            {user ? (<></>) : (<Notfound NotfoundText="Not Found Image" />)}
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
                        <img src={user && user.image ? user.image : ProfilePhoto} className='mainProfileImg'>
                        </img>
                        <div onClick={() => {
                            domRef.current.click()
                        }} className='mainProfileIconDiv'>
                            <AiOutlinePaperClip className='mainProfileIcon' />
                        </div>
                        <input ref={domRef} onChange={(e) => {
                            console.log(e.target.files)
                            fileToDataUri(e.target.files[0]).then(url => {
                                setFile(url)
                            })

                            upload(e.target.files[e.target.files.length - 1])
                        }} style={{ display: 'none' }} accept='image/jpg' type='file' name='file'></input>
                    </div>
                </div>


                <div className='mainProfileName'>

                    <h2 className='mainProfilebosText'>Name: {user && user.name ? user.name : ''}</h2>
                </div>

                <div className='mainProfileName'>
                    <h2 className='mainProfilebosText2'>User ID: {auth.currentUser.uid}</h2>
                </div>

                <div className='mainProfileName'>
                    <h2 className='mainProfilebosText'>Phone No: {user && user.phone ? user.phone : ''}</h2>
                </div>

                <div className='mainProfileName'>
                    <h2 className='mainProfilebosText'>E-mail: {user && user.email ? user.email : ''}</h2>
                </div>

                <div className='mainProfileAddress'>
                    <h2 className='mainProfilebosText'>Address: {user && user.address ? user.address : ''}</h2>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}></div>
        </div>
    )
}
