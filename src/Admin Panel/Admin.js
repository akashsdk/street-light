import React, { useState } from 'react';
import './Admin.css'
import {
    Button, Drawer, Radio, message,
    Col, Row, Pagination, Space, Spin, Select
} from 'antd';
import { BsPower } from "react-icons/bs";
import {
    AiOutlineMenu,
    AiFillHome,
    AiFillBulb,
    AiFillMessage,
    AiFillExclamationCircle
} from "react-icons/ai";

import Loading from "../Card/Loading"
import Notfound from "./Notfound.js"
import { FaRegTrashAlt } from "react-icons/fa";
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { BsFillChatRightTextFill, BsFillPencilFill } from "react-icons/bs";




import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, deleteField, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';



export default function Admin() {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [data, setData] = React.useState()
    const [data2, setData2] = React.useState()
    const [data3, setData3] = React.useState()
    const [store, setStore] = React.useState()
    const [load, setLoad] = React.useState()
    const [index, setIndex] = React.useState(0)
    const [index2, setIndex2] = React.useState(0)
    const [index3, setIndex3] = React.useState(0)



    function sayHello() {
        alert('Submited!');
    }
    //Log Out Funtion
    const logout = () => {
        signOut(auth).then(() => {
            message.logout('Log Out Success!');
            window.location.reload()
        }).catch((error) => {
            // An error happened.
        });
    }

    const [page, setPage] = React.useState(1)



    // InPut data from "message"
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

    const AllDelete = () => {
        Delete(data[index].email).then(() => {
            console.log('success')
            message.success('Success');
            window.location.reload()

        }).catch(err => {
            console.log(err.message)
            message.error('Error');
            window.location.reload()
        })
    }


    //InPut data from "lights"
    const newData2 = async () => {
        const querySnapshot = await getDocs(collection(db, "lights"));
        let arr = []
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        setData2(arr)
        console.log(arr)
        setStore(arr)
    }
    React.useEffect(() => {
        newData2()
    }, [load])

    const Delete2 = async (docc2) => {
        await deleteDoc(doc(db, "lights", docc2));
    }

    const DeleteLight = () => {
        Delete2(data2[index2].number).then(() => {
            console.log('success')
            message.success('Success');
            window.location.reload()

        }).catch(err => {
            console.log(err.message)
            message.error('Error');
            window.location.reload()
        })
    }



    //InPut data from "contact"
    const newData3 = async () => {
        const querySnapshot = await getDocs(collection(db, "contact"));
        let arr = []
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        setData3(arr)
        console.log(arr)
        setStore(arr)
    }
    React.useEffect(() => {
        newData3()
    }, [load])

    const Delete3 = async (docc3) => {
        await deleteDoc(doc(db, "contact", docc3));
    }

    const DeleteContact = () => {
        Delete3(data3[index3].email).then(() => {
            console.log('success')
            message.success('Success');
            window.location.reload()

        }).catch(err => {
            console.log(err.message)
            message.error('Error');
            window.location.reload()
        })
    }

    //Output and InPut data from "notice"

    return (
        <div className='adminBody'>
            <div className='adminHeader'>

                <div className='adminHomeIconDiv'>
                    <AiFillHome className='adminHomeIcon' />
                    <h2 className='adminHomeText'>Dashbord</h2>
                </div>

                <div className='adminHomeIconDiv2'>
                    <BsPower onClick={logout} className='adminLogoutIcon' />
                </div>
            </div>


            <div className='adminScendBody'>
                <div className='adminLeft'>


                    <button onClick={() => {
                        const hide = message.loading('Street Light', 0);
                        setTimeout(hide, 1000);
                        setPage(1);
                    }} className='adminLeftButton' >
                        <AiFillBulb className='adminLeftButtonIcon' />
                        <p className='adminLeftButtonText'>Street Light </p>
                    </button>

                    <button onClick={() => {
                        const hide = message.loading('User Complen', 0);
                        setTimeout(hide, 1000);
                        setPage(2)
                    }} className='adminLeftButton' >
                        <AiFillExclamationCircle className='adminLeftButtonIcon' />
                        <p className='adminLeftButtonText'> User Complen </p>
                    </button>


                    <button onClick={() => {
                        const hide = message.loading('Contact', 0);
                        setTimeout(hide, 1000);
                        setPage(3)
                    }} className='adminLeftButton' >
                        <BsFillChatRightTextFill className='adminLeftButtonIcon' />
                        <p className='adminLeftButtonText'> Contact  </p>
                    </button>



                    <button onClick={() => {
                        const hide = message.loading('Notice Board', 0);
                        setTimeout(hide, 1000);
                        setPage(4)
                    }} className='adminLeftButton' >
                        <BsFillPencilFill className='adminLeftButtonIcon' />
                        <p className='adminLeftButtonText'> Notice Board </p>
                    </button>

                </div>
                {
                    page == 1 ? (
                        <div className='adminRight'>
                            <div className='adminRightTitel'>
                                <h1>Street Light</h1>
                                <FaRegTrashAlt onClick={DeleteLight} className='adminRightTitelIcon' />
                            </div>
                            <div>
                                Filter:
                            </div>


                            <div className='adminRBoxText'>
                                <div className='adminRDiv1'>
                                    <h2>Street Light No:</h2>
                                </div>
                                <div className='adminRDiv2'>
                                    <h2> {data2 && data2[index2].number ? data2[index2].number : ''}</h2>
                                </div>
                            </div>


                            <div className='adminRBoxText'>
                                <div className='adminRDiv1'>
                                    <h2>Power:</h2>
                                </div>
                                <div className='adminRDiv2'>
                                    <h2>{data2 && data2[index2].power ? data2[index2].power : ''}</h2>
                                </div>
                            </div>



                            <div className='adminRBoxText'>
                                <div className='adminRDiv1'>
                                    <h2>LDR Sensor:</h2>
                                </div>
                                <div className='adminRDiv2'>
                                    <h2>{data2 && data2[index2].ldr ? data2[index2].lde : ''}</h2>
                                </div>
                            </div>



                            <div className='adminRBoxText'>
                                <div className='adminRDiv1'>
                                    <h2>Motion Sensor:</h2>
                                </div>
                                <div className='adminRDiv2'>
                                    <h2>{data2 && data2[index2].m_sensor ? data2[index2].m_sensor : ''}</h2>
                                </div>
                            </div>


                            <div className='adminRBoxText'>
                                <div className='adminRDiv1'>
                                    <h2>Area:</h2>
                                </div>
                                <div className='adminRDiv2'>
                                    <h2>{data2 && data2[index2].area ? data2[index2].area : ''}</h2>
                                </div>
                            </div>

                            <Pagination className='adminPagination' onChange={(index, size) => {
                                setIndex2(index - 1)
                            }} defaultCurrent={1} total={data2 ? (data2.length * 10) : ''} />


                        </div>
                    ) :
                        page == 2 ? (
                            <div className='adminRight'>
                                <div className='adminRightTitel'>
                                    <h1>User Complen</h1>
                                    <FaRegTrashAlt onClick={AllDelete} className='adminRightTitelIcon' />
                                </div>

                                <div className='adminRBoxText'>
                                    <div className='adminRDiv1'>
                                        <h2>User ID:</h2>
                                    </div>
                                    <div className='adminRDiv2'>
                                        <h2>{data[index].us_id}</h2>
                                    </div>
                                </div>
                                <div className='adminRBoxText'>
                                    <div className='adminRDiv1'>
                                        <h2>Name:</h2>
                                    </div>
                                    <div className='adminRDiv2'>
                                        <h2>{data[index].name}</h2>
                                    </div>
                                </div>
                                <div className='adminRBoxText'>
                                    <div className='adminRDiv1'>
                                        <h2>E-mail:</h2>
                                    </div>
                                    <div className='adminRDiv2'>
                                        <h2>{data[index].email}</h2>
                                    </div>
                                </div>
                                <div className='adminRBoxText'>
                                    <div className='adminRDiv1'>
                                        <h2>Phone:</h2>
                                    </div>
                                    <div className='adminRDiv2'>
                                        <h2>{data[index].phone}</h2>
                                    </div>
                                </div>
                                <div className='adminRBoxText'>
                                    <div className='adminRDiv1'>
                                        <h2>Problem:</h2>
                                    </div>
                                    <div className='adminRDiv2'>
                                        <h2>{data[index].problem}</h2>
                                    </div>
                                </div>
                                <div className='adminRBoxText2'>
                                    <div className='adminRDiv1'>
                                        <h2>Message:</h2>
                                    </div>
                                    <div className='adminRDiv2'>
                                        <h2>{data[index].text}</h2>
                                    </div>
                                </div>
                                <Pagination className='adminPagination' onChange={(index, size) => {
                                    setIndex(index - 1)
                                }} defaultCurrent={1} total={data.length * 10} />

                            </div>
                        ) :
                            page == 3 ? (
                                <div className='adminRight'>
                                    <div className='adminRightTitel'>
                                        <h1>Contact Us</h1>
                                        <FaRegTrashAlt onClick={DeleteContact} className='adminRightTitelIcon' />
                                    </div>

                                    <div className='adminRBoxText'>
                                        <div className='adminRDiv1'>
                                            <h2>Name:</h2>
                                        </div>
                                        <div className='adminRDiv2'>
                                            <h2>{data2 && data3[index3].name ? data3[index3].name : ''}</h2>
                                        </div>
                                    </div>

                                    <div className='adminRBoxText'>
                                        <div className='adminRDiv1'>
                                            <h2>Email Id:</h2>
                                        </div>
                                        <div className='adminRDiv2'>
                                            <h2>{data2 && data3[index3].email ? data3[index3].email : ''}</h2>
                                        </div>
                                    </div>

                                    <div className='adminRBoxText2'>
                                        <div className='adminRDiv1'>
                                            <h2>Message:</h2>
                                        </div>
                                        <div className='adminRDiv2'>
                                            <h2>{data2 && data3[index3].text ? data3[index3].text : ''}</h2>
                                        </div>
                                    </div>

                                    <Pagination className='adminPagination' onChange={(index, size) => {
                                        setIndex3(index - 1)
                                    }} defaultCurrent={1} total={data3 ? (data3.length * 10) : ''} />

                                </div>
                            ) :
                                page == 4 ? (
                                    <div className='adminRight'>
                                        <div className='adminRightTitel'>
                                            <h1>Notice Board</h1>
                                            <FaRegTrashAlt className='adminRightTitelIcon' />
                                        </div>

                                        <div>
                                            <Button icon={<UploadOutlined />} className='adminUploadButton'>
                                                Click to UpLoad
                                            </Button>
                                        </div>
                                        <div className='adminRightTiteOutput'>
                                            nbnn
                                        </div>

                                    </div>
                                ) : (<></>)
                }
            </div>
        </div>
    )
}
