import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostBetListByMatchId, Postunsettleddddd } from "../../App/Features/auth/authActions";
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


  const { PostunsettledData } = useSelector(state => state.auth)

  // console.log(PostunsettledData?.data?.dataList)

  const dispatch = useDispatch();
// console.log(PostBetListByMatchIdData ,"dushyant")

useEffect(()=>{
  let data ={betType:1,
    index:0,
    noOfRecords:5,
    sportType:1}

  dispatch(Postunsettleddddd(data))
},[dispatch])

console.log(PostunsettledData,"PostunsettledData")
  return (
    <>
      <section className="my-bets-container  manit">
        <h2 className="page-title m-t-20 p-l-15 " style={{marginBottom: "4px"}}>Open Bets</h2>
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
          {PostunsettledData?.data &&
                PostunsettledData?.data?.dataList ? (
                  PostunsettledData?.data?.dataList.map((el) => (

                         <div class="events matched-bet collapse show">
   <ul>
    {console.log(el,"elelelel")}
      <li>
         <div><a href="/m/gamedetail/32181223" class={`${el?.isback===false? "lay" :"back"}-bet`}><u>{el?.isback===false? "lay" :"Back"} {el?.nation}for {el?.price} @ {el?.rate} </u></a></div>
         <div class="bet-details">
            <div><b>{el?.eventName}</b></div>
            <div><b>{el?.marketname}</b></div>
            <div><b>Placed: </b> <span>
              {moment(el?.time).format(" D/mm/YYYY h:mm")}</span></div>
         </div>
      </li>
   </ul>
</div> 
               
                  ))
                ) : (
                  <tbody>
                    <tr>
                      <td colspan="3" className="text-center">
                        There Have Been No Transfers In The Last 14 Days.
                      </td>
                    </tr>
                  </tbody>
                )}



    
        </div>


  

      </section>
    </>
  );
};

export default Mybets;
