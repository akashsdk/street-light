import React, { useState } from 'react'
import "./Index.css"
import ImgMani from '../Image/StreetMaintenance.jpeg'
import CircuitDesign from '../Image/CircuitDesign.png'
import Gallery from '../Card/Gallery.js'

import { Col, Row, Pagination } from 'antd';


export default function Index() {
  const [page, setPage] = React.useState(1)

  return (
    <div className='indexBody'>
      <Row>
        <Col span={6} push={15}>
          <img src={ImgMani} className="indexImgMani" />

        </Col>
        <Col span={15} pull={6}>
          <div className='indexRowDiv'>
            <p className='indexFistP'>Street Light Maintenance</p>
          </div>
          <p className='indexFistPText'>Street lighting is usually owned by counties or cities and is seen in neighbourhoods. Our Street Lighting Maintenance crews furnish all labour, materials, and equipment and supervise the maintenance of many street lighting systems in our service area. Repairs include but are not limited to the lamp, ballast and photocell repair and replacement; installation of light pole and/or luminaries arms; complete fixture replacement, and cleaning or repair of components. Our crews perform street light installation, street light maintenance and repair of conduit, junction boxes, conduit bores, grounding; installation and repair to concrete foundations; locating, installing, testing, and splicing conductor cables; and modifications to service panels as required.</p>

        </Col>

      </Row>
      <div className='indecLineDive'></div>

      <div>
        <p className='indexFistP'>street light circuit design</p>
        <img src={CircuitDesign} className='indexImgeCircuit' />
      </div>
      <div className='indecLineDive'></div>

      <div className='indecGalleryBox'>

        <Gallery/>
      </div>

      <div className='indecLineDive'></div>


      <div className='indecNoticeDiv'>
        <h5>Notice Board</h5>
        <div className='indecNoticeBox'>
          {
            page == 1 ? (
              <p className='indecNoticeText'>this website is under maintenance 🥴</p>
            ) : page == 2 ? (
              <p className='indecNoticeText'>upcoming notice 1</p>
            ) : page == 3 ? (
              <p className='indecNoticeText'>upcoming notice 2</p>
            ) : page == 4 ? (
              <p className='indecNoticeText'>upcoming notice 3</p>
            ) : page == 5 ? (
              <p className='indecNoticeText'>upcoming notice 4</p>
            ) : (
              <p className='indecNoticeText'>Error</p>
            )
          }
        </div>
        <Pagination onChange={(page, pageSize) => {
          setPage(page)
        }} defaultCurrent={1} current={page} total={50} />
      </div>


    </div>
  )
}
