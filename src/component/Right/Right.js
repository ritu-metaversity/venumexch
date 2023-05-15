import React, { useState } from "react";
import Betslip from "./Betslip";
import "./Right.css";

const Right = () => {
   const [creditDropDown, setCreaditDropDown] = useState("show");
   const [editStake, setEditStake] = useState("none");
   const [oneClickBetting, setOneClickBetting] = useState(false);
   const [editSingleBet, setEditSingleBet] = useState(false);
   

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
   const BackBlack=(vl)=>{
      setEditStake(vl)
   }

   return (
      <div>
         <div   className="right-pane">
            <div   className="account-overview">
               <div
                  data-toggle="collapse"
                  data-target=".credit-box"
                    className="toggleable-list-title text-center change-bg"
               >
                  <span>
                     <strong>Available Credit: </strong>{" "}
                     <span   className="value">0.00</span>
                  </span>
                  <i
                       className="fas fa-angle-down m-l-5 toggle-icon"
                     onClick={handleDropdown}
                  ></i>
               </div>
               <ul   className={`credit-box ${creditDropDown}`}>
                  <li>
                     <strong>Credit Limit: </strong> <span>0.00</span>
                  </li>
                  <li>
                     <strong>Winnings:</strong> <span>0.00</span>
                  </li>
                  <li>
                     <strong>Total Net Exposure: </strong> <span>0.00</span>
                  </li>
               </ul>
            </div>

            <div   className="inner-right-pane">
               <div   className="overlay" style={{ display: `${editStake}` }}></div>
               <div   className="user-settings">
                  <div   className="switchToggle float-left" >
                     <input type="checkbox" id="switch" /> <label for="switch" onClick={handleClickBetting}></label>
                  </div>
                  <label   className="float-left m-l-10 m-t-5" >1 Click Betting</label>{" "}

                  {oneClickBetting ? <>
                     {editSingleBet ? <button   className="btn editBtn float-right m-b-5 m-r-5" onClick={handleEditSingleBet}>Save</button> :
                        <button   className="btn editBtn float-right m-b-5 m-r-5" onClick={handleEditSingleBet}>Edit</button>
                     }

                     <div   className="one-click-bet float-left w-100 m-b-5">
                        {editSingleBet ?
                           <>   <input type="number" />
                              <input type="number" />
                              <input type="number" />
                           </>

                           :
                           <>
                              <button   className="btn btnStack m-b-5 m-b-5 ">1111</button>
                              <button   className="btn btnStack m-b-5 m-b-5 selected">5000</button>
                              <button   className="btn btnStack m-b-5 m-b-5">7000</button>
                           </>

                        }



                     </div></> : ""}

               </div>

             <Betslip BackBlack={BackBlack}/>

            </div>
         </div>
      </div>
   );
};

export default Right;
