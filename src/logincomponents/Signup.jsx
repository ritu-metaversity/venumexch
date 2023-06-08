import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import Footer from "../component/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Postuserselfregister } from "../App/Features/auth/authActions";
import ValidationFile from "../Validation/ValidationFile";
import { Modal } from "react-bootstrap";

export let setShowRegisterModalRef
const Signup = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [signUpShow, setSignUpShow] = useState(false);
  // const [login, setLogin] = useState({});
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileumber] = useState();
  const [errorId, setErrorId] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMobile, setErrorMobile] = useState(false);
  const [signUpClose, setSignUpClose] = useState(false);

  const { PostuserselfregisterData, PostuserselfregisterDataError } =
    useSelector((state) => state.auth);

  setShowRegisterModalRef = setSignUpShow;
  const [symbolsArrMail] = useState(["e", "E", "+", "-", "."]);

  const [infoError, setInfoError] = useState(false);
  // useEffect(() => {
  //   if (PostuserselfregisterData?.status === 200 && signUpShow === false) {
  //     setSignUpShow(true);
  //   }
  // }, [PostuserselfregisterData])

  const handleLogin = () => {
    navigate("/m/login");
  };
  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    switch (inputName) {
      case "Username":
        setUserName(ValidationFile.spaceNotAccept(inputValue));
        setErrorId(
          ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
        );

        // setErrorId(false);
        break;
      case "Password":
        // setPassword(inputValue);
        // setErrorPassword(false);
        setPassword(ValidationFile.spaceNotAccept(inputValue));
        setErrorPassword(
          ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
        );

        break;
      case "mobileNumber":
        // setMobileumber(inputValue);
        // setErrorMobile(false);

        if (inputValue.length === 4) {
          // console.log("mobile no leass then 9")
        }
        setMobileumber(ValidationFile.spaceNotAccept(inputValue));
        setErrorMobile(
          ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
        );

        break;
      default:
        return false;
    }
  };

  // password
  // :
  // "2222222"
  // status
  // :
  // true
  // username
  // :
  // "anish2512"
  const handleSignup = (e) => {
    setInfoError(true);

    let data = {
      username: userName,
      password: password,
      appUrl: window.location.hostname,
      mobile: mobileNumber,
      userId: userName,
    };
    if (ValidationFile.isEmpty(userName)) {
      setErrorId(true);
    }
    if (ValidationFile.isEmpty(password)) {
      setErrorPassword(true);
    }
    if (ValidationFile.isEmpty(mobileNumber)) {
      setErrorMobile(true);
    }
    if (
      !ValidationFile.isEmpty(userName) &&
      !ValidationFile.isEmpty(password) &&
      !ValidationFile.isEmpty(mobileNumber)
    ) {
      dispatch(Postuserselfregister(data));
    }
  };
  const handleSignUpShow = () => {
    setSignUpClose(true);
    setSignUpShow(false);
    navigate("/m/login");
  };

  return (
    <div id="app">
      <div>
        <div className="login">
          <div className="login-view">
            <div className="login-container">
              <div className="login-form" style={{ marginTop: "3%" }}>
                <div className="login-panel">
                  <div className="panel-heading">
                    <div className="logo">
                      <img
                        alt=""
                        src="https://d1arlbwbznybm5.cloudfront.net/v1/static/themes/lordsexch.com/front/logo-login.png"
                        className="logo"
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
                          onChange={handleInput}
                          value={userName}
                        />
                        {errorId && infoError ? (
                          <span className="text-danger">
                            Username is required.
                          </span>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="form-group">
                        <input
                          name="Password"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          onChange={handleInput}
                          value={password}
                        />

                        {errorPassword && infoError ? (
                          <span className="text-danger">
                            Password is required.
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          name="mobileNumber"
                          type="number"
                          placeholder="Mobile Number"
                          className="form-control"
                          onChange={handleInput}
                          maxlength="10"
                          onKeyDown={(e) =>
                            symbolsArrMail.includes(e.key) && e.preventDefault()
                          }
                          value={mobileNumber}
                        />
                        {errorMobile && infoError ? (
                          <span className="text-danger">
                            Mobile Number is required.
                          </span>
                        ) : (
                          ""
                        )}
                        {PostuserselfregisterData?.message ===
                          "Mobile Number Already Registered" ? (
                          <span className="text-danger">
                            Mobile Number Already Registered
                          </span>
                        ) : (
                          ""
                        )}
                        {PostuserselfregisterData?.message ===
                          "mobile: must be greater than or equal to 1111111111" ? (
                          <span className="text-danger">
                            Mobile Number must be between 9-10
                          </span>
                        ) : (
                          ""
                        )}
                        {PostuserselfregisterData?.message ===
                          "mobile: must be less than or equal to 9999999999" ? (
                          <span className="text-danger">
                            Mobile Number must be between 9-10
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <button className="btn btn-login" onClick={handleSignup}>
                        Sign Up
                        <i className="ml-2 fas fa-sign-in-alt"></i>
                      </button>
                      <button className="btn btn-login" onClick={handleLogin}>
                        <i className="ml-2 fas fa-sign-in-alt rotate-btn"></i>
                        Login
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
              <Modal.Body>
                <div>
                  <div>
                    <div className="">
                      <div className="user-id user">
                        <p>User Created</p>
                        <p>Registration successful </p>
                      </div>
                      <div className="user-id user">
                        <p>User Name:</p>
                        <p>{PostuserselfregisterData?.data?.username}</p>
                      </div>
                      <div className="user-id">
                        <p>Password:</p>
                        <p>{PostuserselfregisterData?.data?.password}</p>
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
      <Footer />
    </div>
  );
};

export default Signup;
