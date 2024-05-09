import React, { useEffect, useState } from 'react'
import "./AllProviderName.css"
import Qtech from "./qtechlogo.png"
import { useNavigate } from 'react-router'
import Modal from "react-bootstrap/Modal";
import CasinoModals from '../../Livecasino/CasinoModals';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { postFindProviderList, psotbetsingleusevalue } from '../../../App/Features/auth/authActions';

let AllCasinoProviderName =
{
    // "Indian Casino": [
    //     {
    //         name: "Super Nova",
    //         logo: "https://supernovagamesstudios.com/wp-content/uploads/2021/06/suxnova.png",
    //         gameCode: "SP-NOWA",
    //         PageUrl: "/m/SuperNowa_casion"
    //     },
    //     {
    //         name: "Aura",
    //         logo: "https://auragaming.org/images/supercleanaura%20white.png?crc=7159781",
    //         gameCode: "AURA",
    //         PageUrl: "/m/casino-list"

    //     }
    // ],
    "Internation Casino": [
        {
            name: "EVOLUTION",
            logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/5.png",
            gameCode: "EVO-dhp",
            gameCodeName: "EVO",
            PageUrl: "/m/All-Games-page"

        },
        {
            name: "VIVO GAMING",
            logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/21.png",
            gameCode: "VGL-bulgariaroulette",
            gameCodeName: "VGL",
            PageUrl: "/m/All-Games-page"

        },
        {
            name: "EZUGI",
            logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/1.png",
            gameCode: "EZU-32cards",
            gameCodeName: "EZU",
            PageUrl: "/m/All-Games-page"

        },
        // {
        //   name: "BGAMING",
        //   logo: "https://global-uploads.webflow.com/63b2c230b49fa188ad86ffec/63f4c9689497e0d7c32f4a31_BGaming_logo.svg",
        //   gameCode: "Qtech",
        //   gameCode: "BGM",
        // },
        {
            name: "SKY WIND",
            logo: "https://skywindgroup.com/assets/site/images/skywind_white.svg",
            gameCode: "SWL-atomroulette",
            gameCodeName: "SWL",
            PageUrl: "/m/All-Games-page"

        },
        {
            name: "SA GAMING",
            logo: "https://www.sagaming.com/img/logo.png",
            gameCode: "SAG-lobby",
            gameCodeName: "SAG",
            PageUrl: "/m/All-Games-page"

        },
        {
            name: "PRAGMATIC PLAY",
            logo: "https://www.pragmaticplay.com/wp-content/themes/gp-theme-basic/libs/dist/images/PP-white-logo.svg",
            gameCode: "PPL-livecasinolobby",
            gameCodeName: "PPL",
            PageUrl: "/m/All-Games-page"

        },
        {
            name: "BETTER LIVE",
            logo: "https://live.beter.co/wp-content/themes/artit/assets/images/logo.svg",
            gameCode: "BTL-lobby",
            gameCodeName: "BTL",
            PageUrl: "/m/All-Games-page"

        },
        {
            name: "BET GAMES",
            logo: "https://www.betgames.tv/api/uploads/BG_Logo_White_Horizontal_Lock_Up_dcca475d41.png",
            gameCode: "BTV-lobby",
            gameCodeName: "BTV",
            PageUrl: "/m/All-Games-page"

        },
        // {
        //   name: " EBET",
        //   logo: "https://ebet.gg/wp-content/uploads/2022/05/EBET-logo.png",
        //   gameCode: "EBT-sicbo",
        //   gameCode: "EBT",
        // },
        {
            name: "AVIATOR",
            logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
            gameCode: "SPB-aviator",
            gameCodeName: "SPB",
            PageUrl: "/m/All-Games-page"

        },
        {
            name: "Q Tech",
            logo: Qtech,
            gameCode: "Qtech",
            gameCodeName: "SPB",
            PageUrl: "/m/All-Games-page"

        }
    ],
    "Fantasy Games": [
        {
            name: "Aviator",
            logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
            gameCode: "SPB",
            PageUrl: "/m/Fantasy-List"
        },
        {
            name: "Relex",
            logo: "https://cf-cdn.relax-gaming.com/static/img/logo.svg",
            gameCode: "RLX",
            PageUrl: "/m/Fantasy-List"
        },
        {
            name: "Thunder Kick",
            logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
            gameCode: "TK",
            PageUrl: "/m/Fantasy-List"
        },
        {
            name: "Nolimit City",
            logo: "https://www.nolimitcity.com/img/site-img/nolimit-city.png",
            gameCode: "NLC",
            PageUrl: "/m/Fantasy-List"
        },
    ],
    "Slot Games": [
        {
            name: "YUILD",
            logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/1.png",
            gameCode: "YGG",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "1X2 GAMING",
            logo: "https://www.1x2gaming.com/img/logo@2x.png",
            gameCode: "1x2",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "AVATAR UX",
            logo: "https://avatarux.com/wp-content/uploads/2021/06/AUX-logo.svg",
            gameCode: "AUX",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "BIG TIME",
            logo: "https://images.squarespace-cdn.com/content/v1/60aedd95a74c4c4033f9d064/1623895434956-BV0PANOPBDWZ2FMFV53V/BTG_Logo_White.png?format=1500w",
            gameCode: "BTG",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "BLUE PRINT",
            logo: "https://blueprintgaming.com/wp-content/uploads/2017/07/web-logo.png",
            gameCode: "BPG",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "BOOONGO",
            logo: "https://bng.games/static/img/logo_full.svg",
            gameCode: "BNG",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "CQ9",
            logo: "https://www.cq9gaming.com/eng/html/img/layout/LOGO.png",
            gameCode: "CQC",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "DRAGOON SOFT",
            logo: "https://www.dragoonsoft.com/img/ds_header_logo.31834161.png",
            gameCode: "DS",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "ELK GAMING",
            logo: "https://www.elk-studios.com/app/themes/elkstudios/assets/img/logo-new.svg",
            gameCode: "ELK",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "EVOPLAY",
            logo: "https://evoplay.games/wp-content/themes/evoplay/assets/img/logo.svg",
            gameCode: "EVP",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "FANTASMA",
            logo: "https://www.fantasmagames.com/wp-content/uploads/2020/05/Fantasma_logo_Vector.png",
            gameCode: "FNG",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "FUGASO",
            logo: "https://fugaso.com/images/logo.svg",
            gameCode: "FUG",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "GAMEART",
            logo: "https://gameart.net/wp-content/uploads/2022/12/prikazna_YS_web.jpg",
            gameCode: "GA",
            PageUrl: "/m/Slot-List"

        },
        {
            name: "GAME FISH",
            logo: "https://nuxgame.com/img/logo_Nuxgame_2023.webp",
            gameCode: "GFG",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://www.yggdrasilgaming.com/w/files/2022/02/logo-header.svg",
            name: "YGGDRASIL",
            gameCode: "YGG",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://www.woohoogames.com/themes/woohoo/images/logo.svg",
            name: "WOOHOO",
            gameCode: "WOO",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://www.triple-pg.com/wp-content/uploads/2023/05/logo-wh.svg",
            name: "TRIPLE",
            gameCode: "TPG",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
            name: "THUNDER",
            gameCode: "TPG",
            PageUrl: "/m/Slot-List"
        },
        // {
        //   logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
        //   name: "Splitrock Gaming",
        //   gameCode: "TPG",
        // PageUrl: "/m/Slot-List"
        // },
        // {
        //   logo: "https://wazdan.com/wp-content/themes/wazdan/assets/images/logo.svg",
        //   name: "WAZDAN",
        //   gameCode: "WAZ",
        // PageUrl: "/m/Slot-List"
        // },
        {
            logo: "https://www.gamblerspick.com/uploads/set_resources_3/84c1e40ea0e759e3f1505eb1788ddf3c_logo.png",
            name: "SPLITROCK",
            gameCode: "SPR",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://spearheadstudios.com/wp-content/themes/spearheadstudios/assets/img/logo.svg?v=1",
            name: "SPEAR HEAD",
            gameCode: "SHS",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://slotmill.com/wp-content/themes/slotmill-v2/assets/img/slotmill-logo-header.svg",
            name: "SLOT MILL",
            gameCode: "SM",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://www.skywindgroup.com/assets/site/images/skywind_white.svg",
            name: "SKYWIND",
            gameCode: "SWC",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://revolvergaming.com/wp-content/themes/RevolverGames/images/logo-middle.png",
            name: "REVOLVER",
            gameCode: "RG",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://www.reloadedgaming.com/rel-230217/images/logo2.png",
            name: "RELOADED",
            gameCode: "RLG",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://cf-cdn.relax-gaming.com/static/img/logo.svg",
            name: "RELAX",
            gameCode: "RLX",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://uploads-ssl.webflow.com/5ad9ea8824e99a21e272dacd/5ae73184a9e2a25942fb74a1_Tiger.svg",
            name: "RED TIGER",
            gameCode: "RED",
            PageUrl: "/m/Slot-List"
        },
        {
            logo: "https://rtgslots.com/wp-content/uploads/2020/09/RTG-SLOTS-logo.png",
            name: "RTG SLOT",
            gameCode: "RTG",
            PageUrl: "/m/Slot-List"

        },
        {
            logo: "https://quickspin.com/wp-content/themes/quickspin/img/quickspin-logo.svg",
            name: "QUICK SPIN",
            gameCode: "QS",
            PageUrl: "/m/Slot-List"

        },
        {
            logo: "https://www.pushgaming.com/i/logo-v2-light.png",
            name: "PUSH",
            gameCode: "PUG",
            PageUrl: "/m/Slot-List"

        },
        {
            logo: "https://www.pragmaticplay.com/wp-content/themes/gp-theme-basic/libs/dist/images/PP-white-logo.svg",
            name: "PRAGMATIC",
            gameCode: "PPC",
            PageUrl: "/m/Slot-List"

        },
    ],
    "Lottery": [
        {
            name: "BET GAMES",
            logo: "https://www.betgames.tv/api/uploads/BG_Logo_White_Horizontal_Lock_Up_dcca475d41.png",
            gameCode: "BTV",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "EVOLUTION",
            logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/5.png",
            gameCode: "EVO",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "EVOPLAY",
            logo: "https://evoplay.games/wp-content/themes/evoplay/assets/img/logo.svg",
            gameCode: "EVP",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "GALAXSYS",
            logo: "https://galaxsys.co/wp-content/uploads/2022/02/Galaxsys.svg",
            gameCode: "GLX",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "PLAY GO",
            logo: "https://static.wixstatic.com/media/dad1c6_ef8a09e283c54aa9863a02228afb9852~mv2.png/v1/fill/w_272,h_74,al_c,q_95,enc_auto/playngo_logo_on_black.png",
            gameCode: "PNG",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "S4",
            logo: "https://media.licdn.com/dms/image/C4E0BAQGMnMvRWUcOsA/company-logo_200_200/0/1519900555706?e=1703116800&v=beta&t=ezkTp_NYg2wcB5L2JADuOxm2SyH77pKxl6aYnJ0Vuzs",
            gameCode: "S4G",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "SPEARHEAD",
            logo: "https://spearheadstudios.com/wp-content/themes/spearheadstudios/assets/img/logo.svg?v=1",
            gameCode: "SHS",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "SPRIBE",
            logo: "https://spribe.co/spribe-logo.b13289b5f5fab437.svg",
            gameCode: "SPB",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "TRIPLE",
            logo: "https://www.triple-pg.com/wp-content/uploads/2023/05/logo-wh.svg",
            gameCode: "TPG",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "KIRON",
            logo: "https://kironinteractive.com/wp-content/uploads/2022/03/Kiron-Logo-Flat-white.png",
            gameCode: "KIR",
            PageUrl: "/m/Lottery-Game-List"
        },
        {
            name: "TURBO",
            logo: "https://turbogames.io/images/home/home-logo.png",
            gameCode: "TRB",
            PageUrl: "/m/Lottery-Game-List"
        },
    ]
}
let IndianCasinoLive =
{
    // "Indian Casino": [
    //     {
    //         name: "Super Nova",
    //         logo: "https://supernovagamesstudios.com/wp-content/uploads/2021/06/suxnova.png",
    //         gameCode: "SP-NOWA",
    //         PageUrl: "/m/SuperNowa_casion"
    //     },
    //     {
    //         name: "Aura",
    //         logo: "https://auragaming.org/images/supercleanaura%20white.png?crc=7159781",
    //         gameCode: "AURA",
    //         PageUrl: "/m/casino-list"

    //     }
    // ],
}
let FantasyGamesLibe =
{
    "Fantasy Games": [
        {
            name: "Aviator",
            logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
            gameCode: "SPB",
            PageUrl: "/m/Fantasy-List"
        },
        {
            name: "Relex",
            logo: "https://cf-cdn.relax-gaming.com/static/img/logo.svg",
            gameCode: "RLX",
            PageUrl: "/m/Fantasy-List"
        },
        {
            name: "Thunder Kick",
            logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
            gameCode: "TK",
            PageUrl: "/m/Fantasy-List"
        },
        {
            name: "Nolimit City",
            logo: "https://www.nolimitcity.com/img/site-img/nolimit-city.png",
            gameCode: "NLC",
            PageUrl: "/m/Fantasy-List"
        },
    ],
}


