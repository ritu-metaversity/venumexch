
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutUs } from '../../App/Features/auth/authActions'

const AboutUs = () => {

    const dispatch = useDispatch()
    let appUrl = window.location.hostname.replace("www.","");

    const { getAboutUsData } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getAboutUs({ appUrl }))
    }, [])
    return (
        <div className="home-page  home-page-news" style={{
            marginTop: "102px",
            marginLeft: "18px"
        }}
            dangerouslySetInnerHTML={{ __html: getAboutUsData?.data?.aboutus }} />
    )
}

export default AboutUs