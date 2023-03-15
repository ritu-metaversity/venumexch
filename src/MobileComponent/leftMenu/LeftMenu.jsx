import React from 'react'
import { useState } from 'react';
import {useNavigate, useOutletContext } from 'react-router-dom'
import "./LeftMenu.css"

const LeftMenu = (props) => {
   
   let navigate = useNavigate();
   const [leftmenuClose , setLeftMenuClose] =useState("false")
   // const gameNamePass = useOutletContext()

   const handleRoute=(id ,id2 )=>{
      // props.gameNamePass(id2)
   props.eftMenuClose(false)
      navigate(`/m/game/${id}`,{state:{id2}})
      // console.log(id2)
    }

    const handleMyMarket=()=>{
      navigate("./mymarkets")
   props.eftMenuClose(false)

    }

  return (
    <>
    {/* <div   className='left-menu'></div> */}
    <li>
    {/* onClick={()=>navigate("./mymarkets")()} */}
       {/* <a className="./mymarkets"> */}
   
          <div   className="menu-lvl-1 "  onClick={()=>handleMyMarket() }> 
             <div   className="item"><i   className="fas fa-eye"></i> <span   className="menu-name">My Markets</span></div>
          </div>
       {/* </a> */}
    </li>
    <li>
       <a onClick={()=>handleRoute("1","Football")}    className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" ><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png" alt=''   className="game-icon"/> <span   className="menu-name">Football</span></div>
          </div>
       </a>
    </li>
    <li>
       <a   className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("2","Tennis")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/2.png" alt=''   className="game-icon"/> <span   className="menu-name">Tennis</span></div>
          </div>
       </a>
    </li>
    <li>
       <a    className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("4","Cricket")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/4.png" alt=''    className="game-icon"/> <span   className="menu-name">Cricket</span></div>
          </div>
       </a>
    </li>
    <li>
       <a   className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("70","Table Tennis")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/70.png" alt=''   className="game-icon"/> <span   className="menu-name">Table Tennis</span></div>
          </div>
       </a>
    </li>
    <li>
       <a    className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("3503","Darts")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/3503.png" alt=''   className="game-icon"/> <span   className="menu-name">Darts</span></div>
          </div>
       </a>
    </li>
    <li>
       <a    className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("71","Badminton")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/71.png" alt=''   className="game-icon"/> <span   className="menu-name">Badminton</span></div>
          </div>
       </a>
    </li>
    <li>
       <a    className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("52","Kabaddi")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/52.png" alt=''   className="game-icon"/> <span   className="menu-name">Kabaddi</span></div>
          </div>
       </a>
    </li>
    <li>
       <a   className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("6","Boxing")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/6.png" alt=''   className="game-icon"/> <span   className="menu-name">Boxing</span></div>
          </div>
       </a>
    </li>
    <li>
       <a    className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("26420387","Mixed Martial Arts")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/26420387.png"   className="game-icon"/> <span   className="menu-name">Mixed Martial Arts</span></div>
          </div>
       </a>
    </li>
    <li>
       <a   className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("8","Motor Sport")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/8.png"   className="game-icon"/> <span   className="menu-name">Motor Sport</span></div>
          </div>
       </a>
    </li>
    <li>
       <a    className="favourites-a">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("7522","Basketball")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/7522.png"   className="game-icon"/> <span   className="menu-name">Basketball</span></div>
          </div>
       </a>
    </li>
    <li>
       <a href="/lottery-list"   className="">
          <div   className="menu-lvl-1">
             <div   className="item" onClick={()=>handleRoute("lottery","Lottery Casino")}><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/lottery.png"   className="game-icon"/> <span   className="menu-name">Lottery Casino</span></div>
          </div>
       </a>
    </li>
    <li>
       <a href="/casino-list"   className="">
          <div   className="menu-lvl-1">
             <div   className="item"><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/casino.jpg"   className="game-icon"/> <span   className="menu-name download-apk">Live Casino</span></div>
          </div>
       </a>
    </li>
</>
  )
}

export default LeftMenu