const AllProviderName = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { psotbetsingleusevalueData } = useSelector((state) => state.auth);

    // console.log(psotbetsingleusevalueData?.data, "kjhgfcvbhuytfv")
    useEffect(() => {

        dispatch(psotbetsingleusevalue())
    }, [])

    let ViewForLoginRoute = window.innerWidth > 1024 ? "/login" : "/m/login"
    const [show, setShow] = useState(false)
    const [allDatta, setAllDatta] = useState()
    const handleClose = () => setShow(false);

    console.log(psotbetsingleusevalueData, "csdcsdcsdcsd");
    const handleGamePageroute = (vl, val, key) => {

        if (localStorage.getItem("TokenId")) {
            navigate(vl?.PageUrl, { state: { item1: { gameCode: vl?.gameCode }, item2: window.location.pathname, } })
        } else {
            navigate(ViewForLoginRoute)
        }
        // }
    }
    const handleGamePageInternatinola = (item) => {
        if (psotbetsingleusevalueData?.data?.qtech === 1) {
            navigate("/m/All-Games-page", { state: { item1: { gameCode: item?.providerId }, item2: window.location.pathname, } })
            setShow(false)
        } else {
            setAllDatta(item)
            setShow(true)
        }
    }
    const handleGamePageLottery = (item) => {

        // if (psotbetsingleusevalueData?.data?.qtech === 1) {
        navigate("/m/Lottery-Game-List", { state: { item1: { gameCode: item?.providerId }, item2: window.location.pathname, } })
        setShow(false)
        // } else {
        //     setAllDatta(item)
        //     setShow(true)
        // }
    }
    const handleGamePageSlot = (item) => {

        // if (psotbetsingleusevalueData?.data?.qtech === 1) {
        navigate("/m/Slot-List", { state: { item1: { gameCode: item?.providerId }, item2: window.location.pathname, } })
        //     setShow(false)
        // } else {
        //     setAllDatta(item)
        //     setShow(true)
        // }

    }


    const handleAgree = () => {
        if (localStorage.getItem("TokenId")) {
            navigate("/m/All-Games-page", { state: { item1: { gameCode: allDatta?.gameCode }, item2: window.location.pathname, } })
            setShow(false)
        } else {
            navigate("/m/login")
        }
    }

    const token = localStorage.getItem("TokenId");


    const [gameQtech, setGameQTech] = useState()
    const [gameAura, setGameAura] = useState()
    const [gameSuperNova, setGameSuperNova] = useState()

    useEffect(() => {
        axios.post(
            "https://adminapi.247idhub.com/admin-new-apis/user/alloted-casino-list", {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((response) => {
                // console.log(response?.data?.data, "gamenamedetaios")
                setGameQTech(response?.data?.data.find((item) => item?.name === "QTech"))
                setGameAura(response?.data?.data.find((item) => item?.name === "Aura"))
                setGameSuperNova(response?.data?.data.find((item) => item?.name === "Super Nova"))
            })
    }, [])
    // === ["Slot Games", "Lottery", "Fantasy Games", "Internation Casino"].includes(key)


    const [casionProviderData, setCasinoProviderData] = useState({})

    useEffect(() => {
        axios
            .post(
                "https://api.247idhub.com/api/qtech/provider", { gameType: "ALL" },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                setCasinoProviderData(response?.data)
            })

    }, [])


    console.log(casionProviderData, "casionProviderData");
    return (
        <div className='Main_header_for_game_provide_Incasino'>
            {token ?

                <>

                    {gameAura?.active === true ?

                        Object.keys(IndianCasinoLive).map(
                            (key, item) => (
                                <div className='Inner_header_for_game_provide_Incasin'>


                                    <h3 className='provider_name_details'>
                                        {key}
                                    </h3>

                                    <div className="main_wrap_live-casion">
                                        {IndianCasinoLive &&
                                            IndianCasinoLive[key].map(
                                                (item, index) => (
                                                    <div className="MainBtn_warp" style={{ border: "0.5px solid" }} onClick={() => handleGamePageroute(item)}>

                                                        <img
                                                            className="complany-logo-warp"
                                                            src={item?.logo}
                                                            alt="" />
                                                        <span className="complany-name-wrap">{item?.name}</span>
                                                    </div>
                                                ))}
                                    </div>

                                </div>

                            )) :
                        gameSuperNova?.active === true ?
                            Object.keys(IndianCasinoLive).map(
                                (key, item) => (
                                    <div className='Inner_header_for_game_provide_Incasin'>


                                        <h3 className='provider_name_details'>
                                            {key}
                                        </h3>

                                        <div className="main_wrap_live-casion">
                                            {IndianCasinoLive &&
                                                IndianCasinoLive[key].map(
                                                    (item, index) => (
                                                        <div className="MainBtn_warp" style={{ border: "0.5px solid" }} onClick={() => handleGamePageroute(item)}>

                                                            <img
                                                                className="complany-logo-warp"
                                                                src={item?.logo}
                                                                alt="" />
                                                            <span className="complany-name-wrap">{item?.name}</span>
                                                        </div>
                                                    ))}
                                        </div>

                                    </div>

                                )) : ""}

                    {gameQtech?.active === true ?
                        <>

                            <div className='Inner_header_for_game_provide_Incasin'>
                                <h3 className='provider_name_details'>
                                    International Casino
                                </h3>
                                <div className="main_wrap_live-casion">
                                    {casionProviderData && casionProviderData?.data &&
                                        casionProviderData?.data.liveCasino.map(
                                            (item, index) => (
                                                <div className="MainBtn_warp" style={{ border: "0.5px solid" }} onClick={() => handleGamePageInternatinola(item)}>

                                                    <img
                                                        className="complany-logo-warp"
                                                        src={item?.image}
                                                        alt="" />
                                                    <span className="complany-name-wrap">{item?.providerName}</span>
                                                </div>
                                            ))}
                                </div>
                            </div>
                            <div className='Inner_header_for_game_provide_Incasin'>
                                <h3 className='provider_name_details'>
                                    Lottery
                                </h3>
                                <div className="main_wrap_live-casion">
                                    {casionProviderData && casionProviderData?.data &&
                                        casionProviderData?.data.lottery.map(
                                            (item, index) => (
                                                <div className="MainBtn_warp" style={{ border: "0.5px solid" }} onClick={() => handleGamePageLottery(item)}>

                                                    <img
                                                        className="complany-logo-warp"
                                                        src={item?.image}
                                                        alt="" />
                                                    <span className="complany-name-wrap">{item?.providerName}</span>
                                                </div>
                                            ))}
                                </div>
                            </div>
                            <div className='Inner_header_for_game_provide_Incasin'>
                                <h3 className='provider_name_details'>
                                    Slot
                                </h3>
                                <div className="main_wrap_live-casion">
                                    {casionProviderData && casionProviderData?.data &&
                                        casionProviderData?.data.slot.map(
                                            (item, index) => (
                                                <div className="MainBtn_warp" style={{ border: "0.5px solid" }} onClick={() => handleGamePageSlot(item)}>

                                                    <img
                                                        className="complany-logo-warp"
                                                        src={item?.image}
                                                        alt="" />
                                                    <span className="complany-name-wrap">{item?.providerName}</span>
                                                </div>
                                            ))}
                                </div>
                            </div>
                            {Object.keys(FantasyGamesLibe).map(
                                (key, item) => (
                                    <div className='Inner_header_for_game_provide_Incasin'>


                                        <h3 className='provider_name_details'>
                                            {key}
                                        </h3>

                                        <div className="main_wrap_live-casion">
                                            {FantasyGamesLibe &&
                                                FantasyGamesLibe[key].map(
                                                    (item, index) => (
                                                        <div className="MainBtn_warp" style={{ border: "0.5px solid" }} onClick={() => handleGamePageroute(item)}>

                                                            <img
                                                                className="complany-logo-warp"
                                                                src={item?.logo}
                                                                alt="" />
                                                            <span className="complany-name-wrap">{item?.name}</span>
                                                        </div>
                                                    ))}
                                        </div>

                                    </div>

                                ))}
                        </> : ""}

                </>


                :

                Object.keys(AllCasinoProviderName).map(
                    (key, item) => (
                        <div className='Inner_header_for_game_provide_Incasin'>


                            <h3 className='provider_name_details'>
                                {key}
                            </h3>

                            <div className="main_wrap_live-casion">
                                {AllCasinoProviderName &&
                                    AllCasinoProviderName[key].map(
                                        (item, index) => (
                                            <div className="MainBtn_warp" style={{ border: "0.5px solid" }}>

                                                <img
                                                    className="complany-logo-warp"
                                                    src={item?.logo}
                                                    alt="" />
                                                <span className="complany-name-wrap">{item?.name}</span>
                                            </div>
                                        ))}
                            </div>

                        </div>

                    ))

            }


            <Modal centered show={show} onHide={handleClose}>
                <Modal.Body className="casino_modals_body">
                    <CasinoModals type={"qtech"} />
                    <div className="agree_btn">
                        <button onClick={handleAgree}>Ok I Agree</button>
                        <button onClick={() => setShow(false)}>No, I Don't Agree</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default AllProviderName