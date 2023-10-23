import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import "./LotteryGamesPage.css"

const LotteryGamesPage = () => {
    const { state } = useLocation()
    const TokenId = localStorage.getItem("TokenId");

    let REACT_APP_API_URL_PLAY_INDIA = process.env.REACT_APP_API_URL_PLAY_INDIA;
    const [gameFilter, setGameFilter] = useState([])
    const navigate = useNavigate();
    console.log(state, "sdfsdfsdfd");

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

    const handleChangeaa = (val) => {
        console.log(val, "dafusiyhbdchuwdb");
        navigate("/m/All-Games-page", { state: { item1: { gameCode: val }, item2: window.location.pathname, backUrl: state }, })
        // navigate("/m/All-Games-page", { state: { item1: val, item2: "/m/Lottery-home" } })

    }
    console.log(window.location.pathname, "statestatestatestate");

    // Object.keys(betRecord).map((key) => (
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
        </div>
    )
}

export default LotteryGamesPage