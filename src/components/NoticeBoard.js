import React from "react";
import "./NoticeBoard.css";

import { Pagination, Result, Image } from "antd";
import { useState } from "react";

export default function NoticeBoard() {
  const [current, setCurrent] = useState(3);
  const [page, setPage] = useState(3);

  const [visible, setVisible] = useState(false);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    setPage(page);
  };

  return (
    <div className="noticeBody">
      <p className="noticeHedertext">Notice Board</p>
      <div>
        <div className="noticeBoxLine" />

        <div className="noticeBoxBody">

          <div className="noticeBoxDiv1">akkk</div>
          <div style={{ width: "5%" }} />

          <div className="noticeBoxDiv">
            <Image
              preview={{
                visible: false,
              }}
              width={300}
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              onClick={() => setVisible(true)}
            />
            <div
              style={{
                display: "none",
              }}
            >
              <Image.PreviewGroup
                preview={{
                  visible,
                  onVisibleChange: (vis) => setVisible(vis),
                }}
              >
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
              </Image.PreviewGroup>
            </div>
          </div>

          <div style={{ width: "5%" }} />
          <div className="noticeBoxDiv1">akkk</div>
        </div>
        {/* 
        {page == 1 ? (
          <div className="noticeBoxBody">this website is under maintenance</div>
        ) : page == 2 ? (
          <div className="noticeBoxBody">upcoming Messages 1</div>
        ) : page == 3 ? (
          <div className="noticeBoxBody">upcoming Messages 2</div>
        ) : page == 4 ? (
          <div className="noticeBoxBody">upcoming Messages 3</div>
        ) : page == 5 ? (
          <div className="noticeBoxBody">upcoming Messages 4</div>
        ) : (
          <div style={{marginTop:'70px'}}>
            <Result
              status="warning"
              title="There are some problems with your operation."
            />
          </div>
        )} */}

        <div className="noticeBoxLine" />
        <Pagination
          current={current}
          onChange={onChange}
          total={50}
          className="noticePagination"
        />
      </div>
    </div>
  );
}
