import React from 'react'
import './LightCart.css'
import CardLight from '../Image/CardLight.png'
import Switch from "react-switch";


export default function LightCart() {
    const [value, setValue] = React.useState()
    return (
        <div className='LightCartBody'>
            <p className='LightCartBodyP'>Street Light-101</p>
            <div className='LightCartLine'></div>
            <div className='LightCartBox'>
                <img src={CardLight} className="LightCartImg" />
                <div>
                    <div className='LightCartSwBox'>
                        <h3>Power:</h3>
                        <Switch onChange={setValue} checked={value} className="LightCartSwitch" />
                    </div>
                    <div className='LightCartBoxDiv'>
                        <p>Power: ON</p>
                        <p>MNG: ON</p>
                        <p>LDR: OFF</p>
                    </div>
                </div>
            </div>
            <div className='LightCartDownDiv'>
                <p className='LightCartDownP'>Acctive</p>
            </div>
        </div>
    )
}
