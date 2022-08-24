import React from 'react'
import { Typography } from 'antd';
import { BsFillCloudSlashFill } from "react-icons/bs";



const { Title } = Typography;

export default function Notfound() {
  return (
    <div style={{
        height:'500px',
    }}>
        <BsFillCloudSlashFill style={{ 
            marginTop: '50px',
            fontSize: '30px',
            }} />
        <Title>This page is not found</Title>
    </div>
  )
}
