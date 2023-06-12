import React from "react";
import { useParams } from "react-router";
import "./Casino.css";

const Casino = () => {
  let { id } = useParams();
  const token = localStorage.getItem("TokenId");
  // console.log(token,id,"idid");
  if (!id) {
    return <></>;
  }
  return (
    <section>
      <iframe
        src={`https://m2.fawk.app/#/splash-screen/${token}/9482/?opentable=${id}`}
        height="82vh"
        className="mobile_if"
        width="100%"
        style={{ minHeight: "600px" }}
        title="mobile"
        allowFullScreen={true}

      ></iframe>

    </section>
  );
};

export default Casino;
