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
import Modal from "react-bootstrap/Modal";
import BitPopup from "../../MobileComponent/Modal/BitPopup";


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
  const [bitValue, setBitValue] = useState({});
  const [show, setShow] = useState(false);
  // const [userIP, setUserIP] = useState("");

  // useEffect(() => {
  //   fetch("https://oddsapi.247idhub.com/betfair_api/my-ip")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log(res?.ip, "djfsodfjskdjm")
  //       setUserIP(res?.ip);
  //     });
  // }, []);

  const handleHomeBet = (vl1, vl2, matchName, matchid, oddss, selectionId, marketId) => {
    console.log(vl1, vl2, matchName, matchid, marketId, oddss, "dfsfsdfsd")
    setBitValue({
      Odds: 2,
      matchname: matchName,
      isBack: vl2,
      isFancy: "false",
      profits: {
        Odds: {},
        Bookmaker: [],
        Fancy: [],

      },
      marketId: marketId,
      selectionId: selectionId,
      marketName: matchName,
      bettingTime: moment(new Date()).add(5, "hours").add(30, "months"),
      matchId: matchid
    });
    setShow(true)
    //   setBetDetails({
    //     isBack: color,
    //     odds: price,
    //     stake: 0,
    //     selectionId: item.selectionId,
    //     marketId: marketId,
    //     priceValue: price,
    //     isFancy: false,
    //   });
  }
  console.log(bitValue, "bitValue")
  const closePopUp = (vl) => {
    setShow(false);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleGameDetails = (id, item, sportId) => {
    const token = localStorage.getItem("TokenId");

    if (token) {
      console.log(item, "itemitemitemitem")
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

  // useEffect(() => {
  //   axios
  //     .get("https://oddsapi.247idhub.com/betfair_api/active_match")
  //     .then((res) => {
  //       setGamesData(res?.data?.data);
  //       setIsloading(false)
  //     });
  // }, [id, token]);
  useEffect(() => {
    axios
      .get("https://oddsapi.247idhub.com/betfair_api/active_match/v2")
      .then((res) => {
        console.log(res?.data?.data, "resresresresres");

        setGamesData(res?.data?.data);
        setIsloading(false)
      });
  }, [id, token]);
  console.log(gamesData, "gamesData");
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
            <div className="home_card_mainPage">

              {gamesData && gamesData?.length > 0 ? (
                Object.keys(gamesData).map((key, item) => (
                  gamesData &&
                  gamesData[key] &&
                  gamesData[key]?.matchList.map((item, index) => (
                    <div className="main_card_for_homepage">
                      {console.log(item, "itemitem")}
                      <div className="inner_card_for_homepage1">
                        <div className="gamename_card_img_inplay" style={{ width: "10%" }}>

                          <img className="card_logo_homePage" src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${gamesData[key]?.sportid}.png`} alt="das" />
                        </div>

                        <div className="card_Name_Date_homepage" onClick={() => handleGameDetails(item?.matchId, item, gamesData[key] && gamesData[key]?.sportid)}>
                          <div className="card_Name_homepage">{item?.matchName}</div>
                          <div className="card_Date_homepage"> {item?.openDate}</div>
                        </div>

                        <div style={{ width: "5%", color: "#2aa033" }}>
                          <i className="fas fa-play-circle"></i>

                        </div>
                      </div>
                      {console.log(item, "hui") || <></>}
                      {item?.runners?.map((item1, index) => {
                        return (
                          <>
                            <div className="inner_card_for_homepage2"
                              style={{ borderBottom: "1px solid #f2f2f2" }}>
                              <div className="inner_card_nameAndpnl_homepage">
                                <span className="game_name_btxi">{item1?.runnerName}</span>
                                <span className="game_name_pnllll"> 0</span>
                              </div>
                              <div className="inner_card_rate_homepage">

                                <div className="inner_card_back mobile_to_desktop_view_block mainnnnnn blurrrrrrr_back" >
                                  <span className="oddddddssss">{item1?.back3}</span>
                                </div>
                                <div className="inner_card_back mobile_to_desktop_view_block mainnnnnn blurrrrrrr_back">
                                  <span className="oddddddssss">{item1?.back2}</span>
                                </div>
                                <div className="inner_card_back mainnnnnn">
                                  <span className="oddddddssss" onClick={() => handleHomeBet(item1, "back", item?.matchName, item?.matchId, item1?.back1, item1?.selectionId, item?.marketId)}>{item1?.back1}</span>
                                </div>
                                <div className="inner_card_lay mainnnnnn">
                                  <span className="oddddddssss" onClick={() => handleHomeBet(item1, "lay", item?.matchName, item?.matchId, item1?.lay1, item1?.selectionId, item?.marketId)}>{item1?.lay1}</span>

                                </div>
                                <div className="inner_card_lay mobile_to_desktop_view_block mainnnnnn blurrrrrrr_lay">
                                  <span className="oddddddssss">{item1?.lay2}</span>

                                </div>
                                <div className="inner_card_lay mobile_to_desktop_view_block mainnnnnn blurrrrrrr_lay">
                                  <span className="oddddddssss">{item1?.lay3}</span>

                                </div>
                              </div>
                            </div>

                          </>)
                      })}

                    </div>))
                ))) : (

                <div className="noLiveMatch">No live match now</div>
              )}


            </div>

            <Casinolist />
          </div>
          <Modal show={show} onHide={handleClose}>
            <div

              style={{ marginLeft: "0px" }}>
              <Modal.Body style={{ marginLeft: "-72% !important" }}>
                {<BitPopup
                  bitValue={bitValue}


                  closePopUp={closePopUp}
                />}
              </Modal.Body>
            </div>
          </Modal>
        </section>
      }
    </>
  );
};

export default HomePage;
