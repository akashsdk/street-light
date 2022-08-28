import React from 'react'
import './HeplLine.css';
import { Button, Checkbox, Form, Input,message } from 'antd';


export default function HeplLine() {
  

  return (
    <div className='HeplLinebox'>
      
      <Input placeholder="Message" />;
      <Button type="primary" htmlType="submit">submit</Button>
    </div>
  )
}
