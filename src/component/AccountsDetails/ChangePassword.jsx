import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { PostPasswordChange, PostPwChangeFirstTime } from '../../App/Features/auth/authActions';
import ValidationFile from '../../Validation/ValidationFile';
import SideBar from '../SideBar/SideBar'

const ChangePassword = () => {

   const [passwordTypeOld, setPasswordTypeOld] = useState({
      currentPassword: "12345678",
      newPassword: "111111",
   });
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
   const [samePassword, setSamePassword] = useState(false);

   let dispatch = useDispatch();

   const { postPasswordChange } = useSelector((state) => state.auth);
   useEffect(() => {
      setInvalidPassword(postPasswordChange?.data?.message);
   }, [postPasswordChange?.data?.message]);
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
            setemptyCurrent(
               ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
            );
            break;
         case "NewPassword":
            setNewPassWord(ValidationFile.spaceNotAccept(inputValue));
            setemptyPassWord(
               ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
            );
            setSamePassword(false)
            break;
         case "ConfirmNewPassword":
            setConfirmPassword(ValidationFile.spaceNotAccept(inputValue));
            setemptyConfirm(
               ValidationFile.isEmpty(ValidationFile.spaceNotAccept(inputValue))
            );
            setSamePassword(false)
            break;
         default:
            return false;
      }
   };

   const handleSavePassWordFirstTime = () => {
      if (currentPassword?.length <= 7) {
         // console.log("passWordSamedsfnkfnksdnfkjsdnfksndfksndfknsd,fsdfmsdfkdf,sdnfs")
         setemptyCurrentLength(true);
      }
      if (currentPassword?.length >= 10) {
         // console.log("passWordSamedsfnkfnksdnfkjsdnfksndfksndfknsd,fsdfmsdfkdf,sdnfs")
         setemptyCurrentLength(true);
      } else {
         setemptyCurrentLength(false);
      }
      setInfoError(true);
      let passwordData = {
         newPassword: newPassword,
         currentPassword: currentPassword,
         confirmPassword: confirmPassword,
         userid: userId,
         token: TokeN,
         oldPassword: currentPassword,
      };
      if (ValidationFile.isEmpty(currentPassword)) {
         setemptyCurrent(true);
      }
      if (ValidationFile.isEmpty(newPassword)) {
         setemptyPassWord(true);
      }
      if (ValidationFile.isEmpty(confirmPassword)) {
         setemptyConfirm(true);
      }
      if (
         !ValidationFile.isEmpty(currentPassword) &&
         !ValidationFile.isEmpty(newPassword) &&
         !ValidationFile.isEmpty(confirmPassword)
      ) {
         dispatch(PostPwChangeFirstTime(passwordData));
         localStorage.clear();
         // navigate("./login");
         // window.location.replace("/");
      }
   };

   const handleSavePassWord = () => {
      setInfoError(true);
      let passwordData = {
         newPassword: newPassword,
         currentPassword: currentPassword,
         confirmPassword: confirmPassword,
         userid: userId,
         token: TokeN,
         oldPassword: currentPassword,
      };
      if (ValidationFile.isEmpty(currentPassword)) {
         setemptyCurrent(true);
      }
      if (ValidationFile.isEmpty(newPassword)) {
         setemptyPassWord(true);
      }
      if (ValidationFile.isEmpty(confirmPassword)) {
         setemptyConfirm(true);
      }
      if (
         !ValidationFile.isEmpty(currentPassword) &&
         !ValidationFile.isEmpty(newPassword) &&
         !ValidationFile.isEmpty(confirmPassword)
      ) {
         if (confirmPassword === newPassword) {

            dispatch(PostPasswordChange(passwordData));
         } else {
            setSamePassword(true)
         }


         // window.location.replace("/");
      }
   };

   return (
      <div className="content boxed-layout-wrapper" >
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
                     onChange={handleInput}
                  />
                  {emptyCurrent && infoError ? (
                     <>
                        <span className="text-danger">
                           {" "}
                           The Current Password is required.
                        </span>{" "}
                     </>
                  ) : (
                     ""
                  )}
                  <span className="text-danger error" style={{ display: "none" }}></span></div>
            </div>
            <div className="placeholder-wrapper pnlHeading activated m-t-25">
               <div className="placeholder">New Password</div>
               <div>
                  <input
                     name="NewPassword"
                     type="password"
                     placeholder="New Password"
                     className="form-control"
                     onChange={handleInput}
                  />
                  {emptyNewPassWord && infoError ? (
                     <>
                        <span className="text-danger">
                           {" "}
                           The New Password is required.
                        </span>{" "}
                     </>
                  ) : (
                     ""
                  )}

                  <span className="text-danger error" style={{ display: "none" }}></span></div>
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
                     onChange={handleInput}
                  />{" "}
                  {emptyConfirm && infoError ? (
                     <>
                        <span className="text-danger">
                           {" "}
                           The Confirm New Password is required.
                        </span>{" "}
                     </>
                  ) : (
                     ""
                  )}
                  <span className="text-danger error" style={{ display: "none" }}></span></div>
               <span class="text-danger">
                  {samePassword === true ? "New Password and Confirmation Password should be same" : ""}
               </span>
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