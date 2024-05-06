import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useLocation, useOutletContext, useParams } from "react-router";
import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";
import {
  PostBetListByMatchId,
  PostGameDetailsByMI,
  PostMinMaxGameDetails,
  PostUserfancypnl,
  PostUserOddPnl,
  postUserWinnerPnl,
} from "../../App/Features/auth/authActions";
import "./GameDetails.css";
import moment from "moment";
import { Link, useSearchParams } from "react-router-dom";

import { socket } from "./socket";
import { createProfits } from "./eventUtils";

import PnlModals from "./PnlModals";
import Button from "react-bootstrap/Button";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import BitPopup from "../Modal/BitPopup";

const GameDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { state } = useLocation()
  console.log(state, "sdjfsuhidb")
  // const datatata = useOutletContext({});
  const [market, setMarket] = useState(true);
  const [openBet, setOpenBet] = useState(false);
  const [unmatchedBets, setUnmatchedBets] = useState(false);
  const [matchedBets, setmatchedBets] = useState(false);
  const [gameDetailsData, setGameDetailsData] = useState();
  const [previousState, setPreviousState] = useState({});
  // NEW CODE- BETPOPUP
  const [bitValue, setBitValue] = useState({});
  console.log(gameDetailsData, "fgdfedfsgdbfdafsv");
  //state for fancy for blinker After filter
  const [previousStateFancyBlinker, setPreviousStateFancyBlinker] = useState(
    {}
  );

  //   useEffect(() => {
  //   if (PostvalidatejwttokenDataError?.status === false) {
  //     localStorage.clear();
  //     navigate("/m/home");
  // window.location.replace("/");
  //   }
  // }, [PostvalidatejwttokenDataError]);

  const [gameIframeId, setGameIframeId] = useState(4);
  const [msg, setMsg] = useState("");
  const [showFancyModals, setShowFancyModals] = useState(false);
  const [MatchId, setMatchId] = useState();
  const [FancyID, setFancyID] = useState("");
  const [hovweEffect, setHoverEffect] = useState(false);

  const [PostMinMaxGameDetailsData, setPostMinMaxGameDetailsData] = useState(
    {}
  );

  const [onlyFancyDetails, setOnlyFancyDetails] = useState("");
  const [onlyFancyMaxMinDetails, setOnlyFancyMaxMinDetails] = useState("");
  const [betDetails, setBetDetails] = useState({});

  const {
    PostBetingOnGameDetail,
    PostBetingOnGameDetailLoading,
    PostUserOddPnlData,
    PostUserfancypnlata,
    PostBetListByMatchIdData,
    PostBetingOnGameDetailError,

    PostBetingOnGameDetailErrorrr,
    postUserWinnerPnlData
  } = useSelector((state) => state.auth);
  const iddd = localStorage.getItem("SportId");

  useEffect(() => {
    setGameIframeId(iddd);
  }, [iddd]);

  const [profits, setProfits] = useState({
    Odds: {},
    Bookmaker: [],
    Fancy: [],
  });

  useEffect(() => {

    if (gameDetailsData?.data?.Odds[0]?.Name.toLowerCase().includes("winner")) {
      dispatch(postUserWinnerPnl({ marketId: gameDetailsData?.data?.Odds[0]?.marketId }))
    }
  }, [gameDetailsData?.data?.Odds])

  console.log(postUserWinnerPnlData?.data, "mkjhguytfrdes")

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
    if (price > 0) {
      setBitValue({
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
      // setBitValue(datatata);

    } else {
    }
    if (price === "" || price === "undefined") {
      setShow(false);
    } else {
      setShow(true);
      // console.log(color, "sdfsdfsdfsd");
      setBetType(color);
    }
  };

  const handleBitValueBookmaker = (price, name, color, item1) => {
    if (price > 0) {
      setBitValue({
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
      // setBitValue(datatata);

    } else {
    }
    if (price === "" || price === "undefined") {
      setShow(false);
    } else {
      setShow(true);
      // console.log(color, "sdfsdfsdfsd");
      setBetType(color);
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
      setBitValue({
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
      // setBitValue(datatata);

    } else {
    }
    if (price === "" || price === "undefined") {
      setShow(false);
    } else {
      setShow(true);
      // console.log(color, "sdfsdfsdfsd");
      setBetType(color);
    }
  };

  useEffect(() => {
    if (Object.keys(PostMinMaxGameDetailsData).length) {
      setGameDetailsData((gameDetailsData) => {
        if (gameDetailsData) {
          const oldOdds = { ...gameDetailsData };
          setPreviousState(oldOdds);
        } else {
          setPreviousState({ data: PostMinMaxGameDetailsData });
        }
        return { data: PostMinMaxGameDetailsData };
      });
    }
  }, [PostMinMaxGameDetailsData]);

  const [OddSocketConnected, setOddSocketConnected] = useState({});
  const [isLoading, setIsloading] = useState(true);

  // const oddFromSocketSlower = (res) => {
  //   if (res) {
  //     setPostMinMaxGameDetailsData(res);
  //     setIsloading(false);
  //   }
  // };

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setOddSocketConnected(false);
  //   });
  //   socket.on("OddsUpdated", oddFromSocketSlower);
  //   socket.on("JoinedSuccessfully", () => {
  //     setOddSocketConnected(true);
  //   });
  // }, []);

  useEffect(()=>{
    let timer = setInterval(
      () =>
      fetch(`https://oddsapi.247idhub.com/betfair_api/fancy/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPostMinMaxGameDetailsData(res);
        setIsloading(false);
      }),
      1000
    );
    return () => {
      clearInterval(timer);
    };
    

  }, [id])
  const token = localStorage.getItem("TokenId");

  // useEffect(() => {
  //   if (token) {

  //     let timer = setInterval(
  //       () =>
  //         !OddSocketConnected &&
  //         socket.emit("JoinRoom", {
  //           eventId: id,
  //         }),
  //       1000
  //     );
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }
  // }, [token, OddSocketConnected, id]);

  // useEffect(() => {
  //   OddSocketConnected && setOddSocketConnected(false);
  // }, [id]);

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
    setHoverEffect(true)
  };

  const handleOpneBet = () => {
    setOpenBet(true);
    setMarket(false);
    setHoverEffect(true)
    let data = { matchId: id };
    dispatch(PostBetListByMatchId(data));
  };

  useEffect(() => {

    if (localStorage.getItem("PassWordType") === "old") {
    } else {
      if (token) {

        let data = { matchId: id };
        dispatch(PostBetListByMatchId(data));
        setInterval(() => {
          let data = { matchId: id };
          dispatch(PostBetListByMatchId(data));
        }, 5000);
      }
    }
  }, [id, token]);

  const handleNationName = (name) => { };

  //  For fancy odds on
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

  //  Fancy Odd   For blinker

  useEffect(() => {
    if (previousState) {
      let arrData = previousState?.data;
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
  }, [previousState]);

  useEffect(() => {
    if (previousState) {
      let arrData = previousState?.data;
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
      setPreviousStateFancyBlinker(FinalData);
    } else {
    }
  }, [previousState]);

  // ************* PNL DATA ODDS

  useEffect(() => {
    dispatch(PostUserOddPnl({ matchId: id }));
    dispatch(PostUserfancypnl({ matchId: id }));
  }, []);

  useEffect(() => {
    if (
      token
    ) {

      let timer = setInterval(
        () => {

          dispatch(PostUserOddPnl({ matchId: id }));
        },

        3000
      );
      return () => {
        clearInterval(timer);
      };
    }
  }, []);
  useEffect(() => {
    if (token) {

      let timer = setInterval(
        () => dispatch(PostUserfancypnl({ matchId: id })),

        3000
      );
      return () => {
        clearInterval(timer);
      };
    }
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

  const handleCloseFancyModal = () => setShowFancyModals(false);

  const handleFancyBook = (sid) => {
    if (
      FancyPNL &&
      FancyPNL?.data.find((itemPnl) => itemPnl?.marketId === sid)
    ) {
      setShowFancyModals(true);
      setFancyID(sid);
    } else {
    }
  };
  const [TvShow, setTvShow] = useState(false)
  const [toggleBtn1, settoggleBtn1] = useState(false)
  const [toggleBtn2, settoggleBtn2] = useState(false)

  const handleTvShow = () => {
    if (TvShow === false) {
      setTvShow(true);
      settoggleBtn1(false)
      settoggleBtn2(false)
    } else {
      setTvShow(false);
    }
  };


  const handleOne = (e) => {
    e.preventDefault();
    if (toggleBtn1 === false) {
      settoggleBtn1(true)
      setTvShow(false);
      settoggleBtn2(false)

    } else {
      settoggleBtn1(false)

    }
  };

  const handleTwo = (e) => {
    e.preventDefault();

    if (toggleBtn2 === false) {
      settoggleBtn1(false)

      settoggleBtn2(true)
      setTvShow(false);

    } else {

      settoggleBtn2(false)
    }
  };

  // BET NEW CODE - PAGE CHANGE - LAYOUT 
  const [show, setShow] = useState(false);
  const [cssClsssssssssssss, setCssClassssssssss] = useState("");
  const [BetType, setBetType] = useState("");
  const [BetTypeFooter, setBetTypeFooter] = useState(false);
  console.log(show, "showshow");
  const handleClose = () => {
    setShow(false);
  };
  // const datatata = (vl) => {
  //   setBitValue(vl);
  //   if (vl?.Odds === "" || vl?.Odds === "undefined") {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //     console.log(vl?.isBack, "sdfsdfsdfsd");
  //     setBetType(vl?.isBack);
  //   }
  // };
  const datatattatattat = (vl) => {
    // console.log(vl, "fssdfdsfs");
    setBetTypeFooter(vl);
  };
  const closePopUp = (vl) => {
    setShow(false);
  };
  const cssClasssss = (vl) => {
    // console.log(vl, "sfdfsdfsdf")
    setCssClassssssssss(vl);
  };

  return (
    <>
      <div>
        {isLoading === true ? (
          <div className=" lodddd">
            <i
              className="fa fa-circle-o-notch fa-spin loading"
              style={{ fontSize: "50px" }}
            ></i>
            <p className="loading-text">Loading...</p>{" "}
          </div>
        ) : (
          <div
            className="main-content"
            style={{ minHeight: "calc(100% - 163px)" }}
          >
            <div className="home-page home-page-news">
              <div>
                <div className="master-flash-message">
                  <div className="flash__wrapper"></div>
                </div>
                <div className="event-title">
                  <div className="tvdatatatat">
                    <div className="tv-icon" onClick={handleTvShow}>
                      <p className="fjsdlkfjld">
                        <i className="fa fa-tv"></i>
                        <img
                          alt=""
                          src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/inplay-white.png"
                        />
                      </p>
                    </div>
                    <div className="scoreCard-icon">
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon-medium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ScoreboardIcon">
                        <path d="M17.5 13.5H16v-3h1.5v3zM20 4h-3V2h-2v2H9V2H7v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5zm3.25 6.5h-1.5v-1.5h1.5V18zm0-3.5h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zm0-3.5h-1.5V6h1.5v1.5zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4z"></path>
                      </svg>
                      <div>
                        <label
                          class={`onoffbtn ${toggleBtn1 ? "active" : ""}`}
                          onClick={handleOne}>
                          <input type="checkbox" />
                        </label>
                      </div>
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon-medium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ScoreboardIcon">
                        <path d="M17.5 13.5H16v-3h1.5v3zM20 4h-3V2h-2v2H9V2H7v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5zm3.25 6.5h-1.5v-1.5h1.5V18zm0-3.5h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zm0-3.5h-1.5V6h1.5v1.5zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4z"></path>
                      </svg>
                      <div>
                        <label
                          class={`onoffbtn ${toggleBtn2 ? "active" : ""}`}
                          onClick={handleTwo}>
                          <input type="checkbox" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "10px", width: "86%" }}>


                    <h4 className="m-b-0">
                      {gameDetailsData?.data?.Odds &&
                        gameDetailsData?.data?.Odds[0]?.runners[0]?.name}{" "}
                      VS{" "}
                      {gameDetailsData?.data?.Odds &&
                        gameDetailsData?.data?.Odds[0]?.runners[1]?.name}
                    </h4>
                  </div>

                  <div className="text-right">

                    <span>{gameDetailsData?.data?.Odds[0]?.eventTime}</span>
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
                      Open Bets{" "}
                      {PostBetListByMatchIdData?.data
                        ? "( " +
                        Object.values(PostBetListByMatchIdData?.data)?.reduce(
                          (accu, current) => {
                            accu += current.length;
                            return accu;
                          },
                          0
                        ) +
                        " )"
                        : ""}{" "}
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
                        {TvShow ? (
                          <div id="scoreboard-box">
                            <div className="scorecard scorecard-mobile">
                              <div className="score-inner">
                                <iframe

                                  src={`https://100tun.online/web/${id}.html`}
                                  // src={`https://internal-consumer-apis.jmk888.com/go-score/template/${gameIframeId}/${id}`}
                                  width="100%"
                                  height="290px"
                                  className="score-card"
                                  title="scorecord"
                                  allowFullScreen={true}
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        ) : ""}
                        {toggleBtn1 === true ? <div id="scoreboard-box">
                          <div className="scorecard scorecard-mobile">
                            <div className="score-inner">
                              <iframe
                                // src={`http://15.207.182.173:3050/event/${id}`}
                                src={`https://score.247idhub.com/go-score/template/${iddd}/${id}`}
                                // src={`https://internal-consumer-apis.jmk888.com/go-score/template/${gameIframeId}/${id}`}
                                width="100%"
                                height="290px"
                                className="score-card"
                                title="scorecord"
                                allowFullScreen={true}
                              ></iframe>
                            </div>
                          </div>
                        </div> : ""}
                        {
                          toggleBtn2 === true ? <div id="scoreboard-box">
                            <div className="scorecard scorecard-mobile">
                              <div className="score-inner">
                                <iframe
                                  //  src={`http://15.207.182.173:3050/event/${id}`}

                                  // src={`https://internal-consumer-apis.jmk888.com/go-score/template/${gameIframeId}/${id}`}
                                  src={`https://score.247idhub.com/index.html/event/${id}?theme=crazy-diamond`}
                                  width="100%"
                                  height="290px"
                                  className="score-card"
                                  title="scorecord"
                                  allowFullScreen={true}
                                ></iframe>
                              </div>
                            </div>
                          </div> : ""
                        }
                        <div
                          // TNL201706678 vc
                          className=" main-market w-100 float-left "
                          style={{ marginBottom: "45px" }}
                        >
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
                                      <div className="matchoddsmax">
                                        <span className="ml">
                                          Min:{" "}
                                          {PostMinMaxGameDetailsData?.Odds &&
                                            PostMinMaxGameDetailsData?.Odds[id1]
                                              ?.minBet}
                                        </span>
                                        <span className="ms">
                                          Max:{" "}
                                          {PostMinMaxGameDetailsData?.Odds &&
                                            PostMinMaxGameDetailsData?.Odds[id1]
                                              ?.maxBet}
                                        </span>
                                        {/* <span className="ms">
                                        BetDelay:{" "}
                                        {PostMinMaxGameDetailsData?.Odds &&
                                          PostMinMaxGameDetailsData?.Odds[id1]
                                            ?.betDelay}
                                      </span> */}
                                      </div>{" "}
                                      {/* <div className="matchoddsmin">
                                      max:
                                      {PostMinMaxGameDetailsData?.Odds &&
                                        PostMinMaxGameDetailsData?.Odds[id1]
                                          ?.minBet}
                                    </div>
                                    <div className="matchdelay">
                                      
                                    </div> */}
                                      <div
                                        data-title="OPEN"
                                        className="table-body"
                                        style={{ marginTop: "7px" }}
                                      >

                                        {item11?.runners?.map((item1, index) => {
                                          return (
                                            <>

                                              <div
                                                data-title={`${item11?.status === "SUSPENDED"
                                                  ? "SUSPENDED"
                                                  : item11.status ===
                                                    "BALL RUNNING"
                                                    ? "Ball Running"
                                                    : ""
                                                  }`}
                                                className={`table-row ${item11?.status === "SUSPENDED"
                                                  ? "suspend"
                                                  : item11.status ===
                                                    "BALL RUNNING"
                                                    ? "ballrunning"
                                                    : ""
                                                  }`}
                                              >

                                                <div
                                                  className="float-left box-w4 country-name"
                                                  onClick={handleNationName(
                                                    item1?.name
                                                  )}
                                                >
                                                  <span
                                                    className="team-name"
                                                    style={{ fontSize: "14px" }}
                                                  >
                                                    <b>{item1?.name}</b>
                                                  </span>
                                                  {gameDetailsData?.data?.Odds[0]?.Name.toLowerCase().includes("winner") ?


                                                    <p className="box-w4">
                                                      <span className="float-left ubook"
                                                        style={{
                                                          color:
                                                            postUserWinnerPnlData?.data?.find((itemPnl) => itemPnl.selctionId == item1.selectionId)?.liability < 0 ? "red" : "green",
                                                        }}>
                                                        {
                                                          postUserWinnerPnlData?.data?.find((itemPnl) => itemPnl.selctionId == item1.selectionId)?.liability

                                                        }
                                                      </span>
                                                    </p>
                                                    :
                                                    <p className="box-w4">
                                                      <span className="float-left ubook"
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
                                                        }}>
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

                                                  }


                                                </div>

                                                {item1?.ex?.availableToBack
                                                  .map((item, id) => {
                                                    return (
                                                      <div
                                                        className={`box-w1 float-left back hidden-portrait  ${id === 1 || id === 2
                                                          ? "dis-none light-bg"
                                                          : ""
                                                          }
                                                       ${item?.price !==
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
                                                  })
                                                  .reverse()}
                                                {item1?.ex?.availableToLay.map(
                                                  (item, id) => {
                                                    return (
                                                      <div
                                                        className={`box-w1 lay float-left ${id === 1 || id === 2
                                                          ? "dis-none light-bg"
                                                          : ""
                                                          }
                                                   ${item?.price !==
                                                            previousState?.data?.Odds[
                                                              id1
                                                            ]?.runners[index]?.ex
                                                              ?.availableToLay[id]
                                                              ?.price
                                                            ? " blink1"
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
                                                  }
                                                )}
                                              </div >
                                            </>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}

                          {gameDetailsData?.data?.Bookmaker.filter(i => i.t !== "TOSS")?.length > 0 ? (
                            <div>
                              <div className="bm1">
                                <div className=" m-b-10 main-market w-100 float-left">
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

                                  <div className="max">
                                    <span>
                                      Min :{" "}
                                      {PostMinMaxGameDetailsData &&
                                        PostMinMaxGameDetailsData?.Bookmaker &&
                                        PostMinMaxGameDetailsData?.Bookmaker[0]
                                          ?.minBet}
                                    </span>

                                    <span className="ms">
                                      Max :{" "}
                                      {PostMinMaxGameDetailsData &&
                                        PostMinMaxGameDetailsData?.Bookmaker &&
                                        PostMinMaxGameDetailsData?.Bookmaker[0]
                                          ?.maxBet}
                                    </span>
                                  </div>

                                  {gameDetailsData?.data?.Bookmaker.filter(i => i.t !== "TOSS")?.map(

                                    (item, index) => {
                                      return (
                                        <>
                                          <div
                                            data-title="OPEN"
                                            className="table-body"
                                          >
                                            {console.log(item, "verberv")}
                                            <div
                                              data-title={`${item?.gstatus === "SUSPENDED"
                                                ? "SUSPENDED"
                                                : item.gstatus ===
                                                  "BALL RUNNING"
                                                  ? "Ball Running"
                                                  : ""
                                                }`}
                                              className={`table-row ${item?.gstatus === "SUSPENDED"
                                                ? "suspend"
                                                : item.gstatus ===
                                                  "BALL RUNNING"
                                                  ? "ballrunning"
                                                  : ""
                                                }`}
                                            >

                                              <div className="float-left box-w6 country-name">
                                                <span
                                                  className="team-name"
                                                  style={{ fontSize: "14px" }}
                                                >
                                                  <b> {item?.nation}</b>
                                                </span>
                                                <p className="box-w4">
                                                  { }
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
                                                            profit?.sid ===
                                                            item.sid
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
                                                            profit?.sid ===
                                                            item.sid
                                                        )?.value
                                                      }
                                                    </span>
                                                  )}
                                                </p>
                                              </div>
                                              <div className="box-w3 float-left back ">
                                                <button
                                                  type="button"
                                                  className="back light-bg"
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
                                                  className="back light-bg"
                                                >
                                                  <span className="odd">0</span>
                                                  <span>
                                                    <span>0</span>
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                className={`box-w3 float-left back hidden-portrait ${id === 0 || id === 1
                                                  ? "dis-none"
                                                  : ""
                                                  }${item?.b1 !==
                                                    previousState?.data?.Bookmaker.filter(i => i.t === "TOSS")[
                                                      index
                                                    ]?.b1
                                                    ? "blink1"
                                                    : " "
                                                  }`}
                                              >
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

                                              <div
                                                className={`box-w3 float-left lay hidden-portrait ${id === 0 || id === 1
                                                  ? "dis-none light-bg"
                                                  : ""
                                                  }${item?.l1 !==
                                                    previousState?.data?.Bookmaker.filter(i => i.t === "TOSS")[
                                                      index
                                                    ]?.l1
                                                    ? "blink1"
                                                    : " "
                                                  }`}
                                              >
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
                                              <div className="box-w3 la light-bg float-left ">
                                                <button
                                                  type="button"
                                                  className=" lay light-bg"
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
                                                  className="lay light-bg"
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


                              <marquee className="news-line">
                                {gameDetailsData?.data &&
                                  gameDetailsData?.data?.Bookmaker.filter(i => i.t !== "TOSS")[0]
                                    ?.display_message}
                              </marquee>
                            </div>
                          ) : (
                            ""
                          )}
                          {gameDetailsData?.data?.Bookmaker.filter(i => i.t === "TOSS")?.length > 0 ? (
                            <div>
                              <div className="bm1">
                                <div className=" m-b-10 main-market w-100 float-left">
                                  <div className="table-header">
                                    <div
                                      className="float-left box-w4 country-name"
                                      style={{ marginBottom: "4px" }}
                                    >
                                      <b> TOSS</b>
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

                                  <div className="max">
                                    <span>
                                      Min :{" "}
                                      {PostMinMaxGameDetailsData &&
                                        PostMinMaxGameDetailsData?.Bookmaker &&
                                        PostMinMaxGameDetailsData?.Bookmaker[0]
                                          ?.minBet}
                                    </span>

                                    <span className="ms">
                                      Max :{" "}
                                      {PostMinMaxGameDetailsData &&
                                        PostMinMaxGameDetailsData?.Bookmaker &&
                                        PostMinMaxGameDetailsData?.Bookmaker[0]
                                          ?.maxBet}
                                    </span>
                                  </div>

                                  {gameDetailsData?.data?.Bookmaker.filter(i => i.t === "TOSS")?.map(

                                    (item, index) => {
                                      return (
                                        <>
                                          <div
                                            data-title="OPEN"
                                            className="table-body"
                                          >
                                            {console.log(item, "verberv")}
                                            <div
                                              data-title={`${item?.gstatus === "SUSPENDED"
                                                ? "SUSPENDED"
                                                : item.gstatus ===
                                                  "BALL RUNNING"
                                                  ? "Ball Running"
                                                  : ""
                                                }`}
                                              className={`table-row ${item?.gstatus === "SUSPENDED"
                                                ? "suspend"
                                                : item.gstatus ===
                                                  "BALL RUNNING"
                                                  ? "ballrunning"
                                                  : ""
                                                }`}
                                            >

                                              <div className="float-left box-w6 country-name">
                                                <span
                                                  className="team-name"
                                                  style={{ fontSize: "14px" }}
                                                >
                                                  <b> {item?.nation}</b>
                                                </span>
                                                <p className="box-w4">
                                                  { }
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
                                                            profit?.sid ===
                                                            item.sid
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
                                                            profit?.sid ===
                                                            item.sid
                                                        )?.value
                                                      }
                                                    </span>
                                                  )}
                                                </p>
                                              </div>
                                              <div className="box-w3 float-left back ">
                                                <button
                                                  type="button"
                                                  className="back light-bg"
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
                                                  className="back light-bg"
                                                >
                                                  <span className="odd">0</span>
                                                  <span>
                                                    <span>0</span>
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                className={`box-w3 float-left back hidden-portrait ${id === 0 || id === 1
                                                  ? "dis-none"
                                                  : ""
                                                  }${item?.b1 !==
                                                    previousState?.data?.Bookmaker.filter(i => i.t === "TOSS")[
                                                      index
                                                    ]?.b1
                                                    ? "blink1"
                                                    : " "
                                                  }`}
                                              >
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

                                              <div
                                                className={`box-w3 float-left lay hidden-portrait ${id === 0 || id === 1
                                                  ? "dis-none light-bg"
                                                  : ""
                                                  }${item?.l1 !==
                                                    previousState?.data?.Bookmaker.filter(i => i.t === "TOSS")[
                                                      index
                                                    ]?.l1
                                                    ? "blink1"
                                                    : " "
                                                  }`}
                                              >
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
                                              <div className="box-w3 la light-bg float-left ">
                                                <button
                                                  type="button"
                                                  className=" lay light-bg"
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
                                                  className="lay light-bg"
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


                              <marquee className="news-line">
                                {gameDetailsData?.data &&
                                  gameDetailsData?.data?.Bookmaker.filter(i => i.t === "TOSS")[0]
                                    ?.display_message}
                              </marquee>
                            </div>
                          ) : (
                            ""
                          )}


                          <div className="fancy-market-container w-100 float-left">
                            <div className="fancy-market">
                              <div>
                                <div
                                  data-v-e03c6f20=""
                                  className="fancy-market-container"
                                >
                                  <div
                                    data-v-e03c6f20=""
                                    className="fancy-market"
                                  >
                                    <div data-v-e03c6f20="">
                                      <div data-v-e03c6f20="">
                                        {Object.keys(onlyFancyDetails).map(
                                          (key) => (
                                            <>
                                              <div
                                                data-v-e03c6f20=""
                                                className="table-header"
                                                style={{ marginBottom: "3px" }}
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
                                                  className=" box-w1 float-left text-uppercase dis-none"
                                                ></div>
                                                <div
                                                  data-v-e03c6f20=""
                                                  className=" box-w1 float-left text-uppercase dis-none"
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
                                              {onlyFancyDetails &&
                                                onlyFancyDetails[key].map(
                                                  (item, index) => (
                                                    <>
                                                      <div
                                                        data-v-e03c6f20=""
                                                        className="min-max  text-right"
                                                      >
                                                        <p
                                                          data-v-e03c6f20=""
                                                          className="minMax"
                                                        >
                                                          <span
                                                            data-v-e03c6f20=""
                                                            className="text-dark"
                                                          >
                                                            Min :{" "}
                                                            <span data-v-e03c6f20="">
                                                              {onlyFancyMaxMinDetails &&
                                                                onlyFancyMaxMinDetails[
                                                                  key
                                                                ]?.[index]
                                                                  ?.minBet}
                                                            </span>
                                                          </span>{" "}
                                                          <span
                                                            data-v-e03c6f20=""
                                                            className="text-dark"
                                                            style={{
                                                              marginRight: "7px",
                                                            }}
                                                          >
                                                            Max :{" "}
                                                            <span data-v-e03c6f20="">
                                                              {onlyFancyMaxMinDetails &&
                                                                onlyFancyMaxMinDetails[
                                                                  key
                                                                ]?.[index]
                                                                  ?.maxBet}
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
                                                          data-title={item?.gstatus}
                                                          // className="table-row"
                                                          className={`table-row ${item?.gstatus?.toLowerCase() ===
                                                            "suspended"
                                                            ? "suspend"
                                                            : item.gstatus?.toLowerCase() ===
                                                              "ball running"
                                                              ? "suspend"
                                                              : ""
                                                            }`}
                                                        // style={{ height: "37px" }}
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
                                                              style={{
                                                                width: "91%",

                                                                height:
                                                                  FancyPNL?.data &&
                                                                    FancyPNL?.data.find(
                                                                      (itemPnl) =>
                                                                        itemPnl?.marketId ==
                                                                        item?.sid
                                                                    )?.pnl
                                                                    ? ""
                                                                    : "40px",
                                                              }}
                                                            >

                                                              <span
                                                                data-v-e03c6f20=""
                                                                className="team-name"
                                                                style={{
                                                                  fontSize:
                                                                    "11px",
                                                                  marginLeft:
                                                                    "-9px",
                                                                  display: "flex",
                                                                  alignItems: "center",
                                                                  justifyContent: "flex-start",
                                                                  width: "100%"
                                                                }}
                                                              >
                                                                {
                                                                  key === "BallByBall" ?
                                                                    <span className="BallBYball_RoundData">
                                                                      {item?.ball}
                                                                      1
                                                                    </span>
                                                                    : ""
                                                                }
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
                                                                  style={{
                                                                    height:
                                                                      "14px",
                                                                  }}
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
                                                                        }}>
                                                                        {" "}
                                                                        <>
                                                                          {
                                                                            FancyPNL?.data.find(
                                                                              (
                                                                                itemPnl
                                                                              ) =>
                                                                                itemPnl?.marketId ==
                                                                                item?.sid
                                                                            )?.pnl
                                                                          }
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
                                                                      <span
                                                                        className="float-left ubook"
                                                                        style={{
                                                                          color:
                                                                            "green",
                                                                        }}
                                                                      >
                                                                        {" "}
                                                                        {FancyPNL?.data ? (
                                                                          <>
                                                                            {
                                                                              FancyPNL?.data.find(
                                                                                (
                                                                                  itemPnl
                                                                                ) =>
                                                                                  itemPnl?.marketId ==
                                                                                  item?.sid
                                                                              )
                                                                                ?.pnl
                                                                            }
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
                                                                        ) : (
                                                                          ""
                                                                        )}
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
                                                            className="box-w1 float-left back  light-bg  hidden-portrait dis-none"
                                                          ></div>
                                                          <div
                                                            data-v-e03c6f20=""
                                                            className="box-w1 float-left back  light-bg hidden-portrait dis-none"
                                                          ></div>

                                                          <div
                                                            data-v-e03c6f20=""
                                                            className={`box-w1 lay float-left text-center 
                                                          ${item?.l1 !==
                                                                previousStateFancyBlinker &&
                                                                previousStateFancyBlinker[
                                                                  key
                                                                ]?.[index]?.l1
                                                                ? "blink1"
                                                                : " "
                                                              }`}
                                                          >
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
                                                                className="odd d-block "
                                                              >
                                                                {item?.l1}
                                                              </span>{" "}
                                                              <span data-v-e03c6f20="">
                                                                {item?.ls1}
                                                              </span>
                                                            </button>
                                                          </div>

                                                          <div
                                                            // previousStateFancyBlinker
                                                            data-v-e03c6f20=""
                                                            className={`box-w1 back float-left text-center 
                                                          ${item?.b1 !==
                                                                previousStateFancyBlinker &&
                                                                previousStateFancyBlinker[
                                                                  key
                                                                ]?.[index]?.bi
                                                                ? "blink1"
                                                                : " "
                                                              }`}
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
                                                            className="box-w1 float-left  lay  light-bg hidden-portrait dis-none"
                                                          ></div>
                                                          <div
                                                            data-v-e03c6f20=""
                                                            className="box-w1 float-left lay light-bg  hidden-portrait dis-none"
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
                  </div>
                  {/* </div> */}
                </div>
                <div
                  id="open-bets"
                  class={`tab-pane fade ${openBet ? "active show " : ""
                    } opennnnn`}
                >
                  <section className="my-bets-container">
                    <div
                      data-toggle="collapse"
                      data-target=".matched-bet"
                      class={`toggleable-list-title m-t-10 ${matchedBets === true ? "" : "collapsed"
                        }`}
                    >
                      <span>Matched Bets</span>{" "}
                      <i
                        className="fas fa-angle-down toggle-icon float-right m-r-10"
                        onClick={handlematched}
                      ></i>
                    </div>
                    <div
                      class={`events matched-bet ${matchedBets === true ? "collapse " : "collapse show"
                        } `}
                    >
                      {PostBetListByMatchIdData?.data &&
                        Object.keys(PostBetListByMatchIdData?.data).map((key) => (
                          <>
                            {PostBetListByMatchIdData?.data[key].map((item) => (
                              <>
                                <div class="events matched-bet collapse show">
                                  <ul>
                                    <li>
                                      <div>
                                        <Link
                                          to={`/m/gamedetail/${id}`}
                                          className={`${item?.back === false ? "lay" : "back"
                                            }-bet`}
                                        >
                                          <u>
                                            {item?.back === true ? "BACK" : "LAY"}{" "}
                                            {item?.nation} for {item?.priveValue} @{" "}
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
                                          <b>Placed:</b>{" "}
                                          <span>{item?.betTime}</span>
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
        )}
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
          <ModalHeader
            closeButton
            closeVariant="white"
            style={{ marginTop: "9px", padding: "7px", height: "29px" }}
          >
            <ModalTitle>Run Amount</ModalTitle>
          </ModalHeader>
          <button onClick={handleCloseFancyModal} className="closebtnonpnl">
            <IoCloseCircleOutline size={25} color={"black"} />
          </button>
          { }
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

      </div >
      <Modal show={show} onHide={handleClose}>
        <div
          className={`eighteen-plus  ${BetType}-border  ${BetTypeFooter ? "" : "modal-design"
            } ${cssClsssssssssssss ? cssClsssssssssssss : ""}`}
          style={{ marginLeft: "0px" }}
        >
          <Modal.Body style={{ marginLeft: "-72% !important" }}>
            <BitPopup
              bitValue={bitValue}
              datatattatattat={datatattatattat}
              cssClasssss={cssClasssss}
              closePopUp={closePopUp}
            />
          </Modal.Body>
        </div>
      </Modal>
    </>

  );
};

export default GameDetails;
