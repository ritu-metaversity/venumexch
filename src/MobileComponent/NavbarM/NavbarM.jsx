import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PostBalance } from "../../App/Features/auth/authActions";

import "./NavbarM.css";

const NavbarM = ({RightSideBar,LiftSideBar}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
 

  const { PostTotalBalance } = useSelector(state => state.auth)
  const [sideBarOpen, setRightBar] = useState(false);
  const [leftBar, setLeftBar] = useState(false);
  const [MrqueeClose, setMarqueeClose] = useState(true);

console.log(pathname)
  // useEffect(()=>{

  //   PostTotalBalance?.data?.data?.libality
  //   },[PostTotalBalance])
    
    // useEffect(()=>{
    //   if()
    //    console.log("balaaac")
    //    dispatch(PostBalance())
    // },[dispatch])

    const token = localStorage.getItem("TokenId")
    
    useEffect(()=>{
      //  console.log("balaaac")
    if(token){
       dispatch(PostBalance())
    }
    },[dispatch, token])


  // console.log(props.LeftValueData)
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
    // console.log("ehsdfksdfsdfsdknjkfbsdjknfk");
    if (leftBar === false) {
      setLeftBar(true);
      LiftSideBar(true);
    } else {
      setLeftBar(false);
      LiftSideBar(false);
    }
  };

  const handleCloseMarquee = () => {
    setMarqueeClose(false);
  };
  const handleInput = () => {
    // console.log("helloi");
    setLeftBar(false);
    navigate("./home");
  };
  const handleRules = () => {
    navigate("./rules-casino");
  };
  return (
    <div>
      <header className="header">
        {MrqueeClose === true ? (
          <div className="news">
            <marquee className="news-line">
              Greetings, We are happy to announce that we have bring all new
              security feature for all admin and user panels. We request all to
              make full use of this feature and avoid any fraudulent
              transaction.
            </marquee>
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
            {pathname==="/m/home" ?
            <button
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
              onClick={handleInputLiftmenu}
              className="navbar-toggler"
            >
              <span className="fas fa-bars"></span>
            </button>:


<span  className="navbar-toggler"><i  onClick="history.back()" className="fas fa-arrow-left m-r-10 m-t-5"></i></span>
            

            }
          <div className="without-search">
            

            {/* ARROW */}


            {/* ARROW */}
            <div className="logo" onClick={handleInput}>
              {/* <Link href="/home"   className="router-link-exact-active router-link-active"> */}
              <img alt=""src="https://d1arlbwbznybm5.cloudfront.net/v1/static/themes/lordsexch.com/mobile/logo.png"
                className="img-fluid"
                style={{ height: "40px" }}
              />
              {/* </Link> */}
            </div>
            <div className="float-right">
              <span>
                <i className="fas fa-search v-t"></i>
              </span>
              <a className="rules-link" onClick={handleRules}>
                <i className="fas fa-ruler-vertical m-r-5"></i>
                <span>Rules</span>
              </a>{" "}

              <button className="balance-button" onClick={hanldeinput}>

                <i className="fas fa-user d-block"></i>{" "}
                <span className="balance">{PostTotalBalance?.data?.data?.balance?PostTotalBalance?.data?.data?.balance:"0.00"}</span>

                
              </button>

            </div>
          </div>
        </nav>
        {/* <div class="row header-b-menu">
          <div class="col election">
            <a href="/m/gamedetail/1702261800" class="text-link">
              Election 2023
            </a>
          </div>
        </div> */}
      </header>
    </div>
  );
};

export default NavbarM;
