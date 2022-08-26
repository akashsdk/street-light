import React from 'react'
import '../styles/System.css'
import LightCart from '../Card/LightCart'
import { Col, Row, Select, Button } from 'antd';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom";

import { getFirestore } from "firebase/firestore";
import app from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function System() {
  const db = getFirestore(app);
  const { Option } = Select;
  const [hide, setHide] = React.useState(false)
  const [data, setData] = React.useState()
  const [store, setStore] = React.useState()
  const [load, setLoad] = React.useState()

  const newData = async () => {
    const querySnapshot = await getDocs(collection(db, "lights"));
    let arr = []
    querySnapshot.forEach((doc) => {
      arr.push(doc.data())
    });
    setData(arr)
    setStore(arr)
  }
  React.useEffect(() => {
    newData()
  }, [load])
  return (
    <div>
      <div className='SystemFilter'>
        <h2 >Filter :</h2>
        <div>
          {hide ? (<AiFillCaretDown onClick={() => {
            setHide(!hide)
          }} className='SystemIcon' />) : (
            <AiFillCaretUp onClick={() => {
              setHide(!hide)
            }} className='SystemIcon' />
          )}
        </div>
      </div>
      {hide ? (
        <div className='SystemButtonDiv'>
          <div>
            <h2>Search to Select Area</h2>
            <Select onChange={e => {
              if (e == 'All') {
                setData(store)
                return
              }
              if (!store) {
                newData()
                return
              }
              let arr = store.filter(d => d.area == e)
              setData(arr)
            }}
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Search to Select Area"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="Dhaka-1">Dhaka-1</Option>
              <Option value="Dhaka-2">Dhaka-2</Option>
              <Option value="Dhaka-3">Dhaka-3</Option>
              <Option value="All">All-Area</Option>
            </Select>
          </div>
          <div>
            <Button type="primary" className='SystemButton'>
              <Link to="/AddLight">Add Light</Link>
            </Button>
          </div>
        </div>
      ) : (<></>)}

      <div className='SystemDivLine'></div>
      <Row justify="center">
        {
          data ? (
            data.map((d, i) => (
              <LightCart refresh={setLoad} key={i} num={d.number} LDR={d.ldr ? 'ON' : 'OFF'} Sensor={d.sensor ? 'ON' : 'OFF'} />
            ))
          ) : (<></>)
        }

      </Row>
    </div>
  )
}