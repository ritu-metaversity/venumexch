import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postpendingapppii,
  Postselfwithdrawapp,
  Postwithdrawrequestclient,
} from "../../../App/Features/auth/authActions";
import ValidationFile from "../../../Validation/ValidationFile";
import "./WithDraw.css";
import Modal from 'react-bootstrap/Modal';
import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";
import { useNavigate } from "react-router";

const WithDraw = () => {
  const dispatch = useDispatch();
  const { PostselfwithdrawappData, PostwithdrawrequestclientData, PostselfwithdrawappDataLoading } =
    useSelector((state) => state.auth);
  const [amount, setAmount] = useState();
  const [accountHolderName, setAccountHolderName] = useState();
  const [accountType, setAccountType] = useState("Saving");
  const [accountNumber, setAccountNumber] = useState();
  const [bankName, setBankName] = useState();
  const [ifsc, setIfsc] = useState();

  const [amountError, setAmountError] = useState(false);
  const [accountHolderNameError, setAccountHolderNameError] = useState(false);
  const [accountNumberError, setAccountNumberError] = useState(false);
  const [bankNameError, setBankNameError] = useState(false);
  const [ifscError, setIfscError] = useState(false);
  const [infoError, setInfoError] = useState(false);
  const [symbolsArrMail] = useState(["e", "E", "+", "-", "."]);
  // console.log(PostselfwithdrawappDataLoading, "PostselfwithdrawappDataLoading")
  let navigate = useNavigate();
  const userTypeInfo = localStorage.getItem("userTypeInfo");

  useEffect(() => {
    if (userTypeInfo === "2") {
      navigate("./home");

    }
  }, [userTypeInfo])
  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    switch (inputName) {
      case "Amount":
        setAmount(ValidationFile.spaceNotAccept(inputValue));

        setAmountError(
          ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
        );
        break;
      case "AccountNumber":
        setAccountNumber(ValidationFile.spaceNotAccept(inputValue));
        setAccountNumberError(
          ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
        );
        break;
      case "AccountName":
        setAccountHolderName(ValidationFile.spaceNotAccept(inputValue));
        setAccountHolderNameError(
          ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
        );
        break;
      case "BankName":
        setBankName(ValidationFile.spaceNotAccept(inputValue));
        setBankNameError(
          ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
        );
        break;
      case "IFSC":
        setIfsc(ValidationFile.spaceNotAccept(inputValue));
        setIfscError(
          ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
        );
        break;
      default:
        return false;
    }
  };

  const handleClick = () => {
    setInfoError(true);

    let accountDetails = {
      accountHolderName: accountHolderName,
      bankName: bankName,
      accountType: accountType,
      accountNumber: accountNumber,
      ifsc: ifsc,
      amount: amount,
    };
    if (ValidationFile.isEmpty(amount)) {
      setAmountError(true);
    }
    if (ValidationFile.isEmpty(accountHolderName)) {
      setAccountHolderNameError(true);
    }
    if (ValidationFile.isEmpty(accountNumber)) {
      setAccountNumberError(true);
    }
    if (ValidationFile.isEmpty(bankName)) {
      setBankNameError(true);
    }
    if (ValidationFile.isEmpty(ifsc)) {
      setIfscError(true);
    }
    if (
      !ValidationFile.isEmpty(amount) &&
      !ValidationFile.isEmpty(accountHolderName) &&
      !ValidationFile.isEmpty(accountNumber) &&
      !ValidationFile.isEmpty(bankName) &&
      !ValidationFile.isEmpty(ifsc)
    ) {
      dispatch(Postselfwithdrawapp(accountDetails));
      // navigate("/m/login")
    }
  };

  useEffect(() => {
    if (
      PostselfwithdrawappData?.message ===
      "Withdraw Request Submited Successfully"
    ) {
      dispatch(Postwithdrawrequestclient());
    }
  }, [PostselfwithdrawappData?.message]);

  // useEffect(() => {
  //   let accountDetails={
  //     "accountHolderName":"adsfa",
  //   "bankName":"bbb",
  //   "accountType":"ssssss",
  //   "accountNumber":"2345234234",
  //   "ifsc":"iiifsd","amount":"1000"}
  //   dispatch(Postselfwithdrawapp(accountDetails));
  // }, []);

  useEffect(() => {
    dispatch(Postwithdrawrequestclient());
  }, []);

  // console.log(PostselfwithdrawappData,"post datatata")
  // console.log(PostwithdrawrequestclientData,"gett  dataatatatat ")
  // {“id”:3}
  // const [showFancyModals, setShowFancyModals] = useState(false);

  const handleCloseFancyModal = () => setpendingmodal(false);
  const handlepennding = () => setpendingmodal(true);
  const [withDrawId, setWithDrawId] = useState("")

  const [pendingmodal, setpendingmodal] = useState(false)
  const handlependingg = (data) => {
    setpendingmodal(true)
    setWithDrawId(data)
  }

  const handlependingsucesss = () => {
    let data = { id: withDrawId }
    dispatch(postpendingapppii(data))
    setpendingmodal(false)
  }
  return (
    <div >
      {
        PostselfwithdrawappDataLoading === true ?
          <div className=" PostselfwithdrawappDataLoadinglodding">
            <i
              className="fa fa-circle-o-notch fa-spin loading"
              style={{ fontSize: "50px" }}
            ></i>
            <p className="loading-text">Loading...</p>{" "}
          </div> :
          <div className="wrapper">

            <div className="card-body container-fluid container-fluid-5">
              <div className="main-account-containor">
                <div className="mx-input-wrapper account-field">
                  <label className="account-lable">Amount</label>
                  <input
                    name="Amount"
                    type="number"
                    className="account-input"
                    onChange={handleInput}
                    onKeyDown={(e) =>
                      symbolsArrMail.includes(e.key) && e.preventDefault()
                    }
                  />
                  {amountError && infoError ? (
                    <span className="text-danger">Amount is required.</span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mx-input-wrapper account-field">
                  <label className="account-lable">Account Number</label>
                  <input
                    name="AccountNumber"
                    type="number"
                    className="account-input"
                    onChange={handleInput}
                    onKeyDown={(e) =>
                      symbolsArrMail.includes(e.key) && e.preventDefault()
                    }
                  />
                  {accountNumberError && infoError ? (
                    <span className="text-danger">Account Number is required.</span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mx-input-wrapper account-field">
                  <label className="account-lable">Account Name</label>
                  <input
                    name="AccountName"
                    type="text"
                    className="account-input"
                    onChange={handleInput}
                  />
                  {accountHolderNameError && infoError ? (
                    <span className="text-danger">Account Name is required.</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mx-input-wrapper account-field">
                  <label className="account-lable">Bank Name</label>
                  <input
                    name="BankName"
                    type="type"
                    className="account-input"
                    onChange={handleInput}
                  />
                  {bankNameError && infoError ? (
                    <span className="text-danger">Bank Name is required.</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mx-input-wrapper account-field">
                  <label className="account-lable">IFSC</label>
                  <input
                    name="IFSC"
                    type="type"
                    className="account-input"
                    onChange={handleInput}
                  />
                  {ifscError && infoError ? (
                    <span className="text-danger">IFSC is required.</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mx-input-wrapper account-field">
                  <label className="account-lable">Account Type</label>
                  <select
                    name="reportType"
                    onChange={(e) => setAccountType(e.target.value)}
                    className="custom-select"
                  >
                    <option value="Saving1">Saving</option>
                    <option value="Current">Current</option>
                  </select>
                </div>
                <div className="">
                  <button
                    className="btn btn-primary btn-block btn-sm wsubmit"
                    style={{ marginTop: "20px " }}
                    onClick={handleClick}
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                <table
                  role="table"
                  aria-busy="false"
                  aria-colcount="6"
                  className="table b-table table-bordered"
                  id="__BVID__104"
                >
                  <thead>
                    <tr role="row" className="account-detail">
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="1"
                        className="text-left"
                      >
                        Account Number
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="2"
                        className="text-left"
                      >
                        Account Name
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="3"
                        className="text-right"
                      >
                        Amount
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="4"
                        className="text-left"
                      >
                        Bank Name/ Address
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="5"
                        className="text-left"
                      >
                        IFSC Code
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="6"
                        className="text-left"
                      >
                        Account Type / Currency
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="6"
                        className="text-left withdraw-data"
                      >
                        Date
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="6"
                        className="text-left"
                      >
                        Remark
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="6"
                        className="text-left"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PostwithdrawrequestclientData &&
                      PostwithdrawrequestclientData?.data &&
                      PostwithdrawrequestclientData?.data.map((item) => (
                        <tr role="row">
                          <td
                            aria-colindex="1"
                            className="text-left withdraw-data"
                          >
                            {item?.accountNumber}
                          </td>
                          <td
                            aria-colindex="2"
                            className="text-left withdraw-data"
                          >
                            {item?.accountHolderName}
                          </td>
                          <td
                            aria-colindex="3"
                            className="text-right withdraw-data "
                          >
                            {item?.amount}
                          </td>
                          <td
                            aria-colindex="4"
                            className="text-left withdraw-data "
                          >
                            {item?.bankName}
                          </td>
                          <td
                            aria-colindex="5"
                            className="text-left withdraw-data "
                          >
                            {item?.ifsc}
                          </td>
                          <td
                            aria-colindex="6"
                            className="text-lift withdraw-data"
                          >
                            {item?.accountType}
                          </td>
                          <td aria-colindex="6" className="text-lift">
                            {/*  {moment(item?.time).format("MM DD YYYY - HH MM ")}*/}
                            {item?.time}

                          </td>

                          <td
                            aria-colindex="6"
                            className="text-lift withdraw-data"
                          >
                            {item?.remark}
                          </td>
                          {item.status === "Pending" ? (
                            <td aria-colindex="4" style={{ color: "#ffa726" }}>
                              <div className="pendinggggg">
                                <div >

                                  {item?.status}
                                </div>
                               
                              </div>
                              <Modal
                                show={pendingmodal}
                                onHide={() => setpendingmodal(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                              >
                                <Modal.Header closeButton style={{ height: "39px" }}>
                                  <Modal.Title id="contained-modal-title-vcenter">
                                    Cancel Request
                                    <button onClick={handleCloseFancyModal} className="closebtnonpnl" style={{ top: "6px" }}>
                                      <IoCloseCircleOutline size={25} color={"black"} />
                                    </button>
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="modalldatata">
                                    <div>
                                      Are you sure want to cancel this request ?
                                    </div>
                                    <div className="butonnnn">
                                      <button className="bynnnn" onClick={() => setpendingmodal(false)}>Close</button>
                                      <button className="bynnnn" onClick={handlependingsucesss}>Submit</button>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </td>
                          ) : item.status === "Rejected" ? (
                            <td aria-colindex="4" style={{ color: "#f44336" }}>
                              {item?.status}
                            </td>
                          ) : (
                            <td
                              aria-colindex="4"
                              style={{ color: "#66bb6a", fontSize: "10px" }}
                            >
                              {item?.status}
                            </td>
                          )}
                        </tr>
                      ))}
                  </tbody>
                </table>

              </div>
            </div>




          </div>
      }
    </div>
  );
};

export default WithDraw;
