import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { PostPlaceBet } from '../../App/Features/auth/authActions';
import "./BetPage.css"


const BetPage = ({ gamedetailsData }) => {
    const dispatch = useDispatch();
    let { id } = useParams();
    console.log(gamedetailsData, "asdasdasdas")
    const { PostGetStack, PostBetingOnGameDetailLoading } = useSelector((state) => state.auth);

    const [Bitvalue, setBitValue] = useState(gamedetailsData?.Odds);
    const [updated, setUpdated] = useState("");
    const [ConfirmBet, setConfirmBet] = useState(false);
    const [userIP, setUserIP] = useState("");
    console.log(gamedetailsData, "dasasdasda")


    const handleInput = (val) => {
        // console.log(val);
        setUpdated((o) => Number(o) + Number(val));
        if (gamedetailsData?.Gamenamemeeee !== "Fancy ") {
            setConfirmBet(true);
        }
    };

    const handleclear = () => {
        setUpdated("")
    }

    useEffect(() => {
        fetch("http://15.207.182.173:3333/")
            .then((res) => res.json())
            .then((res) => {
                console.log(res?.ip, "djfsodfjskdjm")
                setUserIP(res?.ip);
            });
    }, []);
    const handleSubmit = () => {
        let data = {
            userIp: userIP,
            isFancy: gamedetailsData?.isFancy === true ? true : false,
            isBack: gamedetailsData?.isBack === "back" ? true : false,
            odds: gamedetailsData?.Odds,
            stake: updated,
            name: gamedetailsData?.cname ? gamedetailsData?.cname : gamedetailsData?.marketNameeee,
            // marketName: bitValue?.vl2?,
            selectionId: gamedetailsData?.selectionId,
            priceValue:
                gamedetailsData?.isFancy === true ? gamedetailsData?.priceValue : gamedetailsData?.Odds,
            marketName: gamedetailsData?.gameName,
            placeTime: gamedetailsData?.bettingTime,
            marketId: gamedetailsData?.marketId,
            matchId: id,

            t: "",
            deviceInfo: {
                userAgent:
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                browser: "Chrome",
                device: "Macintosh",
                deviceType: "desktop",
                os: "Windows",
                os_version: "windows-10",
                browser_version: "108.0.0.0",
                orientation: "landscape",
            },
        };
        dispatch(PostPlaceBet(data));

    };
    console.log(gamedetailsData?.popupshow, "fsdfdssfdfdfsdfs")
    return (

        <div style={{ display: gamedetailsData?.popupshow === true ? "" : "none" }}>
            {PostBetingOnGameDetailLoading &&
                (
                    <div
                        className='_gameLoading'
                        style={{

                            backgroundColor: "#0000002b",
                            zIndex: "3"

                        }}>
                        <i
                            className="fa fa-spinner fa-spin loading"
                            style={{ fontSize: "50px", height: "0px", position: "absolute" }}
                        ></i>
                    </div>
                )}
            <div>
                <div className="m-t-10 main_lay">
                    <div className={`lay_div ${gamedetailsData?.isBack}`}></div>
                    <h6 className="m-b-0 p-l-10 bet-type-info">{gamedetailsData?.isBack}</h6>
                </div>
                <div className="market-list">
                    <a href="/gamedetail/32354695" className="event-name router-link-exact-active router-link-active">
                        <span>  {gamedetailsData?.marketNameeee
                            ? gamedetailsData?.marketNameeee
                            : gamedetailsData?.gameName}</span></a>
                    <div className="bets-list">
                        <div className={`bet ${gamedetailsData?.isBack}`} >
                            <span className="selected-nation">Ireland</span>
                            <div className="bet-fields m-b-10">
                                <div className="odds-field placeholder-wrapper activated">
                                    <span className="placeholder">Odds</span>
                                    <div className="step-input-wrapper">
                                        <input type="" name="" placeholder={gamedetailsData?.Odds} className="step-input" />
                                        <div className="button-wrapper">
                                            <button type="button" className="step-up">
                                                <i className="fas fa-angle-up angle-up">
                                                </i>
                                            </button>
                                            <button type="button" className="step-down">
                                                <i className="fas fa-angle-down angle-down">
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="placeholder-wrapper betslip-input">
                                    <input type="text" placeholder="Stake" name="betamount" value={updated} />
                                </div>
                                <div className="info-field">
                                    <span className="title">Profit</span>
                                    <span className="value"> {gamedetailsData?.isBack === "back"
                                        ? gamedetailsData.isFancy
                                            ? (updated * gamedetailsData.priceValue) / 100
                                            : (gamedetailsData?.marketId?.includes("BM") ||
                                                gamedetailsData?.marketId?.includes("bm") ||
                                                gamedetailsData?.marketId?.includes("Bm")
                                                ? (gamedetailsData.Odds * updated) / 100
                                                : (gamedetailsData.Odds - 1) * updated
                                            ).toFixed(2)
                                        : updated}</span></div>

                            </div>
                            <div className={`button-stakes ${gamedetailsData?.isBack}`} >

                                {PostGetStack?.data &&
                                    Object.values(PostGetStack?.data)
                                        .slice(0, 6)
                                        .map((key, value) => {
                                            return (

                                                <button type="button" className="btn btn-secondary" onClick={() => handleInput(key)}>
                                                    +{key}
                                                </button>

                                            );
                                        })}


                                <button type="button" className="btn btn-link clear_btn" style={{ float: "right" }} onClick={handleclear}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-t-10 main_lay">
                <div className={`lay_div ${gamedetailsData?.isBack}`}></div>
                <h6 className="m-b-0 p-l-10 bet-type-info">{gamedetailsData?.isBack}</h6>
            </div>
            <p className="summary-info">Liability: 0.00</p>


            <button type="submit" className="btn prima" onClick={handleSubmit}>Place Bets</button>

            {/*<label className="confirmation-checkbox"><input type="checkbox" />
                                        <span>Confirm bets before placing</span></label>*/}

        </div >

    )
}

export default BetPage