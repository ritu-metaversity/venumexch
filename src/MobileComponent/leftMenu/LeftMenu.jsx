import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { getActiveSportList, postleftmenudataopen } from '../../App/Features/auth/authActions';
import "./LeftMenu.css"
import hours from "./sideBarHorse.6c8a9ff3.svg"
import axios from 'axios';

const LeftMenu = (props) => {
   const dispatch = useDispatch();

   let navigate = useNavigate();
   const [leftmenuClose, setLeftMenuClose] = useState("false")
   const { postleftmenudataopenData } = useSelector(state => state.auth)
   // useEffect(()=>{
   //    // console.log("balaaac")

   //    dispatch(getActiveSportList())

   // },[dispatch])

   useEffect(() => {
      dispatch(postleftmenudataopen())
   }, [])
   // const gameNamePass = useOutletContext()
   // getActiveSportListData


   // let imgggg ={
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   //    "foo":"https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/1.png",
   // }

   // console.log(getActiveSportListData?.data)
   const handleRoute = (id, id2) => {
      // props.gameNamePass(id2)
      props.eftMenuClose(false)
      navigate(`/m/game/${id}`, { state: { id2 } })
      // console.log(id2)
   }

   const handleMyMarket = () => {
      navigate("./mymarkets")
      props.eftMenuClose(false)

   }
   const token = localStorage.getItem("TokenId");

   const [gameQtech, setGameQTech] = useState()
   const [gameAura, setGameAura] = useState()
   const [gameSuperNova, setGameSuperNova] = useState()

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
         {/* <div   className='left-menu'></div> */}
         <li>
            <div className="menu-lvl-1 " style={{ cursor: "pointer" }} onClick={() => handleMyMarket()}>
               <div className="item"><i className="fas fa-eye"></i> <span className="menu-name">My Markets</span></div>
            </div>
         </li>
         {postleftmenudataopenData?.data &&
            postleftmenudataopenData?.data ? (
            postleftmenudataopenData?.data.map((item) => (
               <li>
                  <div onClick={() => handleRoute(item?.sportId, item?.sportName)} style={{ cursor: "pointer" }} className="favourites-a">
                     <div className="menu-lvl-1">
                        <div className="item" >
                           {item?.sportId === 77 ?
                              <img src={hours} alt='' className="game-icon" />
                              :
                              <img src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${item?.sportId === 14 ? 52 : item?.sportId}.png`} alt='' className="game-icon" />
                           }
                           <span className="menu-name">{item?.sportName}</span></div>
                     </div>
                  </div>
               </li>))) : ""}
         {/* {gameAura?.active === true ?
            <li>
               <Link to="/m/Indian-home" className="">
                  <div className="menu-lvl-1" onClick={() => props.eftMenuClose(false)()}>
                     <div className="item"><img alt="" src="https://11bet24.com/indian-casino.png" /> <span className="menu-name download-apk">Indian Casino</span></div>
                  </div>
               </Link>
            </li>
            :
            (gameSuperNova?.active === true ?
               <li>
                  <Link to="/m/Indian-home" className="">
                     <div className="menu-lvl-1" onClick={() => props.eftMenuClose(false)()}>
                        <div className="item"><img alt="" src="https://11bet24.com/indian-casino.png" /> <span className="menu-name download-apk">Indian Casino</span></div>
                     </div>
                  </Link>
               </li> : "")} */}
         {gameQtech?.active === true ?
            <>
               <li>
                  <Link to="/m/International-home" className="">
                     <div className="menu-lvl-1" onClick={() => props.eftMenuClose(false)()}>
                        <div className="item"><img alt="" src="/Casino-Logo/international-casinoletest.png" className="game-icon" /> <span className="menu-name download-apk">International Casino</span></div>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link to="/m/Lottery-home" className="">
                     <div className="menu-lvl-1" onClick={() => props.eftMenuClose(false)()}>
                        <div className="item"><img alt="" src="/Casino-Logo/lottery.png" className="game-icon" /> <span className="menu-name download-apk"> Lottery</span></div>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link to="/m/Slot-home" className="">
                     <div className="menu-lvl-1" onClick={() => props.eftMenuClose(false)()}>
                        <div className="item"><img alt="" src="/Casino-Logo/slots.png" className="game-icon" /> <span className="menu-name download-apk">Slots Games</span></div>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link to="/m/Fantasy-home" className="">
                     <div className="menu-lvl-1" onClick={() => props.eftMenuClose(false)()}>
                        <div className="item"><img alt="" src="/Casino-Logo/fantasy-game.png" className="game-icon" /> <span className="menu-name download-apk">Fantasy Games</span></div>
                     </div>
                  </Link>
               </li>
            </>
            : ""}
      </>
   )
}

export default LeftMenu