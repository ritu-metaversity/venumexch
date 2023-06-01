import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router';
import { PostBetListByMatchId, PostUserfancypnl, PostUserOddPnl } from '../../App/Features/auth/authActions';
import Betslip from '../Right/Betslip'
import "./DestGamePage.css"
import { createProfits } from './eventUtils';
import { socket } from './socket';

const DestGamePage = () => {


    let { id } = useParams();
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
    console.log(gameDetailsData, "gameDetailsDatagameDetailsData")
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
        //   if (price > 0) {
        //     datatata({
        //       Odds: price,
        //       matchname: name,
        //       isBack: color,
        //       gameName: gamename,
        //       marketId: marketId,
        //       selectionId: item?.selectionId,
        //       bettingTime: new Date(),
        //       marketNameeee: item?.name,
        //       "Gamenamemeeee ": "odds ",
        //       AllBookmakerData: gameDetailsData?.data?.Bookmaker,
        //       matchDetails: item11,
        //       oddsssss: oddsssss,
        //       profits,
        //     });
        //     setBetDetails({
        //       isBack: color,
        //       odds: price,
        //       stake: 0,
        //       selectionId: item.selectionId,
        //       marketId: marketId,
        //       priceValue: price,
        //       isFancy: false,
        //     });
        //   } else {
        //   }
    };

    const handleBitValueBookmaker = (price, name, color, item1) => {
        //   if (price > 0) {
        //     datatata({
        //       Odds: price,
        //       matchname: name,
        //       isBack: color,
        //       gameName: item1?.nation,
        //       marketId: item1?.mid,
        //       selectionId: item1?.sid,
        //       t: item1?.t,
        //       bettingTime: new Date(),
        //       "Gamenamemeeee ": "Bookmaker ",
        //       AllBookmakerData: gameDetailsData?.data?.Bookmaker,
        //       matchDetails: gameDetailsData?.data?.Bookmaker,
        //       bookmakerPnl: bookmakerPnl,
        //       profits,
        //     });
        //     setBetDetails({
        //       isBack: color,
        //       odds: price,
        //       stake: 0,
        //       selectionId: item1.sid,
        //       marketId: item1?.mid,
        //       priceValue: price,
        //       isFancy: false,
        //     });
        //   } else {
        //   }
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
        //   if (price > 0) {
        //     datatata({
        //       Odds: price,
        //       matchname: keykey,
        //       isBack: color,
        //       isFancy: trueData,
        //       gameName: item?.nation,
        //       marketId: item?.sid,
        //       selectionId: 0,
        //       t: item?.t,
        //       bettingTime: moment(new Date()).add(5, "hours").add(30, "months"),
        //       "Gamenamemeeee ": "Fancy ",
        //       profits,
        //       priceValue: ls1,
        //     });
        //     setBetDetails({
        //       isBack: color,
        //       odds: price,
        //       stake: 0,
        //       selectionId: 0,
        //       marketId: item?.sid,
        //       priceValue: price,
        //       isFancy: false,
        //     });
        //   } else {
        //   }
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
    const token = localStorage.getItem("TokenId");

    useEffect(() => {
        if (token) {

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
            setShowFancyModals(true);
            setFancyID(sid);
        } else {
        }
    };
    const [TvShow, setTvShow] = useState(false)
    const [toggleBtn1, settoggleBtn1] = useState(false)
    const [toggleBtn2, settoggleBtn2] = useState(true)

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
    return (
        <>
            <div className="sports-wrapper" style={{ marginLeft: "21px" }}>
                <div className="markets">

                    <div className="header">
                        <h1 className='sportName'>
                            {gameDetailsData?.data?.Odds &&
                                gameDetailsData?.data?.Odds[0]?.runners[0]?.name}{" "}  {" "}
                            {gameDetailsData?.data?.Odds &&
                                gameDetailsData?.data?.Odds[0]?.runners[1]?.name} <span>{gameDetailsData?.data?.Odds[0]?.eventTime}</span>
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
                                                    sdad   <b>{item11?.Name}</b>
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
                                                        <td data-v-22b1a176="">

                                                            <div
                                                                data-v-22b1a176=""
                                                                className="event-name"
                                                                style={{ color: "rgb(15, 35, 39)" }}
                                                            >
                                                                {item1?.name}
                                                            </div>
                                                            <p data-v-22b1a176="" className="m-b-0">
                                                                <span data-v-22b1a176="" style={{ color: "black" }}>
                                                                    0
                                                                </span>
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
                                                                            }`}
                                                                    >
                                                                        <strong data-v-22b1a176 class="odds"> {item?.price}</strong>
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
                                                                        }`}>
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
                                                                    <span style={{ color: "black" }}>121</span>
                                                                    <span style={{ display: "none", color: "black" }}>

                                                                        0
                                                                    </span>
                                                                </p>
                                                            </td>
                                                            <td className="back unhighlighted">
                                                                <strong className="odds">0</strong>
                                                                <div className="size">
                                                                    <span>0.0</span>
                                                                </div>
                                                            </td>
                                                            <td className="back unhighlighted">
                                                                <strong className="odds">0</strong>
                                                                <div className="size">
                                                                    <span>0.0</span>
                                                                </div>
                                                            </td>
                                                            <td className="back">
                                                                <strong className="odds">{item?.b1}</strong>
                                                                <div className="size">

                                                                    <span>{item?.bs1}</span>


                                                                </div>
                                                            </td>
                                                            <td className="lay betting-disabled">
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
                                                                className="table-row"
                                                            >
                                                                {/*   className={`table-row ${item?.gstatus?.toLowerCase() ===
                                                                "suspended"
                                                                ? "suspend"
                                                                : item.gstatus?.toLowerCase() ===
                                                                  "ball running"
                                                                  ? "suspend"
                                                                  : ""
                                                                }`}*/}
                                                                <div
                                                                    className="float-left country-name"
                                                                    style={{ borderBottom: 0 }}
                                                                >
                                                                    <p className="m-b-0">
                                                                        <span>{item?.nation}</span>
                                                                        <img
                                                                            src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/ladder.png"
                                                                            className="float-right ladder-icon m-t-5" alt=''
                                                                        />
                                                                    </p>
                                                                    <p className="m-b-0">
                                                                        <span style={{ color: "black" }}>0</span>
                                                                    </p>
                                                                </div>
                                                                <div className="box-w1 lay float-left text-center">
                                                                    <span className="odd d-block">{item?.l1}</span> <span> {item?.ls1}</span>
                                                                </div>
                                                                <div className="box-w1 back float-left text-center">
                                                                    <span className="odd d-block">  {item?.b1} </span> <span>{item?.bs1}</span>
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

        </>

    )
}

export default DestGamePage