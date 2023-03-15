import React from "react";
import { Link } from "react-router-dom";
import "./Eyeicon.css";
const Eyeicon = () => {
  return (
    <div>
      <div className="bottom-icon">
        <Link to="./mymarkets" className="">
          <button className="eye-icon">
            <i className="fas fa-eye"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Eyeicon;
