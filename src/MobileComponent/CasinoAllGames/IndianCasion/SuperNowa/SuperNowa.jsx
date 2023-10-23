import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
// import { casinoService } from "../../../../utils/api/casino/service";
// import { LoaderContext } from "../../../../App";
// import CasinoModals from "../../../Livecasino/CasinoModals";
// import { LocalDining } from "@mui/icons-material";



// const StyledTab = styled(Tab)(({ theme }) => ({
//   borderRadius: "20px",
//   marginRight: "10px",
//   paddingTop: "2px",
//   paddingBottom: "2px",
//   minHeight: 50,
//   border: "2px solid #3c444b",
//   [`&.${tabClasses.selected}`]: {
//     borderColor: theme.palette.primary.main,
//   },
// }));

// export interface CasinoList {
//   gameId: number;
//   gameCode: string;
//   gameName: string;
//   imageUrl: string;
// }

const SuperNowa = () => {

  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  const [casinoList, setCasinoList] = useState([]);
  // const [trueee, setTrueee] = useState(false);
  const [casionId, setCasionId] = useState("")
  const nav = useNavigate();
  // const getCasinoList = async () => {
  //   const isSignedIn = localStorage.getItem("token");
  //   if (!isSignedIn) {
  //     nav("/");
  //     return;
  //   }
  //   const { response } = await casinoService.getCasinoListByType(Number(value));
  //   if (response) {
  //     setCasinoList(response.data || []);
  //   } else {
  //     setCasinoList([]);
  //   }
  // };
  const [Casinoshow, setCasinoShow] = useState(false);
  // const { setLoading, loading } = useContext(LoaderContext);
  // const token = localStorage.getItem("token");
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



  const handleClose = () => setCasinoShow(false);
  const [show, setShow] = useState(false)


  const [confirmPopup, setConfirmPopup] = useState(false)
  const handleNotAgree = () => {
    setConfirmPopup(false)
  }
  // const handleClose = () => setConfirmPopup(false);

  const handleAgree = () => {
    nav("/SuperNowa-Game-page", { state: casionId })

    setConfirmPopup(false)
  }
  const handleChangeaa = (val) => {
    console.log(val, "uygtfvgbhnjuytfrvb");

    if (TokenId) {
      nav("/m/SuperNowa-Game-page", { state: val })

      // setCasionId(val)
      // setConfirmPopup(true)
    } else {
    }
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
    </div>

  )
}

export default SuperNowa