import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getResponsibleGaming } from '../../App/Features/auth/authActions';
import "./ResponsibleGambling.css"


const ResponsibleGambling = () => {
   const dispatch = useDispatch()
   // let appUrll = window.location.hostname;
   let appUrl = "247lordsexch.com"

   const { getResponsibleGamingData } = useSelector((state) => state.auth);

   useEffect(() => {
      dispatch(getResponsibleGaming({ appUrl }))
   }, [])


   console.log(getResponsibleGamingData, "getResponsibleGamingData")

   return (
      <div data-v-593e5158="" className="row">
         <div data-v-593e5158="" className="col-12">
            {getResponsibleGamingData?.data?.responsiblegaming}
         </div>
      </div>
   )
}

export default ResponsibleGambling