import React from 'react'
import SideBar from '../SideBar/SideBar'

const ChangePassword = () => {
  return (
    <div   className="content boxed-layout-wrapper" >
      
    <SideBar/>
    <div   className="change-password">
   <form data-vv-scope="form-changepassword">
       
      <h1>Change Password</h1>
      <div   className="placeholder-wrapper activated m-t-25">
         <div   className="placeholder">Old Password</div>
         <div><input name="CurrentPassword" type="password" aria-required="true" aria-invalid="false"/> <span   className="text-danger error" style={{display: "none"}}></span></div>
      </div>
      <div   className="placeholder-wrapper activated m-t-25">
         <div   className="placeholder">New Password</div>
         <div><input name="NewPassword" type="password" aria-required="false" aria-invalid="false"/> <span   className="text-danger error" style={{display: "none"}}></span></div>
      </div>
      <div   className="placeholder-wrapper activated m-t-25">
         <div   className="placeholder">Repeat Password</div>
         <div><input name="ConfirmNewPassword" data-vv-as="NewPassword" type="password" aria-required="true" aria-invalid="false"/> <span   className="text-danger error" style={{display: "none"}}></span></div>
      </div>
      <div   className="m-t-25 text-right">
         <button type="submit"   className="btn btn-primary">
       Save
         </button>
      </div>
   </form>
</div></div>
  )
}

export default ChangePassword