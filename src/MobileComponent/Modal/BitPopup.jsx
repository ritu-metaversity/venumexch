import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PostGetStackApi, PostPlaceBet } from "../../App/Features/auth/authActions";
import "./BitPopup.css";

const BitPopup = ({ bitValue, datatattatattat,cssClasssss ,closePopUp}) => {
  // console.log(bitValue,"llllll")
  const { PostGetStack } = useSelector((state) => state.auth);
  const [Bitvalue, setBitValue] = useState(bitValue?.Odds);
  const [updated, setUpdated] = useState("");
  const [ConfirmBet, setConfirmBet] = useState(false);
  const [userIP, setUserIP] = useState("");
  // const [closePopUp, setClosePopUp] = useState(false);
  // const [cssClsssss, setCssClasssss] = useState("bet-modal");
  const {PostBetingOnGameDetail,GetGeolocationIP } = useSelector((state) => state.auth);
  let { id } = useParams();
console.log(bitValue?.Gamenamemeeee)
console.log(datatattatattat)
console.log(cssClasssss)
console.log(closePopUp)
  // const [getBetValue, setgetBetValue] = useState();
  // console.log(bitValue, "bitValuebitValue");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostGetStackApi());
  }, [dispatch]);
  const handleInput = (val) => {
    // console.log(val);
    setUpdated(val);
    if(bitValue?.Gamenamemeeee!=="Fancy "){
    setConfirmBet(true)}

    cssClasssss("bet-modal")
    // console.log(val + updated);
    datatattatattat("true");
  };
  // console.log(bitValue?.data);
  // const value = updated;
  // console.log(value);

  // const handleClick = (event) => {
  //   setUpdated(event.target.value);
  // };

  // console.log(userIP,"GetGeolocationIPGetGeolocationIP")


  const increment = () => {
    setBitValue(Bitvalue + 0.05);
  };
  const decrement = () => {
    setBitValue(Bitvalue - 0.05);
  };
  // const { PostGetStack } = useSelector((state) => state.auth);
  // console.log(token);

const userId = localStorage.getItem("userId");

useEffect(()=>{
  // const res = axios.get('https://geolocation-db.com/json/')
  // console.log("loaction");
  fetch('https://geolocation-db.com/json/').then(res=>res.json())
  .then((res)=>{
    //  console.log(res?.IPv4);
     setUserIP(res?.IPv4)
  })
},[])

// userIP
// updated
// bitValue?.vl  odds 
// bitValue?.data(color back lay )
// bitValue?.vl2  iBlack 
// bitValue?.cname  GAME NAME  
// bitValue?.marketId    marketId
// bitValue?.vl4   selection id 
// bitValue?.vl   Price value   
// id match id 
// t 
// window.navigator.userAgent     userAgent  
const handleSubmit=()=>{
let data =  {
    "userIp": userIP,
    "isFancy": bitValue?.isFancy===true?true:false,
    "isBack": bitValue?.isBack ==="back" ? true:false,
    "odds": bitValue?.Odds,
    "stake": updated,
    "name": bitValue?.cname,
    "marketName": bitValue?.vl2,
    "selectionId": bitValue?.selectionId,
    "priceValue": updated,
    // "marketName":bitValue?.marketNameeee,
    "placeTime": bitValue?.bettingTime,
    "marketId":bitValue?.marketId,
    "matchId": id,
    "t": "",
    "deviceInfo": {
       "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
       "browser": "Chrome",
       "device": "Macintosh",
       "deviceType": "desktop",
       "os": "Windows",
       "os_version": "windows-10",
       "browser_version": "108.0.0.0",
       "orientation": "landscape"
    }
 }
  dispatch(PostPlaceBet(data))
  if(updated!==""){
    closePopUp("false")
  }
  // let userAgent = navigator.userAgent;
  // let chromeAgent = userAgent.indexOf() > -1;
  // alert(userAgent)
}

