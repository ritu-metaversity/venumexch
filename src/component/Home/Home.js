import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import DestGamePage from '../DesktopGamePage/DestGamePage'
import MidPage from '../Mid/MidPage'
import Right from '../Right/Right'
import SideBar from '../SideBar/SideBar'
import './Home.css'

const Home = () => {
  // const [sideBarData,setSideBarData]=useState(false)

  // useEffect(()=>{
  //   if(window.location.href===("http://localhost:3000/mybets")){
  //     setSideBarData(true)

  //   }if(window.location.href===("http://localhost:3000/accountstatement")){
  //     setSideBarData(true)

  //   }if(window.location.href===("http://localhost:3000/profitloss")){
  //     setSideBarData(true)

  //   }if(window.location.href===("http://localhost:3000/changepassword")){
  //     setSideBarData(true)

  //   }if(window.location.href===("http://localhost:3000/secureauth")){
  //     setSideBarData(true)

  //   }if(window.location.href===("http://localhost:3000/transferstatement")){
  //     setSideBarData(true)

  //   }if(window.location.href===("http://localhost:3000/message")){
  //     setSideBarData(true)

  //   }else{setSideBarData(false)}
  //     },[window.location.href])

  const { pathname } = useLocation();

  return (
    
    

    <>
      {/* <div   className="content boxed-layout-wrapper" > */}
      <div className='d-flex main-desk-view mt-56'>
      {
        pathname.includes("/gamedetails/")?<DestGamePage/>:<MidPage /> 
      }
        <div>
          <Right />
        </div>
      </div>
    </>
  )
}

export default Home