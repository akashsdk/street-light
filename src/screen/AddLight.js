import React from 'react'
import "../styles/AddLight.css"
import { Button, Form, Input, Select } from 'antd';
import { getFirestore } from "firebase/firestore";
import app from '../firebase';
import { doc, setDoc } from "firebase/firestore";

const { Option } = Select;

export default function AddLight() {
    const db = getFirestore(app);
    const [number,setNumber]=React.useState()
    const [area,setArea]=React.useState()

    const add=async()=>{
        if(!number || !area){
            console.log('Please fill all the inputs')
            return
        }
        try {
             await setDoc(doc(db, "lights",number), {
              number : number,
              area : area,
              m_sensor :true,
              ldr: true,
              power: true,
            });
            console.log("Document written with ID: ");
            window.location.reload()
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (
        <div className='AddLightBox'>
            <Form name="control-hooks" >
                <Form.Item
                    name="Light Code"
                    label="Light Code"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input onChange={e=>setNumber(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name="Area"
                    label="Area"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select onChange={(e)=>{
                        setArea(e)
                        console.log(e)
                    }}
                        placeholder="Select a option and change input text above"

                        allowClear
                    >
                        <Option value="Dhaka-1">Dhaka-1</Option>
                        <Option value="Dhaka-2">Dhaka-2</Option>
                        <Option value="Dhaka-3">Dhaka-3</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item >
                    <Button onClick={add}  type="primary" htmlType="submit">
                        Submit
                    </Button>

                </Form.Item>
            </Form>
        </div>
    )
}
