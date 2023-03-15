import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext, useParams } from "react-router";
import {
  PostBetListByMatchId,
  PostGameDetailsByMI,
} from "../../App/Features/auth/authActions";
import "./GameDetails.css";
import moment from "moment";
import { Link } from "react-router-dom";

const GameDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const datatata = useOutletContext({});
  const [market, setMarket] = useState(true);
  const [openBet, setOpenBet] = useState(false);
  const [unmatchedBets, setUnmatchedBets] = useState(false);
  const [matchedBets, setmatchedBets] = useState(false);
  const [gameDetailsData, setGameDetailsData] = useState(false);
  const [previousState, setPreviousState] = useState("");

  const [onlyFancyDetails, setOnlyFancyDetails] = useState("");
  const { PostGameDetailsByMatchID, PostBetListByMatchIdData } = useSelector(
    (state) => state.auth
  );
  console.log(PostBetListByMatchIdData?.data, "PostBetListByMatchIdData?.data");
  // const {  } = useSelector((state) => state.auth);
  // const [PostBetListByMatchId,setPostBetListByMatchId ]= useState("")

  // useEffect(()=>{
  // if(PostBetListByMatchIdData?.data){
  //   setPostBetListByMatchId(PostBetListByMatchIdData)
  // }
  // },[PostBetListByMatchIdData])
  // console.log(PostBetListByMatchId,"PostBetListByMatchIdPostBetListByMatchIdPostBetListByMatchId")
  const handleUnmatched = () => {
    if (unmatchedBets === true) {
      setUnmatchedBets(false);
    } else {
      setUnmatchedBets(true);
    }
  };

  const handleBitValue = (
    price,
    name,
    color,
    gamename,
    marketId,
    item1,
    item
  ) => {
    if (price > 0) {
      datatata({
        Odds: price,
        matchname: name,
        isBack: color,
        gameName: gamename,
        marketId: marketId,
        selectionId: item?.selectionId,
        bettingTime: new Date(),
      });
    } else {
      alert("Pleace select other bit");
    }
  };
  // console.log(
  //   PostBetListByMatchIdData?.data,
  //   "PostBetListByMatchIdDataPostBetListByMatchIdData"
  // );
  const handleBitValueBookmaker = (price, name, color, item1) => {
    if (price > 0) {
      datatata({
        Odds: price,
        matchname: name,
        isBack: color,
        gameName: item1?.nation,
        marketId: item1?.mid,
        selectionId: item1?.sid,
        t: item1?.t,
        bettingTime: new Date(),
      });
    } else {
      alert("Pleace select other bit");
    }
  };
  const handleBitValueFancy = (price, name, color, trueData, item, keykey) => {
    if (price > 0) {
      datatata({
        Odds: price,
        matchname: keykey,
        isBack: color,
        isFancy: trueData,
        gameName: item?.nation,
        marketId: item?.sid,
        selectionId: item?.sid,
        t: item?.t,
        bettingTime: moment(new Date()).add(5, "hours").add(30, "months"),
      });
    } else {
      alert("Pleace select other bit");
    }
  };

  useEffect(() => {
    if (gameDetailsData) {
      const oldOdds = { ...gameDetailsData };
      setPreviousState(oldOdds);
    } else {
      setPreviousState(PostGameDetailsByMatchID);
    }
    setGameDetailsData(PostGameDetailsByMatchID);
  }, [PostGameDetailsByMatchID, gameDetailsData]);

  useEffect(() => {
    const tiem = setInterval(() => {
    dispatch(PostGameDetailsByMI(id));
    }, 2000);
    return () => clearInterval(tiem);
  }, [dispatch, id]);

  const handlematched = () => {
    if (matchedBets === true) {
      setmatchedBets(false);
    } else {
      setmatchedBets(true);
    }
  };
  const handleBet = (id) => {
    setMarket(true);
    setOpenBet(false);
  };

  // useEffect(()=>{
  // DIS
  // },[])

  const handleOpneBet = () => {
    setOpenBet(true);
    setMarket(false);
    let data = { matchId: id };
    dispatch(PostBetListByMatchId(data));
  };

  const handleNationName = (name) => {};

  useEffect(() => {
    if (gameDetailsData) {
      let arrData = gameDetailsData?.data;
      let newObject = {};

      for (let x in arrData) {
        if (x !== "Odds" && x !== "Bookmaker") {
          newObject[x] = arrData[x];
        }
      }

      const newArr = newObject;

      let FinalData = {};

      for (let x in newArr) {
        if (newArr[x].length) {
          FinalData[x] = newArr[x];
        }
      }
      setOnlyFancyDetails(FinalData);
    } else {
      // console.log("no data");
    }
  }, [gameDetailsData]);

  // useEffect(() => {
  //   // Object.keys(onlyFancyDetails).map(key=>onlyFancyDetails[key].map(item=>console.log(key,item)))
  //   // onlyFancyDetails &&onlyFancyDetails?.Fancy2.map((item)=>{
  //   //   return(
  //   //   )
  //   // })
  // }, [onlyFancyDetails]);

  // console.log(PostBetListByMatchIdData ,"dushyant")

  return (
    <div>
      <div className="main-content" style={{ minHeight: "calc(100% - 163px)" }}>
        <div className="home-page home-page-news">
          <div>
            <div className="master-flash-message">
              <div className="flash__wrapper"></div>
            </div>
            <div className="event-title">
              <div>
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/inplay-white.png"
                />
                <h4 className="m-b-0">Bengaluru Bulls vs Puneri Paltan</h4>
              </div>
              <div className="text-right">
                <span>20/11/2022 20:30</span>
              </div>
            </div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  data-toggle="tab"
                  href=""
                  class={`nav-link ${market ? "active " : ""}`}
                  onClick={() => handleBet("Market")}
                >
                  Market
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-toggle="tab"
                  href=""
                  class={`nav-link ${openBet ? "active " : ""}`}
                  onClick={handleOpneBet}
                >
                  Open Bets(0)
                </Link>
              </li>
            </ul>

            <div className="tab-content container-inner p-0">
              <div id="market" class={`tab-pane ${market ? "active " : ""}`}>
                <div
                  id="collapseTV"
                  className="collapse"
                  style={{ display: "none" }}
                ></div>

                <div className="tab-content container-inner p-0">
                  <div id="market" className="tab-pane active">
                    <div
                      id="collapseTV"
                      className="collapse"
                      style={{ display: "none" }}
                    ></div>
                    {/* <div className="scorecard m-b-10">
                      <div className="scorecard-top-container">
                        <div className="col-6 p-l-0 p-r-0">
                          <div className="scorecard-left">
                            <div className="team-block active-innings">
                              <span className="float-left m-r-5 ball-bet-img">
                                <img
                                  alt=""
                                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/bat-icon.png"
                                />
                              </span>
                              <div className="float-right" style={{paddingTop: "9px"}}>
                                <h6 className="m-b-0">PNG</h6>
                                <div className="score">
                                  <p className="m-b-0">
                                    <span>3-0 (1.1)</span>
                                  </p>
                                  <p className="m-b-0">
                                    <span>CRR 2.57</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="scorecard-right">
                            <div className="team-block">
                              <span className="float-left m-r-5 ball-bet-img" style={{marginLeft:"-16px"}}>
                                <img
                                  alt=""
                                  className="ball"
                                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/ball-icon.png"
                                />
                              </span>
                              <div className="float-right">
                                <h6 className="m-b-0">
                                  <span>NEP</span>
                                  
                                  </h6>
                                <div className="score" style={{marginLeft: "11px"}}>
                                  <p className="m-b-0">
                                    <span>0-0 (0.0)</span>
                                  </p>
                                  <p className="m-b-0"></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="scorecard-center col-6 p-l-5 p-r-5">
                          <div className="text-center">
                            <div>
                              <div>
                                <span className="ball-runs m-l-5">0</span>
                                <span className="ball-runs m-l-5">2</span>
                                <span className="ball-runs m-l-5">1</span>
                                <span className="ball-runs m-l-5">0</span>
                                <span className="ball-runs m-l-5">0</span>
                                <span className="ball-runs m-l-5">0</span>
                              </div>
                            </div>
                          </div>
                          <p className="m-b-0"></p>
                        </div>
                      </div>
                    </div> */}

                    <div className="m-b-10 main-market w-100 float-left">
                      {gameDetailsData?.data?.Odds?.map((item11, id1) => {
                        return (
                          <div>
                            <div>
                              <div className=" m-b-10 main-market w-100 float-left">
                                <div className="table-header">
                                  <div className="float-left box-w4 country-name">
                                    {/* {console.log(item11,"item11item11item11")} */}
                                    <b>{item11?.Name}</b>
                                  </div>
                                  <div className="box-w1 float-left hidden-portrait dis-none"></div>
                                  <div className="box-w1 float-left hidden-portrait dis-none"></div>
                                  <div className=" box-w1 float-left text-uppercase">
                                    Back
                                  </div>
                                  <div className=" box-w1 float-left text-uppercase">
                                    lay
                                  </div>
                                  <div className="box-w1 float-left hidden-portrait dis-none"></div>
                                  <div className="box-w1 float-left hidden-portrait ddis-none"></div>
                                </div>

                                {/* {item?.runners?.map} */}

                                <div
                                  data-title="OPEN"
                                  className="table-body"
                                  style={{ marginTop: "7px" }}
                                >
                                  {item11?.runners?.map((item1, index) => {
                                    // console.log(index);
                                    return (
                                      <>
                                        <div
                                          data-title="OPEN"
                                          className="table-row"
                                        >
                                          {/* {console.log(item11,"ittttetetetetetet")} */}
                                          <div
                                            className="float-left box-w4 country-name"
                                            onClick={handleNationName(
                                              item1?.name
                                            )}
                                          >
                                            <span className="team-name">
                                              <b>{item1?.name}</b>
                                            </span>
                                            <p className="box-w4">
                                              <span className="float-left ubook">
                                                0
                                              </span>
                                            </p>
                                          </div>

                                          {item1?.ex?.availableToBack.map(
                                            (item, id) => {
                                              // console.log(item?.size,  previousState?.data.Odds[id1].runners[index]?.ex?.availableToBack[id].size)
                                              return (
                                                <div
                                                  className={`box-w1 float-left back hidden-portrait  ${
                                                    id === 0 || id === 1
                                                      ? "dis-none"
                                                      : ""
                                                  }
                                                      ${
                                                        item?.price !==
                                                        previousState?.data
                                                          ?.Odds[id1]?.runners[
                                                          index
                                                        ]?.ex?.availableToBack[
                                                          id
                                                        ]?.price
                                                          ? "blink1"
                                                          : " "
                                                      }`}
                                                >
                                                  <button
                                                    type="button"
                                                    className="back"
                                                    onClick={() =>
                                                      handleBitValue(
                                                        item?.price,
                                                        item1?.name,
                                                        "back",
                                                        item11?.Name,
                                                        item11?.marketId,
                                                        item,
                                                        item1
                                                      )
                                                    }
                                                  >
                                                    <span className="odd">
                                                      {item?.price}
                                                    </span>{" "}
                                                    <span>
                                                      <span>{item?.size}</span>
                                                    </span>
                                                  </button>
                                                </div>
                                              );
                                            }
                                          )}
                                          {item1?.ex?.availableToLay.map(
                                            (item, id) => {
                                              // console.log(item?.price, previousState?.data.Odds[id1].runners[index]?.ex?.availableToLay[id].price)
                                              return (
                                                <div
                                                  className={`box-w1 lay float-left ${
                                                    id === 1 || id === 2
                                                      ? "dis-none"
                                                      : ""
                                                  }
                                                   ${
                                                     item?.price !==
                                                     previousState?.data?.Odds[
                                                       id1
                                                     ]?.runners[index]?.ex
                                                       ?.availableToLay[id]
                                                       ?.price
                                                       ? " blink1 "
                                                       : " "
                                                   }`}
                                                >
                                                  <button
                                                    type="button"
                                                    // className="lay"
                                                    onClick={() =>
                                                      handleBitValue(
                                                        item?.price,
                                                        item1?.name,
                                                        "lay",
                                                        item11?.Name,
                                                        item11?.marketId,
                                                        item,
                                                        item1
                                                      )
                                                    }
                                                  >
                                                    <span
                                                      className="odd"
                                                      onClick={() =>
                                                        handleBitValue(
                                                          item?.price,
                                                          item1?.name,
                                                          "lay",
                                                          item11?.Name,
                                                          item11?.marketId,
                                                          item,
                                                          item1
                                                        )
                                                      }
                                                    >
                                                      {item?.price}
                                                    </span>

                                                    <span>
                                                      <span>{item?.size}</span>
                                                    </span>
                                                  </button>
                                                </div>
                                              );
                                            }
                                          )}
                                          {/* <div className="box-w1 float-left lay hidden-portrait dis-none">
                                  <button type="button" className="lay">
                                    <span  className="odd">555</span>
                                    <span ><span >112.7K</span></span>
                                  </button>
                                </div>
                                <div className="box-w1 float-left lay hidden-portrait  dis-none">
                                  <button type="button" className="lay">
                                    <span  className="odd">666</span>
                                    <span><span >33.8K</span></span>
                                  </button>
                                </div> */}
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {/*  */}

                      {/*  */}
                      <div>
                        <div className="bm1">
                          <div className=" m-b-10 main-market w-100 float-left">
                            {/* {gameDetailsData?.map} */}

                            <div className="table-header">
                              <div
                                className="float-left box-w4 country-name"
                                style={{ marginBottom: "4px" }}
                              >
                                <b>BOOKMAKER</b>
                              </div>
                              <div className="box-w3 float-left hidden-portrait dis-none"></div>
                              <div className="box-w3 float-left hidden-portrait dis-none"></div>
                              <div className=" box-w3 float-left text-uppercase">
                                Back
                              </div>
                              <div className=" box-w3 float-left text-uppercase">
                                lay
                              </div>
                              <div className="box-w3 float-left hidden-portrait "></div>
                              <div className="box-w3 float-left hidden-portrait "></div>
                            </div>
                            {gameDetailsData?.data?.Bookmaker.map((item) => {
                              return (
                                <>
                                  <div data-title="OPEN" className="table-body">
                                    <div
                                      data-title="OPEN"
                                      className={`table-row ${
                                        item?.gstatus === "SUSPENDED"
                                          ? "suspended"
                                          : ""
                                      }`}
                                    >
                                      <div className="float-left box-w6 country-name">
                                        <span className="team-name">
                                          <b> {item?.nation}</b>
                                        </span>
                                        <p className="box-w4">
                                          <span className="float-left ubook">
                                            0
                                          </span>
                                        </p>
                                      </div>
                                      <div className="box-w3 float-left back ">
                                        <button type="button" className="back">
                                          <span className="odd">0</span>
                                          <span>
                                            <span>0</span>
                                          </span>
                                        </button>
                                      </div>
                                      <div className="box-w3 float-left back ">
                                        <button type="button" className="back">
                                          <span className="odd">0</span>
                                          <span>
                                            <span>0</span>
                                          </span>
                                        </button>
                                      </div>
                                      <div className="box-w3 float-left back ">
                                        <button
                                          type="button"
                                          className="back"
                                          onClick={() =>
                                            handleBitValueBookmaker(
                                              item?.b1,
                                              "Bookmaker",
                                              "back",
                                              item
                                            )
                                          }
                                        >
                                          <span className="odd">
                                            {item?.b1}
                                          </span>
                                          <span>
                                            <span>{item?.bs1}</span>
                                          </span>
                                        </button>
                                      </div>
                                      <div className="box-w3 float-left lay hidden-portrait">
                                        <button
                                          type="button"
                                          className="lay"
                                          onClick={() =>
                                            handleBitValueBookmaker(
                                              item?.l1,
                                              "Bookmaker",
                                              "lay",
                                              item
                                            )
                                          }
                                        >
                                          <span className="odd">
                                            {item?.l1}
                                          </span>
                                          <span>
                                            <span>{item?.ls1}</span>
                                          </span>
                                        </button>
                                      </div>
                                      <div className="box-w3 lay float-left ">
                                        <button type="button" className=" lay">
                                          <span className="odd">0</span>
                                          <span>
                                            <span>0</span>
                                          </span>
                                        </button>
                                      </div>
                                      <div className="box-w3 lay float-left ">
                                        <button type="button" className="lay">
                                          <span className="odd">0</span>{" "}
                                          <span>
                                            <span>0</span>
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/*  */}
                      <div></div>
                      <div className="fancy-market-container w-100 float-left">
                        <div className="fancy-market">
                          <div>
                            <div
                              data-v-e03c6f20=""
                              className="fancy-market-container"
                            >
                              <div data-v-e03c6f20="" className="fancy-market">
                                {/* {gameDetailsData &&gameDetailsData?.data && gameDetailsData?.data?.map((item) => {
                                        return (
                                          <> {console.log(item,"dushyant")}</> )})}
                             */}

                                <div data-v-e03c6f20="">
                                  <div data-v-e03c6f20="">
                                    {Object.keys(onlyFancyDetails).map(
                                      (key) => (
                                        <>
                                          <div
                                            data-v-e03c6f20=""
                                            className="table-header"
                                          >
                                            <div
                                              data-v-e03c6f20=""
                                              className="float-left box-w4 country-name"
                                            >
                                              <b data-v-e03c6f20="">
                                                <span data-v-e03c6f20="">
                                                  {key}
                                                </span>
                                              </b>
                                            </div>
                                            <div
                                              data-v-e03c6f20=""
                                              className="box-w1 float-left hidden-portrait dis-none"
                                            ></div>
                                            <div
                                              data-v-e03c6f20=""
                                              className="box-w1 float-left hidden-portrait dis-none"
                                            ></div>
                                            <div
                                              data-v-e03c6f20=""
                                              className=" box-w1 float-left text-uppercase"
                                            >
                                              No
                                            </div>
                                            <div
                                              data-v-e03c6f20=""
                                              className=" box-w1 float-left text-uppercase"
                                            >
                                              Yes
                                            </div>
                                            <div
                                              data-v-e03c6f20=""
                                              className="box-w1 float-left hidden-portrait dis-none"
                                            ></div>
                                            <div
                                              data-v-e03c6f20=""
                                              className="box-w1 float-left hidden-portrait dis-none"
                                            ></div>
                                          </div>
                                          <div
                                            data-v-e03c6f20=""
                                            className="table-body"
                                          ></div>

                                          {onlyFancyDetails[key].map((item) => (
                                            <>
                                              <div
                                                data-v-e03c6f20=""
                                                className="fancy-tripple "
                                              >
                                                <div
                                                  data-v-e03c6f20=""
                                                  data-title=""
                                                  // className="table-row"
                                                  className={`table-row ${
                                                    item?.gstatus ===
                                                    "SUSPENDED"
                                                      ? "suspended"
                                                      : ""
                                                  }`}
                                                >
                                                  <div
                                                    data-v-e03c6f20=""
                                                    className="float-left box-w4 country-name"
                                                  >
                                                    <div
                                                      data-v-e03c6f20=""
                                                      className="float-left fancy-items"
                                                    >
                                                      <span
                                                        data-v-e03c6f20=""
                                                        className="team-name"
                                                      >
                                                        <b data-v-e03c6f20="">
                                                          {item?.nation}
                                                        </b>
                                                      </span>
                                                      <p
                                                        data-v-e03c6f20=""
                                                        className="m-b-0"
                                                      >
                                                        <span
                                                          data-v-e03c6f20=""
                                                          className="float-left ubook fancy-span"
                                                        >
                                                          0
                                                        </span>
                                                      </p>
                                                    </div>
                                                    <div
                                                      data-v-e03c6f20=""
                                                      className="float-right v-m"
                                                    >
                                                      <img
                                                        src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/ladder.png"
                                                        className="float-right ladder-icon"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>
                                                  <div
                                                    data-v-e03c6f20=""
                                                    className="box-w1 float-left  lay hidden-portrait dis-none"
                                                  ></div>
                                                  <div
                                                    data-v-e03c6f20=""
                                                    className="box-w1 float-left lay  hidden-portrait dis-none"
                                                  ></div>
                                                  <div
                                                    data-v-e03c6f20=""
                                                    className="box-w1 lay float-left text-center"
                                                  >
                                                    <button
                                                      data-v-e03c6f20=""
                                                      className="lay"
                                                      onClick={() =>
                                                        handleBitValueFancy(
                                                          item?.b1,
                                                          item.nation,
                                                          "back",
                                                          true,
                                                          item,
                                                          key
                                                        )
                                                      }
                                                    >
                                                      <span
                                                        data-v-e03c6f20=""
                                                        className="odd d-block"
                                                      >
                                                        {item?.b1}
                                                      </span>{" "}
                                                      <span data-v-e03c6f20="">
                                                        {item?.bs1}
                                                      </span>
                                                    </button>
                                                  </div>
                                                  <div
                                                    data-v-e03c6f20=""
                                                    className="box-w1 back float-left text-center"
                                                  >
                                                    <button
                                                      data-v-e03c6f20=""
                                                      className="back"
                                                      onClick={() =>
                                                        handleBitValueFancy(
                                                          item?.l1,
                                                          item.nation,
                                                          "lay",
                                                          true,
                                                          item,
                                                          key
                                                        )
                                                      }
                                                    >
                                                      <span
                                                        data-v-e03c6f20=""
                                                        className="odd d-block"
                                                      >
                                                        {item?.l1}
                                                      </span>{" "}
                                                      <span data-v-e03c6f20="">
                                                        {item?.ls1}
                                                      </span>
                                                    </button>
                                                  </div>
                                                  <div
                                                    data-v-e03c6f20=""
                                                    className="box-w1 float-left back   hidden-portrait dis-none"
                                                  ></div>
                                                  <div
                                                    data-v-e03c6f20=""
                                                    className="box-w1 float-left back  hidden-portrait dis-none"
                                                  ></div>
                                                </div>

                                                <div
                                                  data-v-e03c6f20=""
                                                  className="fancy-tripple"
                                                ></div>
                                                <div
                                                  data-v-e03c6f20=""
                                                  className="min-max  text-right"
                                                >
                                                  <p
                                                    data-v-e03c6f20=""
                                                    className="m-b-0"
                                                  >
                                                    <span
                                                      data-v-e03c6f20=""
                                                      className="text-dark"
                                                    >
                                                      Min:{" "}
                                                      <span data-v-e03c6f20="">
                                                        50
                                                      </span>
                                                    </span>{" "}
                                                    <span
                                                      data-v-e03c6f20=""
                                                      className="text-dark"
                                                    >
                                                      Max:{" "}
                                                      <span data-v-e03c6f20="">
                                                        5K
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                              </div>
                                            </>
                                          ))}
                                        </>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div
                  id="open-bets"
                  className="tab-pane fade"
                  style={{ marginTop: "14px" }}
                >
                  <section className="my-bets-container" style={{marginTop: "0px"}}> 
                    <div
                      data-toggle="collapse"
                      data-target=".unmatched-bet"
                      className="toggleable-list-title m-t-10"

                    >
                      <span>Unmatched Bets</span>{" "}
                      <i className="fas fa-angle-down toggle-icon float-right m-r-10"></i>
                    </div>
                    <div className="message">You have no unmatched bet</div>
                    <div
                      data-toggle="collapse"
                      data-target=".matched-bet"
                      className="toggleable-list-title m-t-10"
                    >
                      <span>Matched Bets</span>{" "}
                      <i className="fas fa-angle-down toggle-icon float-right m-r-10"></i>
                    </div>
                    <div className="events matched-bet collapse show">
                      <div className="message">You have no matched bet</div>
                    </div>
                  </section>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div
              id="open-bets"
              class={`tab-pane fade ${openBet ? "active show " : ""}`}
            >
              {/* m-t-10 */}
              <section className="my-bets-container">
                {/* <div
                  data-toggle="collapse"
                  data-target=".unmatched-bet"
                  class={`toggleable-list-title ${
                    unmatchedBets === true ? "" : "collapsed"
                  }`}
                >
                  <span>Unmatched Bets</span>
                  <i
                    className="fas fa-angle-down toggle-icon float-right m-r-10"
                    onClick={handleUnmatched}
                  ></i>
                </div>

                <div
                  className={`events unmatched-bet ${
                    unmatchedBets === true ? "collapse " : "collapse show"
                  } `}
                >
                  <div className="message">You have no unmatched bets</div>
                </div> */}


                <div
                  data-toggle="collapse"
                  data-target=".matched-bet"
                  class={`toggleable-list-title m-t-10 ${
                    matchedBets === true ? "" : "collapsed"
                  }`}
                >
                  <span>Matched Bets</span>{" "}
                  <i
                    className="fas fa-angle-down toggle-icon float-right m-r-10"
                    onClick={handlematched}
                  ></i>
                </div>
                <div
                  class={`events matched-bet ${
                    matchedBets === true ? "collapse " : "collapse show"
                  } `}
                >
                 {/* <div className="message">You have no matched bet</div>  */}
                  
                 { PostBetListByMatchIdData?.data &&
                    Object.keys(PostBetListByMatchIdData?.data).map((key) => (
                      <>
                        {console.log(key)}

                        {PostBetListByMatchIdData?.data[key].map((item) => (
                          <>
                            <div class="events matched-bet collapse show">
                              <ul>
                                <li>
                                  <div>
                                    <Link
                                      to={`/m/gamedetail/${id}`}
                                      class="back-bet"
                                    >
                                      <u>
                                        {item?.back === true ? "BACK" : "LAY"}{" "}
                                        IU Will Win the Toss bhav(IU vs PZ)adv
                                        for {item?.amount} @ {item?.rate}{" "}
                                      </u>
                                    </Link>
                                  </div>
                                  <div class="bet-details">
                                    <div>
                                      <b>{item?.nation}</b>
                                    </div>
                                    <div>
                                      <b>{item?.marketName}</b>
                                    </div>
                                    <div>
                                      <b>Placed: </b>{" "}
                                      <span>14/03/2023 13:26</span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </>
                        ))}
                      </>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
