import React from "react";
import "./NoticeBoard.css";

import { Pagination, Result } from "antd";
import { useState } from "react";

export default function NoticeBoard() {
  const [current, setCurrent] = useState(3);
  const [page, setPage] = useState(3);

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
          ddd
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
