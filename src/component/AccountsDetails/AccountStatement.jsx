import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Modal from "react-bootstrap/Modal";

import { AiOutlineDoubleLeft } from "@react-icons/all-files/ai/AiOutlineDoubleLeft";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";
import { PostTransferStatement } from '../../App/Features/auth/authActions';
import TransferstatementModal from '../../MobileComponent/RightMenu/TransferstatementModal'
const dateFormat = "YYYY-MM-DD";

const AccountStatement = () => {

  const { PostTransferStatementData, PostTransferStatementDataLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [trueee, setTrueee] = useState(false);
  const [matchId, setMatchId] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  var curr = new Date()
  const timeBefore = moment(curr).subtract(14, "days").format("YYYY-MM-DD");
  const time = moment(curr).format("YYYY-MM-DD");
  const [startDate, setStartDate] = useState(timeBefore);
  const [endDate, setEndDate] = useState(time);
  const [gameNameForType, setGameNameForType] = useState(1);
  const StartDateValue = (date, dateString) => {
    setStartDate(dateString);
  };
  const EndDateValue = (date, dateString) => {
    setEndDate(dateString);

  }

  const handleSelectGame = (e) => {
    let inputValue = e.target.value;
    console.log(inputValue, "dasjdhadhas");
    setGameNameForType(inputValue);
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
  console.log(pageNumber, "hello");

  useEffect(() => {
    // let d = new Date();
    // d.setDate(d.getDate() - 14);
    let data = {
      noOfRecords: 100,
      index: pageNumber,
      fromDate: startDate,
      toDate: endDate,
      type: gameNameForType,
    };
    // console.log("apiiiiiii");
    dispatch(PostTransferStatement(data));
    // console.log();
  }, [endDate, pageNumber, startDate, gameNameForType]);

  const handleDetailsStatement = (item1, item2) => {
    console.log(item1, item2, "item1,item2")
    setMatchId({ matchid: item1, remark: item2 });
    setTrueee(true);
  };
  return (
    <div className="content boxed-layout-wrapper" >






      <div className='wid-100'>

        <h1 className='betHeading pnlHeading'>Account Statement</h1>
        <div className="column m-r-40 ">
          <form data-vv-scope="mybets" className='pnl'>
            <div className="v-t d-inline-block">
              <label className="mb-0">From:</label>
              <div
                className="mx-datepicker vuedatepicker"
                name="FromDate"
              >
                <div className="mx-input-wrapper">
                  <DatePicker
                    className=" startDateNew"
                    defaultValue={dayjs(startDate)}
                    format={dateFormat}
                    onChange={StartDateValue}
                    disabledDate={(d) =>
                      !d ||
                      d.isBefore(dayjs().subtract(2, "month")) ||
                      d.isAfter(dayjs())
                    }
                  />
                </div>
              </div>
              <span className="text-danger error-report m-l-10"></span>
            </div>
            <div className=" v-t d-inline-block" style={{ marginLeft: "-18px" }}>
              <label className="mb-0">To:</label>
              <div
                className="mx-datepicker vuedatepicker"
                name="ToDate"
              >
                <div className="mx-input-wrapper">
                  <DatePicker
                    className="startDateNew"
                    defaultValue={dayjs}
                    format={dateFormat}
                    onChange={EndDateValue}
                    disabledDate={(d) =>
                      !d ||
                      d.isBefore(dayjs().subtract(2, "month")) ||
                      d.isAfter(dayjs())
                    }
                  />
                </div>
              </div>
              <span className="text-danger error-report "></span>
            </div>
            <div className=" v-t d-inline-block" style={{ marginLeft: "-18px" }}>
              <label className="mb-0">To:</label>
              <div
                className="mx-datepicker vuedatepicker"
                name="ToDate"
              >
                <div className="mx-input-wrapper">
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
                </div>
              </div>
              <span className="text-danger error-report "></span>
            </div>
            {/*   <div className="form-group m-r-20 d-inline-block">

              <button className="btn-primary searchBtnNew">
                <i className="fa fa-search m-r-5"></i>Search
              </button>
                  </div>*/}
          </form>
        </div>
        <div className="games-profit-loss">
          <ul className="d-inline-block">
            <li className="total-pnl pnlHeading">
              <p className="m-b-0"><span>Total P&amp;L : </span> <span className="positive">0</span></p>
            </li>
          </ul>
        </div>
        <div className="table-responsive">
          <table className="table profit-loss-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Credit</th>

                <th className="text-right">Debit</th>
                <th className="text-right">Balance</th>
                <th className="text-right">Remark</th>
              </tr>
            </thead>
            {
              PostTransferStatementDataLoading === true ?


                <div

                  style={{

                    backgroundColor: "#0000002b",
                    height: "50vh",
                    width: "1200px"
                  }}>
                  <i
                    className="fa fa-spinner fa-spin loading"
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>
                :
                <tbody>
                  {PostTransferStatementData?.data &&
                    PostTransferStatementData?.data?.dataList ? (
                    PostTransferStatementData?.data?.dataList.map((el) => (

                      <tr>

                        <td className="accountStatment"
                          onClick={() =>
                            handleDetailsStatement(el?.marketid, el?.remark)
                          }
                        > {" "}
                          {console.log(el, "elelelel")}
                          {moment(el?.date).format("YYYY-MM-DD  - h:mm")}</td>
                        <td> {" "}
                          {el?.credit}</td>
                        <td className="text-right" style={{ color: "red", width: "15%" }}>
                          {el?.debit} </td>
                        <td className="text-right" style={{ width: "15%" }}>{el?.pts}</td>
                        <td className="text-right" style={{ width: "30%" }}>{el?.remark}</td>
                      </tr>

                    ))
                  ) : (
                    <tr>
                      <td colspan="3" className="text-center">
                        There Have Been No Transfers In The Last 14 Days.
                      </td>
                    </tr>
                  )}
                </tbody>}
          </table>
        </div>
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
    </div>
  )
}

export default AccountStatement