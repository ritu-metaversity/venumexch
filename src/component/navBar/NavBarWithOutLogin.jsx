import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBarWithOutLogin.css" 

const NavBarWithOutLogin = () => {
  return (
    <div>
    <div   className="nav">
      <header   className="header">
        <div   className="boxed-layout-wrapper">
          <Link to="/login"   className="router-link-exact-active router-link-active">
            <div   className="logo-area1 float-left">
              <img
                alt=""
                src="https://d1arlbwbznybm5.cloudfront.net/v1/static/themes/lordsexch.com/front/logo.png"
                  className="logo"
              />
            </div>
          </Link>
      
        </div>
      </header>
    </div>
  </div>
  )
}

export default NavBarWithOutLogin