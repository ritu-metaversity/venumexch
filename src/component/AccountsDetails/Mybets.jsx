import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./Mybets.css";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { getActiveSportList, postBetHistory, Postunsettleddddd } from "../../App/Features/auth/authActions";
import moment from "moment";

const dateFormat = "YYYY-MM-DD";
const Mybets = () => {
  const dispatch = useDispatch();
  const [matchid, setMatchId] = useState("")
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [current, setcurrent] = useState(true)
  const [history, setHistory] = useState(false)
  const [historyData, setHistoryData] = useState({})
  const [unsettledbetmatchdata, setUnsettledbetmatchdata] = useState({})
  const [unmatchedBets, setUnmatchedBets] = useState(false);
  const [matchedBets, setmatchedBets] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const { PostunsettledData, PostunsettledDataLoading, postBetHistoryData, postBetHistoryDataLoading, getActiveSportListData } = useSelector(
    (state) => state.auth
  );


  const StartDateValue = (date, dateString) => {
    setStartDate(dateString);
  };

  const EndDateValue = (date, dateString) => {
    setEndDate(dateString);
  };



  useEffect(() => {
    dispatch(getActiveSportList())
  }, [])

  useEffect(() => {
    if (postBetHistoryData?.data && postBetHistoryData?.data?.dataList) {
      setUnsettledbetmatchdata(postBetHistoryData?.data && postBetHistoryData?.data?.dataList)
    }

  }, [postBetHistoryData])
  useEffect(() => {

    if (PostunsettledData?.data && PostunsettledData?.data?.dataList) {
      setUnsettledbetmatchdata(PostunsettledData?.data && PostunsettledData?.data?.dataList)
    }
  }, [PostunsettledData])
  const handleGameName = (e) => {
    let inputValue = e.target.value;
    setMatchId(inputValue)
  };

  const handleUnmatched = () => {
    if (unmatchedBets === true) {
      setUnmatchedBets(false);
    } else {
      setUnmatchedBets(true);
    }
    // console.log("ssjjk");
  };


  const handlematched = () => {
    if (matchedBets === true) {
      setmatchedBets(false);
    } else {
      setmatchedBets(true);
    }
    // console.log("ssjjk");
  };


  useEffect(() => {
    let data = { betType: 1, index: pageNumber, noOfRecords: 5, sportType: 1 };

    dispatch(Postunsettleddddd(data));

  }, [pageNumber, current]);

  const handleDoubleLeft = (vl) => {
    if (vl === "doubleleft") {
      setPageNumber(0);
    } else if (vl === "sigleleft") {
      setPageNumber(pageNumber - 1);
    } else if (vl === "singleright") {
      setPageNumber(1 + pageNumber);
    } else {
      setPageNumber(PostunsettledData?.data?.totalPages);
    }
  };

  const handleSelect = (vl) => {
    if (vl === "selected1") {
      setcurrent(true)
      setHistory(false)
    } else {
      setHistory(true)
      setcurrent(false)

    }
  }
  const [historyError, setHistoryError] = useState("false")

  const handleSearch = () => {
    if (startDate !== undefined && endDate !== undefined && matchid !== "") {
      console.log("eeee")
      setHistoryError("false")

      let data = ({
        fromDate: startDate,
        index: 0,
        isdeleted: false,
        noOfRecords: 100,
        sportId: matchid,
        toDate: endDate
      })
      dispatch(postBetHistory(data))
    } else {
      setHistoryError("true")
      console.log("hello")
    }
  }
  console.log(historyError, "historyErrorhistoryError")





  return (
    <div className="content boxed-layout-wrapper _flex wid-100">

      <div className="_parent">
        <div className="mid-pane">
          <h1 className="betHeading">My Bets</h1>
          <div className="column m-r-40 d-inline-block">
            <div className="selection">
              <div className={`item ${current === true ? "selected" : ""}`} onClick={() => handleSelect("selected1")}>Current</div>
              <div className={`item ${history === true ? "selected" : ""}`} onClick={() => handleSelect("selected2")}>Past</div>
            </div>
            {current === false ? "" :
              <div className="selection m-u">
                <div className={`item ${current === true ? "selected" : ""}`}>Matched</div>
                <div className="item">Unmatched</div>
              </div>}
            {history === true ?
              <div className="selection m-u">
                <select style={{ width: "110px" }}
                  className="item selected"
                  name="cars"
                  id="cars"
                  onChange={handleGameName}
                >
                  <option value="">Select Match</option>

                  {getActiveSportListData?.data?.data?.length > 0
                    ? getActiveSportListData?.data?.data.map((item) => {
                      return (
                        <option value={item?.sportId}>
                          {item?.sportName}
                        </option>
                      );
                    })
                    : ""}
                </select>
              </div> : ""}

          </div>
          {current === false ?
            <div className="column v-t m-r-40 d-inline-block">
              <div data-vv-scope="mybets">
                <div className="v-t d-inline-block">
                  <label className="mb-0">From:</label>
                  <div
                    className="mx-datepicker vuedatepicker"
                    style={{ marginRight: "35px" }}
                    name="FromDate"
                  >
                    <div className="mx-input-wrapper" aria-disabled="true">
                      <DatePicker
                        className=" startDateNew"
                        // defaultValue={dayjs(startDate)}
                        format={dateFormat}
                        onChange={StartDateValue}
                        disabledDate={(d) =>
                          !d ||
                          d.isBefore(dayjs().subtract(2, "month")) ||
                          d.isAfter(dayjs())
                        }
                      />
                    </div>
                    <div
                      className="mx-datepicker-popup"
                      style={{ display: "none" }}
                    >

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
                        className=" startDateNew"
                        // defaultValue={dayjs(endDate)}
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
                <div className="form-group m-r-20 d-inline-block">

                  <button className="btn-primary searchBtnNew" onClick={handleSearch}>
                    <i className="fa fa-search m-r-5"></i>Search
                  </button>
                  {historyError === "true" ? <div style={{ color: "red" }}>please select all Fields</div> : ""}
                </div>
              </div>
            </div> : ""
          }
          <div >
            {
              postBetHistoryDataLoading || PostunsettledDataLoading === true ?


                <div

                  style={{

                    backgroundColor: "#0000002b",
                    height: "50vh",
                    width: "1000px"
                  }}>
                  <i
                    className="fa fa-spinner fa-spin loading"
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>
                :
                <table className="table profit-loss-table">
                  <thead>
                    <tr>
                      <th>Sports Name</th>
                      <th>Event Name</th>
                      <th>Market Name</th>
                      <th>Nation</th>
                      <th className="text-right">User Rate</th>
                      <th className="text-right"> P & L</th>
                      <th className="text-right">Amount</th>
                      <th className="text-right">Time</th>

                    </tr>
                  </thead>


                  <tbody >

                    {
                      unsettledbetmatchdata?.length > 0 ? (
                        unsettledbetmatchdata.map((item) => (
                          <tr className={`odd oddNew ${item?.isback === true ? "back_1" : "lay"} unhighlighted`}>
                            <td className="text-left">{item?.sportName}</td>
                            <td className="text-left">{item?.eventName}</td>
                            <td className="text-left">{item?.marketname}</td>
                            <td className="text-left">{item?.nation}</td>
                            <td className="text-right">{item?.rate}</td>
                            <td className="text-right">{item?.pnl}</td>
                            <td className="text-right">{item?.amount}</td>

                            <td className="text-right"><span className="d-block"> {moment(item?.time).format(" D/mm/YYYY h:mm")}</span>
                            </td>

                          </tr>))) : (<tr>
                            <td colspan="7" className="text-center">
                              There are no record to display
                            </td>
                          </tr>)
                    }
                  </tbody>


                </table>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybets;
