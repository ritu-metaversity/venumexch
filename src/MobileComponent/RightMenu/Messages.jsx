import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Messages.css";

import { DatePicker} from 'antd';
import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from "moment"
const dateFormat = "YYYY-MM-DD";

const Messages = () => {
  const [startDate, setStartDate] = useState("")
  const [show, setShow] = useState("")

  var curr = new Date();
  const inInd = curr.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const DateValue = (date, dateString) => {
    setStartDate(dateString);
  };
  const submit = () => {
    if (startDate === "") {
      setStartDate(moment().format().slice(0, 10));
    } else {
      setStartDate(startDate);
    }
    if (show === false) {
      setShow(true);
    }
  };
  
  const dateFormat = 'YYYY-MM-DD';
  return (
    <>
      <div className="home-page home-page-news">
        <div className="container-inner">
          <section className="m-t-10 betting-pnl">
            <h2 className="page-title p-l-15">Messages</h2>
            {/* <form> */}
              <div className="row messages">
                <div className="col-6">
                  <label>From</label>
                  <div
                    className="mx-datepicker vuedatepicker"
                    name="FromDate"
                    not-before="Wed Dec 21 2022 05:30:00 GMT+0530 (India Standard Time)"
                    not-after="Tue Feb 21 2023 05:30:00 GMT+0530 (India Standard Time)"
                  >
                    {/* <div className="mx-input-wrapper"> */}
                    <DatePicker
                              defaultValue={dayjs}
                              format={dateFormat}
                              onChange={DateValue}
                              disabledDate={(d) =>
                                !d ||
                                d.isBefore(dayjs().subtract(10, "month")) ||
                                d.isAfter(dayjs())
                              }/>
                  </div>
                </div>
                <div className="col-6">
                  <label>To</label>
                  <div
                    className="mx-datepicker vuedatepicker"
                    name="ToDate"
                    not-before="Wed Dec 21 2022 05:30:00 GMT+0530 (India Standard Time)"
                    not-after="Tue Feb 21 2023 05:30:00 GMT+0530 (India Standard Time)"
                  >
                    <div className="mx-input-wrapper">
                    <DatePicker defaultValue={dayjs()} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-t-10 text-right">
                <div className="col-12">
                  <button
                    className="btn btn-block btn-primary"
                    style={{ height: "35px" }}
                    onClick={submit}
                  >
                    <i className="fa fa-search m-r-5" ></i>Search
                  </button>
                </div>
              </div>
            {/* </form> */}
            <div className="table-responsive m-t-10">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Event Name</th>
                    <th className="text-right">Amount</th>
                    <th>Date</th>
                    <th>Remark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="5" className="text-center">
                      There are no records found !
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Messages;