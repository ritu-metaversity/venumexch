import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { PostBalance } from '../../App/Features/auth/authActions'
import "./RightMenu.css"

const RightMenu = (props) => {
   const dispatch = useDispatch();
   let  navigate =useNavigate()
// console.log(props)
   const { PostTotalBalance } = useSelector(state => state.auth)
   const [ avaliablebalance,setAvaliablebalance] = useState("")
  
 
useEffect(()=>{

setAvaliablebalance(PostTotalBalance?.data?.data?.balance)
},[PostTotalBalance])
// console.log(PostTotalBalance?.data?.data?.libality)
// console.log(PostTotalBalance)

const token = localStorage.getItem("TokenId")
useEffect(()=>{
   // console.log("balaaac")
if(token){

   dispatch(PostBalance())
}
},[dispatch, token])

// console.log(PostTotalBalance,"PostTotalBalance")
   const handleInput=(vl)=>{
      props.RightSideBarClose(false)
      if(vl==="OpenBets"){
         navigate("./mybets")

      }else if (vl==="Betting"){
         navigate("./profitloss")

      }else if (vl==="TransferStatement"){
         navigate("./transferstatement")

      }else if (vl==="Message"){
         navigate("./message")

      }else if (vl==="TimeSetting"){
         navigate("./TimeSetting")

      }else if (vl==="ChangePassword"){
         navigate("./changepassword")

      }else if (vl==="SecureAuth"){
         navigate("./secureauth")
         
      }else if (vl==="Rules"){
         navigate("./rules-regulations")

      }else if (vl==="Settings"){
         navigate("./Settings")

      }else if (vl==="SignOut"){
         navigate("./login")
         localStorage.clear();

      }else{
         // console.log("hello")
      }
      
   }
   // const token = localStorage.getItem("TokenId")
   const userId = localStorage.getItem("userId")
   // console.log(PostTotalBalance,"hello balance ")

 
  return (
    <>

   <div   className="menu-top-wrap">
      <div   className="account-overview">
         <p   className="login-name">{userId}/INR</p>
         <div   className="menu-item">
            <p   className="label"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/balance-info.png"/> <span>Balance Information</span></p>
            <div   className="content">
               <div   className="group">
                  <div>Available Credit:</div>
                  <span><strong>{avaliablebalance ? avaliablebalance:"0:00"}</strong></span>
               </div>
               <div   className="group">
                  <div>Credit Limit:</div>
                  <span>{PostTotalBalance?.data?.data?.creditLimit ? PostTotalBalance?.data?.data?.creditLimit: "0:00"}</span>
               </div>
               <div   className="group">
                  <div>Winnings:</div>
                  <span   className="negative">{PostTotalBalance?.data?.data?.winnings ? PostTotalBalance?.data?.data?.winnings: "0:00"}</span>
               </div>
               <div   className="group">
                  <div>Net Exposure:</div>
                  <span>{PostTotalBalance?.data?.data?.libality ? PostTotalBalance?.data?.data?.libality: "0:00"}</span>
               </div>
            </div>
         </div>
      </div>
      <ul   className="right-menu-bottom">
         <li>
            {/* <Link href="/m/mybets"   className=""> */}
               <div   className="menu-lvl-1" onClick={()=>handleInput("OpenBets")}>
                  <div   className="item" ><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png"/> <span   className="menu-name">Open Bets</span></div>
               </div>
            {/* </Link> */}
         </li>
         <li>

               <div   className="menu-lvl-1" onClick={()=>handleInput("Betting")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/betting-p-l.png"/> <span   className="menu-name">Betting P&amp;L</span></div>
               </div>

         </li>
         <li>
            {/* <Link href="/m/transfer-statement"   className=""> */}
               <div   className="menu-lvl-1" onClick={()=>handleInput("TransferStatement")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/transfer-statement.png"/> <span   className="menu-name">Transfer Statement</span></div>
               </div>
            {/* </Link> */}
         </li>
         {/* <li>
         
               <div   className="menu-lvl-1" onClick={()=>handleInput("Message")}>
                  <div   className="item">
                     <img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/message.png"/> <span   className="menu-name">Message</span>
                  </div>
               </div>
            
         </li>
         <li>

               <div   className="menu-lvl-1" onClick={()=>handleInput("TimeSetting")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/time.png"/> <span   className="menu-name">Time Setting</span></div>
               </div>

         </li> */}
         <li>
            {/* <Link href="/m/changepassword"   className=""> */}
               <div   className="menu-lvl-1" onClick={()=>handleInput("ChangePassword")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/change-password.png"/> <span   className="menu-name">Change Password</span></div>
               </div>
            {/* </Link> */}
         </li>
         {/* <li>

               <div   className="menu-lvl-1" onClick={()=>handleInput("SecureAuth")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/change-password.png"/> <span   className="menu-name">Secure Auth</span></div>
               </div>

         </li> */}
         <li>
            {/* <Link href="/m/rules-regulations"   className=""> */}
               <div   className="menu-lvl-1" onClick={()=>handleInput("Rules")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/rules.png"/> <span   className="menu-name">Rules &amp; Regulations</span></div>
               </div>
            {/* </Link> */}
         </li>
         <li>
            {/* <Link href="/m/settings"   className=""> */}
               <div   className="menu-lvl-1 settings" onClick={()=>handleInput("Settings")}>
                  <div   className="item"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/setting.png"/> <span   className="menu-name">Settings</span></div>
               </div>
            {/* </Link> */}
         </li>
      </ul>
   </div>
   <ul   className="logout-button">
      <li>
         {/* <Link href="javascript:void(0)"> */}
            <div   className="menu-lvl-1 sign-out" onClick={()=>handleInput("SignOut")}>
               <div   className="item"><i   className="fas fa-running m-r-20"></i> <span   className="menu-name">Sign Out</span></div>
            </div>
         {/* </Link> */}
      </li>
   </ul>
</>

  )
}

export default RightMenu