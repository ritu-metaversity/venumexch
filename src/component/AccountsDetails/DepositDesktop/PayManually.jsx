import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";
import "./PayManually.css";
import Modal from "react-bootstrap/Modal";
// import AlertBtn from "../../Alert/AlertBtn";

import {
  Postpaymnetdetailapp,
  Postselfdepositapp,
} from "../../../App/Features/auth/authActions";
import axios from "axios";
// import { ImageUploadContainer } from "../../../../../../Deposit/styledComponents";
const PayManually = (props) => {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [trueee, setTrueee] = useState(false);
  const [active, setActive] = useState(0);
  const [stackValue, setStackValue] = useState();

  const dispatch = useDispatch();
  const { PostpaymnetdetailappDataData, PostselfdepositappData } = useSelector(
    (state) => state.auth
  );
  const TokenId = localStorage.getItem("TokenId");

  useEffect(() => {
    axios
      .post(
        "http://18.143.24.35/admin-new-apis/request-stack",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TokenId}`,
          },
        }
      )
      .then((res) => {
        setStackValue(res?.data?.data);
        console.log(res?.data?.data, "yguhvjuiyfghv");
      });
  }, [])
  const [Bitvalue, setBitValue] = useState(0);

  const [pymentMode, setPymentMode] = useState("UPI");

  const token = localStorage.getItem("TokenId");

  const handlePaymentName = (VL, id) => {
    setPymentMode(VL);
    setActive(id);
  };

  const increment = () => {
    setBitValue(Bitvalue + 10);
  };
  const decrement = () => {
    setBitValue((Bitvalue) => Bitvalue - 10);
  };

  const handleStaticAmount = (vl) => {
    setBitValue((Bitvalue) => Bitvalue + vl);
  };

  console.log(Bitvalue, "BitvalueBitvalue");
  useEffect(() => {
    if (token) {
      dispatch(Postpaymnetdetailapp());
    }
  }, [token]);

  const handleSubmit = () => {
    const data = new FormData();
    data.append("amount", Bitvalue.toString());

    data.append("image", files || "");

    dispatch(Postselfdepositapp(data));
    props.UpdateList(true);
  };

  useEffect(() => {
    if (PostselfdepositappData?.status) {
      setBitValue(0);
      setFiles(null);
    }
  }, [PostselfdepositappData?.status]);

  return (
    <div>
      <h3 className="enter-amount"> Enter Amount</h3>
      <div className="row row5 main-pricecontainor">
        <div
          className="text-lef col-6 price-input pValue"
          style={{ marginLeft: "-6%" }}
        >
          <div className="d-flex inputfield">
            <button
              className="stakeactionminus priceminus btn"
              onClick={decrement}
            >
              <span
                className="fa fa-minus"
                aria-hidden="true"
                onClick={decrement}
              ></span>
            </button>
            <input
              type="number"
              placeholder="Enter Amount"
              className="priceinput"
              value={Bitvalue}
              onChange={(e) => setBitValue(e.target.value)}
            />
            <button
              className="stakeactionminus priceminus btn"
              onClick={increment}
            >
              <span
                className="fa fa-plus"
                aria-hidden="true"
                onClick={increment}
              ></span>
            </button>
          </div>
        </div>
        <div className="col-6 pValue">
          <div className="row price-values">
            {stackValue && stackValue.map(({ value, key }) => (

              <div className="col-3 price-data" style={{ marginTop: "18px" }}>
                <button
                  className="btn btn-secondary btn-block mb-2"
                  style={{ backgroundColor: "#183f45" }}
                  // value="100"
                  // key={`${amount?.value}-button`}
                  onClick={() => handleStaticAmount((o) => o + value)}
                >
                  {key}
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="paymethods">
        <Container>
          <div className="amount">
            <h1>Pay {Bitvalue}/-</h1>
            <p>Pay Manually</p>
          </div>
          <div className="bank-logo dest_logo">
            <Row>
              {PostpaymnetdetailappDataData?.data?.paymentMethods.map(
                (item, id) => (
                  <Col className={item.methodName === "Bank"?"d-none":""} onClick={() => handlePaymentName(item.methodName, id)}>
                    <div
                      className={`css-1502y4u ${active === id ? "active3" : ""
                        }`}
                    >
                      <img
                        src={item.logo}
                        className="css-37vfbv"
                        alt="Bank"
                        style={{ width: "100%" }}
                      />
                      <p className="Typography-root ">{item.methodName}</p>
                    </div>
                  </Col>
                )
              )}
              {/* {
                payMethods?.paymentMethods.map((item, id) => (
                    <Col key={item.methodName + id}>
                        {console.log(item)}
                      <div className="css-1502y4u">
                        <img
                          src={item.logo}
                          className="css-37vfbv"
                          alt="Bank"
                        />
                        <p className="Typography-root ">{item.methodName}</p>
                      </div>
                    </Col>
                ))} */}
            </Row>
          </div>
        </Container>
      </div>
      <div className="paymethods">
        {pymentMode === "UPI" ? (
          <Container>
            <div className="bank-logo mode">
              <Row className="upi-detail dest_upi dest_logo head-deposit">
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
                    <p className="Typography-root ">
                      {PostpaymnetdetailappDataData?.data?.upiDetail?.upiName}
                    </p>
                  </div>
                </Col>
                <Col className="name-d">
                  <div className="">
                    <p className="Typography-root ">
                      {
                        PostpaymnetdetailappDataData?.data?.upiDetail
                          ?.displayName
                      }
                    </p>
                  </div>
                </Col>
                <Col className="name-d">
                  <div className="">
                    <p className="Typography-root ">
                      {PostpaymnetdetailappDataData?.data?.upiDetail?.upiId}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        ) : (
          ""
        )}

        {pymentMode === "Bank" ? (
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
                    {PostpaymnetdetailappDataData &&
                      PostpaymnetdetailappDataData?.data &&
                      PostpaymnetdetailappDataData?.data?.bankDetail &&
                      PostpaymnetdetailappDataData?.data?.bankDetail?.bankName}
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
                    {PostpaymnetdetailappDataData &&
                      PostpaymnetdetailappDataData?.data &&
                      PostpaymnetdetailappDataData?.data?.bankDetail &&
                      PostpaymnetdetailappDataData?.data?.bankDetail
                        ?.accountNumber}
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
                    {PostpaymnetdetailappDataData &&
                      PostpaymnetdetailappDataData?.data &&
                      PostpaymnetdetailappDataData?.data?.bankDetail &&
                      PostpaymnetdetailappDataData?.data?.bankDetail?.ifscCode}
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
                    {PostpaymnetdetailappDataData &&
                      PostpaymnetdetailappDataData?.data &&
                      PostpaymnetdetailappDataData?.data?.bankDetail &&
                      PostpaymnetdetailappDataData?.data?.bankDetail
                        ?.accountHolderName}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          ""
        )}
        {pymentMode === "QR" ? (
          <Container className="bank-detail">
            <Row>
              <Col className="name-d">
                <div className="qr-image">
                  <p>QR Code For Payment</p>
                  <img
                    src={
                      PostpaymnetdetailappDataData &&
                      PostpaymnetdetailappDataData?.data &&
                      PostpaymnetdetailappDataData?.data?.qrCode &&
                      PostpaymnetdetailappDataData?.data?.qrCode?.qrCodeImage
                    }
                    style={{ width: "150px" }}
                    alt=""
                    onClick={() => setTrueee(true)}
                  />
                </div>
                <Modal
                  show={trueee}
                  onHide={() => setTrueee(false)}
                  size="lg"
                  centered
                >
                  <Modal.Body>
                    <img
                      src={
                        PostpaymnetdetailappDataData &&
                        PostpaymnetdetailappDataData?.data &&
                        PostpaymnetdetailappDataData?.data?.qrCode &&
                        PostpaymnetdetailappDataData?.data?.qrCode?.qrCodeImage
                      }
                      alt=""
                      className="imgggggggg"
                    />
                  </Modal.Body>
                </Modal>
              </Col>
              <Col className="qr-payment">
                <Row>
                  <Col>
                    <div className="">
                      <p>Display Name</p>
                      <input
                        value={
                          PostpaymnetdetailappDataData &&
                          PostpaymnetdetailappDataData?.data &&
                          PostpaymnetdetailappDataData?.data?.qrCode &&
                          PostpaymnetdetailappDataData?.data?.qrCode
                            ?.displayName
                        }
                        type="text"
                        disabled
                      />
                    </div>
                  </Col>
                </Row>
                {/* <Row>
                  <Col>
                    <div className="">
                      <button className="download">
                        <p className="Typography-root text-right">
                          <i class="fa fa-download" aria-hidden="true"></i> QR
                          Code
                        </p>
                      </button>
                    </div>
                  </Col>
                </Row> */}
              </Col>
            </Row>
          </Container>
        ) : (
          ""
        )}
      </div>
      <div className="paymethods">
        <Container>
          <div className="">
            <Row className="upi-detail dest_apiDetail">
              <Col className="name-d">
                <label className="images-section">
                  {!files && (
                    <div className="image-text dest_img">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                      <p>Click here to upload payment screenshot</p>
                    </div>
                  )}
                  {files && (
                    <img
                      style={{ maxWidth: "90%", margin: "auto" }}
                      src={URL.createObjectURL(files)}
                      alt="uploaded_img"
                    />
                  )}

                  <input
                    onChange={(e) =>
                      e.target.files && setFiles(e.target.files[0])
                    }
                    // disabled={true}
                    type="file"
                    style={{ display: "none" }}
                  />
                </label>
                {files !== null && Bitvalue !== 0 ? (
                  <button
                    className="submit-deposit bbbbbbbb"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default PayManually;
