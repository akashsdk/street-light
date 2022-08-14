import React from 'react'
import './LightCart.css'
import CardLight from '../Image/CardLight.png'
import Switch from "react-switch";
import light from "../Image/street-2.1.jpg"
import { FaRegTrashAlt } from "react-icons/fa";
import { doc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from '../firebase';



import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

export default function LightCart(props) {
    const [value, setValue] = React.useState()
    const db = getFirestore(app);

    const { confirm } = Modal;
   const showConfirm = (id) => {
    confirm({
        title: 'Do you Want to delete this items?',
        icon: <ExclamationCircleOutlined />,
        content: 'Press "OK"',

        onOk() {
            console.log('OK');
            deleteDoc(doc(db, "lights",id ));
            props.refresh(id)
        },

        onCancel() {
            console.log('Cancel');
        },
    });
};

    return (
        <div className='LightCartBody'>
            
            <div className='LightCartBodyDiv'>
                <FaRegTrashAlt onClick={()=>showConfirm(props.num)} className='LightCartIcon'  />
                <p className='LightCartBodyP'>Street Light-{props.num}</p>
                
            </div>
            <div className='LightCartLine'></div>
            <div className='LightCartBox'>
                <img src={value ? CardLight : light} className="LightCartImg" />
                <div>
                    <div className='LightCartSwBox'>
                        <h3>Power:</h3>
                        <Switch onChange={setValue} checked={value} className="LightCartSwitch" />
                    </div>
                    <div className='LightCartBoxDiv'>
                        <p>Power: {value ? 'ON' : 'OFF'}</p>
                        <p>Sensor: {props.Sensor}</p>
                        <p>LDR: {props.LDR}</p>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: value ? 'rgb(112, 251, 205)' : '#f6574c',
            }} className='LightCartDownDiv'>
                <p className='LightCartDownP' style={{
                    color: value ? 'black' : 'white',

                }}>{value ? 'Active' : 'Deactive'}</p>
            </div>
        </div>
    )
}
