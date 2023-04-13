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
import "./HomePage.css";

const HomePage = () => {
  const datatata = useOutletContext();
  const { state } = useLocation();
  const { pathname } = useLocation();

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
    let data = {
      matchName: item?.matchName,
      openDate: item?.openDate,
      Odds: "",
    };

    datatata(data);
    navigate(`/m/gamedetail/${id}`);
  };
  console.log(gamesData, "gamesData");

  const handleInput = (vl) => {
    // console.log("das")
    // datatata(vl)
  };

  useEffect(() => {
    const activeMatchSportWise = id ? id : "4";

    // dispatch(PostGameDetailsBySportsId(activeMatchSportWise))
    axios.get(" http://43.205.50.127:9000/betfair_api/active_match")
    .then((res) => {
setGamesData(res?.data?.data);
})
  
      
    
     
    
  }, [id, token]);
  // console.log(gamesData)

  //       useEffect(()=>{
  //         let data = {sportId: id?id:"4"}
  // dispatch(Postactivematchsport(data))
  //       },[dispatch, id])

  const { PostunsettledData } = useSelector((state) => state.auth);

  // console.log(PostunsettledData?.data?.dataList?.length)

  // const dispatch = useDispatch();
  // console.log(PostBetListByMatchIdData ,"dushyant")

  useEffect(() => {
    let data = { betType: 1, index: 0, noOfRecords: 5, sportType: 1 };

    dispatch(Postunsettleddddd(data));
  }, [dispatch]);

  return (
    <>
      {" "}
      <div className="master-flash-message">
        <div className="flash__wrapper"></div>
      </div>
      <section style={{ marginTop: "-14px" }}>
        <h2 class="page-title p-l-15" style={{ marginTop: "10px" }}>
          {GameName}
        </h2>
        <div
          className="in-play page-title m-t-20 m-l-15"
          style={{ paddingTop: "0px" }}
        >
          <i className="fas fa-play-circle"></i>
          {""}
          <span className="label">In Play</span>
        </div>
        <Link to="/m/mybets" className="">
          <span className="open-bets-link" style={{marginLeft: "7%"}}>
            Open Bets {""}(
            {PostunsettledData?.data &&
              PostunsettledData?.data?.dataList &&
              PostunsettledData?.data?.dataList?.length}
            )
          </span>
        </Link>
        <div>
          <ul className="market-listing m-t-10">

            {
           gamesData&&gamesData?.length > 0
              ? Object.keys(gamesData).map((key) => (
                  <>
                    {gamesData&&gamesData[key]&&gamesData[key]?.matchList.map((item, index) => (
                      <>
                        <li
                          className="market-list-item"
                          style={{ padding: "2px", cursor: "pointer" }}
                        >
<div className="homeimgGame">
<img src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${ gamesData[key]?.sportid}.png`} alt=''   className="game-icon"/>
</div>
                          <div className="itdasdasdsa">
                            <span
                              className="m-l-10 game-name v-m"
                              onClick={() =>
                                handleGameDetails(item?.matchId, item)
                              }
                            >
                              {item?.matchName}
                            </span>
                            <div className="timeeeeeee">{item?.openDate}</div>
                            <div className="events-icons float-right">
                              {item?.inPlay === true ? (
                                <i className="fas fa-play-circle m-l-5"></i>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </li>
                      </>
                    ))}
                  </>
                ))
              : ""}

          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
