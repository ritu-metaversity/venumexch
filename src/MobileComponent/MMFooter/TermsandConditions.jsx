import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTermAndCondition } from '../../App/Features/auth/authActions';

const TermsandConditions = () => {
  const dispatch = useDispatch()


  const { getTermAndConditionData } = useSelector((state) => state.auth);
  let appUrll = window.location.hostname;

  useEffect(() => {
    dispatch(getTermAndCondition({ appUrll }))
  }, [])


  console.log(getTermAndConditionData, "getTermAndConditionData")
  return (
    <div className="home-page home-page-news">

      TermsandConditions
    </div>
  )
}

export default TermsandConditions