import React from 'react'
import ProfilePhoto from "../Image/Pfofilephoto.jpeg"
import { AiOutlinePaperClip, AiOutlineLogout, AiFillEdit } from "react-icons/ai";
import Loading from "../Card/Loading.js"


import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { Button, Pagination,message } from 'antd';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { onSnapshot, doc, getFirestore, updateDoc, setDoc, query, collection, where, deleteDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, uploadBytes, ref,deleteObject} from 'firebase/storage';
import uuid from 'react-uuid';





export default function Try() {
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

    const Delete3 = async (docc) => {
        await deleteDoc(doc(db, "notice_id", docc));
    }

    const DeleteContact = () => {
        Delete3(data3.id).then(() => {
            console.log('success')
            message.success('Success');
            window.location.reload()

        }).catch(err => {
            console.log(err.message)
            message.error('Error');
            window.location.reload()
        })
    }
    return (
        <div>
            <div>
                {user ? (<></>) : (<Loading />)}
                <button>
                <Link  to="/*">Back</Link>
                </button>
                <button onClick={() => {
                    domRef.current.click()
                }}> Uplode</button>
                <div className='mainProfileImgDiv'>
                    {
                        user ? (
                            user.map((doc, i) => (
                                <div key={i} style={{
                                    height: 'auto',
                                    marginLeft: '20px',
                                    marginTop: '50px'
                                }}>
                                    <img src={doc.image} className='mainProfileImg'>
                                    </img>
                                    <button onClick={DeleteContact} >delete</button>
                                </div>
                            ))

                        ) : (<></>)
                    }

                    <input ref={domRef} onChange={(e) => {
                        console.log(e.target.files)
                        fileToDataUri(e.target.files[0]).then(url => {
                            setFile(url)
                        })

                        upload(e.target.files[e.target.files.length - 1])
                    }} style={{ display: 'none' }} accept='image/*' type='file' name='file'></input>

                </div>


            </div>
            <div style={{
                height: 'auto',
                marginLeft: '400px',
            }}>
                <Pagination defaultCurrent={1} total={50}  />
            </div>
        </div>
    )
}
