import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getActiveSportList } from '../../App/Features/auth/authActions';
import './SideBar.css'
import SubSideBar from './SubSideBar';
const SideBar = () => {

  const [valueForGame, setValueForGame] = useState(false)
  const [gameiD, setGameId] = useState("")
  const [gameName, setGameName] = useState("")
  let navigate = useNavigate();

  const dispatch = useDispatch();


  const [leftmenuClose, setLeftMenuClose] = useState("false")
  const { getActiveSportListData } = useSelector(state => state.auth)
  useEffect(() => {
    // console.log("balaaac")

    dispatch(getActiveSportList())

  }, [dispatch])

  const handleRoute = (id, id2) => {
    navigate(`/game/${id}`)
    setValueForGame(true)
    setGameName(id2)
    setGameId(id)

    //  console.log("paresnt to child ")
  }

  const sendData = (vl) => {
    // console.log("child to parents")
    setValueForGame(false)
  }

  useEffect(() => {
    if (window.location.href === ("http://localhost:3000/home")) {

      setValueForGame(false)
    }
  }, [window.location.href])


  return (
    <>
      <div data-v-4732acba="" className="left-pane">
        {valueForGame === true ?

          <SubSideBar valueForGame={valueForGame} gameiD={gameiD} gameName={gameName} sendData={sendData} />

          :
          <aside data-v-4732acba="" className="menu">
            <nav data-v-4732acba="" className="tree-menu">
              <div data-v-4732acba="" className="left-menu-inner">
                <ul data-v-4732acba="" className="menu-column menu-lvl-0">

                  {getActiveSportListData?.data?.data &&
                    getActiveSportListData?.data?.data ? (
                    getActiveSportListData?.data?.data.map((item) => (


                      <li data-v-4732acba="">
                        {console.log(item, "fdfdfgdfg")}
                        <a data-v-4732acba="" className="favourites-link" onClick={() => handleRoute("4", "Cricket")}>
                          <img src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${item?.sportId}.png`} className="game-icon" />
                          <span data-v-4732acba="" className="link-name">{item?.sportName}</span></a>
                      </li>))) : ""}

                </ul>

              </div>
            </nav>
          </aside>}
      </div>
    </>
  )
}

export default SideBar