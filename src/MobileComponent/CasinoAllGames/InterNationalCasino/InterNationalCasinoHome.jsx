import React, { useState } from 'react'
import "./InterNationalCasinoHome.css"
import Qtech from "./qtechlogo.png"
import { useNavigate } from 'react-router';
import Modal from "react-bootstrap/Modal";
import CasinoModals from "../../Livecasino/CasinoModals"


export const casinoProviderList = [
  {
    name: "EVOLUTION",
    logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/5.png",
    gameCode: "EVO-dhp",
    filterType: "EVO",
  },
  {
    name: "VIVO GAMING",
    logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/21.png",
    gameCode: "VGL-bulgariaroulette",
    filterType: "VGL",
  },
  {
    name: "EZUGI",
    logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/1.png",
    gameCode: "EZU-32cards",
    filterType: "EZU",
  },
  // {
  //   name: "BGAMING",
  //   logo: "https://global-uploads.webflow.com/63b2c230b49fa188ad86ffec/63f4c9689497e0d7c32f4a31_BGaming_logo.svg",
  //   gameCode: "Qtech",
  //   filterType: "BGM",
  // },
  {
    name: "SKY WIND",
    logo: "https://skywindgroup.com/assets/site/images/skywind_white.svg",
    gameCode: "SWL-atomroulette",

    filterType: "SWL",
  },
  {
    name: "SA GAMING",
    logo: "https://www.sagaming.com/img/logo.png",
    gameCode: "SAG-lobby",
    filterType: "SAG",
  },
  {
    name: "PRAGMATIC PLAY",
    logo: "https://www.pragmaticplay.com/wp-content/themes/gp-theme-basic/libs/dist/images/PP-white-logo.svg",
    gameCode: "PPL-livecasinolobby",
    filterType: "PPL",
  },
  {
    name: "BETTER LIVE",
    logo: "https://live.beter.co/wp-content/themes/artit/assets/images/logo.svg",
    gameCode: "BTL-lobby",
    filterType: "BTL",
  },
  {
    name: "BET GAMES",
    logo: "https://www.betgames.tv/api/uploads/BG_Logo_White_Horizontal_Lock_Up_dcca475d41.png",
    gameCode: "BTV-lobby",
    filterType: "BTV",
  },
  // {
  //   name: " EBET",
  //   logo: "https://ebet.gg/wp-content/uploads/2022/05/EBET-logo.png",
  //   gameCode: "EBT-sicbo",
  //   filterType: "EBT",
  // },
  {
    name: "AVIATOR",
    logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
    gameCode: "SPB-aviator",
    filterType: "SPB",
  },
  {
    name: "Q Tech",
    logo: Qtech,
    gameCode: "Qtech",
    filterType: "SPB",
  }
];
const InterNationalCasinoHome = () => {

  const navigate = useNavigate();
  // const TokenId = localStorage.getItem("token");
  const TokenGame = localStorage.getItem("GameToken");
  const [show, setShow] = useState(false)
  const [allDatta, setAllDatta] = useState()
  const handleClose = () => setShow(false);


  const handleAgree = () => {
    if (localStorage.getItem("TokenId")) {

      navigate("/m/All-Games-page", { state: { item1: allDatta, item2: "/m/International-home" } })
      setShow(false)
    } else {
      navigate("/m/login")
    }
  }

  const handleChangeaa = (val) => {
    setAllDatta(val)
    setShow(true)

  };

  return (
    <div>
      <div className='International_Casino_main_wrapper'>
        {casinoProviderList.map((item) => (

          <div className="MainBtn_warp_International_casinos" style={{ border: "0.5px solid" }} onClick={() => handleChangeaa(item)}>
            <img
              className="complany-logo-warp"
              src={item?.logo}
              alt="" />
            <span className="complany-name-wrap">{item?.name}</span>
          </div>
        ))
        }</div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body className="casino_modals_body">
          <CasinoModals type={"qtech"} />
          <div className="agree_btn">
            <button onClick={handleAgree}>Ok I Agree</button>
            <button onClick={() => setShow(false)}>No, I Don't Agree</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default InterNationalCasinoHome