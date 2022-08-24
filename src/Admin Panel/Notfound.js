import React from 'react'
import { Spin, Alert } from 'antd';
import { BsFillCloudSlashFill } from "react-icons/bs";




const Call = () => {
    return (
        <h1> Page Not Found</h1>
    )

}

export default function Notfound() {
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
                    message={<Call />}
                    type="info"
                />
            </Spin>

        </div>
    )
}



