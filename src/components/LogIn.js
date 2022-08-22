import React, { useState } from 'react';
import {
    Input, Button, Modal, Col, DatePicker, Drawer,
    Form, Row, Select, Space, message,
} from 'antd';
import "./LogIn.css";
import './ChangePassword.css'
import app from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiFillStar } from "react-icons/ai";
import TextAnimation from "react-text-animations";
import Logo1 from '../Image/Logo.png'
import { BsHeadset } from "react-icons/bs";

import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import HeplLine from '../Card/HeplLine';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const key = 'updatable';

const { confirm } = Modal;
const showConfirm = (msg) => {
    confirm({
        title: msg,
        icon: <ExclamationCircleOutlined />,
        content: 'Press "OK"',

        onOk() {
            console.log('OK');
        },

        onCancel() {
            console.log('Cancel');
        },
    });
};

export default function LogIn(props) {
    const [hide, setHide] = React.useState(true);

    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const auth = getAuth(app)

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                showConfirm(errorCode)
            });


        message.loading({
            content: 'Loading...',
            key,
        });
        setTimeout(() => {
            message.success({
                content: 'Log In Done',
                key,
                duration: 2,
            });
        }, 1000);
    }


    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);

    };

    const onClose = () => {
        setVisible(false);
        message.error('Cancel');
    };
    const onSubmit = () => {
        setVisible(true);

    }

    const success = () => {
        setVisible(false);
        message.success('successfully done');
    };





    return (
        <div className='LogINBody'>

            <div className='LogINfontDiv'>
                <img src={Logo1} className='LogINlogo' />
                <div className='LogINtextDiv'>
                    <h1>Smart</h1>
                    <h1 className='LogINtext'>
                        <TextAnimation.Slide target="Street"
                            text={['Street', 'Street', 'Street']}>
                            Street
                        </TextAnimation.Slide>
                    </h1>
                    <h1>Light</h1>
                </div>
            </div>

            <div className='LogInBox'>
                <div className='LogINdivBox'>

                    <h2 className="changeh2">User ID <AiFillStar className="changeStarIcon" /></h2>
                    <div className="changeInputDiv">
                        <input onChange={(e) => {
                            setEmail(e.target.value)
                        }} type='text' className="logInInput"
                            placeholder="User ID" />
                    </div>
                </div>
                <div>
                    <h2 className="changeh2">Password <AiFillStar className="changeStarIcon" /></h2>
                    <div className="changeInputDiv">
                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }} type={hide ? "password" : 'text'}
                            className="logInInput" placeholder="Password" />
                        <a style={{
                            textDecoration: 'none'
                        }} onClick={() => setHide(!hide)}>
                            {
                                hide ? (<VscEyeClosed />) : (<VscEye />)
                            }
                        </a>
                    </div>
                </div>
                <div>
                    <button onClick={login} type="submit" className="chanheSubmit" >
                        <h1 className="chanheSubmitH1">Log In</h1>
                    </button>

                    <button className='logINLastbutton' onClick={showDrawer}>
                        Help Line <BsHeadset className='logINlastIcon' />
                    </button>


                    <div className="chanheDownDiv"></div>
                </div>
            </div>

            <div>
                <h3>
                    user ID: "someone@gmail.com", {"\n"}
                    Password: "123456"
                </h3>
            </div>

            <div>
                <Drawer
                    title="Help Line"
                    width={'50%'}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{
                        paddingBottom: 80,
                    }}
                    extra={
                        <Space>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={success} type="primary">
                                Submit
                            </Button>
                        </Space>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="name"
                                    label="Name:"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter user name',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Please enter user name" />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="userid"
                                    label="User Id:"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter User Id',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Please enter User Id" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="phone"
                                    label="Phone No:"
                                    type="number"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter phone number',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Please enter phone number" />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="email"
                                    label="Email Id:"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter acctive email',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Please enter acctive email" />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="type"
                                    label="Type of Problem"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please choose the type',
                                        },
                                    ]}
                                >
                                    <Select

                                        placeholder="Please choose type of problem">
                                        <Option value="None">None</Option>
                                        <Option value="private">Forgot Password</Option>
                                        <Option value="public">Forgot UserID</Option>
                                        <Option value="privateandpublic">Forgot UserID And Passwoed</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="description"
                                    label="Description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please enter description',
                                        },
                                    ]}
                                >
                                    <Input.TextArea rows={4} placeholder="if you went please enter description" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </div>



        </div>
    )
}
