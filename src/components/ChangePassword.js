import React from 'react';
import "./ChangePassword.css";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from 'antd';

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ChangePassword() {
    const [hide, setHide] = React.useState(false)
    return (
        <div>
            <div className='ChangeBox'>

                <h2 className="changeh2">Old Password <AiFillStar className="profileStarIcon" /></h2>
                <div className="changeInputDiv">
                    <input type={hide ? "password" : 'text'} className="changeInput" placeholder="Old Password" />
                    <a style={{
                        textDecoration: 'none'
                    }} onClick={() => setHide(!hide)}>
                        {
                            hide ? (<VscEyeClosed />) : (<VscEye />)
                        }
                    </a>
                </div>

                <h2 className="changeh2">New Password <AiFillStar className="profileStarIcon" /></h2>
                <div className="changeInputDiv">
                    <input type={hide ? "password" : 'text'} className="changeInput" placeholder="New Password" />
                    <a style={{
                        textDecoration: 'none'
                    }} onClick={() => setHide(!hide)}>
                        {
                            hide ? (<VscEyeClosed />) : (<VscEye />)
                        }
                    </a>
                </div>

                <h2 className="changeh2"> Confirm Password <AiFillStar className="profileStarIcon" /></h2>
                <div className="changeInputDiv">
                    <input type={hide ? "password" : 'text'} className="changeInput" placeholder="Confirm Password" />
                    <a style={{
                        textDecoration: 'none'
                    }} onClick={() => setHide(!hide)}>
                        {
                            hide ? (<VscEyeClosed />) : (<VscEye />)
                        }
                    </a>
                </div>

                <button type="submit" className="profileSubmit" >
                    <h1 className="profileSubmitH1">Submit</h1>
                </button>
                <div>
                    <Button type="link" className="profileForgetButton" danger>

                        <Link to="/Profile">
                            <AiOutlineArrowLeft /> Back
                        </Link>
                    </Button>
                </div>
                <div className="profileDownDiv"></div>
            </div>
        </div>
    )
}
