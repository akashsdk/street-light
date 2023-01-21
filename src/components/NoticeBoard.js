import React from "react";
import "./NoticeBoard.css";

import { Pagination } from "antd";
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

        <div className="noticeBoxBody">akashhg</div>

        {/* {page == 1 ? (
          <p className="">this website is under maintenance</p>
        ) : page == 2 ? (
          <p className="">upcoming Messages 1</p>
        ) : page == 3 ? (
          <p className="">upcoming notice 2</p>
        ) : page == 4 ? (
          <p className="">upcoming notice 3</p>
        ) : page == 5 ? (
          <p className="">upcoming notice 4</p>
        ) : (
          <p className="">Error</p>
        )} */}

        <div className="noticeBoxLine" />
        <Pagination current={current} onChange={onChange} total={50} className='noticePagination'/>
      </div>
    </div>
  );
}
