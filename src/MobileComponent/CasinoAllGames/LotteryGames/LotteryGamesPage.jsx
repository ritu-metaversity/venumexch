import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import "./LotteryGamesPage.css"
import Modal from "react-bootstrap/Modal";
import CasinoModals from "../../Livecasino/CasinoModals"
import { psotbetsingleusevalue } from "../../../App/Features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const LotteryGamesPage = () => {
    let REACT_APP_API_URL_PLAY_INDIA = process.env.REACT_APP_API_URL_PLAY_INDIA;
    const TokenId = localStorage.getItem("TokenId");

    const dispatch = useDispatch();
    const { psotbetsingleusevalueData } = useSelector((state) => state.auth);

    console.log(psotbetsingleusevalueData?.data, "kjhgfcvbhuytfv")
    useEffect(() => {

        dispatch(psotbetsingleusevalue())
    }, [])

    const { state } = useLocation()
    const navigate = useNavigate();

    // const [Casinoshow, setCasinoShow] = useState(false);
    const [gameFilter, setGameFilter] = useState([])
    const [show, setShow] = useState(false)
    const [allDatta, setAllDatta] = useState()

    useEffect(() => {
        const TokenGame = localStorage.getItem("GameToken");

        if (
            TokenId
        ) {
            let data = {
                token: TokenGame,
                provider: state?.item1?.gameCode,
                gameCategory: "LOTTERY"
            }
            axios.post(
                `${REACT_APP_API_URL_PLAY_INDIA}/api/qtech/gamelist`, data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
                .then((response) => {
                    setGameFilter(response?.data?.data?.items)

                })
        } else {

        }
    }, [])
    const handleClose = () => setShow(false);
    const handleAgree = () => {
        navigate("/m/All-Games-page", { state: { item1: { gameCode: allDatta }, item2: window.location.pathname, backUrl: state }, })
        setShow(false)

    }
    const handleChangeaa = (val) => {

        if (psotbetsingleusevalueData?.data?.qtech === 1) {
            navigate("/m/All-Games-page", { state: { item1: { gameCode: val }, item2: window.location.pathname, backUrl: state }, })
            setShow(false)
        } else {
            setAllDatta(val)
            setShow(true)
        }

    }

    return (
        <div>
            <div className="main_wrap_game_logog_lottery">

                {gameFilter.map((key) => (

                    <img
                        onClick={() => handleChangeaa(key?.id)}
                        className="game_logog_lottery"
                        src={key?.images[1]?.url}
                        alt="" />
                ))
                }
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
        </div>
    )
}

export default LotteryGamesPage