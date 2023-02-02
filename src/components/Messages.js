import React from 'react';
import "./Index.css";
import { Col, Row, Pagination } from "antd";


export default function Messages() {
    const [page, setPage] = React.useState(1);
  return (
    <div className="indecNoticeDiv">
        <h5>Messages Board</h5>
        <div className="indecNoticeBox">
          {page == 1 ? (
            <p className="indecNoticeText">
              this website is under maintenance 
            </p>
          ) : page == 2 ? (
            <p className="indecNoticeText">upcoming Messages 01</p>
          ) : page == 3 ? (
            <p className="indecNoticeText">upcoming notice 02</p>
          ) : page == 4 ? (
            <p className="indecNoticeText">upcoming notice 03</p>
          ) : page == 5 ? (
            <p className="indecNoticeText">upcoming notice 04</p>
          ) : (
            <p className="indecNoticeText">Error</p>
          )}
        </div>
        <Pagination
          onChange={(page, pageSize) => {
            setPage(page);
          }}
          defaultCurrent={1}
          current={page}
          total={50}
        />
      </div>
  )
}
