import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { PostBalance } from "../../App/Features/auth/authActions";
import Betslip from "./Betslip";
import "./Right.css";

const Right = ({ gamedetailsData }) => {
   const dispatch = useDispatch();

   const [creditDropDown, setCreaditDropDown] = useState("show");
   const [editStake, setEditStake] = useState("none");
   const [oneClickBetting, setOneClickBetting] = useState(false);
   const [editSingleBet, setEditSingleBet] = useState(false);
   const { PostTotalBalance, postisselfbyappurlData } = useSelector(
      (state) => state.auth
   );
   const { pathname } = useLocation();

   //   (pathname.includes("/gamedetails/")
   const usernameDemo = localStorage.getItem("usernameDemo");
   // console.log((window.location.pathname.includes("/gamedetails/"), "adfasndlasdljas"))
   let appUrll = window.location.hostname;
   const token = localStorage.getItem("TokenId");
   // useEffect(() => {
   //    if (token) {

   //       if (localStorage.getItem("PassWordType") === "old") {
   //       } else {
   //          const time = setInterval(() => {
   //             const token = localStorage.getItem("TokenId");
   //             if (token) {

   //                if (localStorage.getItem("PassWordType") === "old") {
   //                } else {
   //                   const time = setInterval(() => {
   //                      dispatch(PostBalance());
   //                   }, 5000);
   //                   return () => clearInterval(time);
   //                }
   //             }

   //          }, 5000);
   //          return () => clearInterval(time);
   //       }
   //    }

   // }, [token]);
   const handleDropdown = () => {
      if (creditDropDown === "") {
         setCreaditDropDown("show");
         // console.log("ssssssss")
      } else {
         setCreaditDropDown("");
         // console.log("dddddddddddd")
      }
      // console.log(creditDropDown);
   };



   const handleClickBetting = () => {
      if (oneClickBetting === false) {

         setOneClickBetting(true)
      } else {
         setEditSingleBet(false)
         setOneClickBetting(false)
      }
      // console.log("clickbtn")
   }

   const handleEditSingleBet = () => {
      if (editSingleBet === false) {

         setEditSingleBet(true)
      } else {

         setEditSingleBet(false)
      }
   }
   const BackBlack = (vl) => {
      setEditStake(vl)
   }

   const [TvShow, setTvShow] = useState(false)

   const handleTv = () => {
      setTvShow(!TvShow)
   }

   console.log(gamedetailsData?.popupshow, "fdsfsdfsdfdfsdfsdfdffsds")
   return (
      <div>
         <div className="right-pane">
            <div className="account-overview">
               <div
                  data-toggle="collapse"
                  data-target=".credit-box"
                  className="toggleable-list-title text-center change-bg"
               >
                  <span>
                     <strong>Available Credit: </strong>{" "}
                     <span className="value">{PostTotalBalance?.data?.data?.balance
                        ? (Number(PostTotalBalance?.data?.data?.balance -
                           PostTotalBalance?.data?.data?.libality).toFixed(2))
                        : "0:00"}</span>
                  </span>
                  <i
                     className="fas fa-angle-down m-l-5 toggle-icon"
                     onClick={handleDropdown}
                  ></i>
               </div>
               <ul className={`credit-box ${creditDropDown}`}>
                  <li>
                     <strong>Credit Limit: </strong> <span>
                        {PostTotalBalance?.data?.data?.creditLimit
                           ? Number(PostTotalBalance?.data?.data?.creditLimit).toFixed(2)
                           : "0:00"}</span>
                  </li>
                  <li>
                     <strong>Winnings:</strong>

                     {PostTotalBalance?.data?.data?.winnings > 0 ? (
                        <span style={{ color: "green" }}>
                           {PostTotalBalance?.data?.data?.winnings
                              ? Number(PostTotalBalance?.data?.data?.winnings).toFixed(2)
                              : "0:00"}
                        </span>
                     ) : (
                        <span >
                           {PostTotalBalance?.data?.data?.winnings
                              ? Number(PostTotalBalance?.data?.data?.winnings).toFixed(2)
                              : "0:00"}
                        </span>)}
                  </li>
                  <li>
                     <strong>Available Credit: </strong> <span>
                        {PostTotalBalance?.data?.data?.balance
                           ? (Number(PostTotalBalance?.data?.data?.balance -
                              PostTotalBalance?.data?.data?.libality).toFixed(2))
                           : "0:00"}</span>
                  </li>
               </ul>
            </div>

            <div className="inner-right-pane">
               <div className="overlay" style={{ display: `${editStake}` }}></div>
               <div className="user-settings">
                  <div className="switchToggle float-left" >
                     <input type="checkbox" id="switch" /> <label for="switch" onClick={handleClickBetting}></label>
                  </div>
                  <label className="float-left m-l-10 m-t-5" >1 Click Betting</label>{" "}

                  {oneClickBetting ? <>
                     {editSingleBet ? <button className="btn editBtn float-right m-b-5 m-r-5" onClick={handleEditSingleBet}>Save</button> :
                        <button className="btn editBtn float-right m-b-5 m-r-5" onClick={handleEditSingleBet}>Edit</button>
                     }

                     <div className="one-click-bet float-left w-100 m-b-5">
                        {editSingleBet ?
                           <>   <input type="number" />
                              <input type="number" />
                              <input type="number" />
                           </>

                           :
                           <>
                              <button className="btn btnStack m-b-5 m-b-5 ">1111</button>
                              <button className="btn btnStack m-b-5 m-b-5 selected">5000</button>
                              <button className="btn btnStack m-b-5 m-b-5">7000</button>
                           </>

                        }



                     </div></> : ""}

               </div>
               {pathname.includes("/gamedetails/") ?
                  <>
                     <h4 class="m-b-5 collapsed"


                        style={{ cursor: "pointer", borderBottom: "1px solid #000", paddingBottom: "5px", fontSize: "13px" }}>
                        Live TV <i onClick={handleTv} className={`fas fa-angle-${TvShow ? "up" : "down"} m-l-5 toggle-icon tv-toggle`}></i>
                     </h4>
                     {
                        TvShow ? (
                           <div>
                              <div id="scoreboard-box">
                                 <div className="scorecard scorecard-mobile">
                                    <div className="score-inner">
                                       <iframe
                                          // src={`https://stream.openhomepageforapi.live/YGapp/play.html?name=ttfour&amp;autoplay=true`}
                                          src={`http://43.205.116.130/tv.php?eventId=32183614`}
                                          width="100%"
                                          className="score-card desk_score_card"
                                          title="scorecord"
                                          allowFullScreen={true}></iframe>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ) : ""
                     }
                  </> : ""
               }
               <Betslip BackBlack={BackBlack} gamedetailsData={gamedetailsData} />

            </div>
         </div>
      </div >
   );
};

export default Right;
