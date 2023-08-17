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


const Gamepage = () => {
  const datatata = useOutletContext();
  const { state } = useLocation();
  const { pathname } = useLocation();
  const [isRight, setIsRight] = useState(false)

  let navigate = useNavigate();
  const { id } = useParams();
  let GameName = state?.id2;
  const dispatch = useDispatch();
  // console.log(id,"hellooooooooo")
  const [gamesData, setGamesData] = useState("");
  const token = localStorage.getItem("TokenId");
  // const { PostGamesById } = useSelector(state => state.auth)
  // console.log(PostGamesById,"Dushyant")
  const { Postmatchsport } = useSelector((state) => state.auth);

  // console.log(alert(id))
  useEffect(() => {
    localStorage.setItem("SportId", id);
  }, [id]);

  // useEffect(()=>{
  //   console.log("log")
  //   axios.post("http://api.a2zscore.com/admin-new-apis/enduser/active-match-sport-wise-open",{sportId:"4"})
  //   .then((response) => {
  //     console.log(response.data,"gammmmmmmiddddidididiidididididididididdii");
  //   })
  // },[])
  // console.log
  const handleGameDetails = (id, item) => {
    // console.log("home page load ")
    // console.log(item?.openDate)
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
  // console.log(gamesData, "gamesData");

  const handleInput = (vl) => {
    // console.log("das")
    // datatata(vl)
  };

  useEffect(() => {
    const activeMatchSportWise = id ? id : "4";

    axios
      .get(
        ` https://oddsapi.247idhub.com/betfair_api/active_match/${activeMatchSportWise}`
      )
      .then((res) => {
        setGamesData(res?.data?.data);
      });
  }, [id, token]);

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

  const { PostunsettledData } = useSelector((state) => state.auth);

  // console.log(PostunsettledData?.data?.dataList?.length)

  // const dispatch = useDispatch();
  // console.log(PostBetListByMatchIdData ,"dushyant")

  useEffect(() => {
    if (token) {

      let data = { betType: 1, index: 0, noOfRecords: 5, sportType: 1 };

      dispatch(Postunsettleddddd(data));
    }
  }, [token]);

  return (
    <>
      <div style={{ marginTop: "108px" }}>
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
          <div className=" numberval">

            <span>1</span>
            <span>X</span>
            <span>2</span>

          </div>
        </div>
      </div>
      <div class="" style={{ marginTop: "2px" }}>
        <div class="inplay-item__content">
          {gamesData?.length && gamesData.map((item) => {
            return (
              <div class={"inplay-item__row " + (isRight ? " " : "")} >
                <div class="inplay-item__score" onClick={() => handleGameDetails(item?.matchId, item)}>
                  <div class="score-content empty">
                    <div class="date-content"><span class="inPlayDate-content__date" style={{ color: "#247b23" }}> {moment(item?.openDate).format('D-MM-YYYY h:mm')}</span></div>
                  </div>
                </div>
                <div class="inplay-item__players box-w2"><p class="inplay-item__player" onClick={() => handleGameDetails(item?.matchId, item)}> {item?.matchName}</p>
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
            )

          })}

        </div>
      </div>


    </>
  );
};

export default Gamepage;
