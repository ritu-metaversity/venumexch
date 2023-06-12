import React from "react";
import { useParams } from "react-router";
import "./Casino.css";

const Casino = () => {
  let { id } = useParams();
  const token = localStorage.getItem("TokenId");

  return (




    <iframe
      src={`https://d2.fawk.app/#/splash-screen/${token}/9482/?opentable=${id}`}
      className="desktop_if"
      width="100%"
      title="desktop"
    />


  );
};

export default Casino;
