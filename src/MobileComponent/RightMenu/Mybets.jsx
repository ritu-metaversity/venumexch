import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostBetListByMatchId } from "../../App/Features/auth/authActions";
import "./Mybets.css";

const Mybets = () => {
  const [unmatchedBets, setUnmatchedBets] = useState(false);
  const [matchedBets, setmatchedBets] = useState(false);

  const handleUnmatched = () => {
    if (unmatchedBets === true) {
      setUnmatchedBets(false);
    } else {
      setUnmatchedBets(true);
    }
    // console.log("ssjjk");
  };
  const handlematched = () => {
    if (matchedBets === true) {
      setmatchedBets(false);
    } else {
      setmatchedBets(true);
    }
    // console.log("ssjjk");
  };


  const { PostBetListByMatchIdData } = useSelector(state => state.auth)

  // console.log(data)

  const dispatch = useDispatch();
// console.log(PostBetListByMatchIdData ,"dushyant")

useEffect(()=>{
  let data ={"matchId": 32154558}

  dispatch(PostBetListByMatchId(data))
},[dispatch])


  return (
    <>
      <section className="my-bets-container">
        <h2 className="page-title m-t-20 p-l-15">Open Bets</h2>
        {/* <div
          data-toggle="collapse"
          data-target=".unmatched-bet"
          className={`toggleable-list-title ${
            unmatchedBets === true ? "" : "collapsed"
          }`}
          aria-expanded="true"
          // aria-expanded={`${unmatchedBets===true? "true":"false"}`}
        >
          <span>Unmatched Bets</span>{" "}
          <i
            className="fas fa-angle-down toggle-icon float-right m-r-10 "
            onClick={handleUnmatched}
          ></i>
        </div>
        <div
          className={`events unmatched-bet ${
            unmatchedBets === true ? "collapse " : "collapse show"
          } `}
        >
          <div className="message">You have no unmatched bets</div>
        </div> */}

        <div
          data-toggle="collapse"
          data-target=".matched-bet"
          className={`toggleable-list-title m-t-10 ${
            matchedBets === true ? "" : "collapsed"
          }`}
          aria-expanded="true"
          // aria-expanded={`${unmatchedBets===true? "true":"false"}`}
        >
          <span>Matched Bets</span>{" "}
          <i
            className="fas fa-angle-down toggle-icon float-right m-r-10 "
            onClick={handlematched}
          ></i>
        </div>
        <div
          className={`events matched-bet ${
            matchedBets === true ? "collapse " : "collapse show"
          } `}
        >
          <div className="message">You have no Matched bets</div>


          
          {/* <div class="events matched-bet collapse show">
   <ul>
      <li>
         <div><a href="/m/gamedetail/32181223" class="back-bet"><u>BACK IU Will Win the Toss bhav(IU vs PZ)adv for 100.00 @ 1.95 </u></a></div>
         <div class="bet-details">
            <div><b>Islamabad United v Peshawar Zalmi</b></div>
            <div><b>Fancy1</b></div>
            <div><b>Placed: </b> <span>14/03/2023 13:26</span></div>
         </div>
      </li>
   </ul>
</div> */}
        </div>


  

      </section>
    </>
  );
};

export default Mybets;
