import React from 'react'
import { Spin, Alert } from 'antd';
import { BsFillCloudSlashFill } from "react-icons/bs";




export default function Notfound(props) {
    return (
        <div style={{
            height: 'auto',
            margin: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

        }}>

            <BsFillCloudSlashFill style={{
                marginTop: '50px',
                fontSize: '50px',
                color: '#85C1E9',
            }} />
            <div style={{ height: '30px', }} />

            <Spin tip="Loading...!">
                <Alert
                    message={props.NotfoundText}
                    type="info"
                />
            </Spin>

        </div>
    )
}



