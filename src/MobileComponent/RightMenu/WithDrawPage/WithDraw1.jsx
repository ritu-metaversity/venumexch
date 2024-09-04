import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postpendingapppii, Postwithdrawrequestclient } from '../../../App/Features/auth/authActions';
import './WithDraw1.css'
import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";
const WithDraw1 = () => {
    const dispatch = useDispatch();

    // let REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    // const [withdrawData, setWithdrawData] = useState();
    // const [active, setActive] = useState(0);
    const { PostwithdrawrequestclientData } =
        useSelector((state) => state.auth);
    // const [show, setShow] = useState(false);
    // const [withType, setwithType] = useState("");
    // const [withCoinValue, setwithCoinValue] = useState(0);
    // const [userAmount, setUserAmount] = useState();
    // const [accountNumber, setAccountNumber] = useState();
    // const [accountHolderName, setAccountHolderName] = useState();
    // const [ifsc, setIFSC] = useState();
    // const [bankName, setBankName] = useState();
    // const [AccountType, setAccountType] = useState("Saving");
    // const [errorAlert, setErrorAlert] = useState(false);
    //const [message, setMessage] = useState();
    //const [colorName, setColorName] = useState();
    //const [isLoading, setIsLoading] = useState(false);
    //const [bankID, setBankId] = useState();
    //const [stackValue, setStackValue] = useState();
    //const [openForm, setOpenForm] = useState(false);
    // const [withdrawType, setWithdrawType] = useState();
    // const [getAccountData, setGetAccountData] = useState();
    // const [userBalance, setuserBalance] = useState();

    const erreeee = {
        Amountfieldrequired: "The Amount field is required",
        AmountNumberrequired: "The Account Number is required",
        AmountNamerequired: "The Account Name field is required",
        bankName: "The Bank Name field is required",
        infcRequired: "The IFSC field is required",
        mobilenorequired: "Mobile Number is required",
        upireq: "UPI ID is required",
        upivalid: "Enter Valid UPI ID",
    };
    const [symbolsArrMail] = useState(["e", "E", "+", "-", "."]);

    let REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const [withdrawData, setWithdrawData] = useState();
    // const [active, setActive] = useState(0);
    const [radioButton, setRadioButton] = useState(false)

    const [show, setShow] = useState(false);
    const [withType, setwithType] = useState();
    const [withCoinValue, setwithCoinValue] = useState(0);
    // const [userAmount, setUserAmount] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [accountHolderName, setAccountHolderName] = useState("");
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
    const [savedBankdetailsName, setSavedBankdetailsName] = useState("")
    const handleClose = () => {
        setShow(false);
        // toast.success("Withdraw Request Submited Successfully");
        setErrorAlert(true);
        setIsLoading(false);
        setColorName("success");
        setAccountHolderName("");
        setAccountNumber("");
        setIFSC("");
        setBankName("");
        setwithCoinValue(0);
    };
    // console.log(withType, "iuhjuhnij");
    // const handleCancel = () => {
    //     setshowWithdraw(false);
    //   };
    const handlePaymentDetails = (val, id) => {
        setwithType(val);
        setBankId(id);
        setOpenForm(true);
        setAccountHolderName("");
        setAccountNumber("");
        setIFSC("");
        setBankName("");
        // setwithCoinValue(0);
        setSavedBankdetailsName(val)
        // console.log(val, id, "lkjhgfdsa")
        setRadioButton(false)

    };
    useEffect(() => {
        const TokenId = localStorage.getItem("TokenId");
        axios
            .post(
                `${REACT_APP_API_URL}/withtype-subadmin/get`,
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
                setStackValue(res?.data?.data);
                // console.log(res?.data?.data);
            });
        axios
            .post(
                `${REACT_APP_API_URL}/get/client-bank`,
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
        axios
            .post(
                `${REACT_APP_API_URL}/enduser/get-user-balance`,
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((res) => {
                setuserBalance(res?.data?.data?.balance);

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
            .post(`${REACT_APP_API_URL}/save/client-bank`, data, {
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
                    const TokenId = localStorage.getItem("TokenId");

                    axios
                        .post(
                            `${REACT_APP_API_URL}/get/client-bank`,
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
                    // setMessage(res?.data?.message);

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
    };
    const handleBtnValue = (val) => {
        setwithCoinValue(
            (withCoinValue) => (Number(withCoinValue) || 0) + Number(val)
        );
    };
    //console.log(alert(message))
    const popupClose = (vl) => {
        setErrorAlert(vl);
    };
    const handleAccountName = (e) => {
        const result = e.target.value.replace(/[^a-z]/gi, "");
        setAccountHolderName(e.target.value.replace(/[^a-z]/gi, ""));
    };

    const handleValidate = () => {
        if (userBalance < withCoinValue) {
            toast.error("insufficient balance", {
                style: {
                    background: "rgb(156,74,70)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
            setErrorAlert(true);
            setColorName("danger");
            setIsLoading(false);
            return false;
        }

        if (withType === "BANK") {
            // console.log("helooo");
            if (
                withCoinValue === "" ||
                withCoinValue === undefined ||
                withCoinValue === 0
            ) {
                //toast.error("Sorry no payment Methods Found")
                //apiWithErrorSnackbar(erreeee?.Amountfieldrequired)
                toast.error(erreeee?.Amountfieldrequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });



                setIsLoading(false);
                return false;
            } else if (accountNumber === "") {
                toast.error(erreeee?.AmountNumberrequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);
                return false;
            } else if (accountNumber.match(/^[0-9]{8,18}$/) === null) {
                toast.error("Invalid account number", {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);

                setIsLoading(false);
                return false;
            } else if (accountHolderName === "") {
                toast.error(erreeee?.AmountNamerequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);
                return false;
            } else if (bankName === "") {
                toast.error(erreeee?.bankName)
                setIsLoading(false);
                return false;
            } else if (ifsc === "") {
                toast.error(erreeee?.infcRequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);
                return false;
            } else if (ifsc === "") {
                toast.error(erreeee?.infcRequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);
                return false;
            }
            else if (ifsc.match(/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/) === null) {
                toast.error("Please enter a valid IFSC CODE", {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);
                return false;
            }
        } else if (withType === "PAYTM" || withType === "G PAY" || withType === "PHONE PE") {
            // console.log("heloo");
            if (
                withCoinValue === "" ||
                withCoinValue === undefined ||
                withCoinValue === 0
            ) {
                toast.error(erreeee?.Amountfieldrequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);
                return false;
            } else if (accountNumber === "") {
                toast.error(erreeee?.mobilenorequired)
                setIsLoading(false);
                return false;
            } else if (accountNumber.match(/^[0-9]{10}$/) === null) {
                toast.error("Invalid number", {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);

                return false;
            } else if (accountHolderName === "") {
                toast.error(erreeee?.AmountNamerequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);
                return false;
            } else if (accountNumber.length !== 10) {
                toast.error("Enter Valid Mobile number", {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                // setErrorAlert(true);
                // setColorName("danger");
                setIsLoading(false);
                return false;
            }
        } else if (withType === "UPI") {
            // console.log("helo");
            if (
                withCoinValue === "" ||
                withCoinValue === undefined ||
                withCoinValue === 0
            ) {
                toast.error(erreeee?.Amountfieldrequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });

                setIsLoading(false);
                return false;
            } else if (accountNumber === "") {
                toast.error(erreeee?.upireq, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                setIsLoading(false);
                return false;
            } else if (accountHolderName === "") {
                toast.error(erreeee?.AmountNamerequired, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                // setErrorAlert(true);
                // setColorName("danger");
                setIsLoading(false);
                return false;
            } else if (
                accountNumber.match(/^[a-zA-Z0-9.-]{2,256}@[a-zA-Z][a-zA-Z]{2,64}$/) ===
                null
            ) {
                toast.error(erreeee?.upivalid, {
                    style: {
                        background: "rgb(156,74,70)", minHeight: 40,
                        padding: 0,
                        color: "white",
                    }
                });
                // setErrorAlert(true);
                // setColorName("danger");
                setIsLoading(false);
                return false;
            }
        }
        return true;
    };

    const handleClick = () => {


        setErrorAlert(false);
        setIsLoading(true);

        if (handleValidate()) {
            const data = {
                accountHolderName: accountHolderName,
                bankName: bankName ? bankName : "",
                accountType: withType === "BANK" ? AccountType : "",
                amount: withCoinValue,
                ifsc: ifsc ? ifsc.toUpperCase() : "",
                accountNumber: accountNumber,
                withdrawType: bankID,
                withdrawMode: withdrawType,
            };
            const TokenId = localStorage.getItem("TokenId");
            axios
                .post(`${REACT_APP_API_URL}/self-withdraw-app`, data, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                })
                .then((res) => {
                    // setWithdrawReq(res.data);
                    // setDataLength(res.data.length);
                    // console.log(res?.data?.data                        , "sdsadasd")
                    if (res?.data?.data?.bankExist === false) {
                        // console.log(res, "yutfdgchjiouytfgdxcvbhjkiuygfc")
                        setShow(true);
                        toast.success(res?.data?.message, {
                            style: {
                                background: "rgb(74,117,67)", minHeight: 40,
                                padding: 0,
                                color: "white",
                            }
                        });

                    } else {
                        // setMessage(res?.data?.message
                        // );
                        // console.log('hellooioiioioi')
                        setErrorAlert(true);
                        setColorName("success");
                        setIsLoading(false);
                        setAccountHolderName("");
                        setAccountNumber("");
                        setIFSC("");
                        setBankName("");
                        setwithCoinValue(0);
                        toast.success(res?.data?.message, {
                            style: {
                                background: "rgb(74,117,67)", minHeight: 40,
                                padding: 0,
                                color: "white",
                            }
                        });
                        setRadioButton(false)

                    }

                })
                .catch((error) => {
                    // setErrorAlert(true);
                    setIsLoading(false);
                    // setColorName("danger");
                    toast.error(error?.response?.data?.message, {
                        style: {
                            background: "rgb(156,74,70)", minHeight: 40,
                            padding: 0,
                            color: "white",
                        }
                    });
                    // setMessage(error?.response?.data?.message);
                });
        }
    };
    const handleWithdrawData = (
        accNumber,
        accHolderName,
        BankName,
        ifscNum,
        accType,
        withdrawType,
        bankid

    ) => {
        setAccountHolderName(accHolderName);
        setAccountNumber(accNumber);
        setBankName(BankName);
        setIFSC(ifscNum);
        setAccountType(accType);
        setwithType(withdrawType)
        // setBankId(bankid)
        // setWithdrawType(withdrawType)
        setRadioButton(accNumber)

    };


    // console.log(message, "dfsfsdfssfgdsdjijfv")
    const handlepennding = () => setpendingmodal(true);
    const [withDrawId, setWithDrawId] = useState("")

    const [pendingmodal, setpendingmodal] = useState(false)
    const handleCloseFancyModal = () => setpendingmodal(false);
    useEffect(() => {
        dispatch(Postwithdrawrequestclient());
    }, []);
    const handlependingg = (data) => {
        setpendingmodal(true)
        setWithDrawId(data)
    }

    const handlependingsucesss = () => {
        let data = { id: withDrawId }
        // console.log(data)
        dispatch(postpendingapppii(data))
        setpendingmodal(false)
    }
    return (
        <div className=" maindiccccc">

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
                        onKeyDown={(e) =>
                            symbolsArrMail.includes(e.key) && e.preventDefault()
                        }
                    />
                </div>
                <div>
                    <p
                        className="choose_val"
                        style={{ marginLeft: "0px", marginBottom: "10px" }}>
                        Choose From your Favourite transaction{" "}
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
                    <option value="">Select Withdraw Type</option>
                    <option value="Normal">Normal</option>
                    <option value="Instant">Instant</option>
                </select>
            </div>
            <div className="with_paymethod">
                <Container>
                    <div className="bank-logo with_bank_logo">
                        <Row className='innerRow'>
                            {withdrawData?.map((res, id) => {
                                return (
                                    <>
                                        <Col
                                            className="withdraw_image"
                                            onClick={() =>
                                                handlePaymentDetails(
                                                    res?.withdrawType,
                                                    res?.id
                                                )}
                                            style={{ backgroundColor: (bankID === res?.id) ? "#7b7c7f" : "" }}
                                        >
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


                {
                    withType === "BANK" ? (
                        <div
                            className={`mainAccount main_withdrow ${openForm === true ? "" : "d-none"
                                } accountWith`}>
                            <div className="mx-input-wrapper account-field">
                                <label className="account-lable">Account Number</label>

                                <input
                                    // type="number"
                                    className="account-input"
                                    value={accountNumber?.toString().replace(".", "")}
                                    onChange={(e) => e.target.value.match(/^[0-9]{0,18}$/) && setAccountNumber(e.target.value)}

                                // onChange={(e) =>
                                //     e.target.value.match(/^[0-9]*$/) &&
                                //     setAccountNumber(Number(e.target.value))}
                                // onKeyDown={(e) =>
                                //     symbolsArrMail.includes(e.key) && e.preventDefault()
                                // }
                                />
                            </div>
                            <div className="mx-input-wrapper account-field">
                                <label className="account-lable">Account Name</label>

                                <input
                                    type="text"
                                    className="account-input"
                                    value={accountHolderName.trimStart()}
                                    onChange={(e) =>
                                        e.target.value.match(/^[a-zA-Z ]*$/) &&
                                        setAccountHolderName(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="mx-input-wrapper account-field">
                                <label className="account-lable">Bank Name</label>

                                <input
                                    type="type"
                                    className="account-input"
                                    value={bankName}
                                    onChange={(e) =>
                                        e.target.value.match(/^[a-zA-Z ]*$/) &&
                                        setBankName(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="mx-input-wrapper account-field">
                                <label className="account-lable">IFSC</label>

                                <input
                                    type="type"
                                    className="account-input"
                                    value={ifsc}
                                    onChange={(e) =>
                                        setIFSC(e.target.value.replace(/[^A-Z0-9a-z]+$/, " ").toUpperCase())
                                    }
                                />
                            </div>
                            <div className="mx-input-wrapper account-field">
                                <label className="account-lable">Account Type</label>

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
                            <div className="mx-input-wrapper account-field asdfghjkl">
                                <label className="account-lable">
                                    {(withType === "PAYTM" || withType === "G PAY" || withType === "PHONE PE") ? "Mobile No" : "UPI ID"}
                                </label>

                                {(withType === "PAYTM" || withType === "G PAY" || withType === "PHONE PE") ? (
                                    <input
                                        // type="number"
                                        className="account-input"
                                        value={accountNumber}
                                        onChange={(e) => e.target.value.match(/^[0-9]{0,10}$/) && setAccountNumber(e.target.value)}
                                    // onKeyDown={(e) =>
                                    //     symbolsArrMail.includes(e.key) && e.preventDefault()
                                    // }
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        className="account-input"
                                        value={accountNumber}
                                        onChange={(e) =>
                                            setAccountNumber(
                                                e.target.value.replace(
                                                    /[^a-zA-Z0-9.-]{2, 256}@[^a-zA-Z][a-zA-Z]{2, 64}+$/, ""
                                                )
                                            )
                                        }
                                    />
                                )}
                            </div>
                            <div className="mx-input-wrapper account-field asdfghjkl">
                                <label className="account-lable">
                                    {(withType === "PAYTM" || withType === "G PAY" || withType === "PHONE PE") ? "Name" : "Account Name"}
                                </label>

                                <input
                                    type="text"
                                    className="account-input"
                                    value={accountHolderName.trimStart()}
                                    onChange={(e) =>
                                        e.target.value.match(/^[a-zA-Z ]*$/) &&
                                        setAccountHolderName(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    )


                }




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
                                                                item?.accountType,
                                                                item?.withdrawType,
                                                                item?.id

                                                            )
                                                        }
                                                        aria-colindex="5"
                                                        className="text-left">
                                                        <div className="custom-control custom-control-inline custom-radio" checked={radioButton === item.accountNumber ? true : false}>
                                                            <input type="radio" name="radio_btn" />{" "}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        );
                                    })}

                                </table>
                            </div>
                        </div>

                        <div className="withdraw_coin_btn" >
                            {isLoading && (
                                <p className="lodder depositLoading withloading withdraw_deposit">
                                    <i className="fa fa-spinner fa-spin"></i>
                                </p>
                            )}
                            <button onClick={handleClick}
                            //   disabled={!openForm}
                            >
                                Withdraw Coins
                            </button>
                        </div>
                    </div>
                </div>

            </div >


            <div className="table-responsive withdrow-table">


                <table
                    role="table"
                    aria-busy="false"
                    aria-colcount="6"
                    className="table b-table table-bordered"
                    id="_BVID_104">

                    <div> </div>

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
        </div >
    )
}

export default WithDraw1