import React, { useState } from "react";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postBetMarketAndUser,
  PostTransferStatement,
} from "../../App/Features/auth/authActions";
import dayjs from "dayjs";

import "./Transferstatement.css";
import Modal from "react-bootstrap/Modal";
import TransferstatementModal from "./TransferstatementModal";
import { AiOutlineDoubleLeft } from "@react-icons/all-files/ai/AiOutlineDoubleLeft";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";
import { DatePicker } from "antd";

const dateFormat = "YYYY-MM-DD";

const Transferstatement = () => {
  const { PostTransferStatementData, PostTransferStatementDataLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [trueee, setTrueee] = useState(false);
  const [matchId, setMatchId] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  var curr = new Date();
  const timeBefore = moment(curr).subtract(14, "days").format("YYYY-MM-DD");
  const time = moment(curr).format("YYYY-MM-DD");


  const [startDate, setStartDate] = useState(timeBefore);
  const [endDate, setEndDate] = useState(time);
  const [gameNameForType, setGameNameForType] = useState(1);

  // useEffect(() => {
  //   if (PostTransferStatementData?.data === "") {
  // console.log("true");
  // } else {
  // console.log("false");
  //   }
  // }, [PostTransferStatementData?.data]);

  // console.log(PostTransferStatementData?.data?.totalPages, "hello");

  const StartDateValue = (date, dateString) => {
    setStartDate(dateString);
  };
  const EndDateValue = (date, dateString) => {
    setEndDate(dateString);
  };

  useEffect(() => {
    // let d = new Date();
    // d.setDate(d.getDate() - 14);
    let data = {
      noOfRecords: 100,
      index: pageNumber,
      fromDate: timeBefore,
      toDate: time,
      type: gameNameForType,
    };
    // console.log("apiiiiiii");
    dispatch(PostTransferStatement(data));
    // console.log();
  }, []);

  const handleDetailsStatement = (item1, item2) => {
    setMatchId({ matchid: item1, remark: item2 });
    setTrueee(true);
  };

  const handleDoubleLeft = (vl) => {
    if (vl === "doubleleft") {
      setPageNumber(0);
    } else if (vl === "sigleleft") {
      setPageNumber(pageNumber - 1);
    } else if (vl === "singleright") {
      setPageNumber(1 + pageNumber);
    } else {
      setPageNumber(PostTransferStatementData?.data?.totalPages);
    }
  };
  // console.log(pageNumber, "hello");

  const handleSelectGame = (e) => {
    let inputValue = e.target.value;
    // console.log(inputValue, "dasjdhadhas");
    setGameNameForType(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      noOfRecords: 100,
      index: pageNumber,
      fromDate: startDate,
      toDate: endDate,
      type: gameNameForType,
    };
    dispatch(PostTransferStatement(data));
  }
  return (
    <>
      <div className="home-page">



        <div className="container-inner">
          <section className="m-t-10 transfer">
            <h2 className="page-title p-l-15">Account Statement</h2>

            <div style={{ marginTop: "19px" }}>
              <DatePicker
                className="startDate"
                defaultValue={dayjs(startDate)}
                format={dateFormat}

                onChange={StartDateValue}
                disabledDate={(d) =>
                  !d ||
                  d.isBefore(dayjs().subtract(2, "month")) ||
                  d.isAfter(dayjs())
                }
              />
              <DatePicker
                className="endDate"
                defaultValue={dayjs}

                format={dateFormat}
                onChange={EndDateValue}
                disabledDate={(d) =>
                  !d ||
                  d.isBefore(dayjs().subtract(2, "month")) ||
                  d.isAfter(dayjs())
                }
              />
              <div className="AccountBtnsubmit">

                <select
                  className="selectionndsfsdfnn"
                  // name="cars"
                  // id="cars"
                  onChange={handleSelectGame}
                >
                  <option value={1}> All</option>
                  <option value={2}> Game Report</option>
                  <option value={3}> Deposite/Withdraw Report</option>
                </select>
                <button
                  className="selectionndsfsdfnn"
                  style={{ width: "45%" }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="table-responsive">
              {
                PostTransferStatementDataLoading === true ? <div className=" PostselfwithdrawappDataLoadinglodding">
                  <i
                    className="fa fa-circle-o-notch fa-spin loading"
                    style={{ fontSize: "50px" }}
                  ></i>
                  <p className="loading-text">Loading...</p>{" "}
                </div> : <table className="table" style={{ width: "100%" }}>
                  <thead className="tbodybody">
                    <tr>
                      <th>Date</th>
                      <th style={{ width: "15%" }}>Credit</th>
                      <th style={{ width: "13%" }}>Debit</th>
                      <th className="Balance">Balance</th>
                      <th>Remark</th>
                    </tr>
                  </thead>
                  <tbody
                    className="tbodybody"
                    style={{
                      height: "100vh",
                      display: "block",
                      overflow: "scroll",
                    }}
                  >
                    {PostTransferStatementData?.data &&
                      PostTransferStatementData?.data?.dataList ? (
                      PostTransferStatementData?.data?.dataList.map((el) => (
                        <tr
                          className="accountStatment"
                          onClick={() =>
                            handleDetailsStatement(el?.marketid, el?.remark)
                          }
                        >
                          <td>
                            {" "}
                            {moment(el?.date).format("YYYY-MM-DD  - h:mm")}
                          </td>
                          <td style={{ color: "green", width: "10%" }}>
                            {" "}
                            {el?.credit}
                          </td>
                          <td style={{ color: "red", width: "15%" }}>
                            {el?.debit}
                          </td>
                          <td style={{ width: "19%" }}>{el?.pts}</td>
                          <td style={{ width: "30%" }}>{el?.remark}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colspan="3" className="text-center">
                          There Have Been No Transfers In The Last 14 Days.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              }

            </div>
          </section>
          <div className="pagination">
            <button
              disabled={pageNumber === 0 ? true : false}
              className="paginationBtn"
              onClick={() => handleDoubleLeft("doubleleft")}
            >
              <AiOutlineDoubleLeft className="arrowDoubleLeft" />
            </button>
            <button
              disabled={pageNumber === 0 ? true : false}
              className="paginationBtn"
              style={{ marginLeft: "-9px" }}
              onClick={() => handleDoubleLeft("sigleleft")}
            >
              <AiOutlineLeft className="arrowSingleLeft" />
            </button>
            <div className="paginationno">
              <div style={{ marginTop: "7px", marginLeft: "11px" }}>
                {pageNumber + 1}
              </div>
            </div>

            <button
              disabled={
                PostTransferStatementData?.data?.totalPages === pageNumber + 1
                  ? true
                  : false
              }
              className="paginationBtn"
              style={{ marginLeft: "-10px" }}
              onClick={() => handleDoubleLeft("singleright")}
            >
              <AiOutlineRight className="arrowSingleRight" />
            </button>
            <button
              disabled={
                PostTransferStatementData?.data?.totalPages === pageNumber + 1
                  ? true
                  : false
              }
              className="paginationBtn"
              onClick={() => handleDoubleLeft("doubleright")}
            >
              <AiOutlineDoubleRight className="arrowDoubleRight" />
            </button>
          </div>
        </div>



      </div>
      <Modal
        show={trueee}
        onHide={() => setTrueee(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ width: "100%" }} className="back1">
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ marginBottom: "-30px" }}
          >
            Result
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "100%" }}>
          <div>
            <TransferstatementModal matchId={matchId} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Transferstatement;
