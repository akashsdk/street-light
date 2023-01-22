import React from "react";
import "./NoticeBoard.css";

import { Pagination, Result, Image, Space, Spin, FloatButton, Calendar } from "antd";

import { useState } from "react";

export default function NoticeBoard() {
  const [current, setCurrent] = useState(2);
  const [page, setPage] = useState(2);

  const [visible, setVisible] = useState(false);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    setPage(page);
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const wrapperStyle = {
    width: '40%',
    borderRadius: 4,
    marginTop: 50,
  };

  return (
    <div className="noticeBody">
      {page == 1 ? (
        <p className="noticeHedertext">Notice Board1</p>
      ) : page == 2 ? (
        // Calendar
        <p className="noticeHedertext">Calendar</p>
      ) : page == 3 ? (
        // Notice Board
        <p className="noticeHedertext">Notice Board</p>
      ) : page == 4 ? (
        // Events
        <p className="noticeHedertext">Events</p>
      ) : page == 5 ? (
        <p className="noticeHedertext">Notice Board5</p>
      ) : (
        // Error Page
        <p className="noticeHedertext">Error !!</p>
      )}

      <div>
        <div className="noticeBoxLine" />

        {page == 1 ? (
          <div className="noticeBoxBody">this website is under maintenance</div>
        ) : page == 2 ? (
          // Calendar
          <div className="noticeBoxBody">
            <div style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
          </div>
        ) : page == 3 ? (
          // Notice Board
          <div className="noticeBoxBody">
            <div className="noticeBoxBody">
              <div className="noticeBoxDiv1">
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              </div>
              <div style={{ width: "150px" }} />

              <div className="noticeBoxDiv">
                <Image
                  preview={{
                    visible: false,
                  }}
                  width={300}
                  src="https://images.template.net/wp-content/uploads/2017/05/fimg-notice1.jpg"
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
                    <Image src="https://images.template.net/wp-content/uploads/2017/05/fimg-notice1.jpg" />
                    <Image src="https://vakilsearch.com/blog/wp-content/uploads/2022/05/notice-format.jpg" />
                    <Image src="https://t4.ftcdn.net/jpg/01/65/71/93/360_F_165719326_rjoXg0Gk3tCa7sA38aL5la6OhZLGM0a4.jpg" />
                  </Image.PreviewGroup>
                </div>
              </div>

              <div style={{ width: "150px" }} />
              <div className="noticeBoxDiv1">
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              </div>
            </div>
          </div>
        ) : page == 4 ? (
          // Events
          <div className="noticeBoxBody">
            <div className="noticeBoxBody">
              <div className="noticeBoxDiv1">
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              </div>
              <div style={{ width: "150px" }} />

              <div className="noticeBoxDiv">
                <Image
                  preview={{
                    visible: false,
                  }}
                  width={300}
                  src="https://thumbs.dreamstime.com/b/upcoming-events-text-sticky-paper-post-note-187434930.jpg"
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
                    <Image src="https://thumbs.dreamstime.com/b/upcoming-events-text-sticky-paper-post-note-187434930.jpg" />
                    <Image src="https://st4.depositphotos.com/14431644/25665/i/600/depositphotos_256655706-stock-photo-word-writing-text-upcoming-events.jpg" />
                  </Image.PreviewGroup>
                </div>
              </div>

              <div style={{ width: "150px" }} />
              <div className="noticeBoxDiv1">
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              </div>
            </div>
          </div>
        ) : page == 5 ? (
          <div className="noticeBoxBody">upcoming Messages 4</div>
        ) : (
          // Error Page
          <div style={{ marginTop: "70px" }}>
            <Result
              status="warning"
              title="There are some problems with your operation."
            />
          </div>
        )}

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
