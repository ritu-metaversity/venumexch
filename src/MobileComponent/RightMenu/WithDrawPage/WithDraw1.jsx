import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './WithDraw1.css'

const WithDraw1 = () => {
    const [withdrawData, setWithdrawData] = useState();
    // const [active, setActive] = useState(0);
    const [show, setShow] = useState(false);
    const [withType, setwithType] = useState("");
    const [withCoinValue, setwithCoinValue] = useState(0);
    // const [userAmount, setUserAmount] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [accountHolderName, setAccountHolderName] = useState();
    const [ifsc, setIFSC] = useState();
    const [bankName, setBankName] = useState();
    const [AccountType, setAccountType] = useState("Saving");
    const [errorAlert, setErrorAlert] = useState(false);
    const [message, setMessage] = useState();
    const [colorName, setColorName] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [bankID, setBankId] = useState();
    const [stackValue, setStackValue] = useState();
    const [openForm, setOpenForm] = useState(false);
    const [withdrawType, setWithdrawType] = useState();
    const [getAccountData, setGetAccountData] = useState();
    const [userBalance, setuserBalance] = useState();
    const handleClose = () => {
        setShow(false);
        setMessage("Withdraw Request Submited Successfully");
        setErrorAlert(true);
        setIsLoading(false);
        setColorName("success");
        setAccountHolderName("");
        setAccountNumber("");
        setIFSC("");
        setBankName("");
        setwithCoinValue(0);
    };
    const handlePaymentDetails = (val, id) => {
        setwithType(val);
        setBankId(id);
        setOpenForm(true);
        setAccountHolderName("");
        setAccountNumber("");
        setIFSC("");
        setBankName("");
        setwithCoinValue(0);
    };
    useEffect(() => {
        const TokenId = localStorage.getItem("TokenId");
        axios
            .post(
                "http://api.247365.exchange/admin-new-apis/withtype-subadmin/get",
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((res) => {
                setWithdrawData(res?.data?.data);
            });
        axios
            .post(
                "http://api.247365.exchange/admin-new-apis/request-stack",
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
                console.log(res?.data?.data);
            });
        axios
            .post(
                "http://api.247365.exchange/admin-new-apis/get/client-bank",
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((res) => {
                setGetAccountData(res?.data?.data);
            });
        // UserAPI.User_Balance().then((res)=>{
        //   setuserBalance(res?.data?.balance)
        // })
    }, []);
    const handleStaticAmountInput = (e) => {
        let Inputvalue = e.target.value;
        setwithCoinValue(parseInt(Inputvalue));
    };
    const handleSaveDetail = () => {
        setAccountHolderName("");
        setAccountNumber("");
        setIFSC("");
        setBankName("");
        setwithCoinValue(0);
        const data = {
            accountHolderName: accountHolderName,
            bankName: bankName,
            accountType: AccountType,
            amount: withCoinValue,
            ifsc: ifsc,
            accountNumber: accountNumber,
            withdrawType: bankID,
        };
        axios
            .post("http://api.247365.exchange/admin-new-apis/save/client-bank", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("TokenId")}`,
                },
            })
            .then((res) => {
                setShow(false);
                setErrorAlert(true);
                setIsLoading(false);
                setColorName("success");
                if (
                    res?.data?.message
                ) {
                    toast.success(res?.data?.message || "SUSUSUSUS!!", {
                        style: {
                            background: "rgb(74,117,67)", minHeight: 40,
                            padding: 0,
                            color: "white",
                        }
                    });
                }
                // setMessage(res?.data?.message);

            })
            .catch((error) => {
                setErrorAlert(true);
                setIsLoading(false);
                setColorName("danger");
                if (
                    error?.response?.data?.message
                ) {
                    toast.error(error?.response?.data?.message || "SUSUSUSUS!!", {
                        style: {
                            background: "rgb(156,74,70)", minHeight: 40,
                            padding: 0,
                            color: "white",
                        }
                    });
                }
                // setMessage(error?.response?.data?.message);
            });
    };
    const handleBtnValue = (val) => {
        setwithCoinValue(
            (withCoinValue) => (Number(withCoinValue) || 0) + Number(val)
        );
    };
    const popupClose = (vl) => {
        setErrorAlert(vl);
    };
    const handleAccountName = (e) => {
        const result = e.target.value.replace(/[^a-z]/gi, "");
        setAccountHolderName(e.target.value.replace(/[^a-z]/gi, ""));
    };
    const handleClick = () => {

        console.log("heloo")
        setErrorAlert(false);
        setIsLoading(true);
        if (userBalance < withCoinValue) {
            setMessage("insufficient balance");
            setErrorAlert(true);
            setColorName("danger");
            setIsLoading(false);
        }
        if (withType === "BANK") {
            if (withCoinValue === "" || withCoinValue === undefined) {
                setMessage("The Amount field is required");
                setErrorAlert(true);
                setColorName("danger");
                setIsLoading(false);
            } else if (accountNumber === "") {
                setMessage("The Account Number is required");
                setErrorAlert(true);
                setColorName("danger");
                setIsLoading(false);
            } else if (accountHolderName === "") {
                setMessage("The Account Name field is required");
                setErrorAlert(true);
                setColorName("danger");
                setIsLoading(false);
            } else if (bankName === "") {
                setMessage("The Bank Name field is required");
                setErrorAlert(true);
                setColorName("danger");
                setIsLoading(false);
            } else if (ifsc === "") {
                setMessage("The IFSC field is required");
                setErrorAlert(true);
                setColorName("danger");
                setIsLoading(false);
            }
        } else {
            if (withCoinValue === "" || withCoinValue === undefined) {
                setMessage("The Amount field is required");
                setErrorAlert(true);
                setColorName("danger");
                setIsLoading(false);
            } else if (accountNumber === "") {
                setMessage("UPI Number is required");
                setErrorAlert(true);
                setColorName("danger");
                setIsLoading(false);
            } else if (accountHolderName === "") {
                setMessage("The Account Name field is required");
                setErrorAlert(true);
                setColorName("danger");
                setIsLoading(false);
            }
        }
        // if (accountHolderName !== "" && accountNumber !== "" && userBalance >= withCoinValue) {
        const data = {
            accountHolderName: accountHolderName,
            bankName: bankName,
            accountType: withType === "BANK" ? AccountType : "",
            amount: withCoinValue,
            ifsc: ifsc,
            accountNumber: accountNumber,
            withdrawType: bankID,
            withdrawMode: withdrawType,
        };
        const TokenId = localStorage.getItem("TokenId");
        axios
            .post("http://api.247365.exchange/admin-new-apis/self-withdraw-app", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${TokenId}`,
                },
            })
            .then((res) => {
                // if (res?.data?.data?.bankExist === false) {
                setShow(true);
                console.log(res, "yutfdgchjiouytfgdxcvbhjkiuygfc")
                // } else {
                setMessage(res?.data?.message
                );
                // setErrorAlert(true);
                // setColorName("success");
                // setIsLoading(false);
                // }
                if (
                    res?.data?.message
                ) {
                    toast.success(res?.data?.message || "SUSUSUSUS!!", {
                        style: {
                            background: "rgb(74,117,67)", minHeight: 40,
                            padding: 0,
                            color: "white",
                        }
                    });
                }
            })
            .catch((error) => {
                setErrorAlert(true);
                setIsLoading(false);
                setColorName("danger");
                if (
                    error?.response?.data?.message
                ) {
                    toast.error(error?.response?.data?.message || "SUSUSUSUS!!", {
                        style: {
                            background: "rgb(156,74,70)", minHeight: 40,
                            padding: 0,
                            color: "white",
                        }
                    });
                }
                // setMessage(error?.response?.data?.message);
            });
        // }
    };
    const handleWithdrawData = (
        accNumber,
        accHolderName,
        BankName,
        ifscNum,
        accType
    ) => {
        setAccountHolderName(accHolderName);
        setAccountNumber(accNumber);
        setBankName(BankName);
        setIFSC(ifscNum);
        setAccountType(accType);
    };

    console.log(message, "dfsfsdfssfgdsdjijfv")


    return (
        <>
            <div>
                <div className="withdrow_coin">
                    <div className="withdrow_title">
                        <p style={{ marginLeft: "-1px", marginBottom: "10px" }}>
                            Withdraw Coins
                        </p>
                        <input
                            placeholder="Withdraw Coins"
                            value={withCoinValue}
                            onChange={handleStaticAmountInput}
                            type="number"
                        />
                    </div>
                    <div>
                        <p
                            className="choose_val"
                            style={{ marginLeft: "0px", marginBottom: "10px" }}>
                            Choose From your favourate transaction{" "}
                        </p>
                        <div className="coin_value">
                            {stackValue?.map((res) => {
                                return (
                                    <button onClick={() => handleBtnValue(res?.value)}>
                                        {res?.key}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className="withdrow_type"
                    style={{ marginBottom: "12px", width: "100%" }}>
                    <select onChange={(e) => setWithdrawType(e.target.value)} style={{ with: "50%" }}>
                        <option selected>Select Withdraw Type</option>
                        <option value="Normal">Normal</option>
                        <option value="Instant">Instant</option>
                    </select>
                </div>
                <div className="with_paymethod">
                    <Container>
                        <div className="bank-logo with_bank_logo">
                            <Row>
                                {withdrawData?.map((res, id) => {
                                    return (
                                        <>
                                            <Col
                                                className="withdraw_image"
                                                onClick={() =>
                                                    handlePaymentDetails(
                                                        res?.withdrawType,
                                                        res?.id
                                                    )
                                                }>
                                                <div className="css-1502y4u">
                                                    <img
                                                        src={res?.image}
                                                        className="css-37vfbv"
                                                        alt="Bank"
                                                    />
                                                    <p className="Typography-root ">
                                                        {res?.withdrawType}
                                                    </p>
                                                </div>
                                            </Col>
                                        </>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>


                {withType === "BANK" ? (
                    <div
                        className={`mainAccount main_withdrow ${openForm === true ? "" : "d-none"
                            } accountWith`}>
                        <div className="mx-input-wrapper account-field">
                            <label className="account-lable">Account Number</label>
                            <br />
                            <input
                                type="number"
                                className="account-input"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                        </div>
                        <div className="mx-input-wrapper account-field">
                            <label className="account-lable">Account Name</label>
                            <br />
                            <input
                                type="text"
                                className="account-input"
                                value={accountHolderName}
                                onChange={(e) =>
                                    setAccountHolderName(
                                        e.target.value.replace(/[^A-Za-z]+$/, " ")
                                    )
                                }
                            />
                        </div>
                        <div className="mx-input-wrapper account-field">
                            <label className="account-lable">Bank Name</label>
                            <br />
                            <input
                                type="type"
                                className="account-input"
                                value={bankName}
                                onChange={(e) =>
                                    setBankName(
                                        e.target.value.replace(/[^A-Za-z]+$/, " ")
                                    )
                                }
                            />
                        </div>
                        <div className="mx-input-wrapper account-field">
                            <label className="account-lable">IFSC</label>
                            <br />
                            <input
                                type="type"
                                className="account-input"
                                value={ifsc}
                                onChange={(e) =>
                                    setIFSC(e.target.value.replace(/[^A-Z0-9a-z]+$/, " "))
                                }
                            />
                        </div>
                        <div className="mx-input-wrapper account-field">
                            <label className="account-lable">Account Type</label>
                            <br />
                            <select
                                name="reportType"
                                // style={{ width: "100%" }}
                                className="custom-select select-type accounttype"
                                onChange={(e) => setAccountType(e.target.value)}>
                                <option value="Saving">Saving</option>
                                <option value="Current">Current</option>
                            </select>
                        </div>
                    </div>
                ) : (
                    <div
                        className={`mainAccount main_withdrow ${openForm === true ? "" : "d-none"
                            } accountWith`}>
                        <div className="mx-input-wrapper account-field">
                            <label className="account-lable">
                                {withType === "PAYTM" ? "Mobile No" : "UPI ID"}
                            </label>
                            <br />
                            {withType === "PAYTM" ? (
                                <input
                                    type="number"
                                    className="account-input"
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="account-input"
                                    value={accountNumber}
                                    onChange={(e) =>
                                        setAccountNumber(
                                            e.target.value.replace(
                                                /[^a-zA-Z0-9.-]{2, 256}@[^a-zA-Z][a-zA-Z]{2, 64}+$/
                                            )
                                        )
                                    }
                                />
                            )}
                        </div>
                        <div className="mx-input-wrapper account-field">
                            <label className="account-lable">
                                {withType === "PAYTM" ? "Name" : "Account Name"}
                            </label>
                            <br />
                            <input
                                type="text"
                                className="account-input"
                                value={accountHolderName}
                                onChange={(e) =>
                                    setAccountHolderName(
                                        e.target.value.replace(/[^A-Za-z]+$/, " ")
                                    )
                                }
                            />
                        </div>
                    </div>
                )}
                <div className={openForm ? "" : "d-none"}>
                    <div className="row row5 mt-2">
                        <div className="col-12">
                            <div className="table-responsive withdrow-table">
                                <table
                                    role="table"
                                    aria-busy="false"
                                    aria-colcount="6"
                                    className="table b-table table-bordered"
                                    id="_BVID_104">
                                    <thead>
                                        <tr role="row" className="account-detail">
                                            <th
                                                role="columnheader"
                                                scope="col"
                                                aria-colindex="1"
                                                className="text-left ">
                                                Account Number
                                            </th>
                                            <th
                                                role="columnheader"
                                                scope="col"
                                                aria-colindex="2"
                                                className="text-left ">
                                                Account Name
                                            </th>
                                            <th
                                                role="columnheader"
                                                scope="col"
                                                aria-colindex="4"
                                                className={`text-left ${withType === "BANK" ? "" : "d-none"
                                                    }`}>
                                                Bank Name
                                            </th>
                                            <th
                                                role="columnheader"
                                                scope="col"
                                                aria-colindex="5"
                                                className={`text-left ${withType === "BANK" ? "" : "d-none"
                                                    }`}>
                                                IFSC Code
                                            </th>
                                            <th
                                                role="columnheader"
                                                scope="col"
                                                aria-colindex="6"
                                                className={`text-left ${withType === "BANK" ? "" : "d-none"
                                                    }`}>
                                                Account Type
                                            </th>
                                            <th
                                                role="columnheader"
                                                scope="col"
                                                aria-colindex="6"
                                                className="text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    {getAccountData?.map((item) => {
                                        if (item.withdrawType !== withType) return <></>;
                                        return (
                                            <tbody
                                            // className={dataLenth === 0 ? "d-none" : ""}
                                            >
                                                <tr role="row">
                                                    <td
                                                        aria-colindex="1"
                                                        className="text-left withdraw-data">
                                                        {item.accountNumber}
                                                    </td>
                                                    <td
                                                        aria-colindex="2"
                                                        className="text-left withdraw-data">
                                                        {item.accountHolderName}
                                                    </td>
                                                    <td
                                                        aria-colindex="4"
                                                        className={`text-left withdraw-data ${withType === "BANK" ? "" : "d-none"
                                                            }`}>
                                                        {item?.bankName}
                                                    </td>
                                                    <td
                                                        aria-colindex="5"
                                                        className={`text-left withdraw-data ${withType === "BANK" ? "" : "d-none"
                                                            }`}>
                                                        {item?.ifsc}
                                                    </td>
                                                    <td
                                                        aria-colindex="5"
                                                        className={`text-left withdraw-data ${withType === "BANK" ? "" : "d-none"
                                                            }`}>
                                                        {item?.accountType}
                                                    </td>
                                                    <td
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() =>
                                                            handleWithdrawData(
                                                                item.accountNumber,
                                                                item.accountHolderName,
                                                                item?.bankName,
                                                                item?.ifsc,
                                                                item?.accountType
                                                            )
                                                        }
                                                        aria-colindex="5"
                                                        className="text-left">
                                                        <div className="custom-control custom-control-inline custom-radio">
                                                            <input type="radio" name="radio_btn" />{" "}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        );
                                    })}
                                    <tbody>
                                        <tr
                                            role="row"
                                        //   className={${dataLenth === 0 ? "" : "d-none"}}
                                        >
                                            <td
                                                colSpan="6"
                                                className="text-left withdraw-data">
                                                <p className="no-record-found">
                                                    No records found
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="withdraw_coin_btn">

                            <button onClick={handleClick}
                            //   disabled={!openForm}
                            >
                                Withdraw Coins
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} style={{ marginTop: "53px" }}>

                <Modal.Body>
                    Do you want to save the Bank Details?
                </Modal.Body>

                <Modal.Footer>
                    <Button

                        variant="secondary"
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        className='sve'

                        variant=""
                        onClick={handleSaveDetail}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default WithDraw1