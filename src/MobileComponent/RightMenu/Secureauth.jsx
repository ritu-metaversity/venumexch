import React from 'react'
import { Link } from 'react-router-dom'
import "./Secureauth.css"

const Secureauth = () => {
  return (
    <><div   className="home-page home-page-news">
    <div   className="security-auth">
       <h1 style={{marginLeft: "11px"}}>Secure Auth Varification</h1>
       <div   className="login-flash-message">
          <div   className="flash__wrapper"></div>
       </div>
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
 </div></>
  )
}

export default Secureauth