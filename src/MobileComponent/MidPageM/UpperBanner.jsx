import React, { useEffect, useState } from "react";
import "./UpperBanner.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { postUserBannerList } from "../../App/Features/auth/authActions";

const UpperBanner = () => {
    const dispatch = useDispatch();

    const { postUserBannerListData } = useSelector((state) => state.auth);

    useEffect(() => {
        let datata = { "type": 1 }
        dispatch(postUserBannerList(datata))
    }, [])

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (



        <>
            <Slider {...settings}>
                {postUserBannerListData?.data?.length &&
                    postUserBannerListData?.data?.map((res) => {
                        // console.log(res, "dsfdsg");
                        return (
                            <div>
                                <img src={res?.path} alt="" className="bannerImage" />
                            </div>
                        );
                    })}
            </Slider>
        </>
    )
}

export default UpperBanner