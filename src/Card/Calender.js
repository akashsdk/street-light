import React from 'react';
import { Calendar } from 'antd';

export default function Calender() {

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };


  return (
    <div>
        <Calendar onPanelChange={onPanelChange} style={{padding:'200px'}}/>
    </div>
  )
}
