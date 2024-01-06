import React, { useEffect, useState } from 'react'
import "./SlotGamesHome.css"
import { useNavigate } from 'react-router';
import { postFindProviderList } from '../../../App/Features/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export const slotProviderList = [
  {
    name: "YUILD",
    logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/1.png",
    gameCode: "YGG",
  },
  {
    name: "1X2 GAMING",
    logo: "https://www.1x2gaming.com/img/logo@2x.png",
    gameCode: "1x2",
  },
  {
    name: "AVATAR UX",
    logo: "https://avatarux.com/wp-content/uploads/2021/06/AUX-logo.svg",
    gameCode: "AUX",
  },
  {
    name: "BIG TIME",
    logo: "https://images.squarespace-cdn.com/content/v1/60aedd95a74c4c4033f9d064/1623895434956-BV0PANOPBDWZ2FMFV53V/BTG_Logo_White.png?format=1500w",
    gameCode: "BTG",
  },
  {
    name: "BLUE PRINT",
    logo: "https://blueprintgaming.com/wp-content/uploads/2017/07/web-logo.png",
    gameCode: "BPG",
  },
  {
    name: "BOOONGO",
    logo: "https://bng.games/static/img/logo_full.svg",
    gameCode: "BNG",
  },
  {
    name: "CQ9",
    logo: "https://www.cq9gaming.com/eng/html/img/layout/LOGO.png",
    gameCode: "CQC",
  },
  {
    name: "DRAGOON SOFT",
    logo: "https://www.dragoonsoft.com/img/ds_header_logo.31834161.png",
    gameCode: "DS",
  },
  {
    name: "ELK GAMING",
    logo: "https://www.elk-studios.com/app/themes/elkstudios/assets/img/logo-new.svg",
    gameCode: "ELK",
  },
  {
    name: "EVOPLAY",
    logo: "https://evoplay.games/wp-content/themes/evoplay/assets/img/logo.svg",
    gameCode: "EVP",
  },
  {
    name: "FANTASMA",
    logo: "https://www.fantasmagames.com/wp-content/uploads/2020/05/Fantasma_logo_Vector.png",
    gameCode: "FNG",
  },
  {
    name: "FUGASO",
    logo: "https://fugaso.com/images/logo.svg",
    gameCode: "FUG",
  },
  {
    name: "GAMEART",
    logo: "https://gameart.net/wp-content/uploads/2022/12/prikazna_YS_web.jpg",
    gameCode: "GA",
  },
  {
    name: "GAME FISH",
    logo: "https://nuxgame.com/img/logo_Nuxgame_2023.webp",
    gameCode: "GFG",
  },
  {
    logo: "https://www.yggdrasilgaming.com/w/files/2022/02/logo-header.svg",
    name: "YGGDRASIL",
    gameCode: "YGG",
  },
  {
    logo: "https://www.woohoogames.com/themes/woohoo/images/logo.svg",
    name: "WOOHOO",
    gameCode: "WOO",
  },
  {
    logo: "https://www.triple-pg.com/wp-content/uploads/2023/05/logo-wh.svg",
    name: "TRIPLE",
    gameCode: "TPG",
  },
  {
    logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
    name: "THUNDER",
    gameCode: "TPG",
  },
  // {
  //   logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
  //   name: "Splitrock Gaming",
  //   gameCode: "TPG",
  // },
  // {
  //   logo: "https://wazdan.com/wp-content/themes/wazdan/assets/images/logo.svg",
  //   name: "WAZDAN",
  //   gameCode: "WAZ",
  // },
  {
    logo: "https://www.gamblerspick.com/uploads/set_resources_3/84c1e40ea0e759e3f1505eb1788ddf3c_logo.png",
    name: "SPLITROCK",
    gameCode: "SPR",
  },
  {
    logo: "https://spearheadstudios.com/wp-content/themes/spearheadstudios/assets/img/logo.svg?v=1",
    name: "SPEAR HEAD",
    gameCode: "SHS",
  },
  {
    logo: "https://slotmill.com/wp-content/themes/slotmill-v2/assets/img/slotmill-logo-header.svg",
    name: "SLOT MILL",
    gameCode: "SM",
  },
  {
    logo: "https://www.skywindgroup.com/assets/site/images/skywind_white.svg",
    name: "SKYWIND",
    gameCode: "SWC",
  },
  {
    logo: "https://revolvergaming.com/wp-content/themes/RevolverGames/images/logo-middle.png",
    name: "REVOLVER",
    gameCode: "RG",
  },
  {
    logo: "https://www.reloadedgaming.com/rel-230217/images/logo2.png",
    name: "RELOADED",
    gameCode: "RLG",
  },
  {
    logo: "https://cf-cdn.relax-gaming.com/static/img/logo.svg",
    name: "RELAX",
    gameCode: "RLX",
  },
  {
    logo: "https://uploads-ssl.webflow.com/5ad9ea8824e99a21e272dacd/5ae73184a9e2a25942fb74a1_Tiger.svg",
    name: "RED TIGER",
    gameCode: "RED",
  },
  {
    logo: "https://rtgslots.com/wp-content/uploads/2020/09/RTG-SLOTS-logo.png",
    name: "RTG SLOT",
    gameCode: "RTG",
  },
  {
    logo: "https://quickspin.com/wp-content/themes/quickspin/img/quickspin-logo.svg",
    name: "QUICK SPIN",
    gameCode: "QS",
  },
  {
    logo: "https://www.pushgaming.com/i/logo-v2-light.png",
    name: "PUSH",
    gameCode: "PUG",
  },
  {
    logo: "https://www.pragmaticplay.com/wp-content/themes/gp-theme-basic/libs/dist/images/PP-white-logo.svg",
    name: "PRAGMATIC",
    gameCode: "PPC",
  },
];

const SlotGamesHome = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const { postFindProviderListData } = useSelector((state) => state.auth);

  const [casionProviderData, setCasinoProviderData] = useState()
  const token = localStorage.getItem("TokenId");

  useEffect(() => {
    axios
      .post(
        "https://api.247idhub.com/api/qtech/provider", { gameType: "SLOT" },
        {},
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

  console.log(casionProviderData, "iuhytresdfxcgvhbj")
  const handleChangeaa = (val) => {
    if (localStorage.getItem("TokenId")) {

      navigate("/m/Slot-List", { state: { item1: { gameCode: val?.providerId } } })
    } else {
      navigate("/m/login")

    }

  }
  return (

    <div>
      <div className='slot_Casino_main_wrapper'>
        {casionProviderData?.data.map((item) => (

          <div className="MainBtn_warp_slot_casinos" style={{ border: "0.5px solid" }}
            onClick={() => handleChangeaa(item)}
          >
            <img
              className="complany-logo-warp"
              src={item?.image}
              alt="" />
            <span className="complany-name-wrap">{item?.providerName}</span>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default SlotGamesHome