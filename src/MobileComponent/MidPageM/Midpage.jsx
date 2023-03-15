import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import HomePage from "./HomePage";
import "./MidPage.css";

const Midpage = () => {

  
  return (
    <div>
      <div className="main-content" style={{ minHeight: "calc(100% - 163px)" }}>
        <div className="home-page home-page-news">
          <div className="container-inner">
           <HomePage />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midpage;
