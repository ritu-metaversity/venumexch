import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postleftmenudataopen } from "../../App/Features/auth/authActions";

const SubSideBar = ({ valueForGame, sideGameData, sendData }) => {
  const dispatch = useDispatch()
  // const [ valueForGame,setValueForGame]=useState("false")
  // console.log(valueForGame.valueForGame,"subside bar line 7")
  //     const handleBackSports=()=>{
  //         datatatt(false)
  //       }
  let navigate = useNavigate();
  const { postleftmenudataopenData } = useSelector(state => state.auth)

  console.log(sideGameData, "sdfsjhfs");
  const handleBackSports = () => {
    // console.log("hello");
    navigate("/home")
    sendData(true);
  };


  useEffect(() => {
    dispatch(postleftmenudataopen())
  }, [sideGameData])

  console.log(postleftmenudataopenData, "postleftmenudataopenData")
  return (
    <div>

      {valueForGame === true ? (
        //   <div   className="left-pane" style={{ height: ""}} >
        //     {console.log("ture 15 line ")}
        <aside className="menu" style={{ background: "#fff", height: "100vh" }}>
          <nav className="tree-menu">
            <div className="left-menu-inner">
              <ul className="menu-column menu-prev sport-type-Football">
                <li onClick={() => handleBackSports()}>
                  <Link href="/home" className="home-link">
                    <i className="fas fa-home"></i>{" "}
                    <span
                      className="link-name"

                    >
                      Sports
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/game/1"
                    className="link-lvl-sport router-link-exact-active router-link-active"
                  >
                    <img
                      src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/${sideGameData?.sportsid}.png`}
                      className="game-icon"
                      alt=""
                    />{" "}
                    <span className="link-name">{sideGameData?.SportsName}</span>
                  </Link>
                </li>

                <li>
                  <Link href="/" className="link-lvl-prev">
                    <i className="fas fa-chevron-circle-left"></i>{" "}
                    <span className="link-name">Previous</span>
                  </Link>
                </li>
                <span>
                  <li></li>
                </span>
              </ul>
            </div>
          </nav>
        </aside>
        //   </div>`
      ) : (
        ""
      )}

    </div>
  );
};

export default SubSideBar;
