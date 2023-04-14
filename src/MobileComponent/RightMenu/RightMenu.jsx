import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {PostBalance,Postisselfbyappurl, Postloginlogout,} from "../../App/Features/auth/authActions";
import "./RightMenu.css";


const RightMenu = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { PostTotalBalance, postisselfbyappurlData } = useSelector(
    (state) => state.auth
  );
  const [avaliablebalance, setAvaliablebalance] = useState("");

  let appUrll = window.location.hostname;

  useEffect(() => {
    setAvaliablebalance(PostTotalBalance?.data?.data?.balance);
  }, [PostTotalBalance]);

  const token = localStorage.getItem("TokenId");

  useEffect(() => {
    // console.log("balaaac");
    const time = setInterval(() => {
      if (token !== "") {


        dispatch(PostBalance());
      }
    }, 5000);
    return () => clearInterval(time);
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
      
       dispatch(Postloginlogout);
       localStorage.clear();
       navigate("./login");
    } else {

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
                    {avaliablebalance ? avaliablebalance : "0:00"}
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
            <div className="menu-lvl-1" onClick={() => handleInput("OpenBets")}>
              <div className="item">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png"
                />{" "}
                <span className="menu-name">Open Bets</span>
              </div>
            </div>
          </li>
          {postisselfbyappurlData?.data?.selfAllowed === true ? (
            <>
              <li>
                <div
                  className="menu-lvl-1"
                  onClick={() => handleInput("Deposit")}
                >
                  <div className="item">
                    <img src={"deposit"} alt="" className="deposit-image" />
                    <span className="menu-name">Deposit</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="menu-lvl-1"
                  onClick={() => handleInput("withDraw")}
                >
                  <div className="item">
                    <img src={"deposit"} alt="" />{" "}
                    <span className="menu-name">WithDraw</span>
                  </div>
                </div>
              </li>
            </>
          ) : (
            ""
          )}
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
          </li>

          <li>
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
          </li>

          <li>
            <div className="menu-lvl-1" onClick={() => handleInput("Rules")}>
              <div className="item">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/rules.png"
                />{" "}
                <span className="menu-name">Rules &amp; Regulations</span>
              </div>
            </div>
          </li>
          <li>
            <div
              className="menu-lvl-1 settings"
              onClick={() => handleInput("Settings")}
            >
              <div className="item">
                <img
                  alt=""
                  src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/setting.png"
                />{" "}
                <span className="menu-name">Settings</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ul className="logout-button">
        <li>
          <div
            className="menu-lvl-1 sign-out"
            onClick={() => handleInput("SignOut")}
          >
            <div className="item">
              <i className="fas fa-running m-r-20"></i>{" "}
              <span className="menu-name">Sign Out</span>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default RightMenu;
