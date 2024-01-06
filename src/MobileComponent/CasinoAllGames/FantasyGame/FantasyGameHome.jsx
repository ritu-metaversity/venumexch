import React, { useEffect, useState } from 'react'
import "./FantasyGameHome.css"
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { postFindProviderList } from '../../../App/Features/auth/authActions';


export const FantasyGamedata = [
    {
        name: "Aviator",
        logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
        gameCode: "SPB",
    },
    {
        name: "Relex",
        logo: "https://cf-cdn.relax-gaming.com/static/img/logo.svg",
        gameCode: "RLX",
    },
    {
        name: "Thunder Kick",
        logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
        gameCode: "TK",
    },
    {
        name: "Nolimit City",
        logo: "https://www.nolimitcity.com/img/site-img/nolimit-city.png",
        gameCode: "NLC",
    },
];
const FantasyGameHome = () => {

    let ViewForLoginRoute = window.innerWidth > 1024 ? "/login" : "/m/login"


    const dispatch = useDispatch()

    const { postFindProviderListData } = useSelector((state) => state.auth);



    useEffect(() => {
        dispatch(postFindProviderList({ gameType: "ALL" }
        ))
    }, [])

    console.log(postFindProviderListData?.data, "mklkonjihbugvyfctdxrs")

    const navigate = useNavigate();

    const handleChangeaa = (val) => {
        if (localStorage.getItem("TokenId")) {
            navigate("/m/Fantasy-List", { state: { item1: { gameCode: val?.gameCode } } })
        } else {
            navigate(ViewForLoginRoute)

        }
    }


    // {FantasyGamedata && FantasyGamedata?.map((ele) =>
    //     Object?.values(newProviderList)
    //         ?.reduce((a, c) => [...a, ...c], [])
    //         .find((item1) => ele.gameCode === item1?.providerId)
    // )?.map((item, id) => {
    //     return (
    //         <div className="MainBtn_warp_Fantasy_casinos" style={{ border: "0.5px solid" }} onClick={() => handleChangeaa(item)}>
    //             <img
    //                 className="complany-logo-warp"
    //                 src={item?.image}
    //                 alt="" />
    //             <span className="complany-name-wrap">{item?.providerName}</span>
    //         </div>

    //     );
    // })}

    return (
        <div className='w-100'>
            <div className='Fantasy_Casino_main_wrapper'>
                {FantasyGamedata.map((item) => (

                    <div className="MainBtn_warp_Fantasy_casinos" style={{ border: "0.5px solid" }} onClick={() => handleChangeaa(item)}>
                        <img
                            className="complany-logo-warp"
                            src={item?.logo}
                            alt="" />
                        <span className="complany-name-wrap">{item?.name}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FantasyGameHome