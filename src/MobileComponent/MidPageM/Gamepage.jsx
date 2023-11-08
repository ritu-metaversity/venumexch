import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useOutletContext } from "react-router";
import { Link, useParams } from "react-router-dom";
import {
  Postactivematchsport,
  PostGameDetailsBySportsId,
  Postunsettleddddd,
} from "../../App/Features/auth/authActions";
import "./Gamepage.css";
import moment from "moment"
import "../MidPageM/HomePage.css";



const Gamepage = () => {
  const datatata = useOutletContext();
  const { state } = useLocation();
  const { pathname } = useLocation();
  const [isRight, setIsRight] = useState(false)

  let navigate = useNavigate();
  const { id } = useParams();
  let GameName = state?.id2;
  const dispatch = useDispatch();

  const [gamesData, setGamesData] = useState("");
  const [pnlData, setPnlData] = useState({})


  const token = localStorage.getItem("TokenId");

  const { Postmatchsport } = useSelector((state) => state.auth);
  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    localStorage.setItem("SportId", id);
  }, [id]);

  const handleGameDetails = (id, item) => {

    const token = localStorage.getItem("TokenId");

    if (token) {


      let data = {
        matchName: item?.matchName,
        openDate: item?.openDate,
        Odds: "",
      };

      datatata(data);
      navigate(`/m/gamedetail/${id}`)
    } else {
      navigate(`/m/login`)

    }
  };

  useEffect(() => {
    // if (token) {
    // 


    axios
      .get(`https://oddsapi.247idhub.com/betfair_api/active_match/v2/${id}`)
      .then((res) => {

        console.log(res?.data?.data, "sdfiwgyuvjhbnwi")

        setGamesData(res?.data?.data);

      });


    // }
  }, [id]);


  useEffect(() => {
    const get = document.getElementsByClassName("inplay-item__back")

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

  const { PostunsettledData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {

      let data = { betType: 1, index: 0, noOfRecords: 5, sportType: 1 };

      dispatch(Postunsettleddddd(data));
    }
  }, [token]);


  const handleHomeBet = () => {
  }
  return (
    <>
      <div style={{ marginTop: "115px" }}>
        {/*   {token ? <Link to="/m/mybets" className="openbetsssss" >
          <span className="open-bets-link">
            Open Bets {""}(
            {PostunsettledData?.data &&
              PostunsettledData?.data?.dataList &&
              PostunsettledData?.data?.dataList?.length }
            )
          </span>
        </Link> : ""
      }*/}




        <div className="wh1">
          <div class="page-title p-l-15 odds-name fl gam-name" >
            <span><img src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${id}.png `} alt="" width="22px" /></span>
            <span style={{ marginLeft: "4px" }}>{GameName}</span>
          </div>

          <div className="home_card_mainPage">



          </div>

        </div>
      </div>
      <div class="" style={{ marginTop: "2px" }}>
        {gamesData && gamesData?.length > 0 ? (


          gamesData.map((item, key) => (


            <div className="main_card_for_homepage" >
              {console.log(item, "hyguftgvjbk")}
              <div className="inner_card_for_homepage1" style={{ justifyContent: "space-between" }}>


                <div className="card_Name_Date_homepage" onClick={() => handleGameDetails(item?.matchId, item, gamesData[key] && gamesData[key]?.sportid)}>
                  <div className="card_Name_homepage">{item?.matchName}</div>
                  <div className="card_Date_homepage"> {item?.openDate}</div>
                </div>

                <div style={{ width: "5%", color: "#2aa033" }}>
                  {item?.inPlay === false ?
                    "" :

                    <i className="fas fa-play-circle"></i>
                  }

                </div>
              </div>

              {item?.runners?.map((item1, index) => {
                return (
                  <>
                    <div className="inner_card_for_homepage2"
                      style={{ borderBottom: "1px solid #f2f2f2" }}>
                      <div className="inner_card_nameAndpnl_homepage">
                        <span className="game_name_btxi">{item1?.runnerName}</span>
                        <span className="game_name_pnllll" style={{ color: pnlData?.[item.matchId]?.[item.marketId]?.pnlObj?.[item1.selectionId] >= 0 ? "green" : (pnlData?.[item.matchId]?.[item.marketId]?.pnlObj?.[item1.selectionId] <= 0) ? "red" : "black" }}> {pnlData?.[item.matchId]?.[item.marketId]?.pnlObj?.[item1.selectionId] || 0}</span>
                      </div>
                      {console.log(pnlData?.[item.matchId]?.[item.marketId]?.pnlObj?.[item1.selectionId], "sdfsddfsd")}
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

            </div>


          ))) : (

          <div className="noLiveMatch">No live match now</div>
        )}


      </div >


    </>
  );
};

export default Gamepage;
