import React, { useEffect, useState } from 'react'
import "./MainGamePageCasino.css"
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { PostBalance } from '../../App/Features/auth/authActions'
import { useDispatch, useSelector } from 'react-redux'

const MainGamePageCasino = () => {
    const { state } = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { PostTotalBalance } = useSelector(
        (state) => state.auth
    );
    useEffect(() => {
        dispatch(PostBalance());
    }, []);

    console.log(state, "cefergbrtnryn");


    const tokenMain = localStorage.getItem("TokenId");
    const GameToken = localStorage.getItem("GameToken");
    const [gameLobbyUrl, setGameLobbyUrl] = useState("")

    let REACT_APP_API_URL_PLAY_INDIA = process.env.REACT_APP_API_URL_PLAY_INDIA;
    const [casinoList, setCasinoList] = useState([]);
    const handleBackToVCasion = () => {
        // state?.item2
        navigate(state?.item2, { state: state?.backUrl })

    }
    useEffect(() => {

        let data = {
            playerId: "121212",
            currency: "INR",
            country: "IN",
            gender: "M",
            gameName: state?.item1?.gameCode,
            birthDate: "1986-01-01",
            lang: "en_IN",
            mode: "real",
            device: window.innerWidth > 1024 ? "desktop" : "mobile",
            returnUrl: `${window.location.protocol}//${window.location.hostname}${state?.item2}`,
            token: GameToken,
            walletSessionId: tokenMain
        }
        axios
            .post(
                `${REACT_APP_API_URL_PLAY_INDIA}/api/qtech/gamelink`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${tokenMain}`,
                    },
                }
            )
            .then((response) => {
                if (response) {
                    console.log(response?.data?.data?.url, "sdfsdfsdfsdfsdfsdfsd")
                    setGameLobbyUrl(response?.data?.data?.url)
                } else {

                }
            })

        // }

    }, [])

    return (
        <div className='main_div_for_back_and_game'>
            <div className='main_back'>

                <button className='bacnk-btn-v-ca'
                    onClick={handleBackToVCasion}
                >

                    <IoMdArrowRoundBack color="white" className="back_icon" />
                    <span>
                        Back
                    </span>
                </button>
                <span>Chips: {Number(PostTotalBalance?.data?.data?.balance).toFixed(2)}</span>
                <span>Expo : <span style={{ color: "red" }}>{Number(PostTotalBalance?.data?.data?.libality).toFixed(2)}</span></span>
            </div>
            <iframe
                src={gameLobbyUrl}
                // height="82vh"
                // className="mobile_if"
                width="100%"
                style={{ minHeight: "100vh" }}
                title="mobile"
                className="for_Desktop"
                allowFullScreen={true}
            ></iframe>
            <iframe
                src={gameLobbyUrl}
                // height="82vh"
                // className="mobile_if"
                width="100%"
                style={{ minHeight: "100vh" }}
                title="mobile"
                className="For_mobile"
                allowFullScreen={true}

            ></iframe>
        </div>
    )
}

export default MainGamePageCasino