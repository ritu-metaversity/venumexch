import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Footer from "../component/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  Postisselfbyappurl,
  postLogin, postLoginDemoUser
} from "../App/Features/auth/authActions";



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
  const handleClose = () => {
    setPassword("")
    setUserName("")
    setShow(false)
  };

  const {
    postLoginData,
    postLoginDataError,
    PostuserselfregisterData,
    postisselfbyappurlData
  } = useSelector((state) => state.auth);

  useEffect(() => {

  }, []);
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

  const handleLogin = (vl) => {

    setLogin({
      userId: userName,
      password: password,
      appUrl: window.location.hostname,
      // appUrl: "localhost"
    });


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

      setShow(true)
    }



  };
  const handleHome = () => {
    navigate("/m/home");

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
  let appUrll = window.location.hostname;
  // let appUrll = "localhost";
  // let appUrll = "localhost";

  const [selfAllowedd, SetselfAllowedd] = useState("");
  useEffect(() => {
    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/login/is-self-by-app-url",
        { appUrl: appUrll }
      )
      .then((res) => {
        console.log(res, "dadasdas")
        SetselfAllowedd(res?.data?.data);
      });
  }, [appUrll]);

  // http://${REACT_APP_API_URL}/admin-new-apis/login/is-self-by-app-url

  // useEffect(() => {
  //   dispatch(Postisselfbyappurl({ appUrl: appUrll }));
  // }, [appUrll]);
  console.log(selfAllowedd, "selfAllowedd");

  const handleDemoLogin = () => {
    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/login/demo-user-creation-login",
        { appUrl: window.location.hostname }
      )
      .then((res) => {
        if (res?.data?.token) {
          axios.defaults.headers.common.Authorization = `Bearer ${res?.data?.token}`

          navigate("/m/home");
          localStorage.setItem("TokenId", res?.data?.token);
          localStorage.setItem("usernameDemo", res?.data?.username);
          localStorage.setItem("userTypeInfo", res?.data?.userTypeInfo);

        }
      })
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
                        src={selfAllowedd?.logo}
                        className="logo w_logo"
                        style={{ width: "200px" }}
                      />
                    </div>
                  </div>
                  <div className="panel-body panel">
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
                          {errorId === true ? (
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
                          ) : ""}
                        </div>
                        <button className="btn btn-login" onClick={handleLogin}>
                          Login
                          <i className="ml-2 fas fa-sign-in-alt"></i>
                        </button>
                        {selfAllowedd?.selfAllowed === true ?
                          <button className="btn btn-login" onClick={handleDemoLogin}>
                            Login with demo ID
                            <i className="ml-2 fas fa-sign-in-alt"></i>
                          </button> : ""}

                        {selfAllowedd?.selfAllowed === true ?
                          <button className="btn btn-login" onClick={handleSignUp}>
                            Sign Up
                            <i className="ml-2 fas fa-sign-in-alt"></i>
                          </button>
                          :
                          ""
                        }
                        <button className="btn btn-login" onClick={handleHome}>
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
            <Modal.Header style={{ width: "100%", textAlign: "center" }}>
              <Modal.Title className="modaltitleeee">
                Please Confirm
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: "12px" }}>
              Underage gambling is prohibited. Please confirm if you are 18
              years old and above as of today
            </Modal.Body>
            <div className="confirm">
              <Modal.Footer>
                <Button variant="secondary" style={{ backgroundColor: "#dc3545" }} onClick={handleClose}>
                  Exit
                </Button>
                <Button
                  className="confirmation btn-info"
                  variant=""
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
