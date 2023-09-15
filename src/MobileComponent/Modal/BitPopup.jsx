import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import {
  PostGetStackApi,
  PostPlaceBet,
} from "../../App/Features/auth/authActions";
import "./BitPopup.css";
import { clearPostPlaceBet } from "../../App/Features/auth/authSlice";

const BitPopup = ({ bitValue, datatattatattat, cssClasssss, closePopUp }) => {
  // console.log(bitValue, "llllll");
  const { PostGetStack } = useSelector((state) => state.auth);
  const [Bitvalue, setBitValue] = useState(bitValue?.Odds);
  const [updated, setUpdated] = useState(0);
  const [ConfirmBet, setConfirmBet] = useState(false);
  const [userIP, setUserIP] = useState("");

  // const [closePopUp, setClosePopUp] = useState(false);
  // const [cssClsssss, setCssClasssss] = useState("bet-modal");
  const {
    PostBetingOnGameDetail,
    PostBetingOnGameDetailLoading,
    GetGeolocationIP,
  } = useSelector((state) => state.auth);
  // console.log(bitValue?.priceValue, "bitValue?.priceValue");
  let { id } = useParams();
  const { pathname } = useLocation();

  pathname.includes("/m/home/")
  // console.log(pathname.includes("/m/home"), "kjsjdfkjshd")
  // console.log(
  //   PostBetingOnGameDetail,
  //   PostBetingOnGameDetailLoading,
  //   "PostBetingOnGameDetailLoadingPostBetingOnGameDetailLoading"
  // );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostGetStackApi());
  }, [dispatch]);
  const handleInput = (val) => {
    // console.log(val);
    setUpdated((o) => Number(o) + Number(val));
    if (bitValue?.Gamenamemeeee !== "Fancy ") {
      setConfirmBet(true);
    }

    cssClasssss("bet-modal");
    // console.log(val + updated);
    datatattatattat("true");
  };

  // const increment = () => {
  //   setBitValue(Bitvalue + 0.05);
  // };
  // const decrement = () => {
  //   setBitValue(Bitvalue - 0.05);
  // };
  // const { PostGetStack } = useSelector((state) => state.auth);
  // console.log(token);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch("https://oddsapi.247idhub.com/betfair_api/my-ip")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res?.ip, "djfsodfjskdjm")
        setUserIP(res?.ip);
      });
  }, []);

  const handleSubmit = () => {
    let data = {
      userIp: userIP,
      isFancy: bitValue?.isFancy === true ? true : false,
      isBack: bitValue?.isBack === "back" ? true : false,
      odds: bitValue?.Odds,
      stake: updated,
      name: bitValue?.cname ? bitValue?.cname : bitValue?.marketNameeee,
      // marketName: bitValue?.vl2?,
      selectionId: bitValue?.selectionId,
      priceValue:
        bitValue?.isFancy === true ? bitValue?.priceValue : bitValue?.Odds,
      marketName: bitValue?.gameName,
      placeTime: bitValue?.bettingTime,
      marketId: bitValue?.marketId,
      matchId: bitValue?.matchId || id,

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
    // if (updated !== "" && PostBetingOnGameDetail?.status===true) {

    //   closePopUp("false");
    // }
    // let userAgent = navigator.userAgent;
    // let chromeAgent = userAgent.indexOf() > -1;
    // alert(userAgent)
  };

  useEffect(() => {
    if (updated !== "" && PostBetingOnGameDetail?.status === true) {
      closePopUp("false");
    }
    return () => {
      if (updated !== "" && PostBetingOnGameDetail?.status === true) {
        dispatch(clearPostPlaceBet())
      }
    }
  }, [PostBetingOnGameDetail]);
  const handleCloseButton = () => {
    closePopUp("false");
  };
  const {
    marketId,
    isFancy,
    profits,
    Odds: odds,
    isBack,
    selectionId,
  } = bitValue;
  return (
    <div>
      <div id="__BVID__31___BV_modal_body_" className="modal-body p-0">
        <div className="place-bet">
          <div>
            <form data-vv-scope="form-placebet" className="m-b-0" style={{ marginLeft: "12px" }}>
              {PostBetingOnGameDetailLoading && (
                <div className="mani_loading">
                  <i
                    className="fa fa-circle-o-notch fa-spin loading-bet"
                    style={{ fontSize: "50px" }}
                  ></i>
                  <p className="loadinggggg">Loading...</p>{" "}
                </div>
              )}
              <div className="m-l-5 m-r-5 row d-block">
                <div className="col-12 p-t-5 p-l-5 p-r-5">
                  <h4 className="m-b-0">
                    <b>
                      {bitValue?.marketNameeee
                        ? bitValue?.marketNameeee
                        : bitValue?.gameName}
                    </b>
                    {/* <b>{bitValue?.gameName}</b> */}
                  </h4>
                </div>
              </div>
              <div className="row m-l-10 m-r-5 m-t-10">
                <div className="col-6 p-l-5 p-r-5">
                  <div
                    className="float-right d-flex"
                    style={{ marginLeft: "-19%" }}
                  >
                    <button
                      type="button"
                      className="stakeactionminus"
                      // onClick={decrement}
                      style={{ marginLeft: "31px", width: "32%" }}
                    >
                      <span className="fa fa-minus"></span>
                    </button>{" "}
                    <input
                      type="number"
                      step="0.01"
                      value={Bitvalue}
                      // value={Bitvalue.toFixed(2)}
                      // onChange={(e) =>
                      //   setBitValue({ ...Bitvalue(e.target.value) })
                      // }
                      className="stakeinput stakeinputbuuton"
                    />
                    <button
                      type="button"
                      style={{ marginLeft: "31px", width: "32%" }}
                      className="stakeactionminus incrementBtn"
                    // onClick={increment}
                    >
                      <span className="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
                <div className="col-6 p-r-5 p-l-5">
                  <input
                    name="Amount"
                    type="text"
                    maxlength="10"
                    step={1}
                    className="stakeinput stakefullinput"
                    aria-required="true"
                    aria-invalid="true"
                    onChange={(e) =>
                      !isNaN(Number(e.target.value)) &&
                      setUpdated(Number(e.target.value))
                    }
                    value={updated === "" ? 0 : updated}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="row m-t-10 m-l-5 m-r-5">
                {/* {JSON.stringify(PostGetStack)} */}
                {PostGetStack?.data &&
                  Object.values(PostGetStack?.data)
                    .slice(0, 6)
                    .map((key, value) => {
                      return (
                        <div className="col-4 p-l-5 p-r-5">
                          <div
                            className="btnVal"
                            onClick={() => handleInput(key)}
                          >
                            {/* <button
                            type="button"
                            className="btn btn-bet m-b-10  col-3" */}
                            {/* // > */}+{key}
                            {/* </button> */}
                          </div>
                        </div>
                      );
                    })}
              </div>
              <div className="row m-t-10 m-l-5 m-r-5 p-b-20">
                <div className="col-6 p-l-5 p-r-5">
                  <button
                    type="button"
                    className="btn btn-cancel"
                    onClick={handleCloseButton}
                    style={{ borderColor: "black", color: "black" }}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-6 p-l-5 p-r-5">
                  <button
                    type="button"
                    disabled={updated === 0 ? "disabled" : ""}
                    className="btn btn-submit"
                    onClick={handleSubmit}
                  >
                    Submit
                    <span className="d-block">
                      Profit:
                      {pathname.includes("/m/home") === true ?
                        updated :
                        bitValue?.isBack === "back"
                          ? bitValue.isFancy
                            ? (updated * bitValue.priceValue) / 100
                            : (marketId?.includes("BM") ||
                              marketId?.includes("bm") ||
                              marketId?.includes("Bm")
                              ? (bitValue.Odds * updated) / 100
                              : (bitValue.Odds - 1) * updated
                            ).toFixed(2)
                          : updated


                      }

                    </span>
                  </button>
                </div>
              </div>
              {/*<div className="row m-t-10 m-l-5 m-r-5">
                <div className="col-12 p-l-5 p-r-5">
                  <h5 className="float-left">Confirm Bet Before Placing</h5>
                  <div className="switchToggle float-right m-t-5">
                    <input type="checkbox" id="switch" />{" "}
                    <label for="switch"></label>
                  </div>
                </div>
              </div>*/}

              <div className={`${isFancy === true ? "fancy-none" : ""}`}>
                {marketId.includes("BM") ||
                  marketId.includes("bm") ||
                  marketId.includes("Bm")
                  ? profits.Bookmaker?.filter(
                    (item) => item?.mid === marketId
                  ).map((profit) => {
                    const newval =
                      profit.sid == selectionId
                        ? (profit?.value || 0) +
                        (((isBack === "back" ? true : false) ? 1 : -1) *
                          odds *
                          updated) /
                        100
                        : (profit?.value || 0) +
                        ((isBack === "back" ? true : false) ? -1 : 1) *
                        updated;

                    return (
                      <div
                        key={profit.value}
                        className={`row row5 mt-2 ${isFancy === true ? "fancy-none" : ""
                          }`}
                      // key={e.selectionId}
                      >
                        <div className="col-4">
                          <span>{profit.title}</span>
                        </div>
                        <div className="col-4 text-center">
                          <b>
                            <span
                              style={{ color: "black" }}
                              className={`${profit?.value > 0
                                ? "text-success"
                                : "text-danger"
                                }`}
                            >
                              {profit.value}
                            </span>
                          </b>
                        </div>
                        <div
                          className={`col-4 text-right ${newval > 0
                            ? "text-success"
                            : newval < 0
                              ? "text-danger"
                              : ""
                            }`}
                        >
                          {newval}
                        </div>
                      </div>
                    );
                  })
                  : Number(marketId)
                    ? profits.Odds[marketId]?.map((profit) => {
                      const newVal =
                        profit.sid === selectionId
                          ? profit.value +
                          ((isBack === "back" ? true : false) ? 1 : -1) *
                          (odds - 1) *
                          updated
                          : profit.value +
                          ((isBack === "back" ? true : false) ? -1 : 1) *
                          updated;
                      return (
                        <div
                          className={`row row5 mt-2 ${isFancy === true ? "fancy-none" : ""
                            }`}
                          key={profits.sid}
                        >
                          <div className="col-4">
                            <span>{profit.title}</span>
                          </div>
                          <div className="col-4 text-center text-success">
                            <b>
                              <span
                                style={{ color: "black" }}
                                className={`${profit?.value > 0
                                  ? "text-success"
                                  : "text-danger"
                                  }`}
                              >
                                {profit.value.toFixed(2)}
                              </span>
                            </b>
                          </div>
                          <div
                            className={`col-4 text-right ${newVal > 0
                              ? "text-success"
                              : newVal < 0
                                ? "text-danger"
                                : ""
                              }`}
                          >
                            {newVal.toFixed(2)}
                          </div>
                        </div>
                      );
                    })
                    : ""}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitPopup;
