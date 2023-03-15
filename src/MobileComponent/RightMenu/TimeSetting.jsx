import moment from "moment";
import React, { useState } from "react";
import "./TimeSetting.css"

const TimeSetting = () => {
  const [dateState, setDateState] = useState()

  const liveTime =()=>{
    let time =new Date();
    setDateState(time)
 }
 setInterval(liveTime,1000)
 

  return (
    <>
      <div   className="home-page home-page-news">
        <div   className="container-inner">
          <section   className="time-settings">
            <h2   className="page-title m-t-20 p-l-15" style={{paddingTop:"0px"}}>Time Setting</h2>
            <div   className="content">
              <div   className="clock">
                <span>{moment(dateState).format('MMM DD YYYY')}</span>{" "}
                <span>
                  <b>{moment(dateState).format('hh:mm:ss')}</b>
                </span>
              
              </div>
              <div   className="options">
                <div   className="float-left m-b-10 w-100">
                  <label for="customRadio1">System time - (GMT +00:00)</label>
                  <div   className="custom-control custom-radio d-inline-block">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="example1"
                      checked
                      value="1"
                        className="custom-control-input"
                    />{" "}
                    <label
                      for="customRadio"
                        className="custom-control-label"
                    ></label>
                  </div>
                </div>
                <div   className="float-left m-b-10 w-100">
                  <label for="customRadio2">
                    Your device time - (GMT +05:30)
                  </label>
                  <div   className="custom-control custom-radio d-inline-block">
                    <input
                      type="radio"
                      id="customRadio2"
                      name="example1"
                      value="2"
                        className="custom-control-input"
                    />{" "}
                    <label
                      for="customRadio"
                        className="custom-control-label"
                    ></label>
                  </div>
                </div>
                <div   className="float-left m-b-10 w-100">
                  <label for="customRadio3">
                    India Standard time - (GMT +05:30)
                  </label>
                  <div   className="custom-control custom-radio d-inline-block">
                    <input
                      type="radio"
                      id="customRadio3"
                      name="example1"
                      value="3"
                        className="custom-control-input"
                    />{" "}
                    <label
                      for="customRadio"
                        className="custom-control-label"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TimeSetting;
