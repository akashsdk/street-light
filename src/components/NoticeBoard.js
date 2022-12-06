import React from "react";
import "./Index.css";
import { Col, Row, Pagination } from "antd";

export default function NoticeBoard() {
  const [page, setPage] = React.useState(1);
  return (
    <div>
      <div className="indecNoticeDiv">
        <h5>Notice Board</h5>
        <div className="indecNoticeBox">
          {page == 1 ? (
            <div>
              <p className="indecNoticeText">
                this website is under maintenance 🥴
              </p>
            </div>
          ) : page == 2 ? (
            <p className="indecNoticeText">upcoming notice 1</p>
          ) : page == 3 ? (
            <p className="indecNoticeText">upcoming notice 2</p>
          ) : page == 4 ? (
            <p className="indecNoticeText">upcoming notice 3</p>
          ) : page == 5 ? (
            <p className="indecNoticeText">upcoming notice 4</p>
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
    </div>
  );
}
