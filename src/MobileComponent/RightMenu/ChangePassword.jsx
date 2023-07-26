import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  PostPasswordChange,
  PostPwChangeFirstTime,
} from "../../App/Features/auth/authActions";
import ValidationFile from "../../Validation/ValidationFile";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [passwordTypeOld, setPasswordTypeOld] = useState({
    currentPassword: "12345678",
    newPassword: "111111",
  });
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passworderror, setPasswordError] = useState("")
  const [confirmpassword, setConfirmPasswordError] = useState("")
  // const { setLoading } = useContext(LoaderContext);

  // const [currentPassword, setCurrentPassWord] = useState("");
  // const [invalidPassword, setInvalidPassword] = useState("");
  // const [newPassword, setNewPassWord] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [passWordSame, setPassWordSame] = useState(false);

  // const [emptyCurrent, setemptyCurrent] = useState(false);
  // const [emptyCurrentLength, setemptyCurrentLength] = useState(false);
  // const [emptyNewPassWord, setemptyPassWord] = useState(false);
  // const [emptyConfirm, setemptyConfirm] = useState(false);
  // const [infoError, setInfoError] = useState(false);
  // const [samePassword, setSamePassword] = useState(false);

  let dispatch = useDispatch();

  const { postPasswordChange } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   setInvalidPassword(postPasswordChange?.data?.message);
  // }, [postPasswordChange?.data?.message]);

  let id = useParams();

  let PasswordStatus = localStorage.getItem("PassWordType");
  let TokeN = localStorage.getItem("TokenId");
  let userId = localStorage.getItem("userId");

  // const handleInput = (e) => {
  //   let inputName = e.target.name;
  //   let inputValue = e.target.value;
  //   // if(inputValue?.length >5 && inputValue?.length<9) {
  //   //   console.log("passWordSamedsfnkfnksdnfkjsdnfksndfksndfknsd,fsdfmsdfkdf,sdnfs")
  //   // }
  //   switch (inputName) {
  //     case "CurrentPassword":
  //       // console.log("hello")

  //       setCurrentPassWord(ValidationFile.spaceNotAccept(inputValue));
  //       setemptyCurrent(
  //         ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
  //       );
  //       break;
  //     case "NewPassword":
  //       setNewPassWord(ValidationFile.spaceNotAccept(inputValue));
  //       setemptyPassWord(
  //         ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
  //       );
  //       setSamePassword(false)
  //       break;
  //     case "ConfirmNewPassword":
  //       setConfirmPassword(ValidationFile.spaceNotAccept(inputValue));
  //       setemptyConfirm(
  //         ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
  //       );
  //       setSamePassword(false)
  //       break;
  //     default:
  //       return false;
  //   }
  // };

  // const handleSavePassWordFirstTime = () => {

  //   setInfoError(true);
  //   let passwordData = {
  //     newPassword: newPassword,
  //     currentPassword: currentPassword,
  //     confirmPassword: confirmPassword,
  //     userid: userId,
  //     token: TokeN,
  //     oldPassword: currentPassword,
  //   };
  //   if (ValidationFile.isEmpty(currentPassword)) {
  //     setemptyCurrent(true);
  //   }
  //   if (ValidationFile.isEmpty(newPassword)) {
  //     setemptyPassWord(true);
  //   }
  //   if (ValidationFile.isEmpty(confirmPassword)) {
  //     setemptyConfirm(true);
  //   }
  //   if (
  //    sa !ValidationFile.isEmpty(currentPassword) &&
  //    sa !ValidationFile.isEmpty(newPassword) &&
  //    sa !ValidationFile.isEmpty(confirmPassword)
  //   ) {
  //     if (confirmPassword === newPassword) {

  //       dispatch(PostPwChangeFirstTime(passwordData));
  //     } else {
  //       setSamePassword(true)
  //     }

  //     // localStorage.clear();
  //     // // navigate("./login");
  //     // window.location.replace("/");
  //   }
  // };

  // const handleSavePassWord = () => {
  //   setInfoError(true);
  //   let passwordData = {
  //     newPassword: newPassword,
  //     currentPassword: currentPassword,
  //     confirmPassword: confirmPassword,
  //     userid: userId,
  //     token: TokeN,
  //     oldPassword: currentPassword,
  //   };
  //   if (ValidationFile.isEmpty(currentPassword)) {
  //     setemptyCurrent(true);
  //   }
  //   if (ValidationFile.isEmpty(newPassword)) {
  //     setemptyPassWord(true);
  //   }
  //   if (ValidationFile.isEmpty(confirmPassword)) {
  //     setemptyConfirm(true);
  //   }
  //   if (
  // sa  !ValidationFile.isEmpty(currentPassword) &&
  //   sa!ValidationFile.isEmpty(newPassword) &&
  //  sa !ValidationFile.isEmpty(confirmPassword)
  //   ) {
  //     if (confirmPassword === newPassword) {

  //       dispatch(PostPasswordChange(passwordData));
  //     } else {
  //       setSamePassword(true)
  //     }


  //     // window.location.replace("/");
  //   }
  // };


  const handlePassWordsValidation = (e) => {
    setNewPassword(e.target.value)
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
  };
  const handleConfirmPasswordsValidation = (e) => {
    setConfirmPassword(e.target.value)
    const confirmPass = e.target.value;
    if (newPassword !== confirmPass) {
      setConfirmPasswordError("Password must be equal.");
    } else {
      setConfirmPasswordError("");

    }
  };

  const handleChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleSavePassWordFirstTime = async () => {
    if (confirmPassword !== newPassword) {
      return toast.error("New Password And Confirm Password does not match!" || "Something went Wrong!!", {
        style: {
          background: "rgb(156,74,70)", minHeight: 40,
          padding: 0,
          color: "white",
        }
      });
    } else if (oldPassword === "" && confirmPassword === "" && newPassword === "") {
      return toast.error("All fields are mandatory" || "Something went Wrong!!", {
        style: {
          background: "rgb(156,74,70)", minHeight: 40,
          padding: 0,
          color: "white",
        }
      });
    }
    const userid = localStorage.getItem("userId") || "";
    const token = localStorage.getItem("TokenId") || "";

    if ((newPassword?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?#&_]{8,12}$/) ===
      null) === true) {
      setPasswordError(
        "Password should contain atleast one number and one lower case and one upper case."
      );
    } else {
      dispatch(PostPwChangeFirstTime({
        oldPassword: oldPassword,
        currentPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
        userid: userid,
        token: token

      }));
    }

  };

  const handleSavePassWord = async () => {
    if (confirmPassword !== newPassword) {
      return toast.error("New Password And Confirm Password does not match!" || "Something went Wrong!!", {
        style: {
          background: "rgb(156,74,70)", minHeight: 40,
          padding: 0,
          color: "white",
        }
      });
    } else if (oldPassword === "" && confirmPassword === "" && newPassword === "") {
      return toast.error("All fields are mandatory" || "Something went Wrong!!", {
        style: {
          background: "rgb(156,74,70)", minHeight: 40,
          padding: 0,
          color: "white",
        }
      });
    }
    // setLoading && setLoading((prev) => ({ ...prev, handleClick: true }));
    if ((newPassword?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?#&_]{8,12}$/) ===
      null) === true) {
      setPasswordError(
        "Password should contain atleast one number and one lower case and one upper case."
      );
    } else {
      dispatch(PostPasswordChange({
        oldPassword: oldPassword,
        currentPassword: oldPassword,
        newPassword,
        newPassword,

      }))
      //   const { response } = await userServices.changePassword({
      //     oldPassword,
      //     currentPassword: oldPassword,
      //     newPassword,
      //   });
      //   if (response) {
      //     navigate("/sign-in");
      //     localStorage.clear();
      //     // setIsSignedIn(false);
      //   }
    }
    // setLoading && setLoading((prev) => ({ ...prev, handleClick: false }));
  };
  return (
    <>
      <div
        className="home-page home-page-news hjhjjh"
        style={{ height: "100vh !importent" }}
      >

        <div className="home-page">
          <section className="change-password">
            <h2
              className="page-title m-t-20 p-l-15"
              style={{ paddingTop: "18px", marginBottom: "11px" }}
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
                value={oldPassword}
                onChange={handleChange}
              />

            </div>
            <div className="form-group m-b-10">
              <input
                name="NewPassword"
                type="password"
                placeholder="New Password"
                className="form-control"
                value={newPassword}
                onChange={handlePassWordsValidation}
              />
              <label style={{ color: "red", display: "block" }}>{passworderror}</label>
            </div>

            <div className="form-group m-b-10">
              <input
                name="ConfirmNewPassword"
                data-vv-as="NewPassword"
                type="password"
                placeholder="Confirm New Password"
                className="form-control"
                value={confirmPassword}
                onChange={handleConfirmPasswordsValidation}
              />
              <label style={{ color: "red" }}>{confirmpassword}</label>

            </div>
            <div>
              {PasswordStatus === "old" ? (
                <button
                  type="submit"
                  className="btn btn-login"
                  onClick={handleSavePassWordFirstTime}
                  style={{ marginRight: "4%" }}
                >
                  Save
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-login"
                  onClick={handleSavePassWord}
                  style={{ marginRight: "4%" }}
                >
                  Save
                </button>
              )}
            </div>
            {/* </form> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
