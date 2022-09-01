import React from 'react'
import "./Admin.css"
import ProfilePhoto from "../Image/Pfofilephoto.jpeg"
import Loading from "../Card/Loading.js"

import { UploadOutlined } from '@ant-design/icons';
import { FaRegTrashAlt } from "react-icons/fa";


import { getAuth } from "firebase/auth";
import app from "../firebase";
import { Button, Pagination, message } from 'antd';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { onSnapshot, doc, getFirestore, updateDoc, setDoc, query, where, deleteDoc, collection } from 'firebase/firestore';
import { getDownloadURL, getStorage, uploadBytes, ref, deleteObject } from 'firebase/storage';
import uuid from 'react-uuid';

export default function Notice() {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app)
    const [data3, setData3] = React.useState()
    const [index3, setIndex3] = React.useState(0)





    const [file, setFile] = React.useState(ProfilePhoto)
    const [randomId, setRandomId] = React.useState()

    const [user, setUser] = React.useState(null)
    const domRef = React.useRef()


    const q = query(collection(db, "notice_id"), where("image", "!=", ""));
    const unsub = onSnapshot(q, (doc) => {
        let arr = []
        doc.forEach((docc, i) => {
            arr.push(docc.data())
        })
        setData3(arr)
        setUser(arr)
    });
    const metadata = {
        contentType: 'image/jpeg',
    };
    const upload = (data) => {
        if (!data) {
            console.log('select a file')
            return
        }
        let random = uuid();
        const storageRef = ref(storage, `notice/${random}.jpg`)
        uploadBytes(storageRef, data, metadata).then(() => {
            console.log('success')
            download(storageRef, random)
        })
    }

    const download = (storageRef, random) => {
        console.log(storageRef)
        console.log(random)
        //return
        getDownloadURL(storageRef).then(url => {
            setDoc(doc(db, 'notice_id', random), {
                image: url,
                id: random,
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

    React.useEffect(() => {
        unsub()
    }, [])



    //detete

    const Delete = async (docc) => {
        await deleteDoc(doc(db, "notice_id", docc));
    }



    const key = 'updatable';
    

    return (
        <div className='adminRight'>
            <div className='adminRightTitel'>
                <h1>Notice Board</h1>
                <FaRegTrashAlt onClick={() => {
                    Delete(user[index3].id).then(() => {
                        console.log('success')
                        message.success('Delete Success');

                    }).catch(err => {
                        console.log(err.message)
                        message.error('Delete Error');
                    })
                }} className='adminRightTitelIcon' />
            </div>

            <div className='adminRightdiv'>
                <Button onClick={() => {
                    domRef.current.click();

                }} icon={<UploadOutlined />} className='adminUploadButton'>
                    Click to UpLoad
                </Button>
            </div>
            <div className='adminRightTiteOutput'>
                {
                    user ? (
                        <div style={{
                            height: 'auto',
                        }}>
                            <img src={user[index3].image} className='adminRightTiteOutputBox'>
                            </img>
                        </div>

                    ) : (<></>)
                }

                <input ref={domRef} onChange={(e) => {
                    console.log(e.target.files)

                    message.loading({ content: 'Uploading...', key });
                    setTimeout(() => {
                        message.success({ content: 'Uplode Done', key, duration: 3 });
                    }, 1000);
                    fileToDataUri(e.target.files[0]).then(url => {
                        setFile(url)
                    })

                    upload(e.target.files[e.target.files.length - 1])
                }} style={{ display: 'none' }} accept='image/*' type='file' name='file'></input>

            </div>
            <Pagination onChange={(index, size) => {
                setIndex3(index - 1)
            }} defaultCurrent={1} total={data3 ? (data3.length * 10) : ''} />
        </div>


    )
}
