import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Footer from "../component/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../App/Features/auth/authActions";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [login, setLogin] = useState({});
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { pathname } = useLocation();

  const [errorId, setErrorId] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [loginData, setLoginData] = useState("");
  const [apiHit, setApiHit] = useState(false);
  const [show, setShow] = useState(false);
  // const [signUpShow, setSignUpShow] = useState(false);
  // const [signUpClose, setSignUpClose] = useState(false);
  const handleClose = () => setShow(false);

  const { postLoginData, postLoginDataError, PostuserselfregisterData } =
    useSelector((state) => state.auth);

  console.log(PostuserselfregisterData, "userNameuserName");
  // console.log(signUpShow, "userNameuserName");

  // useEffect(() => {
  //   if (PostuserselfregisterData?.data?.message === "User Created") {
  //     setSignUpShow(true);
  //   }
  // }, [PostuserselfregisterData]);

  // const handleSignUpShow = () => {
  //   setSignUpClose(true);
  //   setSignUpShow(false);
  // };

  useEffect(() => {
    if (apiHit === true) {
      if (postLoginData?.data?.token) {
        setApiHit(false);
        setShow(false);

        localStorage.setItem("TokenId", postLoginData?.data?.token);
        localStorage.setItem("PassWordType", postLoginData?.data?.passwordtype);
        localStorage.setItem("userId", postLoginData?.data?.userId);
        localStorage.setItem("SportId", 4);
        axios.defaults.headers.common.Authorization = `Bearer ${postLoginData?.data?.token}`;

        if (postLoginData?.data?.passwordtype === "old") {
          navigate("/m/changepassword");
        } else {
          navigate("/m/home");
        }
      }
    }
    setLoginData(postLoginData);
  }, [postLoginData]);

  useEffect(() => {
    const token = localStorage.getItem("TokenId");

    if (token !== null) {
      navigate("/m/home");
    }
  }, []);

  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    switch (inputName) {
      case "Username":
        setUserName(inputValue);
        setErrorId(false);
        break;
      case "Password":
        setPassword(inputValue);
        setErrorPassword(false);

        break;
      default:
        return false;
    }
  };

  const handleLogin = (e) => {
    setLogin({
      userId: userName,
      password: password,
      appUrl: window.location.hostname,
    });

    setShow(true);
  };

  const handleLoginConfirm = (val) => {
    if (userName === "" && password === "") {
      setErrorPassword(true);
      setErrorId(true);
      setShow(false);
    } else if (userName === "") {
      setErrorId(true);
      setShow(false);
    } else if (password === "") {
      setErrorPassword(true);
      setShow(false);
    } else {
      dispatch(postLogin(login));
      setShow(false);
      setApiHit(true);
    }
  };

  const handleSignUp = () => {
    navigate("/m/signup");
  };

  return (
    <div id="app">
      <div>
        <div className="login">
          <div className="login-view">
            <div className="login-container">
              <div className="login-form">
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
                    <form
                      data-vv-scope="form-login"
                      onSubmit={(e) => e.preventDefault()}
                    >
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
                          {errorId ? (
                            <span className="text-danger">
                              The Username field is required.
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

                          {errorPassword ? (
                            <span className="text-danger">
                              The Password field is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div>
                          {postLoginData?.data?.status === false ? (
                            <span className="text-danger">
                              {postLoginData?.data?.message}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <button className="btn btn-login" onClick={handleLogin}>
                          Login
                          <i className="ml-2 fas fa-sign-in-alt"></i>
                        </button>
                        <button
                          className="btn btn-login"
                          onClick={handleSignUp}
                        >
                          Sign Up
                          <i className="ml-2 fas fa-sign-in-alt"></i>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <button variant="primary" onClick={handleShow}>
        Launch demo modal
      </button> */}
        <div className="login-modal">
          <Modal
            className="login-confirm-modal"
            show={show}
            style={{ marginLeft: "1%" }}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Please Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Underage gambling is prohibited. Please confirm if you are 18
              years old and above as of today
            </Modal.Body>
            <div className="confirm">
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Exit
                </Button>
                <Button
                  className="confirmation"
                  variant="primary"
                  onClick={() => handleLoginConfirm("true")}
                >
                  Confirm
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>
        {/* </> */}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
