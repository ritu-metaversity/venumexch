import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Postcasino } from "../../App/Features/auth/authActions";
import "./CasinoList.css";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from "react-icons/rx";
import CasinoModals from "./CasinoModals";

const casinoImageData = [
  {
    name: "32 Cards",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/1.jpeg",
  },
  {
    name: "Andar Bahar",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/2.jpeg",
  },
  {
    name: "Auto Roulette",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/3.jpeg",
  },
  {
    name: "Auto Roulette 1",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/4.jpeg",
  },
  {
    name: "Baccarat",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/5.jpeg",
  },
  {
    name: "Baccarat A",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/6.jpeg",
  },
  {
    name: "Baccarat B",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/7.jpeg",
  },
  {
    name: "Baccarat C",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/8.jpeg",
  },
  {
    name: "Baccarat D",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/9.jpeg",
  },
  {
    name: "Bet on Teen Patti",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/10.jpeg",
  },
  {
    name: "Blackjack",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/11.jpeg",
  },
  {
    name: "Blackjack A",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/12.jpeg",
  },
  {
    name: "Casino Hold'em",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/13.jpeg",
  },
  {
    name: "Casino Marina Andar Bahar",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/14.jpeg",
  },
  {
    name: "Blackjack Salon Privé",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/15.jpeg",
  },
  {
    name: "Blackjack da Sorte",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/16.jpeg",
  },

  {
    name: "Casino Marina Baccarat A",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/18.jpeg",
  },
  {
    name: "Casino Marina Baccarat C",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/19.jpeg",
  },
  {
    name: "Casino Marina Roulette 1",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/20.jpeg",
  },
  {
    name: "Cricket Auto Roulette",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/21.jpeg",
  },
  {
    name: "Cricket War",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/22.jpeg",
  },
  {
    name: "Diamond Roulette",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/23.jpeg",
  },
  {
    name: "Lucky 7",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/24.jpeg",
  },
  {
    name: "Casino Marina Andar Bahar",
    url: "https://s3buket.blr1.cdn.digitaloceanspaces.com/casino/17.jpeg",
  },
];

const Casinolist = ({lnk}) => {
  const { PostcasinoData } = useSelector((state) => state.auth);
  const [sportId, setSportId] = useState(323334);
  const [casinoList, setCasinoList] = useState(323334);
  let navigate = useNavigate();
  const [trueee, setTrueee] = useState(false);
  const [casionId, setCasionId] = useState("");
  // console.log(PostunsettledData?.data?.dataList)

  const dispatch = useDispatch();
  // console.log(PostcasinoData, "dushyant");
  const TokenId = localStorage.getItem("TokenId");
  const [Casinoshow, setCasinoShow] = useState(false);
  const handleClose = () => setCasinoShow(false);
  const [show, setShow] = useState(false);
  
  const [gameLobbyUrl, setGameLobbyUrl] = useState("");

  const GameToken = localStorage.getItem("GameToken");

  const handleAgree = () => {
    setTrueee(true);
    setShow(false);
  };
  // useEffect(() => {
  //   if (token) {

  //     dispatch(Postcasino());
  //   }
  // }, [token]);

  const handleButton = (item) => {
    // console.log(item)
    setSportId(item);
  };

  // useEffect(() => {

  //   const idd = {
  //     id: sportId,
  //     appUrl: window.location.hostname.replace("www.",""),
  //   };
  //   fetch("https://admin-api-banners-2.s3.ap-south-1.amazonaws.com/lords.json").then(res => res.json())
  //     .then((res) => {
  //       setCasinoList(res.data);

  //       // console.log(res?.data, "dsfsfsdfsd")
  //     })
  // }, [sportId]);

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
        token: GameToken,
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
      setCasionId(val);
      setShow(true);
    } else {
      navigate(lnk);
    }
  };

  const [gameFilter, setGameFilter] = useState([]);
  const TokenGame = localStorage.getItem("GameToken");


  useEffect(() => {

    if (TokenId) {
      let data = {
        token: TokenGame,
        provider: "EZU",
        gameCategory: "LIVECASINO",
      };
      axios
        .post(
          `${process.env.REACT_APP_API_URL_PLAY_INDIA}/api/qtech/gamelist`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TokenId}`,
            },
          }
        )
        .then((response) => {
          setGameFilter(response?.data?.data?.items);
        });
    } else {
    }
  }, [TokenGame]);

  return (
    <>
     

      <div>
        {TokenId ? (
          <section className="m-t-10 ">
            <div className="container-fluid">
              <h2 className="page-title text-center m-t-10">Live Casino</h2>
              <div className="row row5">
                {gameFilter?.length &&
                  gameFilter.map((item) => {
                    return (
                      <div
                        className="fansty_casino col-md-3 m-b-10"
                        onClick={() => handleChangeaa(item.id)}>
                        <div className="events ">
                          <div className="events-row text-center">
                            <div className="d-inline-block ">
                              <div className="row iconshadow">
                                <Link className="buttonsize">
                                  <img
                                    style={{
                                      width: "95% ",
                                      height: "100%",
                                    }}
                                    alt=""
                                    width={"100%"}
                                    src={item.images[1]?.url}
                                    className="img-fluid casino-body-images "
                                  />
                                  <button
                                    className="buttnnnname"
                                    style={{
                                      width: "100%",
                                      minWidth: "96%",
                                    }}>
                                    {" "}
                                    {item?.name}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        ) : (
          <section className="m-t-10 ">
            <div className="container-fluid">
              <h2 className="page-title text-center m-t-10">Live Casino</h2>
              <div className="row row5">
                {casinoImageData?.length &&
                  casinoImageData.map((item) => {
                    return (
                      <div
                        className="fansty_casino col-md-3 m-b-10"
                        onClick={() => handleChangeaa(item.id)}>
                        <div className="events ">
                          <div className="events-row text-center">
                            <div className="d-inline-block ">
                              <div className="row iconshadow">
                                <Link className="buttonsize">
                                  <img
                                    style={{
                                      width: "95% ",
                                      height: "100%",
                                    }}
                                    alt=""
                                    width={"100%"}
                                    src={item.url}
                                    className="img-fluid casino-body-images "
                                  />
                                  <button
                                    className="buttnnnname"
                                    style={{
                                      width: "100%",
                                      minWidth: "96%",
                                    }}>
                                    {" "}
                                    {item?.name}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        )}
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
    </>
  );
};
export default Casinolist;
