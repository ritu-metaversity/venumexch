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
            <div className="main_card_for_homepage">
              <div className="inner_card_for_homepage1">
                <div className="gamename_card_img_inplay" style={{ width: "10%" }}>
                  <img className="card_logo_homePage" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/ic_vir.png" alt="das" />
                </div>

                <div className="card_Name_Date_homepage" >
                  <div className="card_Name_homepage">Hobart Hurricanes XI v Adelaide Strikers XI</div>
                  <div className="card_Date_homepage"> 17/08/2023 12:40</div>
                </div>

                <div style={{ width: "5%", color: "#2aa033" }}>
                  <i className="fas fa-play-circle"></i>

                </div>
              </div>
              <div className="inner_card_for_homepage2">
                <div className="inner_card_nameAndpnl_homepage">
                  <span className="game_name_btxi">  BT XI</span>
                  <span className="game_name_pnllll"> 0</span>
                </div>
                <div className="inner_card_rate_homepage">
                  <div className="inner_card_lay">
                    <span>12</span>
                    <span>34</span>
                  </div>
                  <div className="inner_card_back">
                    <span>12</span>
                    <span>34</span></div>
                </div>
              </div>
              <div className="inner_card_for_homepage2">
                <div className="inner_card_nameAndpnl_homepage">
                  <span className="game_name_btxi">  BT XI</span>
                  <span className="game_name_pnllll"> 0</span>
                </div>
                <div className="inner_card_rate_homepage">
                  <span className="inner_card_lay">23</span>
                  <span className="inner_card_back">11</span>
                </div>
              </div>
            </div>
            <Casinolist />
          </div>

        </section>
      }
    </>
  );
};

export default HomePage;
