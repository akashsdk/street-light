import React from 'react';
import "./Loading.css"
import { Triangle } from 'react-loader-spinner'
import LoadingImg from '../Image/LoadingImg.png'

export default function Loading() {
    return (
        <div className='loadingBox'>
            <img src={LoadingImg} className={'loadingImg'} >
            </img>
            <div className='loadingDiv'>
                <Triangle color="#3fa46a" height={200} width={200} />
            </div>
        </div>
    )
}





