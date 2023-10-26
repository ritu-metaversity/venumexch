import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import CasinoModals from "../../../Livecasino/CasinoModals"

const SuperNowa = () => {

  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  const [casinoList, setCasinoList] = useState([]);
  // const [trueee, setTrueee] = useState(false);
  const nav = useNavigate();

  const [casionId, setCasionId] = useState("")
  const [Casinoshow, setCasinoShow] = useState(false);
  const [isLoading, setIsloading] = useState(true)
  const TokenId = localStorage.getItem("TokenId");

  useEffect(() => {
    const TokenId = localStorage.getItem("TokenId");
    axios
      .post(
        `${REACT_APP_API_URL}/api/supernowa/game-list`, {},

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TokenId}`,
          },
        }
      )
      .then((response) => {
        if (response) {
          setCasinoList(response?.data?.data?.games)
          setIsloading(false)
          // console.log(response?.data?.datda?.games, "sdfsdfsdfsdfsdfsdfsd")
        } else {
        }

      })

  }, [])


  // const [show, setShow] = useState(false)
  const [allDatta, setAllDatta] = useState()


  const handleClose = () => setCasinoShow(false);
  const [show, setShow] = useState(false)

  const handleAgree = () => {
    nav("/m/SuperNowa-Game-page", { state: allDatta })
    setShow(false)
  }


  const handleChangeaa = (val) => {
    setAllDatta(val)
    setShow(true)
  };

  return (
    <div>
      {isLoading ?
        <div className=" lodddd">
          <i
            className="fa fa-circle-o-notch fa-spin loading"
            style={{ fontSize: "50px" }}
          ></i>
          <p className="loading-text">Loading...</p>{" "}
        </div> :

        <div className="main_wrap_game_logog_lottery">
          {casinoList.map((item) => (

            <img src={item.thumb} alt="thumb"
              onClick={() => handleChangeaa(item)}
              className="game_logog_lottery" />

          ))}
        </div>}
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body className="casino_modals_body">
          <CasinoModals type="supernowa" />
          <div className="agree_btn">
            <button onClick={handleAgree}>Ok I Agree</button>
            <button onClick={() => setShow(false)}>No, I Don't Agree</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>

  )
}

export default SuperNowa