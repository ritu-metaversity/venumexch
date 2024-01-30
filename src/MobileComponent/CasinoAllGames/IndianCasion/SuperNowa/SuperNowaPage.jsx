import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { IoMdArrowRoundBack } from 'react-icons/io'
// import { userServices } from '../../../../utils/api/user/services'
import axios from 'axios'
import "./SuperNowa.css"
import { useDispatch, useSelector } from 'react-redux'
import { PostBalance } from '../../../../App/Features/auth/authActions'
const SuperNowaPage = () => {
  const { state } = useLocation()
  const token = localStorage.getItem("token");
  console.log(state, "statestatestatestate");
  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;
  const { PostTotalBalance } = useSelector(
    (state) => state.auth
  );
  console.log(PostTotalBalance, "PostTotalBalance");

  const navigate = useNavigate();



  const handleBackToVCasion = () => {
    navigate("/m/SuperNowa_casion")
  }


  const [walletBalance, setWalletbalance] = useState();
  const [casionUrl, setCasionUrl] = useState();
  const [walletLibality, setWalletlibality] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostBalance());
  }, []);



  useEffect(() => {
    const TokenId = localStorage.getItem("TokenId");

    let dtatata = {
      "game": {
        "gameCode": state?.code,
        "providerCode": state?.providerCode,
      },
      "timestamp": new Date().getTime(),
      user: {
        currency: "INR",
        backUrl: `${window.location.protocol}//${window.location.hostname}/m/Slot-Game-list`,
      }
    }
    axios
      .post(
        `${REACT_APP_API_URL}/api/supernowa/v1/authentication`, dtatata,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TokenId}`,
          },
        }
      )
      .then((response) => {
        if (response) {
          setCasionUrl(response?.data?.data?.launchURL)
          console.log(response?.data?.data?.launchURL, "sdfsdfsdfsdfsdfsdfsd")
        } else {
        }
      })
  }, [])
  // https://adminapi.247idhub.com/admin-new-apis/api/supernowa/v1/authentication
  // https://adminapi.247idhub.com/admin-new-apis/api/supernowa/v1/authentication

  return (
    <div className='main_div_for_back_and_game'>
      <div className='main_back'>

        <button className='bacnk-btn-v-ca' onClick={handleBackToVCasion}>

          <IoMdArrowRoundBack color="white" className="back_icon" />
          <span>
            Back
          </span>
        </button>
        <span>Chips: {Number(PostTotalBalance?.data?.data?.balance).toFixed(2)}</span>
        <span>Expo : <span style={{ color: "red" }}>{Number(PostTotalBalance?.data?.data?.libality).toFixed(2)}</span></span>
      </div>

      <iframe
        src={casionUrl}
        // height="82vh"
        // className="mobile_if"
        width="100%"
        style={{ minHeight: "100vh" }}
        title="mobile"
        className="for_Desktop"
        allowFullScreen={true}
      ></iframe>
      <iframe
        src={casionUrl}
        // height="82vh"
        // className="mobile_if"
        width="100%"
        style={{ minHeight: "90vh" }}
        title="mobile"
        className="For_mobile"
        allowFullScreen={true}

      ></iframe>
    </div>
  )
}

export default SuperNowaPage