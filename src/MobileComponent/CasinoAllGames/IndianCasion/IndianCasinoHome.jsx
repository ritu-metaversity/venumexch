import React from 'react'
import "./IndianCasinoHome.css"
import { useNavigate } from 'react-router';
const IndianCasinoHome = () => {


  const navigate = useNavigate();

  let gamesName = [
    {
      name: "Super nowa",
      url: "https://supernovagamesstudios.com/wp-content/uploads/2021/06/suxnova.png",
      filterType: "SP-NOWA"
    },
    {
      name: "Aura",
      url: "https://auragaming.org/images/supercleanaura%20white.png?crc=7159781",
      filterType: "AURA"
    }
  ]

  const handleChangeaa = (val) => {
    console.log(val, "adcnlkscaksdn");
    if (localStorage.getItem("TokenId")) {
      if (val?.filterType === "SP-NOWA") {
        navigate("/m/SuperNowa_casion")
      } else {
        navigate("/m/casino-list")
      }
    } else {
      navigate("/m/login")
    }
  }

  return (
    <div className='Indian_Casino_main_wrapper'>

      {gamesName.map((item) => (

        <div className="MainBtn_warp_indian_casino" style={{ border: "0.5px solid" }}
          onClick={() => handleChangeaa(item)}
        >
          <img
            className="complany-logo-warp"
            src={item?.url}
            alt="" />
          <span className="complany-name-wrap">{item?.name}</span>
        </div>
      ))
      }</div>
  )
}

export default IndianCasinoHome