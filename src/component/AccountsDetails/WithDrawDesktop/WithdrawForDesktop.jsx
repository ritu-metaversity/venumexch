import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Postselfwithdrawapp,
    postpendingapppii,
    Postwithdrawrequestclient,
} from "../../../App/Features/auth/authActions";
import ValidationFile from "../../../Validation/ValidationFile";
import "./WithDrawForDesktop.css";
import Modal from 'react-bootstrap/Modal';

import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";


const WithdrawForDesktop = () => {
    const dispatch = useDispatch();
    const { PostselfwithdrawappData, PostwithdrawrequestclientData, PostwithdrawrequestclientDataLoading, postpendingapppiiData } =
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
    // console.log(postpendingapppiiData, "postpendingapppiiDatapostpendingapppiiDatapostpendingapppiiData")
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

    // useEffect(() => {
    //     if (postpendingapppiiData?.status === true) {
    //         dispatch(Postwithdrawrequestclient());
    //     }
    // }, [postpendingapppiiData])
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
    const [pendingmodal, setpendingmodal] = useState(false)
    const [withDrawId, setWithDrawId] = useState("")
    // console.log(PostselfwithdrawappData,"post datatata")
    // console.log(PostwithdrawrequestclientData,"gett  dataatatatat ")

    const handleCloseFancyModal = () => setpendingmodal(false);

    const handlepennding = (data) => {
        setpendingmodal(true)
        setWithDrawId(data)
    };

    const handlependingg = () => {
        setpendingmodal(true)
    }

    const handlependingsucesss = () => {
        let data = { id: withDrawId }
        dispatch(postpendingapppii(data))
        setpendingmodal(false)
    }
    return (

        <div className="dest_withdrow" >
            <div className="main-account-containor ">
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
                <div className="mx-input-wrapper account-field">
                    <button
                        className="btn btn-primary btn-block btn-sm"
                        style={{ marginTop: "20px" }}
                        onClick={handleClick}
                    >
                        Submit
                    </button>
                </div>
            </div>

            {PostwithdrawrequestclientDataLoading === true ?


                <div

                    style={{

                        backgroundColor: "#0000002b",


                    }}>
                    <i
                        className="fa fa-spinner fa-spin loading"
                        style={{ fontSize: "50px" }}
                    ></i>
                </div>
                :
                <div className="row row5 mt-2">
                    <div className="col-12">
                        <div className="table-responsive" style={{ width: "80%" }}>
                            <table
                                role="table"
                                aria-busy="false"
                                aria-colcount="6"
                                className="b-table table-bordered"
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
                                            className="text-left withdraw-data"
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
                                        <th
                                            role="columnheader"
                                            scope="col"
                                            aria-colindex="6"
                                            className="text-left"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PostwithdrawrequestclientData &&
                                        PostwithdrawrequestclientData?.data &&
                                        PostwithdrawrequestclientData?.data.map((item) => (
                                            <tr role="row " className=" dest_tr">
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
                                                    className="text-lift"
                                                >
                                                    {item?.accountType}
                                                </td>
                                                <td aria-colindex="6" className="text-lift">
                                                    {moment(item?.time).format("MM DD YYYY - HH MM ")}
                                                </td>
                                                <td
                                                    aria-colindex="6"
                                                    className="text-lift"
                                                >
                                                    {item?.remark}
                                                </td>
                                                {item.status === "Pending" ? (
                                                    <td aria-colindex="4" style={{ color: "#ffa726", padding: "12px" }}>
                                                        {item?.status}
                                                    </td>
                                                ) : item.status === "Rejected" ? (
                                                    <td aria-colindex="4" style={{ color: "#f44336", padding: "12px" }}>
                                                        {item?.status}
                                                    </td>
                                                ) : (
                                                    <td
                                                        aria-colindex="4"
                                                        style={{ color: "#66bb6a", fontSize: "10px", padding: "12px" }}
                                                    >
                                                        {item?.status}
                                                    </td>
                                                )}
                                                <td> {item.status === "Pending" ?
                                                    < button onClick={() => handlepennding(item.id)} className="handlepennfoifjfi" > <IoCloseCircleOutline size={25} color={"black"} />
                                                    </button>
                                                    : ""
                                                }

                                                    <Modal
                                                        show={pendingmodal}
                                                        onHide={() => setpendingmodal(false)}

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
                                                        <Modal.Body style={{ width: "100%" }}>
                                                            <div className="modalldatata">
                                                                <div style={{ padding: "12px" }}>
                                                                    Are you sure want to cancel this request ?
                                                                </div>
                                                                <div className="butonnnn butonnnn1">

                                                                    <button className="bynnnn bynnnn1" onClick={() => setpendingmodal(false)}>Close</button>
                                                                    <button className="bynnnn bynnnn1" onClick={() => handlependingsucesss()}>Submit</button>
                                                                </div>
                                                            </div>
                                                        </Modal.Body>
                                                    </Modal>
                                                </td>

                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}
        </div >
    );
};

export default WithdrawForDesktop;