const handleCloseButton=()=>{
  closePopUp("false")

}
  return (
    <div>
      {/* <div
        id="__BVID__31___BV_modal_outer_"
        style={{ position: "absolute", zINDEX: "1040" }}
      >
        <div
          id="__BVID__31"
          role="dialog"
          tabindex="-1"
          aria-labelledby="__BVID__31___BV_modal_title_"
          aria-describedby="__BVID__31___BV_modal_body_"
            className="modal fade show placebet-modal"
          aria-modal="true"
          style={{ display: "block" }}
        >
          <div   className="modal-dialog modal-md modal-dialog-centered">
            <div
              role="document"
              id="__BVID__31___BV_modal_content_"
                className="modal-content"
            > */}
      <div id="__BVID__31___BV_modal_body_" className="modal-body p-0">
        <div className="place-bet">
          <div>
            <form data-vv-scope="form-placebet" className="m-b-0">
              <div className="m-l-5 m-r-5 row d-block">
                <div className="col-12 p-t-5 p-l-5 p-r-5">
                  <h4 className="m-b-0">
                    <b>
                      {bitValue?.bitValue?.Odds === "" ? "Game" : bitValue?.cname}
                    </b>
                  </h4>
                </div>
              </div>
              <div className="row m-l-5 m-r-5 m-t-10">
                <div className="col-6 p-l-5 p-r-5">
                  <div className="float-right d-flex">
                    <button
                      type="button"
                      className="stakeactionminus btn"
                      onClick={decrement}
                    >
                      <span className="fa fa-minus"></span>
                    </button>{" "}
                    <input
                      type="number"
                      step="0.01"
                      value={Bitvalue}
                      // value={Bitvalue.toFixed(2)}
                      className="stakeinput stakeinputbuuton"
                    />
                    <button
                      type="button"
                      className="stakeactionminus btn"
                      onClick={increment}
                    >
                      <span className="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
                <div className="col-6 p-r-5 p-l-5">
                  <input
                    name="Amount"
                    type="text"
                    maxlength="10"
                    className="stakeinput stakefullinput"
                    aria-required="true"
                    aria-invalid="true"
                    value={updated === "" ? 0 : updated}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="row m-t-10 m-l-5 m-r-5">
                {/* {JSON.stringify(PostGetStack)} */}
                 { PostGetStack?.data && Object.values(PostGetStack?.data).map((key, value) => {
                    return (
                      <div className="col-4 p-l-5 p-r-5">
                            
                        <div className="btnVal" onClick={() => handleInput(key)}>
                          {/* <button
                            type="button"
                            className="btn btn-bet m-b-10  col-3" */}
                          {/* // > */}
                            +{key}
                          {/* </button> */}
                        </div>
                      </div>
                    );
                  })}
               

              </div>
              <div className="row m-t-10 m-l-5 m-r-5 p-b-20">
                
                <div className="col-6 p-l-5 p-r-5">
                  <button type="button" 
                  className="btn btn-cancel"
                  onClick={handleCloseButton}>
                    Cancel
                  </button>
                </div>
                <div className="col-6 p-l-5 p-r-5" >
                  <button
                    type="button"
                    disabled={updated===""?"disabled":""}
                    className="btn btn-submit"
                    onClick={handleSubmit}
                  >
                    Submit
                    <span className="d-block">
                      Profit: {(Bitvalue * updated - updated).toFixed(0)}
                    </span>
                  </button>
                </div>
              </div>
             { /*<div className="row m-t-10 m-l-5 m-r-5">
                <div className="col-12 p-l-5 p-r-5">
                  <h5 className="float-left">Confirm Bet Before Placing</h5>
                  <div className="switchToggle float-right m-t-5">
                    <input type="checkbox" id="switch" />{" "}
                    <label for="switch"></label>
                  </div>
                </div>
              </div>*/}

              {ConfirmBet ? (
                <>
                  <div>
                    <div class="row p-b-10 m-l-5 m-r-5">
                      <div class="col-4 p-l-5 p-r-5 text-left">
                        <span> {bitValue?.AllBookmakerData&&bitValue?.AllBookmakerData[0]?.nation} </span>
                      </div>
                      <div class="col-4 p-l-5 p-r-5 text-center">
                        {" "}
                        <span>
                          <span>
                            <b>0</b>
                          </span>
                        </span>
                      </div>
                      <div class="col-4 p-l-5 p-r-5 text-right">
                        <span class="positive">
                          <b>
                            {updated === "0"
                              ? 0.0
                              : (Bitvalue * updated - updated).toFixed(2)}
                          </b>
                        </span>
                      </div>
                    </div>
                    <div class="row p-b-10 m-l-5 m-r-5">
                      <div class="col-4 p-l-5 p-r-5 text-left">
                        <span> {bitValue?.AllBookmakerData&&bitValue?.AllBookmakerData[1]?.nation} </span>
                      </div>
                      <div class="col-4 p-l-5 p-r-5 text-center">
                        {" "}
                        <span>
                          <span>
                            <b>0</b>
                          </span>
                        </span>
                      </div>
                      <div class="col-4 p-l-5 p-r-5 text-right">
                        <span class="negative">
                          <b>{updated === "" ? "0.00" : -updated}</b>
                        </span>
                      </div>
                    </div>
                    {/* <div class="row p-b-10 m-l-5 m-r-5">
                      <div class="col-4 p-l-5 p-r-5 text-left">
                        <span> The Draw </span>
                      </div>
                      <div class="col-4 p-l-5 p-r-5 text-center">
                        {" "}
                        <span>
                          <span>
                            <b>0</b>
                          </span>
                        </span>
                      </div>
                      <div class="col-4 p-l-5 p-r-5 text-right">
                        <span class="negative">
                          <b>{updated === "" ? "0.00" : -updated}</b>
                        </span>
                      </div>
                    </div> */}
                  </div>
                </>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
      {/* </div>
          </div> */}
      {/* </div> */}
      {/* <div tabindex="0"> </div> */}
      {/* <div id="__BVID__31___BV_modal_backdrop_"   className="modal-backdrop"></div> */}
      {/* </div> */}
    </div>
  );
};

export default BitPopup;
