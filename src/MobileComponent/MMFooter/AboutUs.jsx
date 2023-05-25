
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutUs } from '../../App/Features/auth/authActions'
import "./AboutUs.css"



const AboutUs = () => {

    const dispatch = useDispatch()
    let appUrll = window.location.hostname;

    const { getAboutUsData } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getAboutUs({ appUrll }))
    }, [])


    console.log(getAboutUsData, "getAboutUsDatagetAboutUsData")
    return (
        <div className="home-page home-page-news">

            AboutUsAboutUsAboutUs
        </div>
    )
}

export default AboutUs