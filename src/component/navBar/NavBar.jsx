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
  const [showTimes, setShowTimes] = useState(false);
  const [showZone, setShowZone] = useState("+05:30");
  const [movingMessage, setMovingMessage] = useState("");
  const dispatch = useDispatch();
  let userId = localStorage.getItem("userId");
  const token = localStorage.getItem("TokenId");
  const [selfAllowedd, SetselfAllowedd] = useState("");
  const userTypeInfo = localStorage.getItem("userTypeInfo");
  const usernameDemo = localStorage.getItem("usernameDemo");
  const [isSelfloading, setIsSelfLoading] = useState(true)

  useEffect(() => {
    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/enduser/get-user-message"
      )
      .then((response) => {

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
    if (localStorage.getItem("PassWordType") === "old") {
    } else {
      e.preventDefault();
      if (account === false) {
        // console.log("tre")
        setAccount(true);
      } else {
        setAccount(false);
        // console.log("false")
      }
    }
    //  console.log(window.width)
  };

  const liveTime = () => {
    let time = new Date();
    setDateState(time);
  };



  const handleModal = () => {
    if (localStorage.getItem("PassWordType") === "old") {
    } else {
      setShow(true);

    }
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
    if (showTimes === false) {
      // console.log("tre")
      setShowTimes(true);

    } else {
      setShowTimes(false);

      //  console.log("false")
    }
  };
  const hanldletimeZone = (vl) => {

    // if (vl === "+00:00") {
    //   // setDateState(vl+dateState)
    // } else {

    setShowZone(vl);
    // }
  };

  useEffect(() => {
    setInterval(liveTime, 5000);
    let appUrll = window.location.hostname;
    dispatch(Postisselfbyappurl({ appUrl: appUrll }));
  }, []);

  useEffect(() => {
    let appUrll = window.location.hostname;

    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/login/is-self-by-app-url",
        { appUrl: appUrll }
      )
      .then((res) => {
        setIsSelfLoading(false)

        SetselfAllowedd(res?.data?.data);

      });
  }, []);

  // const handleroute = () => {
  //   if (localStorage.getItem("PassWordType") === "old") {

  //   } else {
  //   navigate("./home")

  //   // }
  // }
  const handleHome = () => {
    if ((localStorage.getItem("PassWordType") === "old")) {
    } else {
      navigate("/home")
    }
  }
  return (



    <div className="nav newnav">

      {
        account ? <div className="overLay" onClick={() => setAccount(false)}></div> : ""
      }
      {
        showTimes ? <div className="overLay" onClick={() => setShowTimes(false)}></div> : ""
      }
      <header className="header">
        <marquee className="marquee">
          <div>{movingMessage}</div>
        </marquee>
        <div className="boxed-layout-wrapper">
          <Link

            to={localStorage.getItem("PassWordType") === "old" ? "/changepassword" : "/home"}
            className="router-link-exact-active router-link-active"
          >
            <div className="logo-area float-left">
              <img
                // onClick={handleroute}
                alt=""
                src={selfAllowedd?.logo}
                className="logo"
                style={{
                  height: " 90px",
                  width: "116px"
                }}
              />
            </div>
          </Link>
          <div className="clock float-left">
            <span>

              {moment(dateState).format("MMM DD YYYY")}

            </span>{" "}
            <span className="time" >

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

                data-toggle="dropdown"
                className="dropdown-toggle"
                style={{color:"#ffecc6 !important"}}
              >
                ( {showZone}
                <i className="fas fa-angle-down m-l-5  "></i> )
              </Link>
              <div className={`dropdown-menu ${showTimes === true ? "show" : "none"}`}>
                <Link

                  className="dropdown-item"
                  onClick={() => hanldletimeZone("+00:00")}
                >
                  System time - (GMT +00:00 )
                </Link>{" "}
                <Link

                  className="dropdown-item"
                  onClick={() => hanldletimeZone("+05:30")}
                  
                >
                  Your computer time - (GMT +05:30)
                </Link>{" "}
                <Link

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
              <li   >
                <Link  >
                  <i style={{color:"#ffecc6"}} className="fas fa-ruler-vertical m-r-5"></i>{" "}
                  <span style={{color:"#ffecc6"}} onClick={handleModal}>Rules</span>
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

                    data-toggle="dropdown"
                    className="dropdown-toggle"
                    onClick={handleAccount}
                  >
                    <i style={{color:"#ffecc6"}} className="fas fa-user m-r-5"></i> <span style={{color:"#ffecc6"}}>Account</span>
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
                      onClick={() => { setAccount(false) }}
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
                <li className="login_btn"  style={{color:"#ffecc6"}}>
                  <Link to="./login">
                    <i className="fas fa-running m-r-5"></i>{" "}
                    <span onClick={handlogout}>LogIn</span>
                  </Link>
                </li>
                {isSelfloading === true ? ""
                  :
                  selfAllowedd?.selfAllowed === true ?
                    <li className="login_btn" style={{color:"#ffecc6"}}>
                      <Link to="./signup">
                        <i className="fas fa-running m-r-5" style={{color:"#ffecc6"}}></i>{" "}
                        <span onClick={handlogout} style={{color:"#ffecc6"}}>SignUp</span>
                      </Link>
                    </li>
                    : ""}

              </> :
                <li style={{color:"#ffecc6"}}>
                  <Link to="./login">
                    <i className="fas fa-running m-r-5" style={{color:"#ffecc6"}}></i>{" "}
                    <span onClick={handlogout} style={{color:"#ffecc6"}}>LogOut</span>
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
