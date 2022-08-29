import React from 'react'
import ProfilePhoto from "../Image/Pfofilephoto.jpeg"
import { AiOutlinePaperClip, AiOutlineLogout, AiFillEdit } from "react-icons/ai";
import Loading from "../Card/Loading.js"


import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { Button } from 'antd';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { onSnapshot, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, uploadBytes, ref } from 'firebase/storage'





export default function Try() {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app)
    const storageRef = ref(storage, `notice/${auth.currentUser.uid}.jpg`)
    const [file, setFile] = React.useState(ProfilePhoto)

    const [user, setUser] = React.useState(null)
    const domRef = React.useRef()



    const unsub = onSnapshot(doc(db, "user_data", auth.currentUser.uid), (doc) => {
        setUser(doc.data())
    });
    const metadata = {
        contentType: 'notice/jpeg',
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
                notice: url
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
    return (
        <div>
            {user ? (<></>) : (<Loading />)}
            <button> Uplode</button>
            <div className='mainProfileImgDiv'>
                        <img src={user && user.notice ? user.notice : ProfilePhoto} className='mainProfileImg'>
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
                        }} style={{ display: 'none' }} accept='notice/jpg' type='file' name='file'></input>
                    </div>
        </div>
    )
}
