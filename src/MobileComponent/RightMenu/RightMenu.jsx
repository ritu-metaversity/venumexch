import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  PostBalance,
  Postisselfbyappurl,
  Postloginlogout,
} from "../../App/Features/auth/authActions";
import "./RightMenu.css";
import deposit from "./depositicon.png";
import withdraw from "./withdrawicon.avif";

const RightMenu = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // console.log(props)
  const { PostTotalBalance, postisselfbyappurlData } = useSelector(
    (state) => state.auth
  );
  const [avaliablebalance, setAvaliablebalance] = useState("");

  let appUrll = window.location.hostname;
  // let appUrll = "localhost";
console.log(postisselfbyappurlData?.data?.logo,"postisselfbyappurlDatapostisselfbyappurlData")
  useEffect(() => {
    setAvaliablebalance(PostTotalBalance?.data?.data?.balance);
  }, [PostTotalBalance]);
  // console.log(PostTotalBalance?.data?.data?.libality)
  // console.log(PostTotalBalance)

  const token = localStorage.getItem("TokenId");
  const userTypeInfo = localStorage.getItem("userTypeInfo");
  useEffect(() => {
    const token = localStorage.getItem("TokenId");
    if (token) {

      if (localStorage.getItem("PassWordType") === "old") {
      } else {
        const time = setInterval(() => {
          dispatch(PostBalance());
        }, 5000);
        return () => clearInterval(time);
      }
    }

  }, [token]);

  useEffect(() => {
    dispatch(Postisselfbyappurl({ appUrl: appUrll }));
  }, [appUrll]);

  const handleInput = (vl) => {
    props.RightSideBarClose(false);
    if (vl === "OpenBets") {
      navigate("./mybets");
    } else if (vl === "Betting") {
      navigate("./profitloss");
    } else if (vl === "Deposit") {
      navigate("./deposit");
    } else if (vl === "withDraw") {
      navigate("./withDraw");
    } else if (vl === "TransferStatement") {
      navigate("./transferstatement");
    } else if (vl === "Message") {
      navigate("./message");
    } else if (vl === "TimeSetting") {
      navigate("./TimeSetting");
    } else if (vl === "ChangePassword") {
      navigate("./changepassword");
    } else if (vl === "SecureAuth") {
      navigate("./secureauth");
    } else if (vl === "Rules") {
      navigate("./rules-regulations");
    } else if (vl === "Settings") {
      navigate("./Settings");
    } else if (vl === "SignOut") {
      navigate("./home");
      localStorage.clear();
    } else {
      dispatch(Postloginlogout);
      localStorage.clear();
      navigate("./home");
    }
  };

  const userId = localStorage.getItem("userId");

  return (
    <>
      <div className="menu-top-wrap">
        <div className="account-overview">
          <p className="login-name">{userId}/INR</p>
          <div className="menu-item">
            <p className="label">
              <img
                alt=""
                src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/balance-info.png"
              />{" "}
              <span>Balance Information</span>
            </p>
            <div className="content">
              <div className="group">
                <div>Available Credit:</div>
                <span>
                  <strong>
                    {PostTotalBalance?.data?.data?.balance
                      ? PostTotalBalance?.data?.data?.balance -
                      PostTotalBalance?.data?.data?.libality
                      : "0:00"}
                  </strong>
                </span>
              </div>
              <div className="group">
                <div>Credit Limit:</div>
                <span>
                  {PostTotalBalance?.data?.data?.creditLimit
                    ? PostTotalBalance?.data?.data?.creditLimit
                    : "0:00"}
                </span>
              </div>
              <div className="group">
                <div>Winnings:</div>
                {/* <span   className="negative">{PostTotalBalance?.data?.data?.winnings ? PostTotalBalance?.data?.data?.winnings: "0:00"}</span> */}
                {PostTotalBalance?.data?.data?.winnings > 0 ? (
                  <span className="negative" style={{ color: "green" }}>
                    {PostTotalBalance?.data?.data?.winnings
                      ? PostTotalBalance?.data?.data?.winnings
                      : "0:00"}
                  </span>
                ) : (
                  <span className="negative">
                    {PostTotalBalance?.data?.data?.winnings
                      ? PostTotalBalance?.data?.data?.winnings
                      : "0:00"}
                  </span>
                )}
              </div>
              <div className="group">
                <div>Net Exposure:</div>
                <span>
                  {PostTotalBalance?.data?.data?.libality
                    ? PostTotalBalance?.data?.data?.libality
                    : "0:00"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <ul className="right-menu-bottom">
          <li>
            {/* <Link href="/m/mybets"   className=""> */}
            <div className="menu-lvl-1" onClick={() => handleInput("OpenBets")}>
              <div className="item">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png"
                />{" "}
                <span className="menu-name">Open Bets</span>
              </div>
            </div>
            {/* </Link> */}
          </li>
          {
            userTypeInfo === "2" ?
              "" : (postisselfbyappurlData?.data?.selfAllowed === true ? (
                <>
                  <li>
                    {/* <Link href="/m/mybets"   className=""> */}
                    <div
                      className="menu-lvl-1"
                      onClick={() => handleInput("Deposit")}
                    >
                      <div className="item">
                        <img
                          src={deposit}
                          alt=""
                          style={{
                            width: "22px",
                            marginLeft: "0%",
                          }}
                          className="deposit-image"
                        />
                        <span className="menu-name">Deposit</span>
                      </div>
                    </div>
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link href="/m/mybets"   className=""> */}
                    <div
                      className="menu-lvl-1"
                      onClick={() => handleInput("withDraw")}
                    >
                      <div className="item">
                        <img
                          src={withdraw}
                          style={{
                            width: "22px",
                            marginLeft: "0%",
                          }}
                          alt=""
                        />{" "}
                        <span className="menu-name">WithDraw</span>
                      </div>
                    </div>
                    {/* </Link> */}
                  </li>
                </>
              ) : (
                ""
              ))
          }

          <li>
            <div className="menu-lvl-1" onClick={() => handleInput("Betting")}>
              <div className="item">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/betting-p-l.png"
                />{" "}
                <span className="menu-name">Betting P&amp;L</span>
              </div>
            </div>
          </li>
          <li>
            {/* <Link href="/m/transfer-statement"   className=""> */}
            <div
              className="menu-lvl-1"
              onClick={() => handleInput("TransferStatement")}
            >
              <div className="item">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/transfer-statement.png"
                />{" "}
                <span className="menu-name">Account Statement</span>
              </div>
            </div>
            {/* </Link> */}
          </li>
          {/* <li>
         
               <div   className="menu-lvl-1" onClick={()=>handleInput("Message")}>
                  <div   className="item">
                     <img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/message.png"/> <span   className="menu-name">Message</span>
                  </div>
               </div>
            
         </li>
         <li>

               <div   className="menu-lvl-1" onClick={()=>handleInput("TimeSetting")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/time.png"/> <span   className="menu-name">Time Setting</span></div>
               </div>

         </li> */}
          <li>
            {/* <Link href="/m/changepassword"   className=""> */}
            <div
              className="menu-lvl-1"
              onClick={() => handleInput("ChangePassword")}
            >
              <div className="item">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/change-password.png"
                />{" "}
                <span className="menu-name">Change Password</span>
              </div>
            </div>
            {/* </Link> */}
          </li>
          {/* <li>

               <div   className="menu-lvl-1" onClick={()=>handleInput("SecureAuth")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/change-password.png"/> <span   className="menu-name">Secure Auth</span></div>
               </div>

         </li> */}
          <li>
            {/* <Link href="/m/rules-regulations"   className=""> */}
            <div className="menu-lvl-1" onClick={() => handleInput("Rules")}>
              <div className="item">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/rules.png"
                />{" "}
                <span className="menu-name">Rules &amp; Regulations</span>
              </div>
            </div>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link href="/m/settings"   className=""> */}
            <div
              className="menu-lvl-1 settings"
              onClick={() => handleInput("Settings")}
            >
              <div className="item ">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/setting.png"
                />{" "}
                <span className="menu-name">Settings</span>
              </div>
            </div>
          </li>
          <li>
            {/* <Link href="javascript:void(0)"> */}
            <div
              className="menu-lvl-1 sign-out"
              onClick={() => handleInput("SignOut")}
            >
              <div className="item signItem">
                <i className="fas fa-running m-r-20"></i>{" "}
                <span className="menu-name">Sign Out</span>
              </div>
            </div>
            {/* </Link> */}
          </li>
        </ul>
        <ul className="logout-button">

        </ul>
      </div>

    </>
  );
};

export default RightMenu;
