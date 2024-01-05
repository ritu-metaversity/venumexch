import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Modal from "react-bootstrap/Modal";
import CasinoModals from "../../Livecasino/CasinoModals"
import { useDispatch, useSelector } from "react-redux";
import { psotbetsingleusevalue } from "../../../App/Features/auth/authActions";


const SlotGamesList = () => {
    const { state } = useLocation()
    const TokenId = localStorage.getItem("TokenId");
    console.log(state, "statestatestatestate");
    let REACT_APP_API_URL_PLAY_INDIA = process.env.REACT_APP_API_URL_PLAY_INDIA;
    const [gameFilter, setGameFilter] = useState([])
    const navigate = useNavigate();
    const TokenGame = localStorage.getItem("GameToken");

    const [show, setShow] = useState(false)
    const [allDatta, setAllDatta] = useState()

    const dispatch = useDispatch();
    const { psotbetsingleusevalueData } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(psotbetsingleusevalue())
    }, [])


    useEffect(() => {

        if (
            TokenGame
        ) {
            let data = {
                token: TokenGame, provider: state?.item1?.gameCode, gameCategory: "SLOT"

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
                    // console.log(response?.data?.data?.items, "statestatestatestate");

                })


        } else {

        }
    }, [])
    const handleClose = () => setShow(false);
    const handleAgree = () => {
        navigate("/m/All-Games-page", { state: { item1: { gameCode: allDatta }, item2: window.location.pathname, backUrl: state } })
        setShow(false)

    }
    const handleChangeaa = (val) => {
        if (psotbetsingleusevalueData?.data?.qtech === 1) {
            navigate("/m/All-Games-page", { state: { item1: { gameCode: val }, item2: window.location.pathname, backUrl: state } })
            setShow(false)

        } else {

            console.log(val, "dafusiyhbdchuwdb");

            setAllDatta(val)
            setShow(true)
        }
    }


    console.log(gameFilter, "statestatestatestate");

    return (
        <>
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
        </>
    )
}

export default SlotGamesList