import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { PostPasswordChange, PostPwChangeFirstTime } from "../../App/Features/auth/authActions";
import ValidationFile from "../../Validation/ValidationFile";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [passwordTypeOld, setPasswordTypeOld] = useState({
    currentPassword: "12345678",
    newPassword: "111111",
  })
  let navigate = useNavigate();

  const [currentPassword, setCurrentPassWord] = useState("");
  const [invalidPassword, setInvalidPassword] = useState("");
  const [newPassword, setNewPassWord] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passWordSame, setPassWordSame] = useState(false);

  const [emptyCurrent, setemptyCurrent] = useState(false);
  const [emptyCurrentLength, setemptyCurrentLength] = useState(false);
  const [emptyNewPassWord, setemptyPassWord] = useState(false);
  const [emptyConfirm, setemptyConfirm] = useState(false);
  const [infoError, setInfoError] = useState(false);

  let dispatch = useDispatch();

  const { postPasswordChange } = useSelector((state) => state.auth);
useEffect(()=>{
  setInvalidPassword(postPasswordChange?.data?.message)
},[postPasswordChange?.data?.message])
  let id = useParams();

  let PasswordStatus = localStorage.getItem("PassWordType");
  let TokeN = localStorage.getItem("TokenId");
  let userId = localStorage.getItem("userId");

  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    // if(inputValue?.length >5 && inputValue?.length<9) {
    //   console.log("passWordSamedsfnkfnksdnfkjsdnfksndfksndfknsd,fsdfmsdfkdf,sdnfs")
    // }
    switch (inputName) {
      case "CurrentPassword":
        // console.log("hello")
        
        setCurrentPassWord(ValidationFile.spaceNotAccept(inputValue));
        setemptyCurrent(ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue)));
        break;
      case "NewPassword":
        setNewPassWord(ValidationFile.spaceNotAccept(inputValue));
        setemptyPassWord(ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue)));
        break;
      case "ConfirmNewPassword":
        setConfirmPassword(ValidationFile.spaceNotAccept(inputValue));
        setemptyConfirm(ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue)));
        break;
      default:
        return false;
    }
  };

  const handleSavePassWordFirstTime = () => {
    if(currentPassword?.length <= 7) {
      // console.log("passWordSamedsfnkfnksdnfkjsdnfksndfksndfknsd,fsdfmsdfkdf,sdnfs")
      setemptyCurrentLength(true)
    }if(currentPassword?.length >= 10) {
      // console.log("passWordSamedsfnkfnksdnfkjsdnfksndfksndfknsd,fsdfmsdfkdf,sdnfs")
      setemptyCurrentLength(true)
    }else{
      setemptyCurrentLength(false)
    }
    setInfoError(true);
    let passwordData ={
      newPassword:newPassword,
      currentPassword: currentPassword,
      confirmPassword: confirmPassword,
      userid: userId,
      token: TokeN,
      oldPassword:currentPassword
    }
  if (ValidationFile.isEmpty(currentPassword)) {
    setemptyCurrent(true);
  }
  if (ValidationFile.isEmpty(newPassword)) {
    setemptyPassWord(true);
  }
  if (ValidationFile.isEmpty(confirmPassword)) {
    setemptyConfirm(true);
  }if (
    !ValidationFile.isEmpty(currentPassword) &&
    !ValidationFile.isEmpty(newPassword) &&
    !ValidationFile.isEmpty(confirmPassword)
  ) {
    dispatch(PostPwChangeFirstTime(passwordData))
    navigate("/m/login");
}}



const handleSavePassWord=()=>{
  setInfoError(true);
let passwordData ={
  newPassword:newPassword,
  currentPassword: currentPassword,
  confirmPassword: confirmPassword,
  userid: userId,
  token: TokeN,
  oldPassword:currentPassword
}
if (ValidationFile.isEmpty(currentPassword)) {
setemptyCurrent(true);
}
if (ValidationFile.isEmpty(newPassword)) {
setemptyPassWord(true);
}
if (ValidationFile.isEmpty(confirmPassword)) {
setemptyConfirm(true);
}if (
!ValidationFile.isEmpty(currentPassword) &&
!ValidationFile.isEmpty(newPassword) &&
!ValidationFile.isEmpty(confirmPassword)
) {
  dispatch(PostPasswordChange(passwordData))
  navigate("/m/login");

}}

  return (
    <>
    
      <div
        className="home-page home-page-news hjhjjh"
        style={{ height: "100vh !importent" }}
      >
        {invalidPassword ==="Invalid Current Password" ?
      "Invalid Current Password"
      :
      ""
      }
      {/* {emptyCurrentLength?"error":""} */}
        <div className="home-page">
          <section className="change-password">
            <h2
              className="page-title m-t-20 p-l-15"
              style={{ paddingTop: "18px", marginBottom:"11px" }}
            >
              Change Password
            </h2>
            <div className="master-flash-message">
              <div className="flash__wrapper"></div>
            </div>
            {/* <form data-vv-scope="changepassword-form" onSubmit={(e)=>e.preventDefault()}> */}
            <div className="form-group m-b-10">
              <input
                name="CurrentPassword"
                type="text"
                placeholder="Current Password"
                className="form-control"
               
                onChange={handleInput}
              />
             { emptyCurrent&&infoError   ? <><span className="text-danger">
                {" "}
                The Current Password is required.
              </span> {" "} </>:""}
           
            </div>
            <div className="form-group m-b-10">
              <input
                name="NewPassword"
                type="text"
                placeholder="New Password"
                className="form-control"
                onChange={handleInput}
              />
              { emptyNewPassWord &&infoError  ? <><span className="text-danger">
                {" "}
                The New Password is required.
              </span> {" "} </>:""}
              {/* {passWordSame ? (
                <>
                  <span className="text-danger">
                    {" "}
                    The NewPassword confirmation does not match.
                  </span>{" "}
                </>
              ) : (
                ""
              )}
              <span class="text-danger">
                The password must contain at least: 1 uppercase letter, 1
                lowercase letter, 1 number and 8 to 15 characters needed !
              </span> */}
            </div>
            <div className="form-group m-b-10">
              <input
                name="ConfirmNewPassword"
                data-vv-as="NewPassword"
                type="text"
                placeholder="Confirm New Password"
                className="form-control"
                onChange={handleInput}
              />

              {" "}
              { emptyConfirm &&infoError  ? <><span className="text-danger">
                {" "}
                The Confirm New Password is required.
              </span> {" "} </>:""}
              {/* {passWordSame&&infoError ? (
                <>
                  <span className="text-danger">
                    {" "}
                    The NewPassword confirmation does not match.
                  </span>{" "}
                </>
              ) : (
                ""
              )} */}
              {/* <span class="text-danger">
                The password must contain at least: 1 uppercase letter, 1
                lowercase letter, 1 number and 8 to 15 characters needed !
              </span> */}
            </div>
            <div>
              {PasswordStatus==="old" ? 
              
              <button
              type="submit"
              className="btn btn-login"
              onClick={handleSavePassWordFirstTime}
              style={{    marginRight: "4%"}}
            >
            Save 
            </button>:
            <button
                type="submit"
                className="btn btn-login"
                onClick={handleSavePassWord}
                style={{    marginRight: "4%"}}
              >
                Save
              </button>

            }
             
              
            </div>
            {/* </form> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
