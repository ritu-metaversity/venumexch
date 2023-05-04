import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Postactivematchsport } from "../../App/Features/auth/authActions";
import "./Midpage.css";

const MidPage = () => {
  const { id } = useParams();
  //   console.log(id, "midpage");

  const [gamesData, setGamesData] = useState("");
  const token = localStorage.getItem("TokenId");

  useEffect(() => {
    const activeMatchSportWise = { sportId: id ? id : "4" };
    axios
      .post(
        "http://api.a2zscore.com/admin-new-apis/enduser/active-match-sport-wise-open",
        activeMatchSportWise
      )
      .then((res) => {
        setGamesData(res?.data?.data);
        // console.log(res?.data?.data)
      });
  }, [id, token]);

  return (
    <div>
      <div className="mid-pane">
        <div>
          <div className="sports-wrapper">
            {gamesData?.length > 0 ? (
              <div className="events">
                <h1 className="event-heading">
                  Cricket
                  <span className="starts-in-label">
                    Betting from 30 mins before start
                  </span>
                </h1>
                <div className="events-row">
                  <table className="market-listing-table">
                    <thead>
                      <tr>
                        <th className="title">Match</th>
                        <th colspan="2" className="text-center">
                          1
                        </th>
                        <th colspan="2" className="text-center">
                          X
                        </th>
                        <th colspan="2" className="text-center">
                          2
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {gamesData?.length > 0
                        ? gamesData.map((item) => {
                            return (
                              <tr>
                                <td>
                                  <Link
                                    to="/gamedetail/1702080831"
                                    className="event-name"
                                  >
                                    {item?.matchName}
                                  </Link>
                                  <small>
                                    <span className="event-inplay float-right">
                                      {item?.inPlay === true ? (
                                        <>
                                          <img
                                            src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/inplay.png"
                                            alt=""
                                          />
                                          "In-Play"
                                        </>
                                      ) : (
                                        item?.openDate
                                      )}
                                    </span>
                                  </small>
                                </td>
                                <td className="back">
                                  <strong className="odds">
                                    {item?.team1Back}
                                  </strong>
                                </td>
                                <td className="lay">
                                  <strong className="odds">
                                    {item?.team1Lay}
                                  </strong>
                                </td>
                                <td className="empty betting-disabled">
                                  <span>{item?.drawBack}</span>
                                </td>
                                <td className="empty betting-disabled">
                                  <span>{item?.drawLay}</span>
                                </td>
                                <td className="back">
                                  <strong className="odds">
                                    {item?.team2Back}
                                  </strong>
                                </td>
                                <td className="lay">
                                  <strong className="odds">
                                    {item?.team2Lay}
                                  </strong>
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                      {/* <tr>
                                 <td>
                                    <Link to="/gamedetail/1702080834"   className="event-name">Madhya Pradesh v Bengal</Link> <small><span   className="event-inplay float-right"><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/inplay.png" alt='' />In-Play
                                    </span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/ic_vir.png"   className="icon-vir" alt="" /> <Link to="/cricketv/561011371"   className="event-name">Punjab XI  v Mumbai XI </Link> <small><span   className="event-inplay float-right"><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/inplay.png" alt='' />In-Play
                                    </span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/ic_vir.png"   className="icon-vir" alt="" /> <Link to="/cricketv/462021790"   className="event-name">GAW XI v SNP XI</Link> <small><span   className="event-inplay float-right"><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/inplay.png" alt='' />In-Play
                                    </span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/game-icon.svg"   className="icon-vir" alt="" /> <Link to="/virtualgame/1102081241"   className="event-name">India T10 v West Indies T10</Link> <small><span   className="event-inplay float-right"><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/inplay.png" alt=''/>In-Play
                                    </span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/game-icon.svg"   className="icon-vir" alt="" /> <Link to="/virtualgame/1102081246"   className="event-name">Pakistan T10 v India T10</Link> <small><span   className="event-inplay float-right"><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/inplay.png" alt=''/>In-Play
                                    </span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/game-icon.svg"   className="icon-vir" alt="" /> <Link to="/virtualgame/1102081038"   className="event-name">New Zealand T10 v India T10</Link> <small><span   className="event-inplay float-right">04/02/2023 13:30:00</span></small></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32055431"   className="event-name">Zimbabwe v West Indies</Link> <small><span>04/02/2023 13:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">110</strong></td>
                                 <td   className="lay"><strong   className="odds">120</strong></td>
                                 <td   className="empty"><span>
                                    1.07
                                    </span>
                                 </td>
                                 <td   className="empty"><span>1.08</span></td>
                                 <td   className="back"><strong   className="odds">15</strong></td>
                                 <td   className="lay"><strong   className="odds">16</strong></td>
                              </tr>
                              <tr>
                                 <td><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/game-icon.svg"   className="icon-vir" alt="" /> <Link to="/virtualgame/1102081309"   className="event-name">West Indies T10 v New Zealand T10</Link> <small><span>08/02/2023 12:40:00</span></small></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32078380"   className="event-name">Khulna Tigers v Sylhet Strikers</Link> <small><span>08/02/2023 13:00:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.04</strong></td>
                                 <td   className="lay"><strong   className="odds">26</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">1.04</strong></td>
                                 <td   className="lay"><strong   className="odds">26</strong></td>
                              </tr>
                              <tr>
                                 <td><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/game-icon.svg"   className="icon-vir" alt="" /> <Link to="/virtualgame/1102081343"   className="event-name">New Zealand T10 v West Indies T10</Link> <small><span>08/02/2023 13:40:00</span></small></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/game-icon.svg"   className="icon-vir" alt="" /> <Link to="/virtualgame/1102081352"   className="event-name">Pakistan T10 v Sri Lanka T10</Link> <small><span>08/02/2023 13:45:00</span></small></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">0</strong></td>
                                 <td   className="lay"><strong   className="odds">0</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32078381"   className="event-name">Chattogram Challengers v Rangpur Riders</Link> <small><span>08/02/2023 18:00:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.04</strong></td>
                                 <td   className="lay"><strong   className="odds">26</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">1.04</strong></td>
                                 <td   className="lay"><strong   className="odds">26</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087825"   className="event-name">Gulf Giants v Desert Vipers</Link> <small><span>08/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.83</strong></td>
                                 <td   className="lay"><strong   className="odds">1.94</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.06</strong></td>
                                 <td   className="lay"><strong   className="odds">2.22</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32090582"   className="event-name">Pretoria Capitals v Paarl Royals</Link> <small><span>08/02/2023 21:00:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.82</strong></td>
                                 <td   className="lay"><strong   className="odds">1.84</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.22</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32086574"   className="event-name">Otago v Northern Brave</Link> <small><span>09/02/2023 03:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">2.04</strong></td>
                                 <td   className="lay"><strong   className="odds">2.08</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">1.94</strong></td>
                                 <td   className="lay"><strong   className="odds">1.96</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32015773"   className="event-name">India v Australia</Link> <small><span>09/02/2023 09:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.77</strong></td>
                                 <td   className="lay"><strong   className="odds">1.78</strong></td>
                                 <td   className="empty"><span>
                                    6.2
                                    </span>
                                 </td>
                                 <td   className="empty"><span>6.4</span></td>
                                 <td   className="back"><strong   className="odds">3.6</strong></td>
                                 <td   className="lay"><strong   className="odds">3.65</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link to="/gamedetail/32087835"   className="event-name">MI Emirates v Dubai Capitals</Link> <small><span>09/02/2023 19:30:00</span></small>
                                 </td>
                                 <td   className="back"><strong   className="odds">1.76</strong></td>
                                 <td   className="lay"><strong   className="odds">1.85</strong></td>
                                 <td   className="empty betting-disabled"><span>
                                    0
                                    </span>
                                 </td>
                                 <td   className="empty betting-disabled"><span>0</span></td>
                                 <td   className="back"><strong   className="odds">2.18</strong></td>
                                 <td   className="lay"><strong   className="odds">2.3</strong></td>
                              </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidPage;
