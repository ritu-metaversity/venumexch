import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getActiveSportList, postleftmenudataopen } from '../../App/Features/auth/authActions';
import './SideBar.css'
import SubSideBar from './SubSideBar';
import hours from "./sideBarHorse.6c8a9ff3.svg"
import axios from 'axios';

const SideBar = () => {
  const { pathname } = useLocation();

  const [valueForGame, setValueForGame] = useState(false)
  // const [gameiD, setGameId] = useState("")
  const [sideGameData, setSideGameData] = useState("")
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const { postleftmenudataopenData } = useSelector(state => state.auth)

  const handleBackSports = () => {
    // console.log("hello");
    navigate("/home")
    sendData(true);
  };


  useEffect(() => {
    dispatch(postleftmenudataopen())
  }, [])

  // console.log(postleftmenudataopenData, "fsdfsdfsdsfsd")


  const [leftmenuClose, setLeftMenuClose] = useState("false")
  const { getActiveSportListData } = useSelector(state => state.auth)
  useEffect(() => {
    // console.log("balaaac")

    dispatch(getActiveSportList())


  }, [])

  const handleRoute = (id, id2) => {
    // console.log(id, id2, "hgjkljkhbn")
    if ((localStorage.getItem("PassWordType") === "old")) {

    } else {
      navigate(`/game/${id2}/${id}`)
      // {`/game/${item?.sportName}/${item?.sportId}`}
      setValueForGame(true)
      setSideGameData({ "sportsid": id, "SportsName": id2 })
    }

  }

  const handeCasino = () => {
    if ((localStorage.getItem("PassWordType") === "old")) {
    } else {
      navigate("/Casino")
    }
  }
  // console.log(getActiveSportListData?.data?.data, "hgjkljkhbn")
  const sendData = (vl) => {
    setValueForGame(false)
  }

  useEffect(() => {
    if (window.location.href === ("")) {

      setValueForGame(false)
    }
  }, [])

  useEffect(() => {
    if (pathname.includes("/home")) {
      setValueForGame(false)
    }
  }, [pathname]);

  // const handeInplay = () => {
  //   if ((localStorage.getItem("PassWordType") === "old")) {
  //   } else {
  //     navigate("/home")
  //   }
  // }


  const [gameQtech, setGameQTech] = useState()
  const [gameAura, setGameAura] = useState()
  const [gameSuperNova, setGameSuperNova] = useState()
  const token = localStorage.getItem("TokenId");

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
    <>
      <div data-v-4732acba="" className="left-pane fdsfsdffs">
        {valueForGame === true ?

          <SubSideBar valueForGame={valueForGame} sideGameData={sideGameData} sendData={sendData} />

          :

          <aside data-v-4732acba="" className="menu">
            <nav data-v-4732acba="" className="tree-menu">
              <div data-v-4732acba="" className="left-menu-inner">
                <ul data-v-4732acba="" className="menu-column menu-lvl-0">
                  <Link  to={localStorage.getItem("PassWordType") === "old" ? "/changepassword" : "/home"} className="favourites-link download-apk">
                    <img
                      src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/inplay.png"
                      alt=""
                      className='game-icon'
                    />
                    <span 
                      className="link-name"> In-Play</span></Link>
                  {postleftmenudataopenData?.data &&
                    postleftmenudataopenData?.data ? (
                    postleftmenudataopenData?.data.map((item) => (


                      <li data-v-4732acba="">


                        <Link data-v-4732acba="" className="favourites-link" onClick={() => handleRoute(item?.sportId, item?.sportName)}>
                          {item?.sportId === 77 ?
                            <img src={hours}  className="game-icon" alt="" />
                            :
                            <img src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${item?.sportId === 14 ? 52 : item?.sportId}.png`} alt='' className="game-icon" alt="" />
                          }
                          <span data-v-4732acba="" className="link-name">
                            {item?.sportName}
                          </span></Link>
                      </li>))) : ""}
                  {/* {gameAura?.active === true ?
                    <Link
                      to={localStorage.getItem("PassWordType") === "old" ? "/changepassword" : "/m/Indian-home"}
                      className="favourites-link download-apk">
                      <img  src="/Casino_Logo/indian-casino.png" className="game-icon" alt="" />
                      <span 
                        className="link-name">India Casino</span>
                    </Link>
                    :
                    (gameSuperNova?.active === true ?
                      <Link
                        to={localStorage.getItem("PassWordType") === "old" ? "/changepassword" : "/m/Indian-home"}
                        className="favourites-link download-apk">
                        <img  src="/Casino_Logo/indian-casino.png" className="game-icon" alt="" />
                        <span 
                          className="link-name">India Casino</span>
                      </Link>
                      : "")} */}

                  {gameQtech?.active === true ?
                    <>
                      <Link
                        to={localStorage.getItem("PassWordType") === "old" ? "/changepassword" : "/m/International-home"}
                        className="favourites-link download-apk">
                        <img  src="/Casino_Logo/international-casinoletest.png" className="game-icon" alt="" />
                        <span 
                          className="link-name">International Casino</span>
                      </Link>
                      <Link
                        to={localStorage.getItem("PassWordType") === "old" ? "/changepassword" : "/m/Lottery-home"}
                        className="favourites-link download-apk">
                        <img  src="/Casino_Logo/lottery.png" className="game-icon" alt="" />
                        <span 
                          className="link-name">Lottery </span>
                      </Link>
                      <Link
                        to={localStorage.getItem("PassWordType") === "old" ? "/changepassword" : "/m/Slot-home"}
                        className="favourites-link download-apk">
                        <img  src="/Casino_Logo/slots.png" className="game-icon" alt="" />
                        <span 
                          className="link-name">Slots Games</span>
                      </Link>
                      <Link
                        to={localStorage.getItem("PassWordType") === "old" ? "/changepassword" : "/m/Fantasy-home"}
                        className="favourites-link download-apk">
                        <img  src="/Casino_Logo/fantasy-game.png" className="game-icon" alt="" />
                        <span 
                          className="link-name">Fantasy Games</span>
                      </Link>
                    </> : ""
                  }

                </ul>

              </div>
            </nav>
          </aside>}
      </div>
    </>
  )
}

export default SideBar