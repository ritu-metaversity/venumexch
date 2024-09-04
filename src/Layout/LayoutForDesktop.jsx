import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import FooterForDesktop from "../FooterForDesktop/FooterForDesktop";
import NavBar from "../component/navBar/NavBar";
import NavBarWithOutLogin from "../component/navBar/NavBarWithOutLogin";
import Home from "../component/Home/Home";
import "./LayoutForDesktop.css";
import SideBar from "../component/SideBar/SideBar";
import WhatsAppIcon from "../component/WhatsAppIcon";
import axios from "axios";

const LayoutForDesktop = () => {
  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;
  const [footerCondition, setFooterCondion] = useState(false);
  const [selfAllowedd, setSelfAllowedd] = useState();
  const [whatsAppIconPosition, setWhatsAppIconPosition] = useState({
    top: "10px",
    right: "10px",
  });

  useEffect(() => {
    const handleScroll = () => {
      const newTop = window.scrollY;
      setWhatsAppIconPosition({ top: newTop });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/ResponsibleGambling") {
      setFooterCondion(true);
    } else {
      setFooterCondion(false);
    }
  }, [window.location.href]);

  useEffect(() => {
    let appUrll = window.location.hostname.replace("www.","");

    axios
      .post(
        `${REACT_APP_API_URL}/login/is-self-by-app-url`,
        { appUrl: appUrll }
      )
      .then((res) => {

        setSelfAllowedd(res?.data?.data);

      });
  }, []);

  return (
    <div>
      {footerCondition ? <NavBarWithOutLogin /> : <NavBar />}

      <div
        className="maincontainer boxed-layout-wrapper-new"
        style={{
          marginTop: localStorage.getItem("TokenId") === null ? "" : "10px",
        }}>
        <SideBar />

        <Outlet />
      </div>

      <div className="footer-desk">
        <FooterForDesktop />
      </div>
      {
        selfAllowedd?.selfAllowed &&  <WhatsAppIcon top={whatsAppIconPosition.top} />
      }
     
    </div>
  );
};

export default LayoutForDesktop;
