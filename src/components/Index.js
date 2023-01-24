import React, { useState } from "react";
import "./Index.css";
import ImgMani from "../Image/StreetMaintenance.jpeg";
import CircuitDesign1 from "../Image/CircuitDesign.png";
import CircuitDesign from "../Image/Screenshot 2023-01-24 at 6.15.06 PM.png"
import Gallery from "../Card/Gallery.js";
import NoticeBoard from "./NoticeBoard";
import Messages from "./Messages";
import Calender from "../Card/Calender";


import { Col, Row, Pagination } from "antd";

export default function Index() {

  return (
    <div className="indexBody">
      <Row>
        <Col span={6} push={15}>
          <img src={ImgMani} className="indexImgMani" />
        </Col>
        <Col span={15} pull={6}>
          <div className="indexRowDiv">
            <p className="indexFistP">Street Light Maintenance</p>
          </div>
          <p className="indexFistPText">
            Street lighting is usually owned by counties or cities and is seen
            in neighbourhoods. Our Street Lighting Maintenance crews furnish all
            labour, materials, and equipment and supervise the maintenance of
            many street lighting systems in our service area. Repairs include
            but are not limited to the lamp, ballast and photocell repair and
            replacement; installation of light pole and/or luminaries arms;
            complete fixture replacement, and cleaning or repair of components.
            Our crews perform street light installation, street light
            maintenance and repair of conduit, junction boxes, conduit bores,
            grounding; installation and repair to concrete foundations;
            locating, installing, testing, and splicing conductor cables; and
            modifications to service panels as required.
          </p>
        </Col>
      </Row>
      <div className="indecLineDive"></div>

      <div>
        <p className="indexFistP">street light circuit design</p>
        <img src={CircuitDesign} className="indexImgeCircuit" />
      </div>


      {/* <div className="indecLineDive"></div>
      <Messages /> */}
      
      <div className="indecLineDive"></div>
      
      <NoticeBoard />


      <div>
        <p style={{color:'black', fontSize:'25px'}}>this website is under maintenance !!</p>
      </div>

      
    </div>
  );
}
