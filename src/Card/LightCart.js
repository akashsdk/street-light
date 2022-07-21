import React from 'react'
import './LightCart.css'
import CardLight from '../Image/CardLight.png'
import Switch from "react-switch";


export default function LightCart() {
    const [value, setValue] = React.useState()
    return (
        <div className='LightCartBody'>
            <p className='LightCartBodyP'>Street Light</p>
            <div className='LightCartBox'>
                <div>
                    <img src={CardLight} className="LightCartImg" />
                </div>
                <div className='LightCartSwBox'>
                    <h3>Power:</h3>
                    <Switch onChange={setValue} checked={value} className="LightCartSwitch"/>
                </div>
            </div>
            <div className='LightCartDownDiv'>
                <p className='LightCartDownP'>Acctive jj</p>
            </div>
        </div>
    )
}
