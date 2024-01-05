import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CasinoModals from "../../Livecasino/CasinoModals"
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { psotbetsingleusevalue } from "../../../App/Features/auth/authActions";


export const FgameData = [
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
    {
        providerId: "RLX",
        id: "RLX-bananatown",
        name: "Banana Town",
        image:
            "https://client-int.qtlauncher.com/images/?id=RLX-bananatown_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "RLX",
        id: "RLX-beastmode",
        name: "Beast Mode",
        image:
            "https://client-int.qtlauncher.com/images/?id=RLX-beastmode_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "RLX",
        id: "RLX-blackjackneo",
        name: "Blackjack Neo",
        image:
            "https://client-int.qtlauncher.com/images/?id=RLX-blackjackneo_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "RLX",
        id: "RLX-blenderblitz",
        name: "Blender Blitz",
        image:
            "https://client-int.qtlauncher.com/images/?id=RLX-blenderblitz_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "RLX",
        id: "RLX-bookofpower",
        name: "Book Of Power",
        image:
            "https://client-int.qtlauncher.com/images/?id=RLX-bookofpower_en_US&type=banner&version=1678192465376",
    },
    {
        providerId: "TK",
        id: "TK-1429unchartedseas",
        name: "1429 Uncharted Seas",
        image:
            "https://client-int.qtlauncher.com/images/?id=TK-1429unchartedseas_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "TK",
        id: "TK-arcader",
        name: "Arcader",
        image:
            "https://client-int.qtlauncher.com/images/?id=TK-arcader_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "TK",
        id: "TK-babushkas",
        name: "Babushkas",
        image:
            "https://client-int.qtlauncher.com/images/?id=TK-babushkas_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "TK",
        id: "TK-barbershopuncut",
        name: "Barber Shop Uncut",
        image:
            "https://client-int.qtlauncher.com/images/?id=TK-barbershopuncut_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "TK",
        id: "TK-baronbloodmore",
        name: "Baron Bloodmore And The Crimson Castle",
        image:
            "https://client-int.qtlauncher.com/images/?id=TK-baronbloodmore_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "NLC",
        id: "NLC-barbarianfury",
        name: "Barbarian Fury",
        image:
            "https://client-int.qtlauncher.com/images/?id=NLC-barbarianfury_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "NLC",
        id: "NLC-benjikilledinvegas",
        name: "Benji Killed in Vegas",
        image:
            "https://client-int.qtlauncher.com/images/?id=NLC-benjikilledinvegas_en_US&type=banner&version=1675678202410",
    },
    {
        providerId: "NLC",
        id: "NLC-bonusbunnies",
        name: "Bonus Bunnies",
        image:
            "https://client-int.qtlauncher.com/images/?id=NLC-bonusbunnies_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "NLC",
        id: "NLC-bookofshadows",
        name: "Book of Shadows",
        image:
            "https://client-int.qtlauncher.com/images/?id=NLC-bookofshadows_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "NLC",
        id: "NLC-bountyhunters",
        name: "Bounty Hunters",
        image:
            "https://client-int.qtlauncher.com/images/?id=NLC-bountyhunters_en_US&type=banner&version=1689142030076",
    },
    {
        providerId: "NLC",
        id: "NLC-buffalohunter",
        name: "Buffalo Hunter",
        image:
            "https://client-int.qtlauncher.com/images/?id=NLC-buffalohunter_en_US&type=banner&version=1667798993145",
    },
    {
        providerId: "NLC",
        id: "NLC-bushidowaysxnudge",
        name: "Bushido Ways xNudge",
        image:
            "https://client-int.qtlauncher.com/images/?id=NLC-bushidowaysxnudge_en_US&type=banner&version=1667798993145",
    },
];
// export interface GameDataInterface {
//     providerId: string;
//     id: string;
//     name: string;
//     image: string;
// }
const FantasyGamePage = () => {
    const { state } = useLocation()
    const [GameLists, setGameLists] = useState([]);
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const { psotbetsingleusevalueData } = useSelector((state) => state.auth);
    console.log(psotbetsingleusevalueData?.data, "kjhgfcvbhuytfv")

    useEffect(() => {
        dispatch(psotbetsingleusevalue())
    }, [])

    // const [Casinoshow, setCasinoShow] = useState(false);
    // const [gameFilter, setGameFilter] = useState([])
    const [show, setShow] = useState(false)
    const [allDatta, setAllDatta] = useState()

    useEffect(() => {
        if (state?.item1?.gameCode) {
            const gamesAr = FgameData.filter(
                (el) => el.providerId === state?.item1?.gameCode
            )
            // console.log(gamesAr, "dfsdfhsbfhsbd");
            setGameLists(gamesAr)
        }
    }, [state?.item1?.gameCode]);

    const handleClose = () => setShow(false);

    const handleAgree = () => {
        navigate("/m/All-Games-page", { state: { item1: { gameCode: allDatta }, item2: window.location.pathname, item3: state?.item1?.gameCode, backUrl: state } })
        setShow(false)

    }
    const handleChangeaa = (val) => {
        if (psotbetsingleusevalueData?.data?.qtech === 1) {
            navigate("/m/All-Games-page", { state: { item1: { gameCode: val }, item2: window.location.pathname, item3: state?.item1?.gameCode, backUrl: state } })
            setShow(false)
        } else {

            setAllDatta(val)
            setShow(true)
        }
    }


    return (
        <div>
            <div className="main_wrap_game_logog_lottery">


                {GameLists.map((key) => (



                    <img
                        onClick={() => handleChangeaa(key?.id)}

                        className="game_logog_lottery"
                        src={key?.image}
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

export default FantasyGamePage