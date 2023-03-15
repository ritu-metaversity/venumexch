import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

const SecureAuthVarification = () => {
  return (
    <div   className="content boxed-layout-wrapper" >
      
    <SideBar/>
    
    <div   className="security-auth">
   <h1>Secure Auth Varification</h1>
   <div   className="text-center"><b>Secure Auth Verification Status:</b> <span   className="badge badge-danger">Disabled</span></div>
   <div   className="mt-2 text-center">Please select below option to enable secure auth verification</div>
   <div   className="casino-report-tabs mt-3">
      <ul   className="nav nav-tabs">
         <li   className="nav-item"><Link   className="nav-link">Eanable Using Mobile App</Link></li>
         <li   className="nav-item"><Link   className="nav-link">Enable Using Telegram</Link></li>
      </ul>
   </div>
   <div   className="tab-content">

   </div>
</div>
    </div>
  )
}

export default SecureAuthVarification