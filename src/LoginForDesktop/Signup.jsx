import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import FooterForDesktop from "../FooterForDesktop/FooterForDesktop";
import { useDispatch, useSelector } from "react-redux";
import { Postuserselfregister } from "../App/Features/auth/authActions";
import ValidationFile from "../Validation/ValidationFile";
import { Modal } from "react-bootstrap";
import axios from "axios";

export let setShowRegisterModalRefDesktop
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
  const [register, setRegistration] = useState({
    username: "",
    password: "",
    mobile: "",
    confirmPassword: "",
    appUrl: "",
  });
  const { PostuserselfregisterData, PostuserselfregisterDataError } =
    useSelector((state) => state.auth);

  setShowRegisterModalRefDesktop = setSignUpShow;
  //   const [password, setPassword] = useState("");
  const [symbolsArrMail] = useState(["e", "E", "+", "-", "."]);

  const [errorForall, setErrorForall] = useState("")
  const [useeerror, setUserNameError] = useState("")
  const [mobileerror, setmobileNumberError] = useState("")
  const [passworderror, setPasswordError] = useState("")
  const [confirmpassword, setConfirmPasswordError] = useState("")
  const handleClick = async () => {

    if (register.username === "" && register.mobile === "" && register.password === "" && register.confirmPassword === "") {
      return setErrorForall("Please enter all the mandatory details");
    } else if (register?.password !== "" && register?.mobile === "" && register?.username !== "" && register?.confirmPassword !== "") {
      return setErrorForall(" invalid mobile number");
    } else if (register?.password === "" && register?.mobile !== "" && register?.username !== "" && register?.confirmPassword !== "") {
      return setErrorForall("invalid password ");
    } else if (register?.password !== "" && register?.mobile !== "" && register?.username !== "" && register?.confirmPassword === "") {
      return setErrorForall("invalid Confirm password");
    } else if (register.password !== register.confirmPassword) {
      return setErrorForall("Password does not match!!");
    } else if ((register?.password?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?#&_]{8,12}$/) ===
      null) === true) {
      return setPasswordError(
        "Password should contain atleast one number and one lower case and one upper case."
      );
    } else {
      // const { response } = await authServices.registeration({
      //   ...register,
      //   userId: register.username,
      // });
      dispatch(Postuserselfregister(register));

      // if (response?.status) {
      //   snackBarUtil.success(response.message);
      //   setOpen(true);
      //   setNewCredAfterRegister(response);
      //   // navigate("/sign-in", { replace: true });
      // } else {
      // }
    }
  };
  // useEffect(() => {
  //   if (PostuserselfregisterData?.status === 200 && signUpShow === false) {
  //     setSignUpShow(true);
  //   }
  // }, [PostuserselfregisterData])

  const handleLogin = () => {
    navigate("/login");
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
    // setInfoError(true);

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
  let appUrll = window.location.hostname;
  const [selfAllowedd, SetselfAllowedd] = useState("");
  useEffect(() => {
    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/login/is-self-by-app-url",
        { appUrl: appUrll }
      )
      .then((res) => {
        SetselfAllowedd(res?.data?.data);
      });
  }, [appUrll]);


  const handleUserName = (e) => {
    setRegistration({
      username: e.target.value,
      password: register?.password,
      mobile: register?.mobile,
      confirmPassword: register?.confirmPassword,
      appUrl: window.location.hostname,
    })
    // setUserName(e.target.value);
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
      setUserNameError("")
    }
  };
  const handlePassWordsValidation = (e) => {
    setRegistration({
      username: register?.username,
      password: e.target.value,
      mobile: register?.mobile,
      confirmPassword: register?.confirmPassword,
      appUrl: window.location.hostname,
    })
    const passData = e.target.value;
    if (passData === "") {
      setPasswordError("Password is required.");
    } else if (passData?.length < 8) {
      setPasswordError("Minimum 8 letters required.");
    } else if (passData?.length > 13) {
      setPasswordError("Maximum 12 letters required");
    } else if (
      passData?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?#&_]{8,12}$/) ===
      null
    ) {
      setPasswordError(
        "Password should contain atleast one number and one lower case and one upper case."
      );
    } else {
      setPasswordError("")
    }
    console.log(passData?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?#&_]{8,12}$/) ===
      null, "uytgbnjiygbn")
  };



  // useEffect(() => {
  //   setPasswordError("")
  //   setmobileNumberError("")
  //   setUserNameError("")
  //   setConfirmPasswordError("")
  // }, [])

  const handleConfirmPasswordsValidation = (e) => {
    setRegistration({
      username: register?.username,
      password: register?.password,
      mobile: register?.mobile,
      confirmPassword: e.target.value,
      appUrl: window.location.hostname,
    })
    const confirmPass = e.target.value;
    if (register?.password !== confirmPass) {
      setConfirmPasswordError("Password must be equal.");
    } else {
      setConfirmPasswordError("")
    }
  };
  const handleMobileNumber = (e) => {
    setRegistration({
      username: register?.username,
      password: register?.password,
      mobile: e.target.value,
      confirmPassword: register?.confirmPassword,
      appUrl: window.location.hostname,
    })
    if (e.target.value === "") {
      setmobileNumberError("Mobile number must not be empty.");
    } else if (e.target.value?.length !== 10) {
      setmobileNumberError("Must be minimum 10 digit");
    } else {
      setmobileNumberError("")
    }
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
                        src={selfAllowedd?.logo}
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
                          value={register?.username}
                          onChange={handleUserName}
                        />
                        <label style={{ color: "red" }}>{useeerror}</label>

                      </div>

                      <div className="form-group">
                        <input
                          name="Password"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          value={register?.password}
                          onChange={handlePassWordsValidation}
                        />
                        <label style={{ color: "red" }}>{passworderror}</label>
                      </div>

                      <div className="form-group">

                        <input
                          required
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          type="password"
                          className="form-control"

                          value={register?.confirmPassword}
                          onChange={handleConfirmPasswordsValidation}
                        />
                        <label style={{ color: "red" }}>{confirmpassword}</label>


                      </div>
                      <div className="form-group">
                        <input
                          name="mobileNumber"
                          type="number"
                          placeholder="Mobile Number"
                          className="form-control"

                          maxlength="10"
                          value={register?.mobile}
                          onChange={handleMobileNumber}

                          onKeyDown={(e) =>
                            symbolsArrMail.includes(e.key) && e.preventDefault()
                          } />
                        <label style={{ color: "red" }}>{mobileerror}</label>

                      </div>
                      <button className="btn btn-login" onClick={handleClick}>
                        Sign Up
                        <i className="ml-2 fas fa-sign-in-alt"></i>
                      </button>
                      <label style={{ color: "red" }}>{errorForall}</label>
                      {selfAllowedd?.selfAllowed === true ?
                        <button className="btn btn-login" onClick={handleDemoLogin}>
                          Login with demo ID
                          <i className="ml-2 fas fa-sign-in-alt"></i>
                        </button> : ""}

                      <button className="btn btn-login" onClick={handleLogin}>
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
              <Modal.Body style={{ marginLeft: "20%" }}>
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
      <FooterForDesktop />
    </div >
  );
};

export default Signup;

