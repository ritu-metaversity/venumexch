import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTermAndCondition } from '../../App/Features/auth/authActions';

const TermsandConditions = () => {
  const dispatch = useDispatch()


  const { getTermAndConditionData } = useSelector((state) => state.auth);
  let appUrl = window.location.hostname;

  useEffect(() => {
    dispatch(getTermAndCondition({ appUrl }))
  }, [])
  // const data = getTermAndConditionData?.data?.termandcondition

  // console.log(getTermAndConditionData, "getTermAndConditionData")
  return (
    <div className="home-page  home-page-news" style={{
      marginTop: "102px",
      marginLeft: "18px"
    }}
      dangerouslySetInnerHTML={{ __html: getTermAndConditionData?.data?.termandcondition }}

    />







  )
}

export default TermsandConditions