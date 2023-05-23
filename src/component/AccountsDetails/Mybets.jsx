import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./Mybets.css";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const dateFormat = "YYYY-MM-DD";
const Mybets = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const StartDateValue = (date, dateString) => {
    setStartDate(dateString);
  };
  const EndDateValue = (date, dateString) => {
    setEndDate(dateString);
  };
  return (
    <div className="content boxed-layout-wrapper _flex wid-100">

      <div className="_parent">
        <div className="mid-pane">
          <h1 className="betHeading">My Bets</h1>
          <div className="column m-r-40 d-inline-block">
            <div className="selection">
              <div className="item selected">Current</div>
              <div className="item">Past</div>
            </div>
            <div className="selection m-u">
              <div className="item selected">Matched</div>
              <div className="item">Unmatched</div>
            </div>
          </div>
          <div className="column v-t m-r-40 d-inline-block">
            <form data-vv-scope="mybets">
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
                  <div
                    className="mx-datepicker-popup"
                    style={{ display: "none" }}
                  >
                    <div
                      className="mx-calendar mx-calendar-panel-none"
                      name="FromDate"
                    >
                      <div className="mx-calendar-header">
                        <Link className="mx-icon-last-year">«</Link>{" "}
                        <Link
                          className="mx-icon-last-month"
                          style={{ display: "none" }}
                        >
                          ‹
                        </Link>{" "}
                        <Link className="mx-icon-next-year">»</Link>{" "}
                        <Link
                          className="mx-icon-next-month"
                          style={{ display: "none" }}
                        >
                          ›
                        </Link>{" "}
                        <Link
                          className="mx-current-month"
                          style={{ display: "none" }}
                        >
                          Feb
                        </Link>{" "}
                        <Link
                          className="mx-current-year"
                          style={{ display: "none" }}
                        >
                          2023
                        </Link>{" "}
                        <Link
                          className="mx-current-year"
                          style={{ display: "none" }}
                        >
                          2020 ~ 2029
                        </Link>{" "}
                        <Link
                          className="mx-time-header"
                          style={{ display: "none" }}
                        >
                          2023-02-06
                        </Link>
                      </div>
                      <div className="mx-calendar-content">
                        <div
                          className="mx-panel mx-panel-year"
                          style={{ display: "none" }}
                        >
                          <span className="cell disabled">2020</span>
                          <span className="cell disabled">2021</span>
                          <span className="cell">2022</span>
                          <span className="cell actived">2023</span>
                          <span className="cell disabled">2024</span>
                          <span className="cell disabled">2025</span>
                          <span className="cell disabled">2026</span>
                          <span className="cell disabled">2027</span>
                          <span className="cell disabled">2028</span>
                          <span className="cell disabled">2029</span>
                        </div>
                        <div
                          className="mx-panel mx-panel-month"
                          style={{ display: "none" }}
                        >
                          <span className="cell">Jan</span>
                          <span className="cell actived">Feb</span>
                          <span className="cell disabled">Mar</span>
                          <span className="cell disabled">Apr</span>
                          <span className="cell disabled">May</span>
                          <span className="cell disabled">Jun</span>
                          <span className="cell disabled">Jul</span>
                          <span className="cell disabled">Aug</span>
                          <span className="cell disabled">Sep</span>
                          <span className="cell disabled">Oct</span>
                          <span className="cell disabled">Nov</span>
                          <span className="cell disabled">Dec</span>
                        </div>
                        <div
                          className="mx-panel mx-panel-time"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                    </div>
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
          <div >
            <table className="table profit-loss-table">
              <thead>
                <tr>
                  <th>
                    <span>Placed</span>
                  </th>
                  <th>Description</th>
                  <th>Type</th>
                  <th className="text-right">Odds</th>
                  <th className="text-right">Stake</th>
                  <th className="text-right">
                    <span>Liability</span>
                  </th>
                  <th>
                    <span>Potential Profit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="7" className="text-center">
                    There are no record to display
                  </td>
                </tr>

                <tr className="odd oddNew">
                  <td className="text-left"><span className="d-block">23/05/2023</span> <span className="d-block">12:02:57</span></td>
                  <td className="text-left"><span className="d-block"><Link to=''>Indian Premier League</Link></span> <span className="d-inline-block">Gujarat Titans</span> <span className="d-block">Matched: <span>23/05/2023 12:02:57</span></span></td>
                  <td className="text-left">BACK</td>
                  <td className="text-right">160.00</td>
                  <td className="text-right">50.00</td>
                  <td className="text-right">80.00</td>
                  <td className="text-right">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybets;
