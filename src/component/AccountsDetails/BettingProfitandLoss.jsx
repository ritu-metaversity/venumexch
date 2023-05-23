import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Link } from 'react-router-dom';

const dateFormat = "YYYY-MM-DD";

const BettingProfitandLoss = () => {
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
 
   const StartDateValue = (date, dateString) => {
     setStartDate(dateString);
   };
   const EndDateValue = (date, dateString) => {
     setEndDate(dateString);

   } 
   return (
      <div className="content boxed-layout-wrapper" >


         <div className='wid-100 '>
            <h1 className='betHeading pnlHeading'>Betting Profit and Loss</h1>
            <div className="column v-t m-r-40 d-inline-block">
            <form data-vv-scope="mybets" className='pnl'>
              <div className="v-t d-inline-block">
                <label className="mb-0">From:</label>
                <div
                  className="mx-datepicker vuedatepicker"
                  name="FromDate"
                >
                  <div className="mx-input-wrapper">
                    <DatePicker
                      className=" startDateNew"
                      defaultValue={dayjs(startDate)}
                      format={dateFormat}
                      onChange={StartDateValue}
                      disabledDate={(d) =>
                        !d ||
                        d.isBefore(dayjs().subtract(2, "month")) ||
                        d.isAfter(dayjs())
                      }
                    />
                  </div>
                </div>
                <span className="text-danger error-report m-l-10"></span>
              </div>
              <div className=" v-t d-inline-block" style={{ marginLeft: "-18px" }}>
                <label className="mb-0">To:</label>
                <div
                  className="mx-datepicker vuedatepicker"
                  name="ToDate"
                >
                  <div className="mx-input-wrapper">
                    <DatePicker
                      className=" startDateNew"
                      defaultValue={dayjs(startDate)}
                      format={dateFormat}
                      onChange={StartDateValue}
                      disabledDate={(d) =>
                        !d ||
                        d.isBefore(dayjs().subtract(2, "month")) ||
                        d.isAfter(dayjs())
                      }
                    />
                  </div>
                </div>
                <span className="text-danger error-report "></span>
              </div>
              <div className="form-group m-r-20 d-inline-block">

                <button className="btn-primary searchBtnNew">
                  <i className="fa fa-search m-r-5"></i>Search
                </button>
              </div>
            </form>
          </div>

            <div className="table-responsive">
               <table className="table profit-loss-table ">
                  <thead>
                     <tr>
                        <th>Market</th>
                        <th>Start time</th>
                        <th>Settled time</th>
                        <th className="text-right">Net Win</th>
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