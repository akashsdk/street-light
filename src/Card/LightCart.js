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
                <div>
                    <Switch onChange={setValue} checked={value} />
                    <Switch onChange={setValue} checked={value} />
                </div>
            </div>
            <div className='LightCartDownDiv'>
                <p className='LightCartDownP'>Acctive</p>
            </div>
        </div>
    )
}
