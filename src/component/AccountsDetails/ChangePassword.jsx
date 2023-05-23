import React from 'react'
import SideBar from '../SideBar/SideBar'

const ChangePassword = () => {
   return (
      <div className="content boxed-layout-wrapper" >
         <div className="change-password">
            <form data-vv-scope="form-changepassword" style={{width: "300px"}}>
               <h1 className='ch-pass betHeading pnlHeading'>Change Password</h1>
               <div className="placeholder-wrapper pnlHeading activated m-t-25">
                  <div className="placeholder">Old Password</div>
                  <div><input name="CurrentPassword" type="password" aria-required="true" aria-invalid="false" /> <span className="text-danger error" style={{ display: "none" }}></span></div>
               </div>
               <div className="placeholder-wrapper pnlHeading activated m-t-25">
                  <div className="placeholder">New Password</div>
                  <div><input name="NewPassword" type="password" aria-required="false" aria-invalid="false" /> <span className="text-danger error" style={{ display: "none" }}></span></div>
               </div>
               <div className="placeholder-wrapper pnlHeading activated m-t-25">
                  <div className="placeholder">Repeat Password</div>
                  <div><input name="ConfirmNewPassword" data-vv-as="NewPassword" type="password" aria-required="true" aria-invalid="false" /> <span className="text-danger error" style={{ display: "none" }}></span></div>
               </div>
               <div className="m-t-2 text-right">
                  <button type="submit" className="mt-0 w-0 btn-primary searchBtnNew">
                     Save
                  </button>
               </div>
            </form>
         </div></div>
   )
}

export default ChangePassword