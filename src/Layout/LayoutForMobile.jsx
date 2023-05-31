import React from "react";
import NavbarM from "../MobileComponent/NavbarM/NavbarM";
import MidPage from "../MobileComponent/MidPageM/Midpage";
import MFooter from "../MobileComponent/MMFooter/MFooter";
// import Footer from "../component/Footer/Footer";
import Eyeicon from "../MobileComponent/EyeIcon/Eyeicon";
import { AiOutlineArrowUp } from "react-icons/ai";
import LeftMenu from "../MobileComponent/leftMenu/LeftMenu";
import "./LayoutForMobile.css";
import RightMenu from "../MobileComponent/RightMenu/RightMenu";
import { useState } from "react";
import BitPopup from "../MobileComponent/Modal/BitPopup";
import Modal from "react-bootstrap/Modal";
// import Mybets from "../MobileComponent/RightMenu/Mybets";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postvalidatejwttoken } from "../App/Features/auth/authActions";

export let navRef;
const LayoutForMobile = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [RightValue, setRightValue] = useState(false);
  const [LeftValue, setLeftValue] = useState(false);
  const [show, setShow] = useState(false);
  const [bitValue, setBitValue] = useState({});
  const [cssClsssssssssssss, setCssClassssssssss] = useState("");

  const [BetType, setBetType] = useState("");
  const [BetTypeFooter, setBetTypeFooter] = useState(false);

  const { PostvalidatejwttokenDataError } = useSelector((state) => state.auth);
  const token = localStorage.getItem("TokenId");

  //donot touch 
  navRef = navigate
  //donot touch 
  const RightSideBarClose = (vl) => {
    setRightValue(false);
  };

  useEffect(() => { }, []);

  // passwordtype
  // :
  // "old"
  // const PassWordType = localStorage.getItem("PassWordType");

  useEffect(() => {
    if (localStorage.getItem("PassWordType") === "old") {
    } else {
      const time = setInterval(() => {
        if (token) {

          dispatch(Postvalidatejwttoken());
        }
      }, 5000);
      return () => clearInterval(time);
    }
  }, [token]);
  console.log(window.location.pathname, "window.location.pathname")
  // /m/game/
  // /m/casino-list

  // useEffect(() => {

  //   if (PostvalidatejwttokenDataError?.status === false) {
  //     localStorage.clear();
  //     navigate("/m/home");

  //     // navigate("/");
  //   }
  // }, [PostvalidatejwttokenDataError]);

  // JWT Token Expired
  const handleClose = () => {
    setShow(false);
  };

  const RightSideBar = (vl) => {
    setRightValue(vl);
  };
  const LiftSideBar = (vl) => {
    setLeftValue(vl);
  };
  const datatata = (vl) => {
    setBitValue(vl);
    if (vl?.Odds === "" || vl?.Odds === "undefined") {
      setShow(false);
    } else {
      setShow(true);
      setBetType(vl?.isBack);
    }
  };
  // console.log(LeftValue)
  const eftMenuClose = (vl) => {
    setLeftValue(vl);
    // console.log(vl);
  };

  useEffect(() => { }, []);

  const datatattatattat = (vl) => {
    setBetTypeFooter(vl);
  };

  const cssClasssss = (vl) => {
    // console.log(vl)
    setCssClassssssssss(vl);
  };
  const closePopUp = (vl) => {
    setShow(false);
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
       in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const handleMenuClose = () => {
    setRightValue(false);
    setLeftValue(false);
  };
  const MrqueeClose = useSelector((state) => state.auth.MrqueeClose);

  return (
    <>
      <div className="wrapper">
        {/* <div className="main-cointainer right-menu-open" > */}
        <div
          className={`main-cointainer ${RightValue === true && token !== null
            ? " right-menu-open"
            : LeftValue === true
              ? "left-menu-open"
              : ""
            }`}
        // style
        >
          {/* <div className={`main-cointainer ${ LeftValue===true? "left-menu-open" :""}`} >     */}

          <div>
            <NavbarM
              RightSideBar={RightSideBar}
              LiftSideBar={LiftSideBar}
              RightValue={RightValue}
              LeftValue={LeftValue}
            />
          </div>
          <div style={{ marginTop: MrqueeClose ? "" : "-25px" }}>
            <Outlet context={datatata} datatata={datatata} />
          </div>

          <MFooter />
        </div>
        {RightValue === true || LeftValue === true ? (
          <div className="overlay-rignt-menu" onClick={handleMenuClose}></div>
        ) : (
          ""
        )}

        <div
          className={RightValue === true && token !== null ? "right-menu" : ""}
          style={{ overflowY: "hidden " }}
        >
          <RightMenu RightSideBarClose={RightSideBarClose} />
        </div>

        <ul
          className={LeftValue === true ? "left-menu" : "d-none"}
          style={{ overflowY: "auto" }}
        >
          <LeftMenu eftMenuClose={eftMenuClose} />
        </ul>

        {/* <div className="bottom-icon arrowUp"> */}

        <button
          className="btnnnnnnnn"
          onClick={scrollToTop}
          style={{
            width: "40px",
            height: "42px",
            display: visible ? "block" : "none",
            zIndex: "2",
            marginBottom: "29px",
          }}
        >
          <AiOutlineArrowUp size={25} />
        </button>

        {/* </div> */}

        <div className="bottom-icon" style={{ width: "40px", height: "42px" }}>
          <Eyeicon style={{ fontSize: "22px" }} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <div
          className={`eighteen-plus  ${BetType}-border  ${BetTypeFooter ? "" : "modal-design"
            } ${cssClsssssssssssss ? cssClsssssssssssss : ""}`}
        >
          <Modal.Body style={{ marginLeft: "-72% !important" }}>
            <BitPopup
              bitValue={bitValue}
              datatattatattat={datatattatattat}
              cssClasssss={cssClasssss}
              closePopUp={closePopUp}
            />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default LayoutForMobile;
