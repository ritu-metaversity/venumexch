import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";
import "./PayManually.css";
import Modal from 'react-bootstrap/Modal';

import {
  Postpaymnetdetailapp,
  Postselfdepositapp,
} from "../../../App/Features/auth/authActions";
// import { ImageUploadContainer } from "../../../../../../Deposit/styledComponents";
const PayManually = (props) => {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [trueee, setTrueee] = useState(false);
  const [active, setActive] = useState(0);

  //   useEffect(() => {
  //     UserAPI.Get_Payment_Detail_By_Id().then((res) => {
  //       setPayMethods(res.data.paymentMethods);
  //       setUpiDetail(res.data.upiDetail);
  //     });
  //   }, []);
  // console.log(files,"filesfiles")

  const dispatch = useDispatch();
  const { PostpaymnetdetailappDataData, PostselfdepositappData } = useSelector(
    (state) => state.auth
  );
  const [Bitvalue, setBitValue] = useState(0);
  // const [payMethods, setPayMethods] = useState({});
  const [UpiDetail, setUpiDetail] = useState();
  const [pymentMode, setPymentMode] = useState("UPI");

  const token = localStorage.getItem("TokenId");
  // console.log(PostselfdepositappData, "PostselfdepositappData");
  // console.log(Bitvalue, "PostpaymnetdetailappDataData");
  // useEffect(()=>{
  //     setPayMethods(PostpaymnetdetailappDataData?.data)
  // },[])
  const handlePaymentName = (VL, id) => {
    setPymentMode(VL);
    setActive(id)
  };

  const increment = () => {
    setBitValue(Bitvalue + 10);
  };
  const decrement = () => {
    setBitValue(Bitvalue - 10);
  };

  // console.log(PostpaymnetdetailappDataData?.data?.paymentMethods,"line 24")

  const handleStaticAmount = (vl) => {
    setBitValue(Bitvalue + vl);
  };

  useEffect(() => {
    if (token) {
      dispatch(Postpaymnetdetailapp());
    }
  }, [token]);

  // const handeImage=(e)=>{
  // setFiles(e.target.files)
  // }
  // console.log(files[0]?.name,"line 24")
  // console.log(files,"line 24")
  const handleSubmit = () => {
    const data = new FormData();
    data.append("amount", Bitvalue.toString());

    data.append("image", files || "");
    // console.log(data, "datadatadatadatadatadata");
    dispatch(Postselfdepositapp(data));
    props.UpdateList(true)
  };
  return (
    <div>
      <h3 className="enter-amount"> Enter Amount</h3>
      <div className="row row5 main-pricecontainor">
        <div className="text-lef col-6 price-input">
          <div className="float-left d-flex inputfield">
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
              // onChange={(e)=>setBitValue(e.target.value)}
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
        <div className="col-6">
          <div className="row price-values">
            <div className="col-3 price-data">
              <button
                className="btn btn-secondary btn-block mb-2"
                value="100"
                onClick={() => handleStaticAmount(1000)}
              >
                +1000
              </button>
            </div>
            <div className="col-3 price-data">
              <button
                className="btn btn-secondary btn-block mb-2"
                value="2000"
                onClick={() => handleStaticAmount(5000)}
              >
                +5000
              </button>
            </div>
            <div className="col-3 price-data">
              <button
                className="btn btn-secondary btn-block mb-2"
                value="300"
                onClick={() => handleStaticAmount(10000)}
              >
                +10000
              </button>
            </div>
            <div className="col-3 price-data">
              <button
                className="btn btn-secondary btn-block mb-2"
                value="300"
                onClick={() => handleStaticAmount(50000)}
              >
                +50000
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="paymethods">
        <Container>
          <div className="amount">
            <h1>Pay {Bitvalue}/-</h1>
            <p>Pay Manually</p>
          </div>
          <div className="bank-logo">
            <Row>
              {PostpaymnetdetailappDataData?.data?.paymentMethods.map(
                (item, id) => (
                  <Col onClick={() => handlePaymentName(item.methodName, id)}>
                    <div className={`css-1502y4u ${active===id?"active3":""}`}>
                      <img src={item.logo} className="css-37vfbv" alt="Bank" />
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
                    <p className="Typography-root ">
                      {
                        PostpaymnetdetailappDataData?.data?.upiDetail
                          ?.upiName
                      }
                    </p>
                  </div>
                </Col>
                <Col className="name-d">
                  <div className="">
                    <p className="Typography-root ">
                      {PostpaymnetdetailappDataData?.data?.upiDetail?.displayName}
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
                  <p className="Typography-root text-right">{PostpaymnetdetailappDataData&&PostpaymnetdetailappDataData?.data&&PostpaymnetdetailappDataData?.data?.bankDetail&&PostpaymnetdetailappDataData?.data?.bankDetail?.bankName}</p>
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
                  <p className="Typography-root text-right">{PostpaymnetdetailappDataData&&PostpaymnetdetailappDataData?.data&&PostpaymnetdetailappDataData?.data?.bankDetail&&PostpaymnetdetailappDataData?.data?.bankDetail?.accountNumber}</p>
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
                  <p className="Typography-root text-right">{PostpaymnetdetailappDataData&&PostpaymnetdetailappDataData?.data&&PostpaymnetdetailappDataData?.data?.bankDetail&&PostpaymnetdetailappDataData?.data?.bankDetail?.ifscCode}</p>
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
                  <p className="Typography-root text-right">{PostpaymnetdetailappDataData&&PostpaymnetdetailappDataData?.data&&PostpaymnetdetailappDataData?.data?.bankDetail&&PostpaymnetdetailappDataData?.data?.bankDetail?.accountHolderName}</p>
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
                    src={PostpaymnetdetailappDataData&&PostpaymnetdetailappDataData?.data&&PostpaymnetdetailappDataData?.data?.qrCode&&PostpaymnetdetailappDataData?.data?.qrCode?.qrCodeImage}
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
                    src={PostpaymnetdetailappDataData&&PostpaymnetdetailappDataData?.data&&PostpaymnetdetailappDataData?.data?.qrCode&&PostpaymnetdetailappDataData?.data?.qrCode?.qrCodeImage}
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
                      <input value={PostpaymnetdetailappDataData&&PostpaymnetdetailappDataData?.data&&PostpaymnetdetailappDataData?.data?.qrCode&&PostpaymnetdetailappDataData?.data?.qrCode?.displayName} type="text" />
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
            <Row className="upi-detail ">
              <Col className="name-d">
                <label className="images-section">
                  {!files && (
                    <div className="image-text">
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
                {files!==null && Bitvalue!==0 ? 
                <button className="submit-deposit bbbbbbbb" onClick={handleSubmit}>
                Submit
              </button>:""
                }
                
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default PayManually;
