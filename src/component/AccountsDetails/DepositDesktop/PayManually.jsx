import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";
import "./PayManually.css";
import Modal from "react-bootstrap/Modal";
// import AlertBtn from "../../Alert/AlertBtn";
import { Input } from "antd";

import {
  Postpaymnetdetailapp,
  Postselfdepositapp,
} from "../../../App/Features/auth/authActions";
import axios from "axios";
import { toast } from "react-toastify";
// import { ImageUploadContainer } from "../../../../../../Deposit/styledComponents";
const PayManually = (props) => {
  const dispatch = useDispatch();

  const [payMethods, setPayMethods] = useState();
  const [UpiDetail, setUpiDetail] = useState();
  const [Bitvalue, setBitValue] = useState(0);
  const [allDatataa, setAllDatataa] = useState("");
  const [paymentMode, setPaymentMode] = useState("UPI");
  const [showModals, setShowModals] = useState(false);
  const [active, setActive] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [color, setColor] = useState();
  const [messege, setMessege] = useState();
  const [alertBtnshow, setAlertBtnshow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  const [files, setFiles] = useState(null);

  const increment = () => {
    setBitValue(Number(Bitvalue) + 10);
  };
  const decrement = () => {
    if (Bitvalue != 0 && Bitvalue > 9) setBitValue(Number(Bitvalue) - 10);
  };

  const handleStaticAmount = (vl) => {
    setBitValue((Bitvalue) => (Number(Bitvalue) || 0) + Number(vl));
  };

  const handleStaticAmountInput = (e) => {
    let Inputvalue = e.target.value;
    setBitValue(parseInt(Inputvalue));
  };
  // useEffect(() => {
  //   UserAPI.Get_Payment_Detail_By_Id().then((res) => {
  //     setPayMethods(res?.data?.paymentMethods);
  //     setUpiDetail(res?.data?.upiDetail);
  //     setAllDatataa(res?.data);
  //   });
  // }, []);

  useEffect(() => {
    const TokenId = localStorage.getItem("TokenId");

    axios.post(
      `${REACT_APP_API_URL}/deposit-type/get_sub`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenId}`,
        },
      }
    ).then((res) => {
      console.log(res, "dsfsdfsdf");
      setPayMethods(res?.data);
      setUpiDetail(res?.data);
      setAllDatataa(res?.data);
    });
  }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem("TokenId");

  //   if (token) {
  //     dispatch(Postpaymnetdetailapp());
  //   }
  // }, []);


  const [DepositType, setDepositeType] = useState();

  const handlePaymentDetails = (vl, id, dtype) => {
    setPaymentMode(vl);
    setActive(id);
    setDepositeType(dtype);
  };
  const handleSubmit = () => {
    try {

      setAlertBtnshow(false);
      setIsLoading(true);
      if (Bitvalue === 0 || Bitvalue === NaN) {
        setColor("danger");
        setMessege("Amount should be greater than 99");
        setAlertBtnshow(true);
        setIsLoading(false);
      } else if (files === null) {
        setColor("danger");
        setMessege("Payment Screenshot is required");
        setAlertBtnshow(true);
        setIsLoading(false);
      } else if (Bitvalue <= 99) {
        setColor("danger");
        setMessege("Minimum Deposit Amount is 100");
        setAlertBtnshow(true);
        setIsLoading(false);
      }

      const data = new FormData();
      data.append("amount", Bitvalue);
      data.append("image", files || "");
      // if (Bitvalue > 99 && Bitvalue !== "" && Bitvalue != NaN) {
      const TokenId = localStorage.getItem("TokenId");
      console.log(Bitvalue, files, "sdfdsd")
      axios.post(
        `${REACT_APP_API_URL}/enduser/self-deposit-app`, (data),
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${TokenId}`,
          },

        }
      ).then((res) => {
        console.log(res, "sdfdsda")

        setIsLoading(false);
        // props?.UpdateDetails(true);
        setMessege(res.data.message);
        setColor("success");
        setAlertBtnshow(true);
        if (res?.data.status === true) {
          setBitValue(0);
          setFiles(null);
          setPaymentMode("UPI");
          setActive(0);
          console.log(res.status, "hgfds")
          props.UpdateList(true);
          setBitValue(0)
          setFiles(null)
        }

      })
        .catch((error) => {
          console.log(Bitvalue, files, error, "sdfdsdab")

          setIsLoading(false);
          setMessege(error.respose.data.message);
          setColor("danger");
          setAlertBtnshow(true);
        });
      // }
      console.log("not errror");
    }
    catch { console.log("errrordasdfghjkl;"); }

  };

  const [AllBetData, setAllBetData] = useState();
  useEffect(() => {
    // UserAPI.WITHDRAW_STACK_REQUEST().then((res) => {
    //   setAllBetData(res?.data);
    // });
    const TokenId = localStorage.getItem("TokenId");

    axios
      .post(
        `${REACT_APP_API_URL}/request-stack`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TokenId}`,
          },
        }
      )
      .then((res) => {
        setAllBetData(res?.data);

        // console.log(res?.data?.data, "yguhvjuiyfghv");
      });
  }, []);

  const handleCloseModal = () => setShowModals(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShowModals(true);
  };

  const popupClose = (vl) => {
    setAlertBtnshow(false);
  };

  return (
    <div>

      {isLoading ? (
        <p className="lodder depositLoading">
          <i className="fa fa-spinner fa-spin"></i>
        </p>
      ) : (
        ""
      )}

      <div className="main_box_amount">
        <div className="enter_amount_div">
          <span className="enter_amount_name">Enter Amount</span>
          <div>

            <button
              className="enter_amount_decrement"
              onClick={decrement}>
              <span
                className="fa fa-minus"
                aria-hidden="true"
                style={{ color: "#fff" }}
                onClick={decrement}></span>
            </button>
            <input
              type="number"
              placeholder="0"
              className="enter_amount_input"
              onChange={handleStaticAmountInput}
              value={Number(Bitvalue)}
            />
            <button
              className="enter_amount_decrement"
              onClick={increment}>
              <span
                style={{ color: "#fff" }}
                className="fa fa-plus"
                aria-hidden="true"
                onClick={increment}></span>
            </button>
          </div>
        </div>


        <div className="stack_box_mobile">
          {AllBetData?.data.map(({ value, key }) => (

            <button
              className="stack_box_mobile_btn"
              onClick={() => handleStaticAmount(value)}>
              {key}
            </button>

          ))}
        </div>
        <div className="Pay_Manually_ui">
          <h1>Pay {Bitvalue || 0}/-</h1>
          <span className="enter_pay_manuallll">Pay Manually</span>
        </div>
      </div>


      <div className="paymethods">
        <Container>

          <div className="upload_file" style={{ height: "200px" }}>
            <div className="main_banks_div">

              {payMethods?.data?.length &&
                payMethods?.data?.map((item, id) => {
                  return (

                    // className={item.methodName === "Bank" ? "d-none" : ""}

                    <div
                      className={`inner_banks_div ${active === id ? "active3" : ""
                        } `}

                      key={item.methodName + id}
                      onClick={() =>
                        handlePaymentDetails(
                          item.methodName,
                          id,
                          item?.depositType
                        )
                      }>
                      <img

                        src={item.image}
                        className="banks_looggoog"
                        alt="Bank"
                      />
                      <span className="banks_name">{item.depositType}</span>
                    </div>

                  );
                })}
            </div>
          </div>
        </Container>
      </div >


      <div className="paymethods">
        {payMethods?.data?.map((res) => {
          if (DepositType !== res?.depositType) return <></>;
          return (
            <>
              {DepositType === "QR" && (
                <Container>
                  <div className="upload_file">
                    <div className="qr_main_box">
                      <div className="qr_inner_box">
                        <span className="Qr_code_img">QR Code For Payment</span>
                        <span className="Qr_code_img">Display Name</span>


                      </div>
                      <Modal
                        show={showModals}
                        onHide={handleCloseModal}
                        centered
                        style={{
                          marginTop: "12px",
                          marginInline: "2%",
                          width: "95%",
                        }}>
                        <Modal.Body className="image-body">
                          {" "}
                          <img
                            src={res?.accountNumber && res?.accountNumber}
                            className="modals-image"
                            alt="QR-code"
                          />
                        </Modal.Body>
                      </Modal>
                      <div className="qr_inner_box">
                        <img
                          src={res?.accountNumber && res?.accountNumber}
                          style={{ cursor: "pointer" }}
                          onClick={(e) => handleShow(e)}
                          alt="QR-Code"
                          className="Qr_code_img"
                        />
                        <Input
                          className="Qr_code_img"
                          value={
                            res?.accountHolderName && res?.accountHolderName
                          }
                          readOnly
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </Container>
              )}
              {DepositType === "UPI" && (
                <Container>
                  <div className="upload_file">
                    <div className="qr_main_box">

                      <div className="qr_inner_box">

                        <span className=" Qr_code_img">Mode</span>


                        <span className="Qr_code_img ">Display Name </span>



                        <span className="Qr_code_img">UPI Detail</span>

                      </div>

                      <div className="qr_inner_box">

                        <span className="Qr_code_img">{res?.depositType}</span>
                        <span className="Qr_code_img ">{res?.accountHolderName}</span>
                        <span className="Qr_code_img">{res?.accountNumber}</span>

                      </div>
                    </div>
                  </div>
                </Container>
              )}
              {
                DepositType === "BANK" &&
                <Container>
                  <div className="upload_file">

                    <div className="qr_main_box">

                      <div className="qr_inner_box">
                        <span className="Typography-root root">Bank Name</span>




                        <span className="Typography-root root">Account Number</span>



                        <span className="Typography-root root">Account Holder Name</span>
                        <span className="Typography-root root">IFSC Code</span>
                      </div>


                      <div className="qr_inner_box">

                        <span className="Typography-root text-right">
                          {res?.accountNumber}
                        </span>
                        <span className="Typography-root text-right">
                          {res?.bankName}
                        </span>
                        <span className="Typography-root text-right">
                          {res?.accountHolderName}
                        </span>
                        <span className="Typography-root text-right">
                          {res?.ifsc}
                        </span>
                      </div>


                    </div>
                  </div>

                </Container>
              }
            </>
          );
        })}
      </div>
      {/* <div className="paymethods">
      {paymentMode === "UPI" ? (
        <Container>
          <div className="bank-logo mode">
            <Row className="upi-detail head-deposit">
              <Col className="name-d">
                <div className="">
                  <p className="Typography-root ">Mode</p>
                </div>
              </Col>
              <Col className="name-d">
                <div className="">
                  <p className="Typography-root ">Display Name</p>
                </div>
              </Col>
              <Col className="name-d">
                <div className="">
                  <p className="Typography-root ">UPI Detail</p>
                </div>
              </Col>
            </Row>

            <Row className="upi-detail">
              <Col className="name-d">
                <div className="">
                  <p className="Typography-root ">{UpiDetail?.upiName}</p>
                </div>
              </Col>
              <Col className="name-d">
                <div className="">
                  <p className="Typography-root ">{UpiDetail?.displayName}</p>
                </div>
              </Col>
              <Col className="name-d">
                <div className="">
                  <p className="Typography-root">{UpiDetail?.upiId}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      ) : (
        ""
      )}
      {paymentMode === "Bank" ? (
        <Container className="bank-detail">
          <Row>
            <Col className="name-d">
              <div className="">
                <p className="Typography-root root">Bank Name</p>
              </div>
            </Col>
            <Col>
              <div className="">
                <p className="Typography-root text-right">
                  {allDatataa?.bankDetail?.bankName}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="name-d">
              <div className="">
                <p className="Typography-root root">Account Number</p>
              </div>
            </Col>
            <Col>
              <div className="">
                <p className="Typography-root text-right">
                  {allDatataa?.bankDetail?.accountNumber}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="name-d">
              <div className="">
                <p className="Typography-root root">IFSC Code</p>
              </div>
            </Col>
            <Col>
              <div className="">
                <p className="Typography-root text-right">
                  {allDatataa?.bankDetail?.ifscCode}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="name-d">
              <div className="">
                <p className="Typography-root root">Account Holder Name</p>
              </div>
            </Col>
            <Col>
              <div className="">
                <p className="Typography-root text-right">
                  {allDatataa?.bankDetail?.accountHolderName}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}  
      {paymentMode === "QR" ? (
        <Container className="bank-detail">
          <Row>
            <p>QR Code For Payment</p>
            <Col className="name-d">
              <div className="">
                <img
                  src={
                    allDatataa &&
                    allDatataa?.qrCode &&
                    allDatataa?.qrCode?.qrCodeImage
                  }
                  style={{ width: "150px" }}
                  onClick={(e) => handleShow(e)}
                  alt="QR-Code"
                />
              </div>
            </Col>
            <Modal
              show={showModals}
              onHide={handleCloseModal}
              centered
              style={{
                marginTop: "12px",
                marginInline: "2%",
                width: "95%",
              }}>
              <Modal.Body className="image-body">
                <img
                  src={
                    allDatataa &&
                    allDatataa?.qrCode &&
                    allDatataa?.qrCode?.qrCodeImage
                  }
                  className="modals-image"
                  alt="QR-code"
                />
              </Modal.Body>
            </Modal>
            <Col className="qr-payment">
              <Row>
                <Col>
                  <div className="">
                    <p>Display Name</p>
                    <Input
                      value={
                        allDatataa &&
                        allDatataa?.qrCode &&
                        allDatataa?.qrCode?.displayName
                      }
                      readOnly
                      type="text"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </div> */}

      <div className="paymethods">
        <Container>

          <label className="upload_file">

            {!files && (
              <div className="upload_file_btnnn">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <p>Click here to upload payment screenshot</p>
              </div>
            )}

            {files && (
              <img
                src={URL.createObjectURL(files)}
                alt="uploaded_img"
                className="upload_file_image"
              />
            )}
            <input
              value={""}
              // onChange={(e) =>
              //   e.target.files && setFiles(e.target.files[0])
              // }
              onChange={(e) => {
                if (e.target.files?.length) {
                  if (e.target.files[0]?.type.includes("image")) {
                    setFiles(e.target.files[0]);
                  } else {
                    toast.error("Only image files allowed.", {
                      style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                      }
                    })
                  }
                }
              }}
              type="file"
              accept="image/*"
              hidden
            />


          </label>

        </Container>
      </div>



      {
        files !== null && Bitvalue !== 0 ? (
          <div className="deposit_button_btnnn">
            <button
              className="deposit_button_main"
              onClick={handleSubmit}>
              Submit
            </button>

          </div>
        ) : (
          ""
        )
      }
    </div >
  );
};

export default PayManually;
