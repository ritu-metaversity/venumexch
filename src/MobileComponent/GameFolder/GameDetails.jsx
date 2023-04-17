import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useOutletContext, useParams } from "react-router";
import {
  PostBetListByMatchId,
  PostGameDetailsByMI,
  PostMinMaxGameDetails,
  PostUserfancypnl,
  PostUserOddPnl,
} from "../../App/Features/auth/authActions";
import "./GameDetails.css";
import moment from "moment";
import { Link, useSearchParams } from "react-router-dom";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { useMediaQuery } from "@mui/material";
import { socket } from "./socket";
import { createProfits } from "./eventUtils";
import AlertBtn from "../Alert/AlertBtn";
// import Modal from "antd/es/modal/Modal";
import PnlModals from "./PnlModals";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";

const GameDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const datatata = useOutletContext({});
  const [market, setMarket] = useState(true);
  const [openBet, setOpenBet] = useState(false);
  const [unmatchedBets, setUnmatchedBets] = useState(false);
  const [matchedBets, setmatchedBets] = useState(false);
  const [gameDetailsData, setGameDetailsData] = useState();
  const [previousState, setPreviousState] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [gameIframeId, setGameIframeId] = useState(4);
  const [msg, setMsg] = useState("");
  const [showFancyModals, setShowFancyModals] = useState(false);
  const [MatchId, setMatchId] = useState();
  const [FancyID, setFancyID] = useState("");
  // console.log(showFancyModals, "FancyIDFancyID");
  const [PostMinMaxGameDetailsData, setPostMinMaxGameDetailsData] = useState(
    {}
  );
  // const { PostBetingOnGameDetail } = useSelector(
  //   (state) => state.auth
  // );
  // console.log(
  //   gameDetailsData?.data?.Bookmaker,
  //   "gameDetailsDatagameDetailsDatagameDetailsData"
  // );
  // console.log(PostMinMaxGameDetailsData,"PostMinMaxGameDetailsData")
  const [onlyFancyDetails, setOnlyFancyDetails] = useState("");
  const [onlyFancyMaxMinDetails, setOnlyFancyMaxMinDetails] = useState("");
  const [betDetails, setBetDetails] = useState({});
  // const [PostBetListByMatchIdData, setPostBetListByMatchIdData] = useState({});
  const {
    PostBetingOnGameDetail,
    PostBetingOnGameDetailLoading,
    PostUserOddPnlData,
    PostUserfancypnlata,
    PostBetListByMatchIdData,
    PostBetingOnGameDetailError,
  
    PostBetingOnGameDetailErrorrr,
  } = useSelector((state) => state.auth);
  // console.log(PostBetingOnGameDetailLoading, "PostBetingOnGameDetailLoading");
  console.log(PostBetingOnGameDetailError,PostBetingOnGameDetail, "PostBetingOnGameDetailErrorPostBetingOnGameDetailError");
  useEffect(() => {
    const iddd = localStorage.getItem("SportId");
    setGameIframeId(iddd);
  }, [localStorage]);

  const [profits, setProfits] = useState({
    Odds: {},
    Bookmaker: [],
    Fancy: [],
  });

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
    item,
    item11,
    oddsssss
  ) => {
    // console.log(item11);
    if (price > 0) {
      datatata({
        Odds: price,
        matchname: name,
        isBack: color,
        gameName: gamename,
        marketId: marketId,
        selectionId: item?.selectionId,
        bettingTime: new Date(),
        marketNameeee: item?.name,
        "Gamenamemeeee ": "odds ",
        AllBookmakerData: gameDetailsData?.data?.Bookmaker,
        matchDetails: item11,
        oddsssss: oddsssss,
        profits,
      });
      setBetDetails({
        isBack: color,
        odds: price,
        stake: 0,
        selectionId: item.selectionId,
        marketId: marketId,
        priceValue: price,
        isFancy: false,
      });
    } else {
      alert("Pleace select other bit");
    }
    // console.log(item1,"item1")
  };

  const handleBitValueBookmaker = (price, name, color, item1) => {
    // console.log(item1)
    // console.log(gameDetailsData?.data?.Bookmaker)
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
        "Gamenamemeeee ": "Bookmaker ",
        AllBookmakerData: gameDetailsData?.data?.Bookmaker,
        matchDetails: gameDetailsData?.data?.Bookmaker,
        bookmakerPnl: bookmakerPnl,
        profits,
      });
      setBetDetails({
        isBack: color,
        odds: price,
        stake: 0,
        selectionId: item1.sid,
        marketId: item1?.mid,
        priceValue: price,
        isFancy: false,
      });
    } else {
      // alert("Pleace select other bit");
    }
  };

  const handleBitValueFancy = (
    price,
    name,
    color,
    trueData,
    item,
    keykey,
    ls1
  ) => {
    if (price > 0) {
      datatata({
        Odds: price,
        matchname: keykey,
        isBack: color,
        isFancy: trueData,
        gameName: item?.nation,
        marketId: item?.sid,
        selectionId: 0,
        t: item?.t,
        bettingTime: moment(new Date()).add(5, "hours").add(30, "months"),
        "Gamenamemeeee ": "Fancy ",
        profits,
        priceValue: ls1,
      });
      setBetDetails({
        isBack: color,
        odds: price,
        stake: 0,
        selectionId: 0,
        marketId: item?.sid,
        priceValue: price,
        isFancy: false,
      });
    } else {
      alert("Pleace select other bit");
    }
  };

  useEffect(() => {
    if (Object.keys(PostMinMaxGameDetailsData).length) {
      if (gameDetailsData) {
        const oldOdds = { ...gameDetailsData };
        setPreviousState(oldOdds);
      } else {
        setPreviousState({ data: PostMinMaxGameDetailsData });
      }
      setGameDetailsData({ data: PostMinMaxGameDetailsData });
    }
  }, [PostMinMaxGameDetailsData]);

  const [OddSocketConnected, setOddSocketConnected] = useState({});

  const oddFromSocketSlower = (res) => {
    if (res) {
      setPostMinMaxGameDetailsData(res);
  
    }
  };


  useEffect(() => {
    socket.on("connect",()=>{
      setOddSocketConnected(false)
    })
    socket.on("OddsUpdated", oddFromSocketSlower);
    socket.on("JoinedSuccessfully", () => {
      setOddSocketConnected(true);
    });
  }, []);

  useEffect(() => {
    let timer = setInterval(
      () =>
        !OddSocketConnected &&
        socket.emit("JoinRoom", {
          eventId: id,
        }),
      1000
    );
    return () => {
      clearInterval(timer);
    };
  }, [OddSocketConnected, id]);


  useEffect(() => {
    OddSocketConnected && setOddSocketConnected(false);
  }, [id]);

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

  const handleOpneBet = () => {
    setOpenBet(true);
    setMarket(false);
    let data = { matchId: id };
    dispatch(PostBetListByMatchId(data));
  };


