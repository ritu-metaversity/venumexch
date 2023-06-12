import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getActiveSportList, postleftmenudataopen } from '../../App/Features/auth/authActions';
import './SideBar.css'
import SubSideBar from './SubSideBar';
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

  console.log(postleftmenudataopenData, "fsdfsdfsdsfsd")


  const [leftmenuClose, setLeftMenuClose] = useState("false")
  const { getActiveSportListData } = useSelector(state => state.auth)
  useEffect(() => {
    // console.log("balaaac")

    dispatch(getActiveSportList())


  }, [dispatch])

  const handleRoute = (id, id2) => {
    console.log(id, id2, "hgjkljkhbn")
    // navigate(`/game/${id}`)
    setValueForGame(true)
    setSideGameData({ "sportsid": id, "SportsName": id2 })
    // setGameName(id2)
    // setGameId(id)

    //  console.log("paresnt to child ")
  }

  // console.log(getActiveSportListData?.data?.data, "hgjkljkhbn")
  const sendData = (vl) => {
    setValueForGame(false)
  }

  useEffect(() => {
    if (window.location.href === ("")) {

      setValueForGame(false)
    }
  }, [window.location.href])

  useEffect(() => {
    if (pathname.includes("/home")) {
      setValueForGame(false)
    }
  }, [pathname]);

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
                  <Link data-v-91c481c8="" to="/home" class="favourites-link download-apk">
                    <img
                      src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/inplay.png"
                      alt=""
                      className='game-icon'
                    />
                    <span data-v-91c481c8=""
                      class="link-name"> In-Play</span></Link>
                  {postleftmenudataopenData?.data &&
                    postleftmenudataopenData?.data ? (
                    postleftmenudataopenData?.data.map((item) => (


                      <li data-v-4732acba="">
                        {console.log(item, "fdfdfgdfg")}

                        <Link data-v-4732acba="" to={`/game/${item?.sportName}/${item?.sportId}`} className="favourites-link" onClick={() => handleRoute(item?.sportId, item?.sportName)}>
                          <img src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${item?.sportId}.png`} className="game-icon" />
                          <span data-v-4732acba="" className="link-name">{item?.sportName}</span></Link>
                      </li>))) : ""}

                  <Link data-v-91c481c8="" to="/Casino" class="favourites-link download-apk">
                    <img data-v-91c481c8="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/ic_live_casino.png" class="game-icon" />
                    <span data-v-91c481c8=""
                      class="link-name">Live Casino</span></Link>
                </ul>

              </div>
            </nav>
          </aside>}
      </div>
    </>
  )
}

export default SideBar