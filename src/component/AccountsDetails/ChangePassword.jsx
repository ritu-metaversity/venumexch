import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { PostPasswordChange, PostPwChangeFirstTime } from '../../App/Features/auth/authActions';
import ValidationFile from '../../Validation/ValidationFile';
import SideBar from '../SideBar/SideBar'

const ChangePassword = () => {

   // const [passwordTypeOld, setPasswordTypeOld] = useState({
   //    currentPassword: "12345678",
   //    newPassword: "111111",
   // });
   // let navigate = useNavigate();
   let dispatch = useDispatch();
   const [oldPassword, setOldPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [newPasswordError, setNewPasswordError] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [passworderror, setPasswordError] = useState("")
   const [confirmpassword, setConfirmPasswordError] = useState("")
   let PasswordStatus = localStorage.getItem("PassWordType");

   // console.log(passworderror, "passworderror")

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
            oldPassword,
            currentPassword: oldPassword,
            newPassword,
         }))
      };
   }
   return (
      <div className="content" >
         <div className="change-password" style={{ width: "310px" }}>

            <h1 className='ch-pass betHeading pnlHeading'>Change Password</h1>

            <div className="placeholder-wrapper pnlHeading activated m-t-25">
               <div className="placeholder">Old Password</div>
               <div>

                  <input
                     name="CurrentPassword"
                     type="password"
                     placeholder="Current Password"
                     className="form-control"
                     value={oldPassword}
                     onChange={handleChange}
                  />

               </div>
            </div>
            <div className="placeholder-wrapper pnlHeading activated m-t-25">
               <div className="placeholder">New Password</div>
               <div>
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
            </div>
            <div className="placeholder-wrapper pnlHeading activated m-t-25">
               <div className="placeholder">Repeat Password</div>
               <div>
                  <input
                     name="ConfirmNewPassword"
                     data-vv-as="NewPassword"
                     type="password"
                     placeholder="Confirm New Password"
                     className="form-control"
                     value={confirmPassword}
                     onChange={handleConfirmPasswordsValidation}
                  />{" "}
                  <label style={{ color: "red" }}>{confirmpassword}</label>
               </div>

            </div>
            <div className="m-t-2 text-right">
               {PasswordStatus === "old" ? (
                  <button
                     type="submit"
                     className="mt-0 w-0 btn-primary searchBtnNew"
                     onClick={handleSavePassWordFirstTime}
                     style={{ marginRight: "4%" }}
                  >
                     Save
                  </button>
               ) : (
                  <button
                     type="submit"
                     className="mt-0 w-0 btn-primary searchBtnNew"
                     onClick={handleSavePassWord}
                     style={{ marginRight: "4%" }}
                  >
                     Save
                  </button>
               )}

            </div>

         </div></div>
   )
}

export default ChangePassword