useEffect(()=>{
  let data = { matchId: id };
  dispatch(PostBetListByMatchId(data));
setInterval(()=>{
  let data = { matchId: id };
  dispatch(PostBetListByMatchId(data));
},5000)
},[id])

  const handleNationName = (name) => {};

  useEffect(() => {
    if (PostMinMaxGameDetailsData) {
      let arrData = PostMinMaxGameDetailsData;
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
      setOnlyFancyMaxMinDetails(FinalData);
    } else {
    }
  }, [PostMinMaxGameDetailsData]);
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
    }
  }, [gameDetailsData]);
  // ************* PNL DATA ODDS

  // const { lastMessage: datataatatatta } = useWebSocket(
  //   `${
  //     process.env.REACT_APP_ANKIT_SOCKET_BET
  //   }/chat/${id}/${localStorage.getItem("TokenId")}`,
  //   { shouldReconnect: (event) => true }
  // );

  useEffect(() => {
    dispatch(PostUserOddPnl({ matchId: id }));
    dispatch(PostUserfancypnl({ matchId: id }));
    // console.log("sdfldlkfjsdlfjsdfksdf");
  }, []);

  useEffect(() => {
    let timer = setInterval(
      () => {
        dispatch(PostUserOddPnl({ matchId: id }));
        console.log("345tfdswertgfds");
      },

      5000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    let timer = setInterval(
      () => dispatch(PostUserfancypnl({ matchId: id })),

      5000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [oddsPnl, setOddsPnl] = useState({});

  useEffect(() => {
    if (PostUserOddPnlData?.data !== null) {
      setOddsPnl(PostUserOddPnlData?.data);
    }
  }, [PostUserOddPnlData]);

  const [oddsssss, setOddsssss] = useState({});
  const [bookmakerPnl, setBookmakerPnl] = useState({});

  // ******* PNL DATA FANCY

  const [FancyPNL, setFacnyPNL] = useState({});

  useEffect(() => {
    if (PostUserfancypnlata) {
      if (PostUserfancypnlata) {

        setFacnyPNL(PostUserfancypnlata);
      } else {

        setFacnyPNL(null);
      }
    }
  }, [PostUserfancypnlata]);


  useEffect(() => {

    createProfits({
      fancyOdds: gameDetailsData?.data,
      fancyPnl: setFacnyPNL?.data,
      betDetails,
      rechange: true,
      pnl: oddsPnl,
      setProfits,
    });
  }, [
    betDetails?.stake,
    oddsPnl,
    FancyPNL,
    gameDetailsData?.data?.Odds && gameDetailsData?.data?.Odds[0]?.marketId,
    betDetails?.marketId,
    betDetails?.selectionId,
  ]);

  useEffect(() => {
    if (PostBetingOnGameDetail?.status === true) {
      setMsg(PostBetingOnGameDetail?.message);

    }
  }, [PostBetingOnGameDetail]);

  console.log(msg, "msg")


  const handleCloseFancyModal = () => setShowFancyModals(false);

  const handleFancyBook = (sid) => {
    // console.log("hekemlldfnsdlnfls");
    // e.preventDefault();
    setShowFancyModals(true);

    setFancyID(sid);
  };


  // console.log(PostBetingOnGameDetail, "PostBetingOnGameDetailPostBetingOnGameDetailPostBetingOnGameDetail")

  return (
    <div>
      {/* {true?.status === true ? (
        <div className="alertPopup">
          <AlertBtn val={msg} />
        </div>
      ) : ""} */}

      {/* {isLoading===true?(<div className="mani-loading">
          <i className="fa fa-circle-o-notch fa-spin loading" style={{fontSize:"50px"}}></i> 
          <p className="loading-text">Loading...</p> </div>)
:
         */}

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
                <h4 className="m-b-0">
                  {gameDetailsData?.data?.Odds &&
                    gameDetailsData?.data?.Odds[0]?.runners[0]?.name}{" "}
                  VS{" "}
                  {gameDetailsData?.data?.Odds &&
                    gameDetailsData?.data?.Odds[0]?.runners[1]?.name}
                </h4>
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
                  Open Bets  { PostBetListByMatchIdData?.data ? "( "+Object.values(PostBetListByMatchIdData?.data)?.reduce((accu,current)=>{accu+=current.length; return accu},0)+" )":""}                 </Link>
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

                    <div id="scoreboard-box">
                      <div className="scorecard scorecard-mobile">
                        <div className="score-inner">
                          <iframe
                            src={`https://internal-consumer-apis.jmk888.com/go-score/template/${gameIframeId}/${id}`}
                            width="100%"
                            height="290px"
                            className="score-card"
                            title="scorecord"
                            allowFullScreen={true}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="m-b-10 main-market w-100 float-left">
                      {gameDetailsData?.data &&
                        gameDetailsData?.data?.Odds?.map((item11, id1) => {
                          return (
                            <div>
                              <marquee className="news-line">
                                {item11?.display_message}
                              </marquee>
                              <div>
                                <div className=" m-b-10 main-market w-100 float-left">
                                  <div className="table-header">
                                    <div className="float-left box-w4 country-name">
                                      <b>{item11?.Name}</b>
                                    </div>
                                    {/* <div className="box-w1 float-left hidden-portrait dis-none"></div>
                                  <div className="box-w1 float-left hidden-portrait dis-none"></div> */}
                                    <div className=" box-w1 float-left text-uppercase">
                                      Back
                                    </div>
                                    <div className=" box-w1 float-left text-uppercase">
                                      lay
                                    </div>
                                    {/* <div className="box-w1 float-left hidden-portrait dis-none"></div>
                                  <div className="box-w1 float-left hidden-portrait ddis-none"></div> */}
                                  </div>
                                  <div className="matchoddsmax">
                                    min:
                                    {PostMinMaxGameDetailsData?.Odds &&
                                      PostMinMaxGameDetailsData?.Odds[id1]
                                        ?.maxBet}
                                  </div>{" "}
                                  <div className="matchoddsmin">
                                    max:
                                    {PostMinMaxGameDetailsData?.Odds &&
                                      PostMinMaxGameDetailsData?.Odds[id1]
                                        ?.minBet}
                                  </div>
                                  <div className="matchdelay">
                                    BetDelay:
                                    {PostMinMaxGameDetailsData?.Odds &&
                                      PostMinMaxGameDetailsData?.Odds[id1]
                                        ?.betDelay}
                                  </div>
                                  <div
                                    data-title="OPEN"
                                    className="table-body"
                                    style={{ marginTop: "7px" }}
                                  >
                                    {console.log(item11, "item11item11item11")}
                                    {item11?.runners?.map((item1, index) => {
                                      return (
                                        <>
                                          {
                                            // console.log(item11,"item11item11")
                                          }
                                          <div
                                            data-title="OPEN"
                                            className="table-row"
                                          >
                                            <div
                                              className="float-left box-w4 country-name"
                                              onClick={handleNationName(
                                                item1?.name
                                              )}
                                            >
                                              <span className="team-name">
                                                <b>{item1?.name}</b>
                                              </span>
                                              {/* {console.log(
                                                item1,
                                                "item1item1item1"
                                              )} */}
                                              <p className="box-w4">
                                                {/* <span className="float-left ubook" style={{color: "red"}}> */}
                                                <span
                                                  className="float-left ubook"
                                                  style={{
                                                    color:
                                                      profits.Odds[
                                                        item11?.marketId
                                                      ]?.find(
                                                        (itemPnl) =>
                                                          itemPnl.sid ==
                                                          item1.selectionId
                                                      )?.value < 0
                                                        ? "red"
                                                        : "green",
                                                  }}
                                                >
                                                  {
                                                    profits.Odds[
                                                      item11?.marketId
                                                    ]?.find(
                                                      (itemPnl) =>
                                                        itemPnl.sid ==
                                                        item1.selectionId
                                                    )?.value
                                                  }
                                                </span>
                                              </p>
                                            </div>

                                            {[...item1?.ex?.availableToBack]
                                              .reverse()
                                              .map((item, id) => {
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
                                                    {console.log(
                                                      item,
                                                      "itemitem"
                                                    )}
                                                    {/* {console.log(item1,"item1item1item1")} */}
                                                    {/* {console.log(item1,"itemitemitem")} */}

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
                                                          item1,
                                                          item11,
                                                          oddsssss
                                                        )
                                                      }
                                                    >
                                                      <span className="odd">
                                                        {item?.price}
                                                      </span>{" "}
                                                      <span>
                                                        <span>
                                                          {item?.size}
                                                        </span>
                                                      </span>
                                                    </button>
                                                  </div>
                                                );
                                              })}
                                            {[...item1?.ex?.availableToLay]
                                              .reverse()
                                              .map((item, id) => {
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
                                                        <span>
                                                          {item?.size}
                                                        </span>
                                                      </span>
                                                    </button>
                                                  </div>
                                                );
                                              })}
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

                      {gameDetailsData?.data?.Bookmaker?.length > 0 ? (
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
                                {/* <div className="box-w3 float-left hidden-portrait dis-none"></div>
                              <div className="box-w3 float-left hidden-portrait dis-none"></div> */}
                                <div className=" box-w3 float-left text-uppercase">
                                  Back
                                </div>
                                <div className=" box-w3 float-left text-uppercase">
                                  lay
                                </div>
                                <div className="box-w3 float-left hidden-portrait "></div>
                                <div className="box-w3 float-left hidden-portrait "></div>
                              </div>
                              <div className="max">
                                Max :
                                {PostMinMaxGameDetailsData &&
                                  PostMinMaxGameDetailsData?.Bookmaker &&
                                  PostMinMaxGameDetailsData?.Bookmaker[0]
                                    ?.maxBet}
                              </div>
                              <div className="min">
                                Min :
                                {PostMinMaxGameDetailsData &&
                                  PostMinMaxGameDetailsData?.Bookmaker &&
                                  PostMinMaxGameDetailsData?.Bookmaker[0]
                                    ?.minBet}
                              </div>
                              <div className="betDelay">
                                BetDelay:
                                {PostMinMaxGameDetailsData &&
                                  PostMinMaxGameDetailsData?.Bookmaker &&
                                  PostMinMaxGameDetailsData?.Bookmaker[0]
                                    ?.betDelay}
                              </div>
                              {/* {PostMinMaxGameDetailsData&&PostMinMaxGameDetailsData?.Bookmaker[index]
                            .map((item222)=>{ */}

                              {gameDetailsData?.data?.Bookmaker?.map(
                                (item, index) => {
                                  return (
                                    <>
                                      <div
                                        data-title="OPEN"
                                        className="table-body"
                                      >
                                        <div
                                          data-title="OPEN"
                                          className={`table-row ${
                                            item?.gstatus === "SUSPENDED"
                                            ? "suspended" :item.gstatus === "BALL RUNNING"?"ballrunning": ""
                                          }`}
                                        >
                                          <div className="float-left box-w6 country-name">
                                            <span className="team-name">
                                              <b> {item?.nation}</b>
                                              {/* {console.log(item?.sid,"item")} */}
                                            </span>
                                            <p className="box-w4">
                                              {}
                                              {profits.Bookmaker?.find(
                                                (profit) =>
                                                  profit?.sid === item.sid
                                              )?.value < 0 ? (
                                                <span
                                                  className="float-left ubook"
                                                  style={{ color: "red" }}
                                                >
                                                  {" "}
                                                  {
                                                    profits.Bookmaker?.find(
                                                      (profit) =>
                                                        profit?.sid === item.sid
                                                    )?.value
                                                  }
                                                </span>
                                              ) : (
                                                <span
                                                  className="float-left ubook"
                                                  style={{ color: "green" }}
                                                >
                                                  {" "}
                                                  {
                                                    profits.Bookmaker?.find(
                                                      (profit) =>
                                                        profit?.sid === item.sid
                                                    )?.value
                                                  }
                                                </span>
                                              )}
                                            </p>
                                          </div>
                                          <div className="box-w3 float-left back ">
                                            <button
                                              type="button"
                                              className="back"
                                            >
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
                                            >
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
                                                  item,
                                                  bookmakerPnl
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
                                            <button
                                              type="button"
                                              className=" lay"
                                            >
                                              <span className="odd">0</span>
                                              <span>
                                                <span>0</span>
                                              </span>
                                            </button>
                                          </div>
                                          <div className="box-w3 lay float-left ">
                                            <button
                                              type="button"
                                              className="lay"
                                            >
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
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <marquee className="news-line">
                        {gameDetailsData?.data &&
                          gameDetailsData?.data?.Bookmaker[0]?.display_message}
                      </marquee>

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
                                <div data-v-e03c6f20="">
                                  <div data-v-e03c6f20="">
                                    {Object.keys(onlyFancyDetails).map(
                                      (key) => (
                                        <>
                                          {/* {console.log(onlyFancyDetails)} */}
                                          {/* {console.log(key)} */}
                                          {/* {oddsssss.find((itemPnl) =>itemPnl.selection == item1.selectionId)?.pnl} */}{" "}
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
                                            {/* <div
                                              data-v-e03c6f20=""
                                              className="box-w1 float-left hidden-portrait dis-none"
                                            ></div>
                                            <div
                                              data-v-e03c6f20=""
                                              className="box-w1 float-left hidden-portrait dis-none"
                                            ></div> */}
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
                                            {/* <div
                                              data-v-e03c6f20=""
                                              className="box-w1 float-left hidden-portrait dis-none"
                                            ></div> */}
                                            {/* <div
                                              data-v-e03c6f20=""
                                              className="box-w1 float-left hidden-portrait dis-none"
                                            ></div> */}
                                          </div>
                                          <div
                                            data-v-e03c6f20=""
                                            className="table-body"
                                          ></div>
                                          {onlyFancyDetails[key].map(
                                            (item, index) => (
                                              <>
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
                                                      style={{
                                                        marginRight: "8px",
                                                      }}
                                                    >
                                                      Max :{" "}
                                                      <span data-v-e03c6f20="">
                                                        {onlyFancyMaxMinDetails &&
                                                          onlyFancyMaxMinDetails[
                                                            key
                                                          ]?.[index]?.maxBet}
                                                      </span>
                                                    </span>{" "}
                                                    <span
                                                      data-v-e03c6f20=""
                                                      className="text-dark"
                                                      style={{
                                                        marginRight: "7px",
                                                      }}
                                                    >
                                                      Min :{" "}
                                                      <span data-v-e03c6f20="">
                                                        {onlyFancyMaxMinDetails &&
                                                          onlyFancyMaxMinDetails[
                                                            key
                                                          ]?.[index]?.minBet}
                                                      </span>
                                                    </span>
                                                    <span
                                                      data-v-e03c6f20=""
                                                      className="text-dark"
                                                    >
                                                      BetDelay:{" "}
                                                      <span data-v-e03c6f20="">
                                                        {onlyFancyMaxMinDetails &&
                                                          onlyFancyMaxMinDetails[
                                                            key
                                                          ]?.[index]?.betDelay}
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <div
                                                  data-v-e03c6f20=""
                                                  className="fancy-tripple "
                                                >
                                                  <div
                                                    data-v-e03c6f20=""
                                                    data-title=""
                                                    // className="table-row"
                                                    className={`table-row ${
                                                      item?.gstatus === "SUSPENDED"
                                                      ? "suspended" :item.gstatus === "BALL RUNNING"?"ballrunning": ""
                                                    }`}
                                                  >
                                                    <div
                                                      data-v-e03c6f20=""
                                                      className="float-left box-w4 country-name"
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={(e) =>
                                                        handleFancyBook(
                                                          item.sid
                                                        )
                                                      }
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
                                                            {FancyPNL?.data ? (
                                                              FancyPNL?.data.find(
                                                                (itemPnl) =>
                                                                  itemPnl?.marketId ==
                                                                  item?.sid
                                                              )?.pnl < 0 ? (
                                                                <span
                                                                  className="float-left ubook"
                                                                  style={{
                                                                    color:
                                                                      "red",
                                                                  }}
                                                                >
                                                                  {" "}
                                                                  <>{FancyPNL?.data.find(
                                                                        (
                                                                          itemPnl
                                                                        ) =>
                                                                          itemPnl?.marketId ==
                                                                          item?.sid
                                                                      )?.pnl}
                                                                         
                                                                      <div
                                                                      data-v-e03c6f20=""
                                                                      className="float-right v-m"
                                                                    >
                                                                      <img
                                                                        alt="Black Ladder"
                                                                        src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/ladder-black.png"
                                                                        class="float-right ladder-icon"
                                                                      ></img>
                                                                    </div>
                                                                    </>
                                                                 
                                                                </span>
                                                              ) : (
                                                                <span className="float-left ubook"style={{color:"green",}}>
                                                                  {" "}
                                                                  {FancyPNL?.data
                                                                    ? <>{FancyPNL?.data.find(
                                                                        (
                                                                          itemPnl
                                                                        ) =>
                                                                          itemPnl?.marketId ==
                                                                          item?.sid
                                                                      )?.pnl}
                                                                      
                                                                      <div
                                                                      data-v-e03c6f20=""
                                                                      className="float-right v-m"
                                                                    >
                                                                      <img
                                                                        alt="Black Ladder"
                                                                        src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/ladder-black.png"
                                                                        class="float-right ladder-icon"
                                                                      ></img>
                                                                    </div></>
                                                                      
                                                                    : ""}
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
                                                                </span>
                                                              )
                                                            ) : (
                                                              ""
                                                            )}
                                                          </span>
                                                        </p>
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
                                                      {/* {console.log(item)} */}
                                                      <button
                                                        data-v-e03c6f20=""
                                                        className="lay"
                                                        onClick={() =>
                                                          handleBitValueFancy(
                                                            item?.l1,
                                                            item.nation,
                                                            "lay",
                                                            true,
                                                            item,
                                                            key,
                                                            item?.ls1
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
                                                      className="box-w1 back float-left text-center"
                                                    >
                                                      <button
                                                        data-v-e03c6f20=""
                                                        className="back"
                                                        onClick={() =>
                                                          handleBitValueFancy(
                                                            item?.b1,
                                                            item.nation,
                                                            "back",
                                                            true,
                                                            item,
                                                            key,
                                                            item?.bs1
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
                                                </div>
                                              </>
                                            )
                                          )}
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
                  <section
                    className="my-bets-container"
                    style={{ marginTop: "0px" }}
                  >
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
              class={`tab-pane fade ${openBet ? "active show " : ""} opennnnn`}
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
{console.log(PostBetListByMatchIdData?.data,"PostBetListByMatchIdData?.dataPostBetListByMatchIdData?.data")}
                  {PostBetListByMatchIdData?.data &&
                    Object.keys(PostBetListByMatchIdData?.data).map((key) => (
                      <>
                        {PostBetListByMatchIdData?.data[key].map((item) => (
                          <>
                            {console.log(key, "keykeykey")}

                            <div class="events matched-bet collapse show">
                              <ul>
                                <li>
                                  <div>
                                    {/* {console.log(item,"itemitemitemitem")} */}
                                    <Link
                                      to={`/m/gamedetail/${id}`}
                                      className={`${
                                        item?.back === false ? "lay" : "back"
                                      }-bet`}
                                    >
                                      {console.log(item,"itemitemitemedwefdsf")}
                                      <u>
                                        {item?.back === true ? "BACK" : "LAY"}{" "}
                                        {item?.nation} for {item?.amount} @{" "}
                                        {item?.rate}{" "}
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
                                      <b>
                                        Placed: ----------------------------
                                        Remark{" "}
                                      </b>{" "}
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
      {/* } */}

      <Modal
        show={showFancyModals}
        className={`sdfghjkl`}
        onHide={handleCloseFancyModal}
        style={{
          marginTop: "12px",
          marginInline: "2%",
          width: "95%",
        }}
      >
        <ModalHeader closeButton closeVariant="white">
          <ModalTitle>Run Amount</ModalTitle>
        </ModalHeader>

        <ModalBody
          style={{
            height: "calc(100vh - 100px)",
            overflowY: "scroll",
            width: "100%",
          }}
        >
          <PnlModals matchId={id} FancyID={FancyID} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GameDetails;
