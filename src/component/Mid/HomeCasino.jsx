import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CasinoModals from "../SideBar/CasinoModals";
import { useNavigate } from "react-router";
import { RxCross2 } from "react-icons/rx";

export const avitorList = [
  {
    providerId: "SPB",
    id: "SPB-aviator",
    name: "Aviator",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-aviator_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-dice",
    name: "Dice",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-dice_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-goal",
    name: "Goal",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-goal_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-hilo",
    name: "Hilo",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-hilo_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-hotline",
    name: "Hotline",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-hotline_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-mines",
    name: "Mines",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-mines_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-miniroulette",
    name: "Mini Roulette",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-miniroulette_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-plinko",
    name: "Plinko",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-plinko_en_US&type=banner&version=1667798993145",
  },
];

const HomeCasino = ({ lnk }) => {
  const [gameFilter, setGameFilter] = useState([]);
  const [trueee, setTrueee] = useState(false);
  const [show, setShow] = useState(false);
  const [Casinoshow, setCasinoShow] = useState(false);
  const handleClose = () => setCasinoShow(false);
  const [gameLobbyUrl, setGameLobbyUrl] = useState("");
  const TokenId = localStorage.getItem("TokenId");
  const TokenGame = localStorage.getItem("GameToken");
  const navigate = useNavigate();
  const handleAgree = () => {
    setTrueee(true);
    setShow(false);
  };
  const handleChangeaa = (val) => {
    // console.log(val)
    // /m/casino/:id
    if (TokenId) {
      let data = {
        playerId: "121212",
        currency: "INR",
        country: "IN",
        gender: "M",
        gameName: val,
        birthDate: "1986-01-01",
        lang: "en_IN",
        mode: "real",
        device: window.innerWidth > 1024 ? "desktop" : "mobile",
        returnUrl: window.location.origin,
        token: TokenGame,
        walletSessionId: TokenId,
      };
      axios
        .post(
          `${process.env.REACT_APP_API_URL_PLAY_INDIA}/api/qtech/gamelink`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TokenId}`,
            },
          }
        )
        .then((response) => {
          if (response) {
            // console.log(response?.data?.data?.url, "sdfsdfsdfsdfsdfsdfsd");
            setGameLobbyUrl(response?.data?.data?.url);
          } else {
          }
        });

      // }
      setShow(true);
    } else {
      navigate(lnk);
    }
  };

  return (
    <div>
      <h3 className="provider_name_details" style={{ textAlign: "center" }}>
        Fantasy Game
      </h3>

      <div
        className="main_wrap_game_logog_lottery row"
        style={{
          justifyContent: "space-between",
          gap: "0",
          paddingTop:"10px"
        }}>
        {avitorList.map((key) => (
          <div className="col-md-3 fansty_casino">
            <img
              onClick={() => handleChangeaa(key?.id)}
              className="game_logog_lottery"
              style={{
                width: "100%",
                padding: "5px",
              }}
              src={key?.image}
              alt=""
            />
          </div>
        ))}
      </div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body className="casino_modals_body">
          <CasinoModals type={"qtech"} />
          <div className="agree_btn">
            <button onClick={handleAgree}>Ok I Agree</button>
            <button onClick={() => setShow(false)}>No, I Don't Agree</button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={trueee}
        size="xl"
        className="slot_game"
        onHide={() => setTrueee(false)}
        style={{ padding: "10px" }}>
        <>
          <RxCross2
            className="modal_CrosssIcon"
            onClick={() => setTrueee(false)}
          />
          <iframe
            src={gameLobbyUrl}
            // height="82vh"
            // className="mobile_if"
            width="100%"
            style={{ minHeight: "100vh" }}
            title="mobile"
            className="for_Desktop"
            allowFullScreen={true}></iframe>
          <iframe
            src={gameLobbyUrl}
            // height="82vh"
            // className="mobile_if"
            width="100%"
            style={{ minHeight: "100vh" }}
            title="mobile"
            className="For_mobile"
            allowFullScreen={true}></iframe>
        </>
      </Modal>
    </div>
  );
};

export default HomeCasino;
