import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Postcasino, psotbetsingleusevalue } from "../../App/Features/auth/authActions";
import "./CasinoList.css";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from 'react-icons/rx'
import CasinoModals from "./CasinoModals";
const Casinolistt = () => {
  const { PostcasinoData, psotbetsingleusevalueData } = useSelector((state) => state.auth);
  const [sportId, setSportId] = useState(323334);
  const [casinoList, setCasinoList] = useState(323334);
  let navigate = useNavigate();
  const [trueee, setTrueee] = useState(false);
  const [casionId, setCasionId] = useState("")
  // console.log(PostunsettledData?.data?.dataList)

  const dispatch = useDispatch();

  console.log(psotbetsingleusevalueData?.data, "kjhgfcvbhuytfv")

  useEffect(() => {
    dispatch(psotbetsingleusevalue())
  }, [])
  // console.log(PostcasinoData, "dushyant");
  const token = localStorage.getItem("TokenId");
  const [Casinoshow, setCasinoShow] = useState(false);
  const handleClose = () => setCasinoShow(false);
  const [show, setShow] = useState(false)


  const handleAgree = () => {
    setTrueee(true)
    setShow(false)
  }
  useEffect(() => {
    if (token) {

      dispatch(Postcasino());
    }
  }, [token]);

  const handleButton = (item) => {
    // console.log(item)
    setSportId(item);
  };

  useEffect(() => {

    const idd = {
      id: sportId,
      appUrl: window.location.hostname,
    };
    fetch("https://admin-api-banners-2.s3.ap-south-1.amazonaws.com/lords.json").then(res => res.json())
      .then((res) => {
        setCasinoList(res.data);

        // console.log(res?.data, "dsfsfsdfsd")
      })
  }, [sportId]);

  const handleChangeaa = (val) => {
    // console.log(val)
    // /m/casino/:id


    if (psotbetsingleusevalueData?.data?.aura === 1) {
      setTrueee(true)
      setShow(false)
    } else {

      if (
        token
      ) {
        setCasionId(val)
        // setTrueee(true)
        setShow(true)

        // navigate(`/m/casino/${val}`);
      } else {
        navigate("/m/login");
        // setCasionId(val)
        // setTrueee(true)
      }
    }
  };

  return (
    <>
      <div className="buttttt">
        {/* <ul class="nav nav-tabs">
          {PostcasinoData?.data && PostcasinoData?.data
            ? PostcasinoData?.data.map((el) => (
                <li class="nav-item" onClick={() => handleButton(el?.id)}>
                  <a data-toggle="tab" href="#market" class="nav-link active">
                    <img alt="" src={`${el?.logo}`} className="casino-images" />
                    {el?.name}
                  </a>
                </li>
              ))
            : ""}
        </ul> */}

        <div>
          <section data-v-6a7f44cc="" className="m-t-10 ">
            <div data-v-6a7f44cc="" className="container-fluid">
              <h2 data-v-6a7f44cc="" className="page-title text-center m-t-10">
                Live Casino
              </h2>
              <div data-v-6a7f44cc="" className="row row5 _margin">
                {casinoList?.length &&
                  casinoList.map((item) => {
                    return (
                      <div
                        data-v-6a7f44cc=""
                        className="colllcsss m-b-10"
                        onClick={() => handleChangeaa(item.gameId)}
                      >
                        <div data-v-6a7f44cc="" className="events ">
                          <div
                            data-v-6a7f44cc=""
                            className="events-row text-center"
                          >
                            <div data-v-6a7f44cc="" className="d-inline-block ">
                              <div className=" iconshadow">
                                {/* {console.log(item)} */}
                                <Link data-v-6a7f44cc="" className="buttonsize">
                                  <img
                                    alt=""
                                    data-v-6a7f44cc=""
                                    src={item.imageUrl}
                                    className="img-fluid casino-body-images "
                                  />
                                  <div className="buttnnnname">
                                    {" "}
                                    {item?.gameName}
                                  </div>
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
        </div>
      </div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body className="casino_modals_body">
          <CasinoModals type="aura" />
          <div className="agree_btn">
            <button onClick={handleAgree}>Ok I Agree</button>
            <button onClick={() => setShow(false)}>No, I Don't Agree</button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={trueee}
        onHide={() => setTrueee(false)}

        size="xl"
        className="slot_game">

        <>
          <div className="modal_CrosssIcon">
            <RxCross2 onClick={() => setTrueee(false)} />
          </div>
          <iframe
            src={`https://d.fawk.app/#/splash-screen/${token}/9482/?opentable=${casionId}`}
            // height="82vh"
            // className="mobile_if"
            width="100%"
            style={{ minHeight: "100vh" }}
            title="mobile"
            className="for_Desktop"
            allowFullScreen={true}

          ></iframe>
          <iframe
            src={`https://m.fawk.app/#/splash-screen/${token}/9482/?opentable=${casionId}`}
            // height="82vh"
            // className="mobile_if"
            width="100%"
            style={{ minHeight: "100vh" }}
            title="mobile"
            className="For_mobile"
            allowFullScreen={true}

          ></iframe>
        </>


      </Modal>
    </>
  );
};
export default Casinolistt;
