import React from "react";
import NavbarM from "../MobileComponent/NavbarM/NavbarM";
import MidPage from "../MobileComponent/MidPageM/Midpage";
import MFooter from "../MobileComponent/MMFooter/MFooter";
// import Footer from "../component/Footer/Footer";
import Eyeicon from "../MobileComponent/EyeIcon/Eyeicon";
import LeftMenu from "../MobileComponent/leftMenu/LeftMenu";
import "./LayoutForMobile.css";
import RightMenu from "../MobileComponent/RightMenu/RightMenu";
import { useState } from "react";
import BitPopup from "../MobileComponent/Modal/BitPopup";
import Modal from "react-bootstrap/Modal";
// import Mybets from "../MobileComponent/RightMenu/Mybets";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LayoutForMobile = () => {
  //  let  navigate =useNavigate()

  const [RightValue, setRightValue] = useState(false);
  const [LeftValue, setLeftValue] = useState(false);
  const [show, setShow] = useState(false);
  const [bitValue, setBitValue] = useState({});
  const [cssClsssssssssssss, setCssClassssssssss] = useState("");

  const [BetType, setBetType] = useState("");
  const [BetTypeFooter, setBetTypeFooter] = useState(false);

  const RightSideBarClose = (vl) => {
    console.log(vl,"RightSideBarCloseRightSideBarCloseRightSideBarClose")
    setRightValue(false);
    // setRightValue(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  const RightSideBar = (vl) => {
    console.log(vl,"RightSideBar")
    setRightValue(vl);
  };
  const LiftSideBar = (vl) => {
    setLeftValue(vl);
    // console.log(vl)
  };
  const datatata = (vl) => {
    // console.log(vl?.Odds ,"LayoutForMobileLayoutForMobile")
    setBitValue(vl);
    if (vl?.Odds === ""||vl?.Odds === "undefined") {
      setShow(false );
      // console.log("false")
    } else {
      setShow(true);
      // console.log(vl);
      setBetType(vl?.isBack);
    }
    // console.log(vl)
  };
  const eftMenuClose = (vl) => {
    setLeftValue(false);
    // console.log(vl);
  };


useEffect(()=>{

},[])

  const datatattatattat = (vl) => {
    setBetTypeFooter(vl);
  };

  const cssClasssss = (vl) => {
    console.log(vl)
    setCssClassssssssss(vl)
};
  return (
    <>
      <div className="wrapper">
        {/* <div className="main-cointainer right-menu-open" > */}
        <div
          className={`main-cointainer ${
            RightValue === true
              ? " right-menu-open"
              : LeftValue === true
              ? "left-menu-open"
              : ""
          }`}
        >
          {/* <div className={`main-cointainer ${ LeftValue===true? "left-menu-open" :""}`} >     */}

          <div>
            <NavbarM RightSideBar={RightSideBar} LiftSideBar={LiftSideBar} RightValue={RightValue}/>
          </div>
          <Outlet context={datatata} datatata={datatata} />

          <MFooter />
        </div>
        <div
          className={RightValue === true ? "right-menu" : ""}
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
        <div className="bottom-icon" >
          <Eyeicon />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <div
          className={`eighteen-plus  ${BetType}-border  ${
            BetTypeFooter ? "" : "modal-design"
          } ${cssClsssssssssssss?cssClsssssssssssss:""}` }
        >
          <Modal.Body>
            <BitPopup bitValue={bitValue} datatattatattat={datatattatattat} cssClasssss={cssClasssss}/>
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}

export default LayoutForMobile;
