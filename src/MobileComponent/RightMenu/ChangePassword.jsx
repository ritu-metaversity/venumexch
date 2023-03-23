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
  const [emptyNewPassWord, setemptyPassWord] = useState(false);
  const [emptyConfirm, setemptyConfirm] = useState(false);
  const [infoError, setInfoError] = useState(false);

  let dispatch = useDispatch();
  // const { postLoginData } = useSelector(state => state.auth)
  const { postPasswordChange } = useSelector((state) => state.auth);
useEffect(()=>{
  setInvalidPassword(postPasswordChange?.data?.message)
},[postPasswordChange?.data?.message])
  let id = useParams();
  // console.log(id, "parems");
  let PasswordStatus = localStorage.getItem("PassWordType");
  let TokeN = localStorage.getItem("TokenId");
  let userId = localStorage.getItem("userId");
// console.log(postPasswordChange,"postPasswordChangepostPasswordChangepapapapappa")
  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    switch (inputName) {
      case "CurrentPassword":
     
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
    // navigate("/m/home");
}}


const handleSavePassWord=()=>{
  if(newPassword===confirmPassword){

    let passwordData ={
      currentPassword: currentPassword,
      newPassword: newPassword,
    }
    // console.log("hello")
    dispatch(PostPasswordChange(passwordData))
    navigate("/m/home");

  }
}

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
                type="password"
                placeholder="Current Password"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
                onChange={handleInput}
              />
             { emptyCurrent&&infoError   ? <><span className="text-danger">
                {" "}
                The CurrentPassword field is required.
              </span> {" "} </>:""}
           
            </div>
            <div className="form-group m-b-10">
              <input
                name="NewPassword"
                type="password"
                placeholder="New Password"
                className="form-control"
                aria-required="false"
                aria-invalid="false"
                onChange={handleInput}
              />
              { emptyNewPassWord &&infoError  ? <><span className="text-danger">
                {" "}
                The CurrentPassword field is required.
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
                type="password"
                placeholder="Confirm New Password"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
                onChange={handleInput}
              />
              
              {" "}
              { emptyConfirm &&infoError  ? <><span className="text-danger">
                {" "}
                The CurrentPassword field is required.
              </span> {" "} </>:""}
              {passWordSame&&infoError ? (
                <>
                  <span className="text-danger">
                    {" "}
                    The NewPassword confirmation does not match.
                  </span>{" "}
                </>
              ) : (
                ""
              )}
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
