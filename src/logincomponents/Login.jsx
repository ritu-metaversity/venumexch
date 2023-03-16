import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import PleaseConfirm from "./PleaseConfirm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Footer from "../component/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../App/Features/auth/authActions";

const Login = () => {
   const dispatch = useDispatch();
  let navigate = useNavigate();
  const [login, setLogin] = useState({});
  const [userName, setUserName] = useState("sumana6748");
  const [password, setPassword] = useState("1111111");
  // const [userName, setUserName] = useState("reshmi8396");
  // const [password, setPassword] = useState("342845");
  // const [userName, setUserName] = useState("arya2452");
  // const [password, setPassword] = useState("1111111");
//   const [confirmLogin, setConfirmLogin] = useState("false");
  const [errorId, setErrorId] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [loginData, setLoginData] = useState("");
  const [apiHit, setApiHit] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const { postLoginData } = useSelector(state => state.auth)
  

  useEffect(()=>{
    
  })
// console.log(postLoginData,"post data dushyant")
// magno 1111111 superAdmin

// edi2150	05e944 subAdmin
// edi2150	1111111 subAdmin

// reshmi8396	342845 client
useEffect(()=>{
if(apiHit===true){
   if(postLoginData?.data?.message==="Invalid Username or password"){
            setShow(false)
            setErrorId(true)
            setErrorPassword(true)
   }else if(postLoginData?.data?.token){
         setApiHit(false)
        localStorage.setItem("TokenId", postLoginData?.data?.token);
        localStorage.setItem("PassWordType", postLoginData?.data?.passwordtype);
        localStorage.setItem("userId", postLoginData?.data?.userId);
        if(postLoginData?.data?.passwordtype==="old"){
// console.log("ChangePassWord")
         navigate("/m/changepassword");

        }else{
        //  console.log("Home")
         navigate("/m/home");
        }
   }
}
   setLoginData(postLoginData)
},[apiHit, navigate, postLoginData])


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
      appUrl: "localhost",
      // appUrl: "atozscore.com",

      // appUrl: window.location.hostname,

    });
console.log(process.env.REACT_APP_API_URL)

    setShow(true);
  };

  const handleLoginConfirm = (val) => {

   dispatch(postLogin(login))
   setShow(false);
   setApiHit(true)
  //  navigate("/m/home");

}
   //   axios
   //   .post("http://api.a2zscore.com/admin-new-apis/login/client-login", login)
   //   .then((response) => {
   //    if(response?.data?.message ==="Invalid Username or password"){
   //       setShow(false)
   //       setErrorId(true)
   //       setErrorPassword(true)
   //       console.log(response?.data?.message,"ERROR")
   //    }else{
   //       console.log(response, "responseresponse");
   //       navigate("/m/home");
 
   //       localStorage.setItem("TokenId", response?.data?.token);
   //    }

   //    })
   //   .catch((error) => {
   //     setShow(false)
   //     setErrorId(true)
   //     setErrorPassword(true)
   //     console.log(error?.response?.data,"ERROR")
   //  });




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
                        <button className="btn btn-login" onClick={handleLogin}>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <>
          {/* <button variant="primary" onClick={handleShow}>
        Launch demo modal
      </button> */}
          <div className="login-modal">
            <Modal
              className="login-confirm-modal"
            
              show={show}
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
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Exit
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleLoginConfirm("true")}
                >
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
