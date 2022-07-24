import React from 'react'
import "../styles/AddLight.css"
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;




export default function AddLight() {


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
                    <Input />
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
                    <Select
                        placeholder="Select a option and change input text above"

                        allowClear
                    >
                        <Option value="male">Dhaka-1</Option>
                        <Option value="female">Dhaka-2</Option>
                        <Option value="other">Dhaka-3</Option>
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
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>

                </Form.Item>
            </Form>
        </div>
    )
}
