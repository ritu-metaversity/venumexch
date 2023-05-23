import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Postactivematchsport } from "../../App/Features/auth/authActions";
import "./Midpage.css";
import { useNavigate } from "react-router-dom";

const MidPage = () => {
   const { id } = useParams();
   //   console.log(id, "midpage");
   const navigator = useNavigate()
   const [gamesData, setGamesData] = useState("");
   const token = localStorage.getItem("TokenId");


   const handleEnterMatch = (item) => {
      navigator(`/gamedetails/${item}`)
   }
   useEffect(() => {
      const activeMatchSportWise = { sportId: id ? id : "4" };
      axios
         .get(
            "http://43.205.50.127:9000/betfair_api/active_match/4",
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
                                                <div className="maindiv" onClick={() => handleEnterMatch(item?.matchId)}>
                                                   <div className="eventIcon">
                                                      <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/ic_vir.png" alt="" class="icon-vir" />
                                                      {/* <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/game-icon.svg" alt="" class="icon-vir" />*/}
                                                   </div>
                                                   <div className="eventName">
                                                      <Link
                                                         to="/gamedetail/1702080831"
                                                         className="event-name"
                                                      >
                                                         {item?.matchName}
                                                      </Link>
                                                   </div>
                                                   <div>
                                                      <small>
                                                         <span className="event-inplay float-right date-inplay">
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
                                                   </div>
                                                </div>

                                             </td>
                                             <td className="back">
                                                <strong className="odds">
                                                   {console.log(item, "itemitemitemitemitemitemitem")}
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
