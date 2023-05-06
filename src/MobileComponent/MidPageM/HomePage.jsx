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
import moment from "moment"


const HomePage = () => {
  const datatata = useOutletContext();
  const { state } = useLocation();
  const { pathname } = useLocation();


  console.log(window.location.pathname, "window.location.pathname")
  let navigate = useNavigate();
  const { id } = useParams();
  let GameName = state?.id2;
  const dispatch = useDispatch();
  const [gamesData, setGamesData] = useState("");
  const token = localStorage.getItem("TokenId");

  useEffect(() => {
    localStorage.setItem("SportId", id);
  }, [id]);
  const { PostunsettledData } = useSelector((state) => state.auth);

  const handleGameDetails = (id, item) => {
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
  };

  useEffect(() => {
    axios
      .get("http://43.205.50.127:9000/betfair_api/active_match")
      .then((res) => {
        setGamesData(res?.data?.data);
      });
  }, [id, token]);

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
        </Link>
        <div>
          <ul className="market-listing m-t-10 fsfsdf">
            {gamesData && gamesData?.length > 0 ? (
              Object.keys(gamesData).map((key, item) => (
                <>
                  <div>

                    {gamesData[key]?.name && gamesData[key]?.matchList?.length > 0 ?
                      <span className="sports-name">
                        {gamesData[key]?.name}
                      </span>
                      : ""}


                  </div>

                  {gamesData &&
                    gamesData[key] &&
                    gamesData[key]?.matchList.map((item, index) => (

                      <div
                        data-title="OPEN"
                        className="table-body"
                        onClick={() => handleGameDetails(item?.matchId, item)}

                      >

                        <div

                          className="table-row"
                        >

                          <div className="odds-name">


                            <div className="gameName">
                              <span
                                className="team-name"
                                style={{ fontSize: "14px" }}
                              >
                                {item?.matchName}
                              </span>
                              <span
                                className="game-time"
                              >
                                {moment(item?.openDate).format('D-MM-YYYY h:mm')}

                              </span>
                            </div>
                            <div className="inplayyyy">
                              {item?.inPlay === true ? (
                                <i className="fas fa-play-circle "></i>
                              ) : (
                                ""
                              )}
                            </div>

                          </div>
                          <div className="box-w3 float-left back ">
                            <button
                              type="button"
                              className="back light-bg"
                            >
                              <span className="odd">0</span>
                              <span>
                                <span>0</span>
                              </span>
                            </button>
                          </div>
                          <div className="box-w3 float-left back ">
                            <button
                              type="button"
                              className="back light-bg"
                            >
                              <span className="odd">0</span>
                              <span>
                                <span>0</span>
                              </span>
                            </button>
                          </div>
                          <div
                            className="box-w3 float-left back hidden-portrait"
                          >
                            <button
                              type="button"
                              className="back"

                            >
                              <span className="odd">
                                {item?.team1Back}
                              </span>
                              <span>
                                <span>  {item?.team2Back}</span>
                              </span>
                            </button>
                          </div>

                          <div
                            className="box-w3 float-left lay hidden-portrait "
                          >
                            <button
                              type="button"
                              className="lay"

                            >
                              <span className="odd">
                                {item?.team1Lay}
                              </span>
                              <span>
                                <span>{item?.team2Lay}</span>
                              </span>
                            </button>
                          </div>
                          <div className="box-w3 la light-bg float-left ">
                            <button
                              type="button"
                              className=" lay light-bg"
                            >
                              <span className="odd">0</span>
                              <span>
                                <span>0</span>
                              </span>
                            </button>
                          </div>
                          <div className="box-w3 lay float-left ">
                            <button
                              type="button"
                              className="lay light-bg"
                            >
                              <span className="odd">0</span>{" "}
                              <span>
                                <span>0</span>
                              </span>
                            </button>
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
        </div>
      </section>
    </>
  );
};

export default HomePage;
