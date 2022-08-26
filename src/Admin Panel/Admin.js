import React, { useState } from 'react';
import './Admin.css'
import { Button, Drawer, Radio, Space, message, Col, Row, Pagination } from 'antd';
import { BsPower } from "react-icons/bs";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import Loading from "../Card/Loading"


import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, deleteField,updateDoc,doc,deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';



export default function Admin() {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [data, setData] = React.useState()
    const [store, setStore] = React.useState()
    const [load, setLoad] = React.useState()
    const [index, setIndex] = React.useState(0)



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


    const newData = async () => {
        const querySnapshot = await getDocs(collection(db, "message"));
        let arr = []
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        setData(arr)
        console.log(arr)
        setStore(arr)
    }
    React.useEffect(() => {
        newData()
    }, [load])

    const Delete = async (docc) => {
        await deleteDoc(doc(db, "message", docc));
    }

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
                    <button onClick={() => {
                        setPage(1)
                    }} className='adminLeftButton' >User Message </button>
                    <button onClick={() => {
                        setPage(2)
                    }}>Light</button>
                    <button onClick={() => {
                        setPage(3)
                    }}>Contact Me</button>
                    <button onClick={() => {
                        setPage(4)
                    }}>Notice Board</button>
                </div>
                {
                    page == 1 ? (
                        <div className='adminRight'>
                            {Array.isArray(data) ? (
                                <div>
                                    <div>
                                        <div>
                                            <p>{data[index].name}</p>
                                            <button onClick={() => {
                                                Delete(data[index].email).then(()=>{
                                                    console.log('success')
                                                    
                                                }).catch(err=>{
                                                    console.log(err.message)
                                                })
                                            }}>delete</button>
                                        </div>
                                        <p>{data[index].email}</p>
                                    </div>
                                    <Pagination onChange={(index, size) => {
                                        setIndex(index - 1)
                                    }} defaultCurrent={1} total={data.length * 10} />
                                </div>
                            ) :
                                (<></>)}
                        </div>
                    ) :
                        page == 2 ? (
                            <div className='adminRight'>
                                Light
                            </div>
                        ) :
                            page == 3 ? (
                                <div className='adminRight'>
                                    Contact Me
                                </div>
                            ) :
                                page == 4 ? (
                                    <div className='adminRight'>
                                        Notice Board
                                    </div>
                                ) : (<></>)
                }
            </div>
        </div>
    )
}
