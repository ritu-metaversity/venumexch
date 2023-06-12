import React, { useEffect, useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import DestGamePage from '../DesktopGamePage/DestGamePage'
import MidPage from '../Mid/MidPage'
import Right from '../Right/Right'
import SideBar from '../SideBar/SideBar'
import './Home.css'

const Home = () => {

  const { PostBetingOnGameDetailLoading } = useSelector(
    (state) => state.auth
  );
  const { pathname } = useLocation();

  const [gamedetailsData, setGamedetailsData] = useState({})

  const datatataProps = (value) => {
    setGamedetailsData(value)
  }
  return (
    <>
      {/* <div   className="content boxed-layout-wrapper" > */}
      <div className='d-flex main-desk-view mt-56'>
      

        {
          pathname.includes("/gamedetails/") ? <DestGamePage datatataProps={datatataProps} /> : <MidPage />
        }
        <div>
          <Right gamedetailsData={gamedetailsData} />
        </div>


      </div>
    </>
  )
}

export default Home