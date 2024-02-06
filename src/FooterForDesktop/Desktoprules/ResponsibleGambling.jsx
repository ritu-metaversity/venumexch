import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getResponsibleGaming } from '../../App/Features/auth/authActions';

const ResponsibleGambling = () => {
   const dispatch = useDispatch()

   let appUrl = window.location.hostname.replace("www.","")
   const { getResponsibleGamingData } = useSelector((state) => state.auth);
   useEffect(() => {
      dispatch(getResponsibleGaming({ appUrl }))
   }, [])

   return (
      <div className="home-page  home-page-news" style={{
         marginTop: "102px",
         marginLeft: "7px"
      }}
         dangerouslySetInnerHTML={{ __html: getResponsibleGamingData?.data?.responsiblegaming }} />
   )
}
export default ResponsibleGambling