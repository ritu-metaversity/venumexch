import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setMrqueeClose as setMarqueeClose } from "../../App/Features/auth/authSlice";
import { PostBalance } from "../../App/Features/auth/authActions";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import "./NavbarM.css";


const NavbarM = ({ RightSideBar, LiftSideBar, RightValue, LeftValue }) => {
  let navigate = useNavigate();
  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isSelfloading, setIsSelfLoading] = useState(true)
  const { PostTotalBalance } = useSelector((state) => state.auth);
  const [sideBarOpen, setRightBar] = useState(false);
  const [leftBar, setLeftBar] = useState(false);
  const MrqueeClose = useSelector((state) => state.auth.MrqueeClose);
  const [scrollX, setscrollX] = useState(0);
  // console.log(isSelfloading, "isSelfloadingisSelfloading");


  useEffect(() => {
    setRightBar(RightValue);
  }, [RightValue]);

  const token = localStorage.getItem("TokenId");

  // useEffect(() => {
  //   if (token === null) {
  //     navigate("./home");
  //   }
  // }, [token]);

  const handlelogin = (vl) => {
    if (vl === "login") {

      navigate("/m/login");
    } else {
      navigate("/m/signup");

    }
  }


  const [movingMessage, setMovingMessage] = useState("");
  useEffect(() => {
    axios
      .post(
        "https://adminapi.247idhub.com/admin-new-apis/enduser/get-user-message"
      )
      .then((response) => {
        // console.log(response, "responseresponse");
        // console.log(response, "responseresponse");
        setMovingMessage(response?.data?.message);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("TokenId");

    if (token) {

      if (localStorage.getItem("PassWordType") === "old") {
      } else {


        dispatch(PostBalance());


        if (pathname.includes("m/gamedetail")) {
          const time = setInterval(() => {
            if (token !== "") {
              dispatch(PostBalance());
            }
          }, 1000);
          return () => clearInterval(time);
        }

        const time = setInterval(() => {
          if (token !== "") {
            dispatch(PostBalance());
          }
        }, 5000);
        return () => clearInterval(time);
      }
    }

  }, [token, pathname]);

  useEffect(() => {
    setLeftBar(LeftValue);
    LiftSideBar(LeftValue);
  }, [LeftValue, LiftSideBar]);

  const hanldeinput = (vl) => {
    if (sideBarOpen === false) {
      setRightBar(true);
      RightSideBar(true);
    } else {
      setRightBar(false);
      RightSideBar(false);
    }
  };

  const handleInputLiftmenu = (vl) => {
    if (leftBar === false) {
      setLeftBar(true);
      LiftSideBar(true);
    } else {
      setLeftBar(false);
      LiftSideBar(false);
    }
  };

  const handleCloseMarquee = () => {
    dispatch(setMarqueeClose(false));
  };

  const handleInput = () => {
    if (localStorage.getItem("PassWordType") === "old") {

    } else {

      setLeftBar(false);
      navigate("./home");
    }
  };

  const handleRules = () => {
    if (localStorage.getItem("PassWordType") === "old") {

    } else {

      navigate("./rules-casino")
    }
  };
  const handleback = () => {
    // "history.back()";
    // window.history.back();
    if (localStorage.getItem("PassWordType") === "old") {

    } else {

      if (pathname.includes("casino/")) {
        navigate("/home")
      } else {

        navigate(-1)
      }
    }
    // console.log("history.back()")
  };
  const userTypeInfo = localStorage.getItem("userTypeInfo");

  let appUrll = window.location.hostname.replace("www.","");

  const [selfAllowedd, SetselfAllowedd] = useState("");
  useEffect(() => {
    axios
      .post(
        `${REACT_APP_API_URL}/login/is-self-by-app-url`,
        { appUrl: appUrll }
      )
      .then((res) => {
        setIsSelfLoading(false)

        SetselfAllowedd(res?.data?.data);

      });
  }, [appUrll]);
  console.log(selfAllowedd);

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    ref.current.scroll({ left: ref.current.scrollLeft + scrollOffset })
    setscrollX(scrollX + scrollOffset);
  };

  // const token = localStorage.getItem("token");
  const [gameQtech, setGameQTech] = useState()
  const [gameAura, setGameAura] = useState()
  const [gameSuperNova, setGameSuperNova] = useState()

  useEffect(() => {
    axios.post(
      "https://adminapi.247idhub.com/admin-new-apis/user/alloted-casino-list", {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        setGameQTech(response?.data?.data.find((item) => item?.name === "QTech"))
        setGameAura(response?.data?.data.find((item) => item?.name === "Aura"))
        setGameSuperNova(response?.data?.data.find((item) => item?.name === "Super Nova"))
      })
  }, [])

  return (
    <div>
      <header className="header">
        {MrqueeClose === true ? (
          <div className="news">
            <marquee className="news-line">{movingMessage}</marquee>
            <i
              className="fas fa-times float-right"
              onClick={handleCloseMarquee}
            ></i>
          </div>
        ) : (
          ""
        )}

        <nav>
          {/* {window.location} */}
          {pathname === "/m/home" ? (
            <button
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
              onClick={handleInputLiftmenu}
              className="navbar-toggler"
            >
              <span className="fas fa-bars"></span>
            </button>
          ) : (
            <span className="navbar-toggler">
              <i
                onClick={handleback}
                className="fas fa-arrow-left m-r-10 m-t-5"
              ></i>
            </span>
          )}
          <div className="without-search">
            {/* ARROW */}

            {/* ARROW */}

            <div className="logo" style={{ height: "43px", marginTop: "-3px" }} onClick={handleInput}>
              {/* <Link href="/home"   className="router-link-exact-active router-link-active"> */}
              <img
                alt=""
                src={selfAllowedd?.logo}
                className="img-fluid"
                style={{
                  height: "44px",
                  width: "110px"
                }}
              />
              {/* </Link> */}
            </div>
            {token ? <div className="float-right">
              <span>
                <i className="fas fa-search v-t"></i>
              </span>
              <a className="rules-link cPointer" onClick={handleRules}>
                <i className="fas fa-ruler-vertical m-r-5"></i>
                <span>Rules</span>
              </a>{" "}
              <button className="balance-button" onClick={hanldeinput}>
                <i className="fas fa-user d-block"></i>{" "}
                <span className="balance">
                  {PostTotalBalance?.data?.data?.balance
                    ? Number(PostTotalBalance?.data?.data?.balance -
                      PostTotalBalance?.data?.data?.libality).toFixed(2)
                    : "0.00"}
                </span>
              </button>
            </div> :
              (isSelfloading === true ? ""
                :
                <div className="float-right login-signup">

                  {selfAllowedd?.selfAllowed === true ? (
                    <button className="_button_nav" onClick={handlelogin}>SignUp</button>
                  ) : (
                    ""
                  )}

                  <button className="_button_nav" onClick={() => handlelogin("login")}>Login</button>
                </div>)
            }
          </div>
        </nav>
        {token ?
          <div className="headerCasionSwip_Scrolll">
            {gameQtech?.active === true ?
              <li className="inner_game_name_caison_header" onClick={() => navigate("/m/International-home")}>International Casino</li>
              : ""}
            {gameAura?.active === true ?
              <li className="inner_game_name_caison_header" onClick={() => navigate("/m/Indian-home")}>Indian Casino</li>
              :
              (gameSuperNova?.active === true ?
                <li className="inner_game_name_caison_header" onClick={() => navigate("/m/Indian-home")}>Indian Casino</li>
                : "")}
            {gameQtech?.active === true ?
              <>  <li className="inner_game_name_caison_header" onClick={() => navigate("/m/Lottery-home")}>Lottery</li>
                <li className="inner_game_name_caison_header" onClick={() => navigate("/m/Slot-home")}>Slot Games</li>
                <li className="inner_game_name_caison_header" onClick={() => navigate("/m/Fantasy-home")}>Fantasy Games</li></>
              : ""
            }
          </div>
          :
          <div className="headerCasionSwip_Scrolll">

            <li className="inner_game_name_caison_header" >International Casino</li>
            <li className="inner_game_name_caison_header" >Indian Casino</li>
            <li className="inner_game_name_caison_header">Lottery</li>
            <li className="inner_game_name_caison_header" >Slot Games</li>
            <li className="inner_game_name_caison_header" >Fantasy Games</li>


          </div>
        }
      </header>
    </div>
  );
};

export default NavbarM;
