import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useOutletContext, useParams } from 'react-router';
import { PostBetListByMatchId, Postuserfancybook, PostUserfancypnl, PostUserOddPnl, postUserWinnerPnl } from '../../App/Features/auth/authActions';
import Betslip from '../Right/Betslip'
import "./DestGamePage.css"
import { createProfits } from './eventUtils';
import { socket } from './socket';
import PnlModals from "./PnlModals";
import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";

const DestGamePage = ({ datatataProps, gamenameOpenbet }) => {

    const token = localStorage.getItem("TokenId");

    let { id } = useParams();
    // console.log(datatataProps, "valuevaluevalue")
    const { state } = useLocation()


    console.log(state, "sdjfsuhidb")

    const dispatch = useDispatch();

    const [market, setMarket] = useState(true);
    const [openBet, setOpenBet] = useState(false);
    const [unmatchedBets, setUnmatchedBets] = useState(false);
    const [matchedBets, setmatchedBets] = useState(false);
    const [gameDetailsData, setGameDetailsData] = useState();
    const [previousState, setPreviousState] = useState({});

    //state for fancy for blinker After filter
    const [previousStateFancyBlinker, setPreviousStateFancyBlinker] = useState(
        {}
    );
    // console.log(gameDetailsData, "gameDetailsDatagameDetailsData")
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


    // useEffect(() => {
    //     dispatch(Postuserfancybook({ matchId: id, fancyId: FancyID }));
    // }, [id, FancyID]);



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
        // if (token) {

        // let timer = setInterval(
        // () => {
        if (gameDetailsData?.data?.Odds[0]?.Name.toLowerCase().includes("winner")) {
            dispatch(postUserWinnerPnl({ marketId: gameDetailsData?.data?.Odds[0]?.marketId }))
        }
        //     },
        //     5000
        // );
        // return () => {
        //     clearInterval(timer);
        // };
        // }
    }, [gameDetailsData?.data?.Odds]);

    // useEffect(() => {


    //     if (gameDetailsData?.data?.Odds[0]?.Name.toLowerCase().includes("winner")) {
    //         dispatch(postUserWinnerPnl({ marketId: gameDetailsData?.data?.Odds[0]?.marketId }))
    //     }



    // }, [gameDetailsData?.data?.Odds])



    useEffect(() => {
        setGameIframeId(iddd);
    }, [iddd]);

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
        if (price > 0) {
            datatataProps({


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
                popupshow: true

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
        }
    };

    const handleBitValueBookmaker = (price, name, color, item1) => {
        if (price > 0) {
            datatataProps({
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
                popupshow: true
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
            datatataProps({
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
                popupshow: true
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
        }
    };

    useEffect(() => {
        if (Object.keys(PostMinMaxGameDetailsData).length) {
            setGameDetailsData((gameDetailsData) => {
                if (gameDetailsData) {
                    const oldOdds = { ...gameDetailsData };
                    gamenameOpenbet(gameDetailsData?.data?.Odds &&
                        gameDetailsData?.data?.Odds[0]?.matchName)
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

    const oddFromSocketSlower = (res) => {
        if (res) {
            setPostMinMaxGameDetailsData(res);
            setIsloading(false);
        }
    };

    useEffect(() => {
        socket.on("connect", () => {
            setOddSocketConnected(false);
        });
        socket.on("OddsUpdated", oddFromSocketSlower);
        socket.on("JoinedSuccessfully", () => {
            setOddSocketConnected(true);
        });
    }, []);


    useEffect(() => {
        if (token) {

            let timer = setInterval(
                () =>
                    !OddSocketConnected &&
                    socket.emit("JoinRoom", {
                        eventId: id,
                    }),
                500
            );
            return () => {
                clearInterval(timer);
            };
        }
    }, [token, OddSocketConnected, id]);

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
            dispatch(Postuserfancybook({ matchId: id, fancyId: FancyID }));

            setShowFancyModals(true);
            setFancyID(sid);
        } else {
        }
    };
    const [TvShow, setTvShow] = useState(false)
    const [toggleBtn1, settoggleBtn1] = useState(false)
    // const [toggleBtn2, settoggleBtn2] = useState(true)

    // const handleTvShow = () => {
    //     if (TvShow === false) {
    //         setTvShow(true);
    //         settoggleBtn1(false)
    //         settoggleBtn2(false)
    //     } else {
    //         setTvShow(false);
    //     }
    // };


    // const [toggleBtn1, settoggleBtn1] = useState(true);
    // const [toggleBtn1, settoggleBtn1] = useState(true);
    const [toggleBtn, settoggleBtn] = useState(false);

    const handleSwitchInput = (e) => {
        e.preventDefault();
        if (toggleBtn1 === true) {
            settoggleBtn1(false);

        } else {
            settoggleBtn1(true);
            settoggleBtn(false)
        }
    };

    const handleSwitchInput1 = (e) => {
        e.preventDefault();
        if (toggleBtn === true) {
            settoggleBtn(false);
        } else {
            settoggleBtn(true);
            settoggleBtn1(false)
        }
    };

    return (
        <>
            {isLoading === true ? (
                <div

                    style={{

                        backgroundColor: "#0000002b",
                        height: "100vh",
                        width: "800PX"
                    }}>
                    <i
                        className="fa fa-spinner fa-spin loading"
                        style={{ fontSize: "50px" }}
                    ></i>
                </div>
            ) : (
                <>
                    <div className="sports-wrapper" style={{ marginLeft: "21px" }}>
                        <div className="score_detail">
                            <h1 className='score_name'>
                                Scorecard
                            </h1>

                            <div className="">
                                <div className="scoreCard-icon desk_score score_card_update">
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon-medium css-vubbuv"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="ScoreboardIcon">
                                        <path d="M17.5 13.5H16v-3h1.5v3zM20 4h-3V2h-2v2H9V2H7v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5zm3.25 6.5h-1.5v-1.5h1.5V18zm0-3.5h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zm0-3.5h-1.5V6h1.5v1.5zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4z"></path>
                                    </svg>
                                    <div>
                                        <label
                                            className={`onoffbtn dest_onoffbtn ${toggleBtn1 ? "active2" : ""
                                                }`}
                                            onClick={handleSwitchInput}>
                                            <input type="checkbox" />
                                        </label>
                                    </div>
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon-medium css-vubbuv"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="ScoreboardIcon">
                                        <path d="M17.5 13.5H16v-3h1.5v3zM20 4h-3V2h-2v2H9V2H7v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5zm3.25 6.5h-1.5v-1.5h1.5V18zm0-3.5h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zm0-3.5h-1.5V6h1.5v1.5zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4z"></path>
                                    </svg>
                                    <div>
                                        <label
                                            className={`onoffbtn ${toggleBtn ? "active2" : ""
                                                }`}
                                            onClick={handleSwitchInput1}>
                                            <input type="checkbox" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="markets">
                            {toggleBtn ? (
                                <div id="scoreboard-box">
                                    <div className="scorecard scorecard-mobile">
                                        <div className="score-inner">
                                            <iframe
                                                // src={`http://15.207.182.173:3050/event/${id}?theme=crazy-diamond`}
                                                src={`https://score.247idhub.com/index.html/event/${id}?theme=crazy-diamond`}
                                                width="100%"
                                                className="score-card desk_score_card"
                                                title="scorecord"
                                                allowFullScreen={true}></iframe>
                                        </div>
                                    </div>
                                </div>
                            ) : toggleBtn1 ? (
                                <div id="scoreboard-box">
                                    <div className="scorecard scorecard-mobile">
                                        <div className="score-inner ">
                                            <iframe
                                                src={`https://score.247idhub.com/go-score/template/${state}/${id}`}
                                                // src={`https://internal-consumer-apis.jmk888.com/go-score/template/${gameIframeId}/${id}`}
                                                width="100%"
                                                className="score-card desk_score_card"
                                                title="scorecord"
                                                allowFullScreen={true}></iframe>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="header">
                                <h1 className='sportName'>

                                    {gameDetailsData?.data?.Odds &&
                                        gameDetailsData?.data?.Odds[0]?.matchName} <span>{gameDetailsData?.data?.Odds[0]?.eventTime}</span>
                                </h1>
                            </div>
                            {gameDetailsData?.data &&
                                gameDetailsData?.data?.Odds?.map((item11, id1) => {
                                    return (
                                        <div data-v-22b1a176="">
                                            <table data-v-22b1a176="" className="market-listing-table table bet-fair">
                                                <thead data-v-22b1a176="">
                                                    <tr data-v-22b1a176="">
                                                        <th data-v-22b1a176="" className="market-name title">
                                                            <b>{item11?.Name}</b>
                                                        </th>
                                                        <th data-v-22b1a176="" colSpan={2} />
                                                        <th data-v-22b1a176="" className="back">
                                                            <span data-v-22b1a176="">Back</span>
                                                        </th>
                                                        <th data-v-22b1a176="" className="lay">
                                                            <span data-v-22b1a176="">Lay</span>
                                                        </th>
                                                        <th data-v-22b1a176="" colSpan={2} />
                                                    </tr>
                                                </thead>


                                                <tbody data-v-22b1a176="" data-title="OPEN" className="">
                                                    {item11?.runners?.map((item1, index) => {
                                                        return (
                                                            <tr data-v-22b1a176="" data-title="OPEN" className="">
                                                                <td data-v-22b1a176="" className="dest_game">

                                                                    <div
                                                                        data-v-22b1a176=""
                                                                        className="event-name"
                                                                        style={{ color: "rgb(15, 35, 39)" }}
                                                                    >
                                                                        {item1?.name}
                                                                    </div>
                                                                    <p data-v-22b1a176="" className="m-b-0 dest_para" 
                                                                    >

                                                                        {gameDetailsData?.data?.Odds[0]?.Name.toLowerCase().includes("winner") ?
                                                                            <span
                                                                                className=" ubook"
                                                                                style={{
                                                                                    color:
                                                                                        postUserWinnerPnlData?.data?.find((itemPnl) => itemPnl.selctionId == item1.selectionId)?.liability
                                                                                            < 0
                                                                                            ? "red"
                                                                                            : "green",
                                                                                }}
                                                                            >
                                                                                {
                                                                                    postUserWinnerPnlData?.data?.find((itemPnl) => itemPnl.selctionId == item1.selectionId)?.liability

                                                                                }
                                                                            </span> :
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
                                                                            </span>}



                                                                        <span
                                                                            data-v-22b1a176=""
                                                                            style={{ display: "none", color: "black" }}
                                                                        >

                                                                            &gt;&gt; 0
                                                                        </span>
                                                                    </p>
                                                                </td>
                                                                {item1?.ex?.availableToBack
                                                                    .map((item, id) => {
                                                                        return (

                                                                            <td
                                                                                data-v-22b1a176=""
                                                                                className={`back ${id === 1 || id === 2
                                                                                    ? "unhighlighted"
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
                                                                                    }
                                                                            `}

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
                                                                                <strong data-v-22b1a176 class="odds" > {item?.price}</strong>
                                                                                <div data-v-22b1a176 class="size">
                                                                                    {item?.size}
                                                                                </div>
                                                                            </td>
                                                                        );
                                                                    })
                                                                    .reverse()}
                                                                {item1?.ex?.availableToLay.map(
                                                                    (item, id) => {
                                                                        return (
                                                                            <td data-v-22b1a176="" className={`lay ${id === 1 || id === 2
                                                                                ? "unhighlighted"
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
                                                                                }
                                                                        `}


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
                                                                                }>
                                                                                <strong data-v-22b1a176 class="odds"> {item?.price}</strong>
                                                                                <div data-v-22b1a176 class="size">
                                                                                    {item?.size}
                                                                                </div>
                                                                            </td>

                                                                        );
                                                                    }
                                                                )}
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>

                                            </table>
                                        </div>
                                    );
                                })}

                            {gameDetailsData?.data?.Bookmaker?.length > 0 ? (
                                <div className="row bookmaker-market">
                                    <div className="bm1 col-xl-12">
                                        <div>
                                            <div className="game-title m-t-5">
                                                <h5 className=" d-inline-block m-b-0">Bookmaker</h5>
                                            </div>
                                            <table className="market-listing-table table m-b-0 m-t-5">
                                                <thead>
                                                    <tr>
                                                        <th className="market-name title" /> <th colSpan={2} />
                                                        <th className="back">
                                                            <span>Back</span>
                                                        </th>
                                                        <th className="lay">
                                                            <span>Lay</span>
                                                        </th>
                                                        <th colSpan={2} />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {gameDetailsData?.data?.Bookmaker?.map(
                                                        (item, index) => {
                                                            return (

                                                                <tr
                                                                    data-title={`${item?.gstatus === "SUSPENDED"
                                                                        ? "SUSPENDED"
                                                                        : item.gstatus ===
                                                                            "BALL RUNNING"
                                                                            ? "Ball Running"
                                                                            : ""
                                                                        }`} className={`${item?.gstatus === "SUSPENDED"
                                                                            ? "suspend"
                                                                            : item.gstatus ===
                                                                                "BALL RUNNING"
                                                                                ? "ballrunning"
                                                                                : ""
                                                                            }`}
                                                                >
                                                                    <td>
                                                                        <div
                                                                            className="event-name"
                                                                            style={{ color: "rgb(15, 35, 39)" }}
                                                                        >
                                                                            {item?.nation}
                                                                        </div>
                                                                        <p className="m-b-0">
                                                                            {profits.Bookmaker?.find(
                                                                                (profit) =>
                                                                                    profit?.sid === item.sid
                                                                            )?.value < 0 ? (
                                                                                <span
                                                                                    className="float-left ubook"
                                                                                    style={{
                                                                                        color: "red",
                                                                                        marginLeft: "16px"
                                                                                    }}
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
                                                                                    style={{ color: "green", marginLeft: "16px" }}
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
                                                                            <span style={{ display: "none", color: "black" }}>

                                                                                0
                                                                            </span>
                                                                        </p>
                                                                    </td>
                                                                    <td className="back unhighlighted betting-disabled">
                                                                        <strong className="odds">0</strong>
                                                                        <div className="size">
                                                                            <span>0.0</span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="back unhighlighted betting-disabled">
                                                                        <strong className="odds">0</strong>
                                                                        <div className="size">
                                                                            <span>0.0</span>
                                                                        </div>
                                                                    </td>
                                                                    <td className={`back ${item?.b1 !==
                                                                        previousState?.data?.Bookmaker[
                                                                            index
                                                                        ]?.b1
                                                                        ? "blink1"
                                                                        : " "
                                                                        }`} onClick={() =>
                                                                            handleBitValueBookmaker(
                                                                                item?.b1,
                                                                                "Bookmaker",
                                                                                "back",
                                                                                item,
                                                                                bookmakerPnl
                                                                            )
                                                                        }>
                                                                        <strong className="odds">{item?.b1}</strong>
                                                                        <div className="size">

                                                                            <span>{item?.bs1}</span>


                                                                        </div>
                                                                    </td>
                                                                    <td className={`lay ${item?.l1 !==
                                                                        previousState?.data?.Bookmaker[
                                                                            index
                                                                        ]?.l1
                                                                        ? "blink1"
                                                                        : " "
                                                                        }`} onClick={() =>
                                                                            handleBitValueBookmaker(
                                                                                item?.l1,
                                                                                "Bookmaker",
                                                                                "lay",
                                                                                item
                                                                            )
                                                                        }>
                                                                        <strong className="odds">{item?.l1}</strong>
                                                                        <div className="size">
                                                                            <span>
                                                                                <span>{item?.ls1}</span>
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="lay unhighlighted betting-disabled">
                                                                        <strong className="odds">0</strong>
                                                                        <div className="size">
                                                                            <span>0.0</span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="lay unhighlighted betting-disabled">
                                                                        <strong className="odds">0</strong>
                                                                        <div className="size">
                                                                            <span>0.0</span>
                                                                        </div>
                                                                    </td>
                                                                </tr>


                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                            <div className="min-max text-right mt-1" style={{ borderBottom: 0 }}>
                                                <span>
                                                    Min: <span> {PostMinMaxGameDetailsData &&
                                                        PostMinMaxGameDetailsData?.Bookmaker &&
                                                        PostMinMaxGameDetailsData?.Bookmaker[0]
                                                            ?.minBet}</span>
                                                </span>
                                                {" "}
                                                <span>
                                                    Max: {PostMinMaxGameDetailsData &&
                                                        PostMinMaxGameDetailsData?.Bookmaker &&
                                                        PostMinMaxGameDetailsData?.Bookmaker[0]
                                                            ?.maxBet}<span></span>
                                                </span>
                                            </div>
                                            <div>
                                                <marquee>
                                                    {gameDetailsData?.data &&
                                                        gameDetailsData?.data?.Bookmaker[0]
                                                            ?.display_message}
                                                </marquee>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                ""
                            )}

                        </div>


                        <div className="fancy-market-container">
                            <div className="fancy-market fancy-market1">

                                <div className="row m-b-20">

                                    {Object.keys(onlyFancyDetails).map(
                                        (key) => (
                                            <div className="col-md-12">
                                                <div className="game-title m-t-5">
                                                    <h5 className=" d-inline-block m-b-0">
                                                        <span>{key}</span>
                                                    </h5>
                                                </div>
                                                <div className="table-header">
                                                    <div className="float-left country-name" />
                                                    <div className="box-w1 float-left ">No</div>
                                                    <div className=" box-w1 float-left ">Yes</div>
                                                    <div className="box-w2 float-left" />
                                                </div>

                                                {onlyFancyDetails &&
                                                    onlyFancyDetails[key].map(
                                                        (item, index) => (
                                                            <div className="table-body">


                                                                <div className="fancy-tripple fancy-tripple1">
                                                                    <div data-title={item?.gstatus}
                                                                        className={`table-row ${item?.gstatus?.toLowerCase() ===
                                                                            "suspended"
                                                                            ? "suspend"
                                                                            : item.gstatus?.toLowerCase() ===
                                                                                "ball running"
                                                                                ? "suspend"
                                                                                : ""
                                                                            }`}
                                                                    >

                                                                        <div
                                                                            className="float-left country-name"
                                                                            style={{ borderBottom: 0 }}
                                                                        >
                                                                            <p className="m-b-0 dest_para dest_width">
                                                                                {
                                                                                    key === "BallByBall" ?
                                                                                        <span className="BallBYball_RoundData">
                                                                                            {item?.ball}
                                                                                            1
                                                                                        </span>
                                                                                        : ""
                                                                                }

                                                                                <p>{item?.nation}</p>
                                                                                <p
                                                                                    data-v-e03c6f20=""
                                                                                    className="float-left ubook fancy-span"
                                                                                    style={{
                                                                                        height:
                                                                                            "14px",
                                                                                        cursor: "pointer",
                                                                                    }}

                                                                                    onClick={(e) =>
                                                                                        handleFancyBook(
                                                                                            item.sid
                                                                                        )
                                                                                    }
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
                                                                                </p>
                                                                            </p>

                                                                        </div>
                                                                        <div className={`box-w1 lay float-left text-center  ${item?.l1 !==
                                                                            previousStateFancyBlinker &&
                                                                            previousStateFancyBlinker[
                                                                                key
                                                                            ]?.[index]?.l1
                                                                            ? "blink1"
                                                                            : " "
                                                                            }`}
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
                                                                            } >
                                                                            <span className="odd d-block">{item?.l1}</span>
                                                                            <span> {item?.ls1}</span>
                                                                        </div>
                                                                        <div className={`box-w1 back float-left text-center   
                                                                ${item?.b1 !==
                                                                                previousStateFancyBlinker &&
                                                                                previousStateFancyBlinker[
                                                                                    key
                                                                                ]?.[index]?.bi
                                                                                ? "blink1"
                                                                                : " "
                                                                            }`} onClick={() =>
                                                                                handleBitValueFancy(
                                                                                    item?.b1,
                                                                                    item.nation,
                                                                                    "back",
                                                                                    true,
                                                                                    item,
                                                                                    key,
                                                                                    item?.bs1
                                                                                )
                                                                            }>
                                                                            <span className="odd d-block">  {item?.b1} </span>
                                                                            <span>{item?.bs1}</span>
                                                                        </div>
                                                                        <div
                                                                            className="box-w2 float-left text-right min-max"
                                                                            style={{ borderBottom: 0 }}
                                                                        >
                                                                            <span className="d-block">
                                                                                Min: <span>{onlyFancyMaxMinDetails &&
                                                                                    onlyFancyMaxMinDetails[
                                                                                        key
                                                                                    ]?.[index]
                                                                                        ?.minBet}</span>
                                                                            </span>
                                                                            <span className="d-block">
                                                                                Max: <span>{onlyFancyMaxMinDetails &&
                                                                                    onlyFancyMaxMinDetails[
                                                                                        key
                                                                                    ]?.[index]
                                                                                        ?.maxBet}</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                </div>



                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                        )
                                    )}
                                </div>

                            </div>

                        </div>

                    </div>
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
                            style={{ marginTop: "49px", padding: "7px", height: "29px" }}
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
                </>
            )}
        </>

    )
}

export default DestGamePage