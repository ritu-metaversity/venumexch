import moment from 'moment';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Postprofitlossmatchwise } from '../../App/Features/auth/authActions';
import './BettingProfit&Loss.css'

const BettingProfitLoss = () => {

   const dispatch = useDispatch();
   const {PostprofitlossmatchwiseDatatata } = useSelector((state) => state.auth);

useEffect(()=>{
   let d = new Date();
   d.setDate(d.getDate() - 14);
   // let ProfitLossPayload= {
   //    sportId: "4",
   //    matchId: "32177964",
   //    fromDate: moment(d).format("YYYY-MM-DD"),
   //    toDate: moment(new Date()).format("YYYY-MM-DD"),
   //    userId: "sumana6748",
   //    index: 2,
   //    noOfRecords: 10,
   //    totalPages: 1
   //  }

    let ProfitLossPayload= {
      sportId: "323334",
      matchId: "",
      fromDate: "",
      toDate: "",
      userId: "",
      index: "",
      noOfRecords: "",
      totalPages: ""
    }
   dispatch(Postprofitlossmatchwise(ProfitLossPayload))
},[dispatch])
console.log(PostprofitlossmatchwiseDatatata,"PostprofitlossmatchwiseDatatataPostprofitlossmatchwiseDatatataPostprofitlossmatchwiseDatatataPostprofitlossmatchwiseDatatata")
  return (
    <><div   className="main-content" style={{minHeight: "calc(100% - 163px)"}}>
    <div   className="home-page home-page-news">
       <div   className="container-inner">
          {/* <section   className="m-t-10 betting-pnl">
             <h2   className="page-title p-l-15">Betting Profit &amp; Loss</h2>

             
          </section> */}


<section class="m-t-10 betting-pnl">
   <h2 class="page-title p-l-15">Betting Profit &amp; Loss</h2>


   {/* <div class="game-date"><span>15th March 2023</span> <span class="float-right">P&amp;L: <span style={{color: "black"}}>0.00</span></span></div> */}

   {PostprofitlossmatchwiseDatatata?.data &&
                PostprofitlossmatchwiseDatatata?.data ? (
                  PostprofitlossmatchwiseDatatata?.data.map((el) => (
   <div class="wrapper">
      <div class="info">
         <p class="m-b-0  game-name"><a to="" class="betting-back"><b>{el?.matchName}</b></a></p>
         <p class="m-b-0"><span><b>commssionMila {" "}: </b> <span>{el?.commssionMila}</span></span></p>
         {/* <p class="m-b-0"><span><b>Settled Time:</b> <span>15/03/2023 23:02</span></span></p> */}
      </div>
      <div class="pnl-titles">
         <p class="m-b-0"><b>Net Win:</b></p>
      </div>
      <div class="pnl-numbers">
         <p class="m-b-0 negative"><b>{el?.pnl}</b></p>
      </div>
   </div>
                  ))):""}
</section>
       </div>
    </div>
 </div></>
  )
}

export default BettingProfitLoss