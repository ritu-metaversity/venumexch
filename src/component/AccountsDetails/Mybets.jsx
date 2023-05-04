import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./Mybets.css";

const Mybets = () => {
  return (
    <div className="content boxed-layout-wrapper">
      <SideBar />
      dassad
      <div className="mid-pane">
        <h1>My Bets</h1>
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
            <div className="form-group v-t m-r-20 d-inline-block">
              <label>From:</label>
              <div
                className="mx-datepicker vuedatepicker"
                name="FromDate"
                not-before="Tue Dec 13 2022 05:30:00 GMT+0530 (India Standard Time)"
                not-after="Mon Feb 13 2023 05:30:00 GMT+0530 (India Standard Time)"
              >
                <div className="mx-input-wrapper">
                  <input
                    name="date"
                    type="text"
                    autocomplete="off"
                    placeholder="Select Date"
                    className="mx-input"
                  />{" "}
                  <span className="mx-input-append mx-clear-wrapper">
                    <i className="mx-input-icon mx-clear-icon"></i>
                  </span>
                  <span className="mx-input-append">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 200 200"
                      className="mx-calendar-icon"
                    >
                      <rect
                        x="13"
                        y="29"
                        rx="14"
                        ry="14"
                        width="174"
                        height="158"
                        fill="transparent"
                      ></rect>
                      <line x1="46" x2="46" y1="8" y2="50"></line>
                      <line x1="154" x2="154" y1="8" y2="50"></line>
                      <line x1="13" x2="187" y1="70" y2="70"></line>
                      <text
                        x="50%"
                        y="135"
                        font-size="90"
                        stroke-width="1"
                        text-anchor="middle"
                        dominant-baseline="middle"
                      >
                        13
                      </text>
                    </svg>
                  </span>
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
            <div className="form-group v-t m-r-20 d-inline-block">
              <label>To:</label>
              <div
                className="mx-datepicker vuedatepicker"
                name="ToDate"
                not-before="Tue Dec 13 2022 05:30:00 GMT+0530 (India Standard Time)"
                not-after="Mon Feb 13 2023 05:30:00 GMT+0530 (India Standard Time)"
              >
                <div className="mx-input-wrapper">
                  <input
                    name="date"
                    type="text"
                    autocomplete="off"
                    placeholder="Select Date"
                    className="mx-input"
                  />{" "}
                  <span className="mx-input-append mx-clear-wrapper">
                    <i className="mx-input-icon mx-clear-icon"></i>
                  </span>
                  <span className="mx-input-append">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 200 200"
                      className="mx-calendar-icon"
                    >
                      <rect
                        x="13"
                        y="29"
                        rx="14"
                        ry="14"
                        width="174"
                        height="158"
                        fill="transparent"
                      ></rect>
                      <line x1="46" x2="46" y1="8" y2="50"></line>
                      <line x1="154" x2="154" y1="8" y2="50"></line>
                      <line x1="13" x2="187" y1="70" y2="70"></line>
                      <text
                        x="50%"
                        y="135"
                        font-size="90"
                        stroke-width="1"
                        text-anchor="middle"
                        dominant-baseline="middle"
                      >
                        13
                      </text>
                    </svg>
                  </span>
                </div>
                <div
                  className="mx-datepicker-popup"
                  style={{ display: "none" }}
                >
                  <div
                    className="mx-calendar mx-calendar-panel-none"
                    name="ToDate"
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
                        2023-02-13
                      </Link>
                    </div>
                    <div className="mx-calendar-content"></div>
                  </div>
                </div>
              </div>
              <span className="text-danger error-report "></span>
            </div>
            <div className="form-group m-r-20 d-inline-block">
              <label className="d-block">&nbsp;</label>{" "}
              <button className="btn btn-primary" style={{ height: "35px" }}>
                <i className="fa fa-search m-r-5"></i>Search
              </button>
            </div>
          </form>
        </div>
        <div className="table-responsive">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mybets;
