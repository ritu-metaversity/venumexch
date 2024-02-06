import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveSportList,
  Postcasino,
  Postprofitlossmatchwise,
} from "../../App/Features/auth/authActions";
import "./BettingProfit&Loss.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import axios from "axios";
import { useParams } from "react-router";
import { DatePicker } from "antd";

import dayjs from "dayjs";
import { AiOutlineDoubleLeft } from "@react-icons/all-files/ai/AiOutlineDoubleLeft";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";
import { Link } from "react-router-dom";

const dateFormat = "YYYY-MM-DD";

const BettingProfitLoss = () => {
  const [Active, setActive] = useState(1);
  const [gamesData, setGamesData] = useState("");
  const { getActiveSportListData } = useSelector((state) => state.auth);
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const [casinoList, setCasinoList] = useState("");
  const [casinoId, setCasinoId] = useState("");
  var curr = new Date();
  const timeBefore = moment(curr).subtract(14, "days").format("YYYY-MM-DD");
  const time = moment(curr).format("YYYY-MM-DD");
  const [startDate, setStartDate] = useState(timeBefore);
  const [endDate, setEndDate] = useState(time);
  //   const { id } = useParams();
  const token = localStorage.getItem("TokenId");
  const dispatch = useDispatch();
  const [sportidddd, setSportsiddd] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const [pageSports, setPageSports] = useState("");
  const [pageSportsName, setPageSportsName] = useState(false);
  const [casionMatch, setCasionMatch] = useState("");
  const [sportsMatchId, setSportsMatchId] = useState("");

  const { PostprofitlossmatchwiseDatatata, PostcasinoData, PostprofitlossmatchwiseDatatataLoading } = useSelector(
    (state) => state.auth
  );
  const handleActive = (val1, val2) => {
    setActive(val1);
    setPageSports(val2);
  };


  // console.log(PostprofitlossmatchwiseDatatataLoading, "PostprofitlossmatchwiseDatatataLoadingPostprofitlossmatchwiseDatatataLoading")
  useEffect(() => {
    if (Active === 1) {
      dispatch(getActiveSportList());
    }
  }, [Active, dispatch]);

  const handleStartDate = (vl) => {
    setStartDate(new Date(vl));
  };
  const handleEndDate = (vl) => {
    setEndDate(new Date(vl));
  };

  const handleSelectGame = (e) => {
    let inputValue = e.target.value;
    setPageSportsName(true);
    setSportsiddd(inputValue);

    axios
      .post(
        "https://adminapi.247idhub.com/admin-new-apis/enduser/active-match-sport-wise-open",
        { sportId: inputValue }
      )
      .then((res) => {
        setGamesData(res?.data?.data);
      });
    let d = new Date();
    d.setDate(d.getDate() - 14);

    let ProfitLossPayload = {
      sportId: inputValue,
      matchId: "",
      fromDate: startDate,
      toDate: endDate,
      userId: "",
      index: pageNumber,
      noOfRecords: 100,
      totalPages: "",
    };
    dispatch(Postprofitlossmatchwise(ProfitLossPayload));
  };

  const handleGameName = (e) => {
    let inputValue = e.target.value;
    let d = new Date();
    setSportsMatchId(inputValue);
    d.setDate(d.getDate() - 14);
    let ProfitLossPayload = {
      sportId: sportidddd,
      matchId: inputValue,
      fromDate: startDate,
      toDate: endDate,
      userId: "",
      index: pageNumber,
      noOfRecords: 100,
      totalPages: "",
    };
    dispatch(Postprofitlossmatchwise(ProfitLossPayload));
  };

  useEffect(() => {
    if (startDate !== "" && endDate !== "") {
      if (Active === 1) {
        let d = new Date();
        d.setDate(d.getDate() - 14);
        let ProfitLossPayload = {
          sportId: "4",
          matchId: "",
          fromDate: startDate,
          toDate: endDate,
          userId: "",
          index: pageNumber,
          noOfRecords: 100,
          totalPages: "",
        };
        dispatch(Postprofitlossmatchwise(ProfitLossPayload));
      } else {
        let d = new Date();
        d.setDate(d.getDate() - 14);
        let ProfitLossPayload = {
          sportId: "323334",
          matchId: "",
          fromDate: startDate,
          toDate: endDate,
          userId: "",
          index: pageNumber,
          noOfRecords: 100,
          totalPages: "",
        };
        dispatch(Postprofitlossmatchwise(ProfitLossPayload));
      }
    }
  }, [startDate, endDate, Active, pageNumber]);

  const StartDateValue = (date, dateString) => {
    setStartDate(dateString);
  };
  const EndDateValue = (date, dateString) => {
    setEndDate(dateString);
  };

  // const token = localStorage.getItem("TokenId");

  // const token = localStorage.getItem("TokenId");

  useEffect(() => {
    const token = localStorage.getItem("TokenId");

    if (token) {

      dispatch(Postcasino());
    }
  }, [token]);
  useEffect(() => {
    const id = {
      id: "323334",
      appUrl: window.location.hostname.replace("www.",""),
    };
    setCasinoId("323334");

    axios
      .post(
        "https://adminapi.247idhub.com/admin-new-apis/casino/casino-tables-by-types",
        id
      )
      .then((res) => {
        setCasinoList(res.data.data);
      });
  }, [Active]);

  useEffect(() => {
    axios
      .post(
        "https://adminapi.247idhub.com/admin-new-apis/enduser/active-match-sport-wise-open",
        { sportId: "4" }
      )
      .then((res) => {
        setGamesData(res?.data?.data);
      });
  }, []);

  const handleCasino = (e) => {
    let inputValue = e.target.value;
    setCasinoId(inputValue);
    const id = {
      id: inputValue,
    };
    axios
      .post(
        "https://adminapi.247idhub.com/admin-new-apis/casino/casino-tables-by-types",
        id
      )
      .then((res) => {
        setCasinoList(res.data.data);
      });
    let ProfitLossPayload = {
      sportId: inputValue,
      matchId: "",
      fromDate: startDate,
      toDate: endDate,
      userId: "",
      index: pageNumber,
      noOfRecords: 100,
      totalPages: "",
    };
    dispatch(Postprofitlossmatchwise(ProfitLossPayload));
  };

  const handleCasinoMatch = (e) => {
    let inputValue = e.target.value;
    setCasionMatch(inputValue);
    // console.log(inputValue, "inputValue");
    let ProfitLossPayload = {
      sportId: casinoId,
      matchId: inputValue,
      fromDate: startDate,
      toDate: endDate,
      userId: "",
      index: pageNumber,
      noOfRecords: 100,
      totalPages: "",
    };
    dispatch(Postprofitlossmatchwise(ProfitLossPayload));
  };

  //pagination
  const handleDoubleLeft = (vl) => {
    if (vl === "doubleleft") {
      setPageNumber(1);
    } else if (vl === "sigleleft") {
      setPageNumber(pageNumber - 1);
    } else if (vl === "singleright") {
      setPageNumber(1 + pageNumber);
    } else {
      setPageNumber(PostprofitlossmatchwiseDatatata?.data?.totalRecord);
    }
  };

  // console.log(casionMatch, "casionMatch");
  // console.log(
  //   PostprofitlossmatchwiseDatatata,
  //   "PostprofitlossmatchwiseDatatata"
  // );
  // console.log(sportidddd, "sportidddd");
  // console.log(pageNumber, "pageNumber");
  // console.log(endDate, "endDate");
  // console.log(startDate, "startDate");
  // console.log(casinoId, "casinoId");
  // console.log(casinoList, "casinoList");
  // console.log(gamesData, "gamesData");
  // console.log(Active, "Active");

  useEffect(() => {
    // console.log(pageSports, "pageSportspageSports");
    if (pageSports === "Sports") {
      let ProfitLossPayload = {
        sportId: sportidddd ? sportidddd : 4,
        matchId: sportsMatchId,
        fromDate: startDate,
        toDate: endDate,
        userId: "",
        index: pageNumber,
        noOfRecords: 100,
        totalPages: "",
      };
      // console.log(ProfitLossPayload, "pageSportspageSports");

      dispatch(Postprofitlossmatchwise(ProfitLossPayload));
    } else {
      if (pageSports === "casino") {
        let ProfitLossPayload = {
          sportId: casinoId,
          matchId: casionMatch,
          fromDate: startDate,
          toDate: endDate,
          userId: "",
          index: pageNumber,
          noOfRecords: 100,
          totalPages: "",
        };
        // console.log(ProfitLossPayload, "pageSportspageSports");

        dispatch(Postprofitlossmatchwise(ProfitLossPayload));
      }
    }
  }, [pageSports]);

  return (

    <>
      <div className="main-content" style={{ minHeight: "calc(100% - 163px)" }}>
        <div className="home-page">
          <div className="container-inner">

            <div className='outer_box'>
              <div className="main_for_sports">

                <button

                  className="box_selection_time"
                  value={1}
                  onClick={() => handleActive(1, "Sports")}
                  style={{ backgroundColor: Active === 1 ? "#317383" : "#2c4f58" }}
                >
                  Sport
                </button>
                <button

                  className="box_selection_time"
                  value={2}
                  onClick={() => handleActive(2, "casino")}
                  style={{ backgroundColor: Active === 2 ? "#317383" : "#2c4f58" }}
                >
                  casino
                </button>
              </div>


              {Active === 1 ? (
                <div className="main_for_sports">
                  <select
                    className="box_selection_time"
                    // name="cars"
                    // id="cars"
                    onChange={handleSelectGame}
                  >
                    {/* <option value="">Select Sports</option> */}
                    {getActiveSportListData?.data?.data &&
                      getActiveSportListData?.data?.data
                      ? getActiveSportListData?.data?.data.map((item) => (
                        <option value={item?.sportId}>

                          {item?.sportName}
                        </option>
                      ))
                      : ""}{" "}
                  </select>

                  <select
                    className="box_selection_time"
                    name="cars"
                    id="cars"
                    onChange={handleGameName}
                  >
                    <option value="">Select Match</option>

                    {gamesData?.length > 0
                      ? gamesData.map((item) => {
                        return (
                          <option value={item?.matchId}>
                            {item?.matchName}
                          </option>
                        );
                      })
                      : ""}
                  </select>
                </div>
              ) : (
                <div className="main_for_sports">
                  <select
                    className="box_selection_time"
                    name="cars"
                    id="cars"
                    onChange={handleCasino}
                  >
                    {/* <option value="">Select Casino</option> */}

                    {PostcasinoData?.data && PostcasinoData?.data
                      ? PostcasinoData?.data.map((el) => (
                        <option value={el?.id}>{el?.name}</option>
                      ))
                      : ""}
                  </select>
                  <select
                    className="box_selection_time "
                    name="cars"
                    id="cars"
                    style={{ marginLeft: "14px", }}
                    onChange={handleCasinoMatch}

                  >
                    <option value="">Select Match</option>

                    {casinoList?.length &&
                      casinoList.map((item) => {
                        return (
                          <option value={item.gameId}>{item?.gameName}</option>
                        );
                      })}
                  </select>
                </div>
              )}
              <div className="main_for_sports">
                <DatePicker
                  className="box_selection_time"
                  defaultValue={dayjs(startDate)}
                  format={dateFormat}
                  onChange={StartDateValue}
                  disabledDate={(d) =>
                    !d ||
                    d.isBefore(dayjs().subtract(2, "month")) ||
                    d.isAfter(dayjs())
                  }
                // style={{ width: "23.2%" }}
                />
                <DatePicker
                  className="box_selection_time"
                  defaultValue={dayjs}
                  format={dateFormat}
                  onChange={EndDateValue}
                  disabledDate={(d) =>
                    !d ||
                    d.isBefore(dayjs().subtract(2, "month")) ||
                    d.isAfter(dayjs())
                  }
                // style={{
                //   width: "23.2%",
                //   marginLeft: "4px"
                // }}
                />
              </div>

            </div>
            {/* 
<DatePicker style={{width: "50%", height: "41px"}} onChange={handleStartDate}  />
<DatePicker style={{width: "50%", height: "41px"}} onChange={handleEndDate} /> */}

            <section class="m-t-10 betting-pnl">
              <h2 class="page-title p-l-15">Betting Profit &amp; Loss</h2>

              {/* <div class="game-date"><span>15th March 2023</span> <span class="float-right">P&amp;L: <span style={{color: "black"}}>0.00</span></span></div> */}
              <div className="mainDivFor">

                {PostprofitlossmatchwiseDatatataLoading === true ?
                  <div className=" PostselfwithdrawappDataLoadinglodding">
                    <i
                      className="fa fa-circle-o-notch fa-spin loading"
                      style={{ fontSize: "50px" }}
                    ></i>
                    <p className="loading-text">Loading...</p>{" "}
                  </div>
                  :
                  PostprofitlossmatchwiseDatatata?.data &&
                    PostprofitlossmatchwiseDatatata?.data?.market &&
                    PostprofitlossmatchwiseDatatata?.data?.market.length > 0 ? (
                    PostprofitlossmatchwiseDatatata?.data?.market.map((el) => (
                      <div class="dsfsfdfsd">
                        <div class="info">
                          <p class="m-b-0  game-name">
                            {console.log(el, "el?.matchId}")}
                            <Link
                              to={`/m/gamedetail/${el?.matchId}`}
                              class="betting-back"
                            >
                              <b>{el?.matchName}</b>
                            </Link>
                          </p>
                          <p class="m-b-0">
                            <span>
                              <b>commssionMila : </b>{" "}
                              <span>{el?.commssionMila}</span>
                            </span>
                          </p>
                          {/* <p class="m-b-0"><span><b>Settled Time:</b> <span>15/03/2023 23:02</span></span></p> */}
                        </div>
                        <div class="pnl-titles">
                          <p class="m-b-0">
                            <b>Net Win:</b>
                          </p>
                        </div>
                        <div class="pnl-numbers">
                          {el?.pnl < 0 ? (
                            <p class="m-b-0 negative">
                              <b>{Number(el?.pnl).toFixed(2)}</b>
                            </p>
                          ) : (
                            <p class="m-b-0 negative"
                              style={{ color: "green" }}>
                              <b>

                                {Number(el?.pnl).toFixed(2)}
                              </b>
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="nodataforund">NO DATA FOUND</div>
                  )
                }
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="pagination customclass" style={{ marginTop: "556px" }}>
        <button
          disabled={pageNumber === 1 ? true : false}
          className="paginationBtn"
          onClick={() => handleDoubleLeft("doubleleft")}
        >
          <AiOutlineDoubleLeft className="arrowDoubleLeft" />
        </button>
        <button
          disabled={pageNumber === 1 ? true : false}
          className="paginationBtn"
          style={{ marginLeft: "-9px" }}
          onClick={() => handleDoubleLeft("sigleleft")}
        >
          <AiOutlineLeft className="arrowSingleLeft" />
        </button>
        <div className="paginationno">
          <div style={{ marginTop: "7px", marginLeft: "11px" }}>
            {pageNumber}
          </div>
        </div>

        <button
          disabled={
            PostprofitlossmatchwiseDatatata?.data?.totalRecord === undefined ||
              null
              ? true
              : PostprofitlossmatchwiseDatatata?.data?.totalRecord ===
                pageNumber
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
            PostprofitlossmatchwiseDatatata?.data?.totalRecord === undefined ||
              null
              ? true
              : PostprofitlossmatchwiseDatatata?.data?.totalRecord ===
                pageNumber
                ? true
                : false
          }
          className="paginationBtn"
          onClick={() => handleDoubleLeft("doubleright")}
        >
          <AiOutlineDoubleRight className="arrowDoubleRight" />
        </button>
        {console.log(
          PostprofitlossmatchwiseDatatata?.data?.totalRecord,
          "PostprofitlossmatchwiseDatatata?.data?.totalRecord"
        )}
      </div></>

  );
};

export default BettingProfitLoss;
