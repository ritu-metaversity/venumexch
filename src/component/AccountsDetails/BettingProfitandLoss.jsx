import React from 'react'
import SideBar from '../SideBar/SideBar'

const BettingProfitandLoss = () => {
  return (
    <div   className="content boxed-layout-wrapper" >
      

    <div className='wid-100 mt-66'>
   <h1>Betting Profit and Loss</h1>
   <div   className="column">
      <form data-vv-scope="profitlossrep">
         <div   className="form-group v-t m-r-20 d-inline-block">
            <label>From:</label> 
            <div   className="mx-datepicker vuedatepicker" name="FromDate" not-before="Tue Dec 13 2022 05:30:00 GMT+0530 (India Standard Time)" not-after="Mon Feb 13 2023 05:30:00 GMT+0530 (India Standard Time)">
               <div   className="mx-input-wrapper">
                  <input name="date" type="text" autocomplete="off" placeholder="Select Date"   className="mx-input"/> <span   className="mx-input-append mx-clear-wrapper"><i   className="mx-input-icon mx-clear-icon"></i></span> 
                  <span   className="mx-input-append">
                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 200 200"   className="mx-calendar-icon">
                        <rect x="13" y="29" rx="14" ry="14" width="174" height="158" fill="transparent"></rect>
                        <line x1="46" x2="46" y1="8" y2="50"></line>
                        <line x1="154" x2="154" y1="8" y2="50"></line>
                        <line x1="13" x2="187" y1="70" y2="70"></line>
                        <text x="50%" y="135" font-size="90" stroke-width="1" text-anchor="middle" dominant-baseline="middle">13</text>
                     </svg>
                  </span>
               </div>
              
            </div>
            <span   className="text-danger error-report "></span>
         </div>
         <div   className="form-group m-r-20 d-inline-block"><label   className="d-block">&nbsp;</label> <button   className="btn btn-primary" style={{height: "35px"}}><i   className="fa fa-search m-r-5"></i>Search</button></div>
      </form>
   </div>
  
   <div   className="table-responsive">
      <table   className="table profit-loss-table">
         <thead>
            <tr>
               <th>Market</th>
               <th>Start time</th>
               <th>Settled time</th>
               <th   className="text-right">Net Win</th>
            </tr>
         </thead>
         <tbody></tbody>
      </table>
   </div>

</div>
    </div>
  )
}

export default BettingProfitandLoss