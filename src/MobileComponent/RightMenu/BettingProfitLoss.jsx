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
  const { PostprofitlossmatchwiseDatatata, PostcasinoData } = useSelector(
    (state) => state.auth
  );
  const handleActive = (val1, val2) => {
    setActive(val1);
    //  console.log(val2);
  };

  useEffect(() => {
    if (Active === 1) {
      dispatch(getActiveSportList());
      // console.log("eewheinfewfnwnffjnjdjifnjwdfnjj");
    }
  }, [Active, dispatch]);

  const handleStartDate = (vl) => {
    setStartDate(new Date(vl));
  };
  const handleEndDate = (vl) => {
    setEndDate(new Date(vl));
  };
  // console.log(startDate,"startDatestartDate")
  // console.log(endDate,"endDateendDate")

  const handleSelectGame = (e) => {
    let inputValue = e.target.value;
    //  console.log(inputValue);
    setSportsiddd(inputValue);
    const activeMatchSportWise = { sportId: inputValue };
    axios
      .post(
        "http://api.a2zscore.com/admin-new-apis/enduser/active-match-sport-wise-open",
        activeMatchSportWise
      )
      .then((res) => {
          // console.log(res, "adsdassdsadasd");
        setGamesData(res?.data?.data);
      });
    let d = new Date();
    d.setDate(d.getDate() - 14);
  
    let ProfitLossPayload = {
      sportId: inputValue,
      matchId: "",
      fromDate:startDate,
      toDate: endDate,
      userId: "",
      index: "",
      noOfRecords: "",
      totalPages: "",
    };
    dispatch(Postprofitlossmatchwise(ProfitLossPayload));
  };

  const handleGameName = (e) => {
    let inputValue = e.target.value;
    // console.log(inputValue);
    let d = new Date();
    d.setDate(d.getDate() - 14);
    let ProfitLossPayload = {
      sportId: sportidddd,
      matchId: inputValue,
      fromDate:startDate,
      toDate: endDate,
      userId: "",
      index: "",
      noOfRecords: "",
      totalPages: "",
    };
    dispatch(Postprofitlossmatchwise(ProfitLossPayload));
  };

  useEffect(() => {

    if(startDate!==""&&endDate!==""){
    if (Active === 1) {
      let d = new Date();
      d.setDate(d.getDate() - 14);
      let ProfitLossPayload = {
        sportId: "4",
        matchId: "",
        fromDate:startDate,
        toDate: endDate,
        userId: "",
        index: "",
        noOfRecords: "",
        totalPages: "",
      };
      dispatch(Postprofitlossmatchwise(ProfitLossPayload));
    } else {
      let d = new Date();
      d.setDate(d.getDate() - 14);
      let ProfitLossPayload = {
        sportId: "323334",
        matchId: "",
        fromDate:startDate,
        toDate: endDate,
        userId: "",
        index: "",
        noOfRecords: "",
        totalPages: "",
      };
      dispatch(Postprofitlossmatchwise(ProfitLossPayload));
    }}
  }, [startDate, endDate, Active]);

  const StartDateValue = (date, dateString) => {
    setStartDate(dateString);
    // console.log(dateString);
  };
  const EndDateValue = (date, dateString) => {
    setEndDate(dateString);
  };

  useEffect(() => {
    // if (Active === 2) {
    dispatch(Postcasino());
  }, [])


  useEffect(() => {
 const id = {
      id: "323334",
    };
    setCasinoId("323334");

    axios
      .post(
        "http://api.247365.exchange/admin-new-apis/casino/casino-tables-by-types",
        id
      )
      .then((res) => {
        setCasinoList(res.data.data);
      });
  }, [Active])

  useEffect(() => {
   const activeMatchSportWise = { sportId: "4" };
    axios
      .post(
        "http://api.a2zscore.com/admin-new-apis/enduser/active-match-sport-wise-open",
        activeMatchSportWise
      )
      .then((res) => {
          // console.log(res, "adsdassdsadasd");
        setGamesData(res?.data?.data);
      });
  }, [Active])

  const handleCasino = (e) => {
    let inputValue = e.target.value;
    // console.log(inputValue, "inputValue");
    setCasinoId(inputValue);
    const id = {
      id: inputValue,
    };
    axios
      .post(
        "http://api.247365.exchange/admin-new-apis/casino/casino-tables-by-types",
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
      index: "",
      noOfRecords: "",
      totalPages: "",
    };
    dispatch(Postprofitlossmatchwise(ProfitLossPayload));
  };

  const handleCasinoMatch = (e) => {
    let inputValue = e.target.value;
    // console.log(inputValue, "inputValue");
    let ProfitLossPayload = {
      sportId: casinoId,
      matchId: inputValue,
      fromDate: startDate,
      toDate:endDate ,
      userId: "",
      index: "",
      noOfRecords: "",
      totalPages: "",
    };
    dispatch(Postprofitlossmatchwise(ProfitLossPayload));
    // const id = {
    //    id: inputValue
    //  }
    //  axios.post("http://api.a2zscore.com/admin-new-apis/casino/casino-tables-by-types", id).then((res)=>{
    //    setCasinoList(res.data.data)
    //  })
  };
  // console.log(casinoList, "casinoListcasinoList");

  return (
    <>
      <div className="main-content" style={{ minHeight: "calc(100% - 163px)" }}>
        <div className="home-page home-page-news">
          <div className="container-inner">
            {/* <section   className="m-t-10 betting-pnl">
             <h2   className="page-title p-l-15">Betting Profit &amp; Loss</h2>

             
          </section> */}
            {/* <button className='btnnnn'>Sports id</button>
<button className='btnnnn'>Casino</button> */}

            <div>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton
                  id="tbg-radio-2"
                  className={`${Active === 1 ? "active1" : ""}`}
                  value={1}
                  style={{marginRight: "18px"}}
                  onClick={() => handleActive(1, "Sports")}
                >
                  Sports id
                </ToggleButton>
                <ToggleButton
                  id="tbg-radio-3"
                  className={`${Active === 2 ? "active1" : ""}`}
                  value={2}
                  style={{width: "15%"}}
                  onClick={() => handleActive(2, "casino")}
                >
                  casino
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          

            {Active === 1 ? (
              <div className="sport-data-list">
                <select
                  className="selectionnnn"
                  // name="cars"
                  // id="cars"
                  onChange={handleSelectGame}
                >
                  {/* <option value="">Select Sports</option> */}
                  {getActiveSportListData?.data?.data &&
                  getActiveSportListData?.data?.data
                    ? getActiveSportListData?.data?.data.map((item) => (
                        <option value={item?.sportId}>
                          <img
                            src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${item?.sportId}.png`}
                            alt=""
                            className="img"
                          />
                          {item?.sportName}
                        </option>
                      ))
                    : ""}{" "}
                </select>

                <select
                  className="selectionnnn"
                  style={{marginLeft:"21px"}}
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
              <div className="casino-section">
                <select
                  className="selectionnnn"
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
                  className="selectionnnn"
                  name="cars"
                  id="cars"
                  style={{marginLeft:"14px"}}
                  onChange={handleCasinoMatch}
                >
                  <option value="">Select  Match</option>

                  {casinoList?.length &&
                    casinoList.map((item) => {
                      return (
                        <option value={item.gameId}>{item?.gameName}</option>
                      );
                    })}
                </select>
              </div>
            )}
            <DatePicker
              style={{ width: "45%", height: "41px", marginLeft: "12px"}}
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
              style={{ width: "45%", height: "41px" ,marginLeft: "12px" }}
              defaultValue={dayjs}
              format={dateFormat}
              onChange={EndDateValue}
              disabledDate={(d) =>
                !d ||
                d.isBefore(dayjs().subtract(2, "month")) ||
                d.isAfter(dayjs())
              }
            />
            {/* 
<DatePicker style={{width: "50%", height: "41px"}} onChange={handleStartDate}  />
<DatePicker style={{width: "50%", height: "41px"}} onChange={handleEndDate} /> */}

            <section class="m-t-10 betting-pnl">
              <h2 class="page-title p-l-15">Betting Profit &amp; Loss</h2>

              {/* <div class="game-date"><span>15th March 2023</span> <span class="float-right">P&amp;L: <span style={{color: "black"}}>0.00</span></span></div> */}

              {PostprofitlossmatchwiseDatatata?.data&&PostprofitlossmatchwiseDatatata?.data?.market &&
              PostprofitlossmatchwiseDatatata?.data?.market.length > 0 ? (
                PostprofitlossmatchwiseDatatata?.data?.market.map((el) => (
                  <div class="wrapper">
                    <div class="info">
                      <p class="m-b-0  game-name">
                        <a href="" class="betting-back">
                          <b>{el?.matchName}</b>
                        </a>
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
                      {
                        el?.pnl<0 ?
<p class="m-b-0 negative">
                        <b>{el?.pnl}</b>
                      </p>
                        :
<p style={{color:"green"}}>
                        <b>{el?.pnl}</b>
                      </p>

                      }
                      
                    </div>
                  </div>
                ))
              ) : (
                <div className="nodataforund">NO DATA FOUND</div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default BettingProfitLoss;
