import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import FooterForDesktop from "../FooterForDesktop/FooterForDesktop";
import { useDispatch, useSelector } from "react-redux";
import { Postuserselfregister } from "../App/Features/auth/authActions";
import ValidationFile from "../Validation/ValidationFile";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "./signip.css"
export let setShowRegisterModalRefDesktop

const Signup = () => {


  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  const [signUpShow, setSignUpShow] = useState(false);
  const [signUpClose, setSignUpClose] = useState(false);
  const [open, setOpen] = useState(false);
  const [newCredAfterRegister, setNewCredAfterRegister] = useState("");
  const navigate = useNavigate();
  const [selfAllowedd, SetselfAllowedd] = useState("");
  // const [selfAllowedd, SetselfAllowedd] = useState();

  const [password, setPassword] = useState(0);
  const [mobileNumber, setMobileNumber] = useState();
  const [UserName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [StatusVal, setStatusVal] = useState(true);
  const [StatusCode, setStatusCode] = useState();
  const [logo, setLogo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [message, setMessage] = useState("");
  // const [isLoading1, setIsLoading1] = useState(false);
  // const [alertBtnColor, setAlertBtnColor] = useState();
  // const nav = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [mobileNumberError, setmobileNumberError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const handleValidation = () => {
    // console.log(password, confirmPassword, "kjhgfghj");
    if (UserName === "" && mobileNumber === 0 && password === 0) {
      setUserNameError("User Name is required");
      setPasswordError("Password is required.");
      setmobileNumberError("Mobile number must not be empty.");
      return false;
    } else if (UserName === "") {
      setUserNameError("User Name is required");
      return false;
    } else if (mobileNumber === 0 || mobileNumber === undefined) {
      setmobileNumberError("Mobile number must not be empty.");
      return false;
    } else if (password === 0) {
      setPasswordError("Password is required.");
      return false;
    } else if (confirmPassword === undefined) {
      setConfirmPasswordError("Confirm Password is required.");
      return false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Password must be equal.");
      return false;
    } else if (mobileNumber?.length !== 10) {
      return false;
    } else if (password === 0) {
      setPasswordError("Password is required.");
      return false;
    } else if (
      password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$#!%*?&_]{8,12}$/
      ) === null
    ) {
      return false;
    } else if (UserName?.length < 4) {
      return false;
    } else if (UserName?.length > 8) {
      return false;
    } else if (UserName?.match(/^[a-zA-Z0-9]+$/) === null) {
      return false;
    } else if (password?.length < 8) {
      return false;
    } else if (password.length > 12) {
      return false;
    }
    return true;
  };


  const handleLogin = async () => {
    setStatusVal(true);
    let data = {
      appUrl: window.location.hostname,
      username: UserName,
      password: password,
      confirmPassword: confirmPassword,
      mobile: mobileNumber,
      userId: UserName,
    }
    if (handleValidation()) {

      axios
        .post(
          "https://api.247365.exchange/admin-new-apis/user/self-register", data
        )
        .then((res) => {
          if (res?.status) {
            setOpen(true)
            toast.success(res?.data?.message || "", {
              style: {
                background: "rgb(74,117,67)", minHeight: 40,
                padding: 0,
                color: "white",
              }
            });
            // snackBarUtil.success(res?.data?.message);
            // console.log(res?.data)
            setSignUpShow(true)
            setNewCredAfterRegister(res?.data);
          } else {
            toast.error(res?.data?.message || "", {
              style: {
                background: "rgb(156,74,70)", minHeight: 40,
                padding: 0,
                color: "white",
              }
            });
            // snackBarUtil.error(res?.data?.message);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message || "", {
            style: {
              background: "rgb(156,74,70)", minHeight: 40,
              padding: 0,
              color: "white",
            }
          });
          // snackBarUtil.error(error.response.data.message);
          // setStatusCode(error.response.status);
          // setErrorMsg(error.response.data.message);
          // setStatusVal(false);
          // setAlertBtnColor("danger");
        });
    }
  };
  const handleSignUpShow = () => {
    setSignUpClose(true);
    setSignUpShow(false);
    navigate("/login");
  };
  const handleDemoLogin = () => {
    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/login/demo-user-creation-login",
        { appUrl: window.location.hostname }
      )
      .then((res) => {
        if (res?.data?.token) {

          navigate("/home");
          axios.defaults.headers.common.Authorization = `Bearer ${res?.data?.token}`

          localStorage.setItem("TokenId", res?.data?.token);
          localStorage.setItem("usernameDemo", res?.data?.username);
          localStorage.setItem("userTypeInfo", res?.data?.userTypeInfo);

        }
      })
  };


  const handlePassWordsValidation = (e) => {
    setPassword(e.target.value);
    const passData = e.target.value;
    if (passData === "") {
      setPasswordError("Password is required.");
    } else if (passData?.length < 8) {
      setPasswordError("Minimum 8 letters required.");
    } else if (passData?.length > 13) {
      setPasswordError("Maximum 12 letters required");
    } else if (
      passData?.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$#!%*?&_]{8,12}$/
      ) === null
    ) {
      setPasswordError(
        "Password should contain atleast one number and one lower case and one upper case."
      );
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmPasswordsValidation = (e) => {
    setConfirmPassword(e.target.value);
    const confirmPass = e.target.value;
    if (password !== confirmPass) {
      setConfirmPasswordError("Password must be equal.");
    } else {
      setConfirmPasswordError("");
    }
  };


  const handleMobileNumber = (e) => {
    // console.log(e.target.value, "luhbnoihb")
    if (e.target.value.match(/^[0-9]{0,10}$/) !== null) {
      setMobileNumber(e.target.value);
    }
    if (e.target.value.match(/^[0-9]{0,10}$/) === "") {
      setmobileNumberError("Mobile number must not be empty.");
    } else if (e.target.value?.length !== 10) {
      setmobileNumberError("Mobile number must be 10 digit number");
    } else {
      setmobileNumberError("");
    }
  };


  const handleUserName = (e) => {
    setUserName(e.target.value);

    const userData = e.target.value;
    if (userData === "") {
      setUserNameError("User Name is required");
    } else if (userData?.length < 4) {
      setUserNameError("Minimum 4 letters required.");
    } else if (userData?.length > 8) {
      setUserNameError("Maximum 8 letters required.");
    } else if (userData?.match(/^[a-zA-Z0-9]+$/) === null) {
      setUserNameError("Only number and alphabet are allowed.");
    } else {
      setUserNameError("");
    }
  };
  const [allData, setAllData] = useState()

  useEffect(() => {
    let appUrll = window.location.hostname.replace("www.", "");
    // let appUrll = window.location.hostname;
    // let appUrll = "maggibook.com";
    axios
      .post(
        `${REACT_APP_API_URL}/login/is-self-by-app-url`,
        { appUrl: appUrll }
      )
      .then((res) => {
        setAllData(res?.data)
        // console.log(res, "dadasdas")
        // SetselfAllowedd(res?.data?.data?.logo);
        setLogo(res?.data?.data?.logo);
        SetselfAllowedd(res?.data?.data)
        // setStatusBtn(res?.data?.data?.selfAllowed);
        // setIsDemoIdLoginAllowed(res?.data?.data?.isDemoIdLoginAllowed)
        if (res?.data?.data?.selfAllowed === false) {

          navigate("/sign-in")
        } else {

        }
      });
  }, []);

  const handleClickLogin = () => {
    navigate("/login")

  }
  return (
    <div id="app">
      <div>
        <div className="login">
          <div className="">
            <div className="">
              <div className="login-form" style={{ marginTop: "3%" }}>
                <div className="login-panel">
                  <div className="panel-heading">
                    <div className="logo">
                      <img
                        alt=""
                        src={logo}
                        className="logo"
                        style={{ height: "100px", width: "200px" }}
                      />
                    </div>
                  </div>
                  <div className="panel-body">
                    {/* <form
                      data-vv-scope="form-login"
                      onSubmit={(e) => e.preventDefault()}
                    > */}
                    <div className="m-b-10">
                      <div className="flash__wrapper"></div>
                    </div>
                    <fieldset>
                      {/* <button onClick={hanndsnd}> hello</button> */}
                      <div className="form-group">
                        <input
                          name="Username"
                          type="text"
                          placeholder="Username"
                          className="form-control"
                          value={UserName}
                          onChange={handleUserName}
                        />
                        <label style={{ color: "red" }}>{userNameError}</label>

                      </div>
                      <div className="form-group">
                        <input
                          name="mobileNumber"
                          type="number"
                          placeholder="Mobile Number"
                          className="form-control"

                          maxlength="10"
                          value={mobileNumber}
                          onChange={handleMobileNumber} />
                        <label style={{ color: "red" }}>{mobileNumberError}</label>

                      </div>
                      <div className="form-group">
                        <input
                          name="Password"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          // value={register?.password}/
                          onChange={handlePassWordsValidation}
                        />
                        <label style={{ color: "red" }}>{passwordError}</label>
                      </div>

                      <div className="form-group">

                        <input
                          required
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          type="password"
                          className="form-control"

                          // value={register?.confirmPassword}
                          onChange={handleConfirmPasswordsValidation}
                        />
                        <label style={{ color: "red" }}>{confirmPasswordError}</label>


                      </div>



                      <div className='form-group comm-data-new' style={{ maxWidth: "407px" }}>
                        {allData?.data?.fancyComm === 0 ?

                          "" :
                          <span>
                            <label style={{ color: "white", fontSize: "12px", width: "100%", textAlign: "left" }}>Odds Comm..</label>
                            <input value={allData?.data?.oddsComm} disabled style={{ width: "100%", padding: "unset" }} />
                          </span>
                        }

                        {allData?.data?.fancyComm === 0 ?

                          "" :
                          <span>
                            <label style={{ color: "white", fontSize: "12px", width: "100%", textAlign: "left" }}>Fancy Comm..</label>
                            <input placeholder={allData?.data?.fancyComm} disabled style={{ width: "100%", padding: "unset" }} />
                          </span>}
                        {allData?.data?.casinoComm === 0 ?

                          "" :
                          <span>
                            <label style={{ color: "white", fontSize: "12px", width: "100%", textAlign: "left" }}>Casino Comm..</label>
                            <input placeholder={allData?.data?.casinoComm} disabled style={{ width: "100%", padding: "unset" }} />
                          </span>
                        }
                      </div>
                      <button className="btn btn-login" onClick={handleLogin}>
                        Sign Up
                        <i className="ml-2 fas fa-sign-in-alt"></i>
                      </button>
                      {selfAllowedd?.isDemoIdLoginAllowed === true ?
                        <button className="btn btn-login" onClick={handleDemoLogin}>
                          Login with demo ID
                          <i className="ml-2 fas fa-sign-in-alt"></i>
                        </button> : ""}

                      <button className="btn btn-login" onClick={handleClickLogin}>
                        <i className="ml-2 fas fa-sign-in-alt rotate-btn"></i>
                        Back
                      </button>
                      <p className="m-b-0">
                        <small className="recaptchaTerms">
                          This site is protected by reCAPTCHA and the Google
                          <a href="https://policies.google.com/privacy">
                            Privacy Policy
                          </a>{" "}
                          and
                          <a href="https://policies.google.com/terms">
                            Terms of Service
                          </a>{" "}
                          apply.
                        </small>
                      </p>
                    </fieldset>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <>
          <div className="">
            <Modal
              className=""
              show={signUpShow}
              onHide={handleSignUpShow}
              backdrop="static"
              keyboard={false}
              centered

            >
              <Modal.Header className="register-head" closeButton>
                <Modal.Title className="regTital">Register</Modal.Title>
              </Modal.Header>
              <Modal.Body className="singn_popup" >
                <div>
                  <div>
                    <div className="">
                      <div className="user-id user">
                        <p>User Created</p>
                        <p>Registration successful </p>
                      </div>
                      <div className="user-id user">
                        <p>User Name:</p>
                        <p>{newCredAfterRegister?.username}</p>
                      </div>
                      <div className="user-id">
                        <p>Password:</p>
                        <p>{newCredAfterRegister?.password}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="text-danger">
                    <p>
                      Please save the details and login with this username and
                      password{" "}
                    </p>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </>
      </div>
      <FooterForDesktop />
    </div >
  );
};

export default Signup;

