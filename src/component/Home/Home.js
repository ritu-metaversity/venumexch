import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import DestGamePage from '../DesktopGamePage/DestGamePage'
import MidPage from '../Mid/MidPage'
import Right from '../Right/Right'
import SideBar from '../SideBar/SideBar'
import './Home.css'

const Home = () => {


  const { pathname } = useLocation();

  return (



    <>
      {/* <div   className="content boxed-layout-wrapper" > */}
      <div className='d-flex main-desk-view mt-56'>

        {
          pathname.includes("/gamedetails/") ? <DestGamePage /> : <MidPage />
        }
        <div>
          <Right />
        </div>

      </div>
    </>
  )
}

export default Home