import React, { useState } from 'react'
import "./LoginForMobile.css"
import axios from "axios"
import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router';
// import PleaseConfirm from './PleaseConfirm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MFooter from '../MobileComponent/MMFooter/MFooter'

const LoginForMobile = () => {
let  navigate =useNavigate()
// const [login ,setLogin ] = useState("")
// const [userName ,setUserName ] = useState("eff8caa0a3")
// const [password ,setPassword ] = useState("1111111")

// const [confirmLogin,setConfirmLogin] = useState("false")

// const [errorId,setErrorId] = useState(false)
// const [errorPassword,setErrorPassword] = useState(false)
// console.log(userName)
// // console.log(confirmLogin)
// console.log(password)



// // modal code start 

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// // const handleShow = () => setShow(true);


// // end

// const handleInput = (e) => {
//    let inputName = e.target.name;
//    let inputValue = e.target.value;

//    switch (inputName) {
//      case "Username":
//       setUserName(inputValue);
//       setErrorId(false)
//        break;
//      case "Password":
//       setPassword(inputValue);
//       setErrorPassword(false)

//        break;
//      default:
//        return false;
//    }
//  };

   
// useEffect(()=>{
//   if(localStorage.getItem("TokenId") ){
//       navigate("/home")
//    }
// },[navigate])


//    const handleLogin =(e)=>{
//       // e.preventdefault()
//       // setShow(true)
//       // console.log("hellllllllo")
//    }

   const handleLoginConfirm=(val)=>{
    navigate("/home")

// let data = {
//    userId: userName,
//    password: password
// }
//         axios.post('http://api.a2zscore.com/admin-new-apis/login/client-login', data)
//        .then((response) => {

//          if(window.innerWidth < 461){
//          if(response.status===200){
//          // navigate("/mobileHome")
//          console.log("homeeeeeeeeeee")
//        }
//        localStorage.setItem("TokenId", response?.data?.token);
//       }  else{
//          if(response.status===200){
//             // navigate("/mobileHome")
//             console.log("mobileeeeeeeeee")
//           }
//        }
//       }
//        )
//        .catch((error) => {
//          setShow(false)
//          setErrorId(true)
//          setErrorPassword(true)
//          console.log(error?.response?.data,"ERROR")
//       });
   }

//    const hanndsnd=()=>{
//       console.log(window.innerWidth)
//    }

  return (
    <div id="app">
    <div>
       <div   className="login">
          <div   className="login-view">
             <div   className="login-container">
                <div   className="login-form">
                   <div   className="login-panel">
                      <div   className="panel-heading">
                         <div   className="logo"><img alt="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/themes/lordsexch.com/front/logo-login.png"   className="logo"/></div>
                      </div>
                      <div   className="panel-body"  >
                         <form data-vv-scope="form-login" onSubmit={(e)=>e.preventDefault()}>
                            <div   className="m-b-10">
                               <div   className="flash__wrapper"></div>
                            </div>
                            <fieldset>
                              {/* <button onClick={"hanndsnd"}> hello</button> */}
                               <div   className="form-group">

                                 <input 
                                 name="Username" 
                                 type="text" 
                                 placeholder="Username" 
                                   className="form-control" 
                                //  onChange={handleInput}
                                 /> 
                                 {/* {
                                    errorId ?
                                    <span   className="text-danger" >The Username field is required.</span>:
                                    ""
                                 } */}
                                    </div>
                               <div   className="form-group">

                                 <input 
                                 name="Password" 
                                  type="password"
                                  placeholder="Password" 
                                    className="form-control" 
                                //   onChange={handleInput}
                                  />

                                 {/* {errorPassword ?
                                 <span   className="text-danger" >The Password field is required.</span>
                                 :""
                              } */}
                                    </div>
                               <button   className="btn btn-login" onClick={handleLoginConfirm}>
                                   Login
                               </button>
                               <p   className="m-b-0"><small   className="recaptchaTerms" style={{marginTop: "0"}}>This site is protected by reCAPTCHA and the Google
                                  <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                                  <a href="https://policies.google.com/terms">Terms of Service</a> apply.
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
<MFooter/>
       <>
      {/* <button variant="primary" onClick={handleShow}>
        Launch demo modal
      </button> */}

<Modal   className='login-confirm-modal'
        // show={show}
      //   onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{backgroundColor: "black", 

      }}
      >
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Underage gambling is prohibited. Please confirm if you are 18 years old and above as of today

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={"handleClose"}>
            Exit
          </Button>
          <Button variant="primary" onClick={()=>"handleLoginConfirm"("true")}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>

    </div>

 </div>
  )
}

export default LoginForMobile