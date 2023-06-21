import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useOutletContext } from "react-router";
import { Link, useParams } from "react-router-dom";
import {
  Postactivematchsport,
  PostGameDetailsBySportsId,
  Postunsettleddddd,
  postUserBannerList,
} from "../../App/Features/auth/authActions";
import "./HomePage.css";
import moment from "moment"
import Casinolist from "../Livecasino/Casinolist";
import UpperBanner from "./UpperBanner";


const HomePage = () => {
  const datatata = useOutletContext();
  const { state } = useLocation();
  const { pathname } = useLocation();
  const [isLoading, setIsloading] = useState(true)


  // console.log(window.location.pathname, "window.location.pathname")
  let navigate = useNavigate();
  const { id } = useParams();
  // let GameName = state?.id2;
  const dispatch = useDispatch();
  const [gamesData, setGamesData] = useState("");
  const token = localStorage.getItem("TokenId");

  useEffect(() => {
    localStorage.setItem("SportId", id);
  }, [id]);
  const { PostunsettledData, postUserBannerListData } = useSelector((state) => state.auth);

  const handleGameDetails = (id, item, sportId) => {
    const token = localStorage.getItem("TokenId");

    if (token) {

      let data = {
        matchName: item?.matchName,
        openDate: item?.openDate,
        Odds: "",
      };

      datatata(data);
      navigate(`/m/gamedetail/${id}`);
    } else {
      navigate(`/m/login`)

    }
    // console.log(sportId, "sportIdsportIdsportId")
    localStorage.setItem("SportId", sportId);

  };
  // useEffect(() => {
  //   localStorage.setItem("SportId", id);
  // }, [id]);
  useEffect(() => {
    let datata = { "type": 1 }
    dispatch(postUserBannerList(datata))
  }, [])

  // console.log(postUserBannerListData, "postUserBannerListDatapostUserBannerListData")

  useEffect(() => {
    axios
      .get("https://oddsapi.247idhub.com/betfair_api/active_match")
      .then((res) => {
        setGamesData(res?.data?.data);
        setIsloading(false)
      });
  }, [id, token]);

  useEffect(() => {
    if (token) {

      let data = { betType: 1, index: 0, noOfRecords: 5, sportType: 1 };

      dispatch(Postunsettleddddd(data));
    }
  }, [token]);

  const [isRight, setIsRight] = useState(false)

  useEffect(() => {
    const get = document.getElementsByClassName("inplay-item__back")
    // console.log(get)
    for (let i = 0; i < get.length; i++) {
      if (isRight) {

        get[i].scrollTo({ left: 480, behavior: "smooth" })
      } else {
        get[i].scrollTo({ left: 0, behavior: "smooth" })
      }
    }
    return () => {
    }
  }, [isRight])

  return (
    <>
      {" "}
      <div className="master-flash-message">
        <div className="flash__wrapper"></div>
      </div>
      {isLoading ?
        <div className=" lodddd">
          <i
            className="fa fa-circle-o-notch fa-spin loading"
            style={{ fontSize: "50px" }}
          ></i>
          <p className="loading-text">Loading...</p>{" "}
        </div> :


        <section style={{ marginTop: "0px" }}>
          {
            localStorage.getItem("TokenId") !== null ? "" : <UpperBanner />
          }


          <div
            className="in-play page-title m-t-20 m-l-15"
            style={{ paddingTop: "0px" }}
          >
            <i className="fas fa-play-circle"></i>
            {""}

            <span className="label">In Play</span>
          </div>

          <>
            {
              token ?
                <Link to="/m/mybets" className="">
                  <span className="open-bets-link" style={{ marginLeft: "7%" }}>
                    Open Bets {""}(
                    {PostunsettledData?.data &&
                      PostunsettledData?.data?.dataList &&
                      PostunsettledData?.data?.dataList?.length
                      ? PostunsettledData?.data &&
                      PostunsettledData?.data?.dataList &&
                      PostunsettledData?.data?.dataList?.length
                      : "0"}
                    )
                  </span>
                </Link> : ""
            }
          </>


          <div>
            <ul className="market-listing m-t-10 fsfsdf mt-23">
              {gamesData && gamesData?.length > 0 ? (
                Object.keys(gamesData).map((key, item) => (
                  <>

                    <div className={`row ${gamesData[key]?.name && gamesData[key]?.matchList?.length > 0 ? "" : "d-none"}`}>
                      <div className="col-md-12 wh" >
                        <div className=" odds-name fl">
                          {gamesData[key]?.name && gamesData[key]?.matchList?.length > 0 ?
                            <span className="sports-name" >
                              {console.log()}
                              {gamesData[key]?.name}
                            </span>
                            : ""}
                        </div>
                        {
                          gamesData[key]?.name && gamesData[key]?.matchList?.length > 0 ? (
                            <div className=" numberval" style={{ marginTop: "20px" }} >
                              <div className="value-num">
                                <div>1</div>
                                <div>X</div>
                                <div>2</div>
                              </div>
                            </div>
                          ) : ""
                        }

                      </div>




                    </div>

                    {gamesData &&
                      gamesData[key] &&
                      gamesData[key]?.matchList.map((item, index) => (
                        <div class="inplay-item__row homerow" >
                          {console.log(gamesData[key]?.sportid, "fsdsdfsdfsdfsdf")}
                          <div class="inplay-item__score">
                            <div class="score-content empty" onClick={() => handleGameDetails(item?.matchId, item, gamesData[key] && gamesData[key]?.sportid)}>
                              <div class="date-content"><span class="inPlayDate-content__date" style={{ color: "#247b23" }}> {moment(item?.openDate).format('D-MM-YYYY h:mm')}</span></div>
                            </div>
                          </div>
                          <div class="inplay-item__players box-w2" onClick={() => handleGameDetails(item?.matchId, item, gamesData[key] && gamesData[key]?.sportid)}><p class="inplay-item__player"> {item?.matchName}</p>
                            <div className="inplayyyy">
                              {item?.inPlay === true ? (
                                <i className="fas fa-play-circle "></i>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div onClick={() => setIsRight(o => !o)} class={"inplay-item__back" + (isRight ? " isRight" : "")}>
                            <div class="inplay-item__back-inner">
                              <div class="inplay-item__back-inner inplay-item__back-inner-left">
                                <span class="odd-button back     ">
                                  <span class="odd-button__inner odd-button__inner--centered ">
                                    <div class="odd-button__price text-center">{item?.team1Back}</div>
                                    <div class="odd-button__volume text-center">0</div>
                                  </span>
                                </span>
                                <span class="odd-button back not-active    ">
                                  <span class="odd-button__inner odd-button__inner--centered ">
                                    <div class="odd-button__price text-center">{item?.team2Back}</div>
                                    <div class="odd-button__volume text-center">0</div>
                                  </span>
                                </span>
                                <span class="odd-button back     ">
                                  <span class="odd-button__inner odd-button__inner--centered ">
                                    <div class="odd-button__price text-center">{item?.drawBack}</div>
                                    <div class="odd-button__volume text-center">0</div>
                                  </span>
                                </span>
                                <span class="odd-button lay     ">
                                  <span class="odd-button__inner odd-button__inner--centered ">
                                    <div class="odd-button__price text-center">{item?.drawLay}</div>
                                    <div class="odd-button__volume text-center">0</div>
                                  </span>
                                </span>
                                <span class="odd-button lay     ">
                                  <span class="odd-button__inner odd-button__inner--centered ">
                                    <div class="odd-button__price text-center">{item?.team1Lay}</div>
                                    <div class="odd-button__volume text-center">0</div>
                                  </span>
                                </span>
                                <span class="odd-button lay not-active    ">
                                  <span class="odd-button__inner odd-button__inner--centered ">
                                    <div class="odd-button__price text-center">{item?.team2Lay}</div>
                                    <div class="odd-button__volume text-center">0</div>

                                  </span>
                                </span>

                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                ))
              ) : (
                <div className="noLiveMatch">No live match now</div>
              )}
            </ul>
            <Casinolist />
          </div>

        </section>
      }
    </>
  );
};

export default HomePage;
