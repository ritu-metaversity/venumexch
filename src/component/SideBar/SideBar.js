import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './SideBar.css'
import SubSideBar from './SubSideBar';
const SideBar = () => {

   const [ valueForGame,setValueForGame]=useState(false)
   const [ gameiD,setGameId]=useState("")
   const [ gameName,setGameName]=useState("")
   let navigate = useNavigate();
 
   const handleRoute=(id , id2)=>{
     navigate(`/game/${id}`)
     setValueForGame(true)
     setGameName(id2)
     setGameId(id)

    //  console.log("paresnt to child ")
   }

   const sendData=(vl)=>{
    // console.log("child to parents")
     setValueForGame(false)
   }

   useEffect(()=>{
    if(window.location.href===("http://localhost:3000/home")){
   
      setValueForGame(false)
    }
      },[window.location.href])
      

  return (
    <>
        <div data-v-4732acba=""  className="left-pane">
        {valueForGame===true ?

    <SubSideBar valueForGame={valueForGame} gameiD={gameiD} gameName={gameName} sendData={sendData}/>

:
<aside data-v-4732acba=""   className="menu">
<nav data-v-4732acba=""   className="tree-menu">
   <div data-v-4732acba=""   className="left-menu-inner">
      <ul data-v-4732acba=""   className="menu-column menu-lvl-0">
       <li data-v-4732acba="">
         <a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("1","Football")} >
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/1.png"   className="game-icon"/>
          <span data-v-4732acba=""   className="link-name">Football</span>

          </a>
          </li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("2","Tennis")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/2.png"   className="game-icon"/>
          <span data-v-4732acba=""   className="link-name">Tennis</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("4","Cricket")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/4.png"   className="game-icon"/> 
           <span data-v-4732acba=""   className="link-name">Cricket</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("70","Table Tennis")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/70.png"   className="game-icon"/>
            <span data-v-4732acba=""   className="link-name">Table Tennis</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("3503","Darts")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/3503.png"   className="game-icon"/> 
           <span data-v-4732acba=""   className="link-name">Darts</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("71","Badminton")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/71.png"   className="game-icon"/>
            <span data-v-4732acba=""   className="link-name">Badminton</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("52","Kabaddi")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/52.png"   className="game-icon"/> 
           <span data-v-4732acba=""   className="link-name">Kabaddi</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("6","Boxing")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/6.png"   className="game-icon"/>
            <span data-v-4732acba=""   className="link-name">Boxing</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("26420387","Mixed Martial Arts")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/26420387.png"   className="game-icon"/> 
           <span data-v-4732acba=""   className="link-name">Mixed Martial Arts</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("8","Motor Sport")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/8.png"   className="game-icon"/> 
           <span data-v-4732acba=""   className="link-name">Motor Sport</span></a></li>
           
         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("7522","Basketball")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/gicons/7522.png"   className="game-icon"/> 
           <span data-v-4732acba=""   className="link-name">Basketball</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link" onClick={()=>handleRoute("lottery","Lottery Casino")}>
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/lottery.png"   className="game-icon"/> 
           <span data-v-4732acba=""   className="link-name">Lottery Casino</span></a></li>

         <li data-v-4732acba=""><a data-v-4732acba=""    className="favourites-link download-apk" onClick={()=>handleRoute("casino","Live Casino")}> 
           <img alt="" data-v-4732acba="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/icons/ic_live_casino.png"   className="game-icon"/> 
           <span data-v-4732acba=""   className="link-name">Live Casino</span></a></li> 
      </ul>

   </div>
</nav>
</aside>}
         </div>
    </>
  )
}

export default SideBar