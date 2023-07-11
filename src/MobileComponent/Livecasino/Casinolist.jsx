import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Postcasino } from "../../App/Features/auth/authActions";
import "./CasinoList.css";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from 'react-icons/rx'
const Casinolist = () => {
  const { PostcasinoData } = useSelector((state) => state.auth);
  const [sportId, setSportId] = useState(323334);
  const [casinoList, setCasinoList] = useState(323334);
  let navigate = useNavigate();
  const [trueee, setTrueee] = useState(false);
  const [casionId, setCasionId] = useState("")
  // console.log(PostunsettledData?.data?.dataList)

  const dispatch = useDispatch();
  // console.log(PostcasinoData, "dushyant");
  const token = localStorage.getItem("TokenId");

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
    fetch("https://admin-api-banners-new.s3.ap-south-1.amazonaws.com/lords.json").then(res => res.json())
      .then((res) => {
        setCasinoList(res.data);

        console.log(res?.data, "dsfsfsdfsd")
      })
  }, [sportId]);

  const handleChangeaa = (val) => {
    // console.log(val)
    // /m/casino/:id
    if (
      token
    ) {
      setCasionId(val)
      setTrueee(true)
      // navigate(`/m/casino/${val}`);
    } else {
      navigate("/m/login");
      // setCasionId(val)
      // setTrueee(true)
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
      <Modal
        show={trueee}
        onHide={() => setTrueee(false)}
        style={{ padding: "10px" }}
        size="xl"
        className="slot_game">

        <>
          <RxCross2 className="modal_CrosssIcon" onClick={() => setTrueee(false)} />
          <iframe
            src={`https://d2.fawk.app/#/splash-screen/${token}/9482/?opentable=${casionId}`}
            // height="82vh"
            // className="mobile_if"
            width="100%"
            style={{ minHeight: "100vh" }}
            title="mobile"
            className="for_Desktop"
            allowFullScreen={true}

          ></iframe>
          <iframe
            src={`https://m2.fawk.app/#/splash-screen/${token}/9482/?opentable=${casionId}`}
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
export default Casinolist;
