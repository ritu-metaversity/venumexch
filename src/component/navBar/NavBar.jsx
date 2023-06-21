import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Rules from "./Rules";
import axios from "axios";
import { Postisselfbyappurl, Postloginlogout } from "../../App/Features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
const NavBar = () => {
  let navigate = useNavigate();
  const [account, setAccount] = useState(false);
  const [dateState, setDateState] = useState();
  const [show, setShow] = useState(false);
  const [showTimes, setShowTimes] = useState("none");
  const [showZone, setShowZone] = useState("+05:30");
  const [movingMessage, setMovingMessage] = useState("");
  const dispatch = useDispatch();
  let userId = localStorage.getItem("userId");
  const token = localStorage.getItem("TokenId");
  const [selfAllowedd, SetselfAllowedd] = useState("");
  const userTypeInfo = localStorage.getItem("userTypeInfo");
  const usernameDemo = localStorage.getItem("usernameDemo");

  useEffect(() => {
    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/enduser/get-user-message"
      )
      .then((response) => {
        console.log(response, "responseresponse");
        setMovingMessage(response?.data?.message);
      });
  }, []);
  const { postisselfbyappurlData, PostTotalBalance } = useSelector(
    (state) => state.auth
  );
  // // console.log();
  // useEffect(() => {
  //   if (token === null) {
  //     navigate("./login");
  //     // console.log("dushyantdlaflkjsdjd")
  //   }
  // }, [token]);

  const handleAccount = (e) => {
    // console.log("accounts")
    e.preventDefault();
    if (account === false) {
      // console.log("tre")
      setAccount(true);
    } else {
      setAccount(false);
      // console.log("false")
    }
    //  console.log(window.width)
  };

  const liveTime = () => {
    let time = new Date();
    setDateState(time);
  };

  setInterval(liveTime, 5000);


  const handleModal = () => {
    setShow(true);
  };

  const handlogout = () => {
    //  console.log("hello local   ")
    localStorage.removeItem("TokenId");
    setAccount(false);
    dispatch(Postloginlogout);
    localStorage.clear();

    navigate("./login")
  };
  const handleClose = () => {
    setShow(false);
  };
  const hanldeTime = () => {
    if (showTimes === "none") {
      // console.log("tre")
      setShowTimes("show");
    } else {
      setShowTimes("none");
      //  console.log("false")
    }
  };
  const hanldletimeZone = (vl) => {
    console.log(vl, "sfdfsdfsdfsdf")
    // if (vl === "+00:00") {
    //   // setDateState(vl+dateState)
    // } else {

    setShowZone(vl);
    // }
  };
  let appUrll = window.location.hostname;

  useEffect(() => {
    dispatch(Postisselfbyappurl({ appUrl: appUrll }));
  }, [appUrll]);

  useEffect(() => {
    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/login/is-self-by-app-url",
        { appUrl: appUrll }
      )
      .then((res) => {
        // setIsSelfLoading(false)

        SetselfAllowedd(res?.data?.data);

      });
  }, [appUrll]);
  console.log(selfAllowedd)
  return (
    <div className="nav newnav">
      {
        account ? <div className="overLay" onClick={() => setAccount(false)}></div> : ""
      }

      <header className="header">
        <marquee className="marquee">
          <div>{movingMessage}</div>
        </marquee>
        <div className="boxed-layout-wrapper">
          <Link
            to="/home"
            className="router-link-exact-active router-link-active"
          >
            <div className="logo-area float-left">
              <img
                alt=""
                src={selfAllowedd?.logo}
                className="logo"
                style={{ marginTop: "-12px", height: " 90px" }}
              />
            </div>
          </Link>
          <div className="clock float-left">
            <span>

              {moment(dateState).format("MMM DD YYYY")}

            </span>{" "}
            <span className="time">

              { }
              {
                showZone === "+00:00" ?
                  moment(dateState).subtract(330, 'm').format("H:MM:ss") :
                  moment(dateState).format("H:MM:ss")
              }

            </span>
            <span
              className="clock-timezone-settings dropdown show"
              onClick={hanldeTime}
            >
              <Link
                to="/home"
                data-toggle="dropdown"
                className="dropdown-toggle"
              >
                ( {showZone}
                <i className="fas fa-angle-down m-l-5  "></i> )
              </Link>
              <div className={`dropdown-menu ${showTimes}`}>
                <Link
                  to="/home"
                  className="dropdown-item"
                  onClick={() => hanldletimeZone("+00:00")}
                >
                  System time - (GMT +00:00 )
                </Link>{" "}
                <Link
                  to="/home"
                  className="dropdown-item"
                  onClick={() => hanldletimeZone("+05:30")}
                >
                  Your computer time - (GMT +05:30)
                </Link>{" "}
                <Link
                  to="/home"
                  className="dropdown-item"
                  onClick={() => hanldletimeZone("+05:30")}
                >
                  India Standard time - (GMT +05:30)
                </Link>
              </div>
            </span>
          </div>
          <div className="infobar float-right">
            <ul className="linkbar">
              <li className="search-container">
                <div className="search">
                  <div className="placeholder-wrapper">
                    <div className="apl-form">
                      <i className="fas fa-search"></i>{" "}
                      <input
                        placeholder="Search Events"
                        type=""
                        name=""
                        className="search-input"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {token !== null ?
                  <p>Logged in as - {userTypeInfo === "2" ? usernameDemo : userId}</p>
                  : ""
                }



                {token !== null ?
                  <p className="last-login">
                    Available Balance : <span>{(PostTotalBalance?.data?.data?.balance
                      ? (Number(PostTotalBalance?.data?.data?.balance -
                        PostTotalBalance?.data?.data?.libality).toFixed(2))
                      : "0:00")} </span>



                  </p>

                  : ""

                }

                {token !== null ?
                  <p className="last-login">
                    Expo : <span>{(PostTotalBalance?.data?.data?.libality
                      ? (Number(
                        PostTotalBalance?.data?.data?.libality).toFixed(2))
                      : "0:00")} </span>



                  </p>

                  : ""

                }

              </li>
              <li>
                <Link to="home">
                  <i className="fas fa-ruler-vertical m-r-5"></i>{" "}
                  <span onClick={handleModal}>Rules</span>
                </Link>
              </li>
              <Modal
                size="lg"
                className="rules-modal"
                show={show}
                onHide={handleClose}
                style={{ left: "unset" }}
              //  aria-labelledby="example-modal-sizes-title-xxl-down"
              >
                <div style={{ marginTop: "0px" }}>
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-xxl-down">
                      Rules
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Rules />
                  </Modal.Body>
                </div>
              </Modal>

              {/* <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
                      <Modal/> */}
              {token !== null ?
                <li className="dropdown">

                  <Link
                    to="/home"
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                    onClick={handleAccount}
                  >
                    <i className="fas fa-user m-r-5"></i> <span>Account</span>
                  </Link>
                  {/* <div   className="dropdown-menu show"> */}
                  <div
                    className={account ? "dropdown-menu show" : "dropdown-menu"}
                  >
                    <Link
                      to="/mybets"
                      className="dropdown-item"
                      onClick={() => setAccount(false)}
                    >
                      My Bets
                    </Link>{" "}
                    <Link
                      to="/p&l"
                      className="dropdown-item"
                      onClick={() => setAccount(false)}
                    >
                      Betting Profit and Loss
                    </Link>{" "}
                    <Link
                      to="./accountstatement"
                      className="dropdown-item"
                      onClick={() => setAccount(false)}
                    >
                      Account Statement
                    </Link>{" "}
                    {/* <Link
                    to="/transferstatement"
                    className="dropdown-item"
                    onClick={() => setAccount(false)}
                  >
                    Transfer Statement
                    </Link>{" "}*/}
                    <Link
                      to="/changepassword"
                      className="dropdown-item"
                      onClick={() => setAccount(false)}
                    >
                      Change Password
                    </Link>{" "}
                    {/*  <Link
                    to="/secureauth"
                    className="dropdown-item"
                    onClick={() => setAccount(false)}
                  >
                    Secure Auth
                  </Link>*/}
                    {/* <Link
                    to="/message"
                    className="dropdown-item"
                    onClick={() => setAccount(false)}
                  >
                    Message
                  </Link>*/}
                    {
                      userTypeInfo === "2" ?
                        "" : (postisselfbyappurlData?.data?.selfAllowed === true ? (
                          <>
                            <Link
                              to="/deposit"
                              className="dropdown-item"
                              onClick={() => setAccount(false)}
                            >
                              Deposit
                            </Link>
                            <Link
                              to="/withDraw"
                              className="dropdown-item"
                              onClick={() => setAccount(false)}
                            >
                              Withdraw
                            </Link>
                          </>) : (
                          ""
                        ))
                    }
                  </div>
                </li> : ""}

              {token === null ? <>
                <li className="login_btn">
                  <Link to="./login">
                    <i className="fas fa-running m-r-5"></i>{" "}
                    <span onClick={handlogout}>LogIn</span>
                  </Link>
                </li>
                <li className="login_btn">
                  <Link to="./signup">
                    <i className="fas fa-running m-r-5"></i>{" "}
                    <span onClick={handlogout}>SignUp</span>
                  </Link>
                </li></> :
                <li>
                  <Link to="./login">
                    <i className="fas fa-running m-r-5"></i>{" "}
                    <span onClick={handlogout}>LogOut</span>
                  </Link>
                </li>

              }


            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
