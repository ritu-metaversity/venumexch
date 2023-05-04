import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Footer from "../component/Footer/Footer";
import NavBar from "../component/navBar/NavBar";
import NavBarWithOutLogin from "../component/navBar/NavBarWithOutLogin";
import Home from "../component/Home/Home";
import './LayoutForDesktop.css';

const LayoutForDesktop = () => {
  const [footerCondition, setFooterCondion] = useState(false);

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/ResponsibleGambling") {
      setFooterCondion(true);
    } else {
      setFooterCondion(false);
    }
  }, [window.location.href]);

  return (
    <div>
      {footerCondition ? <NavBarWithOutLogin /> : <NavBar />}

      <Outlet />
      <div className="footer-desk">
      <Footer />
      </div>
    </div>
  );
};

export default LayoutForDesktop;
