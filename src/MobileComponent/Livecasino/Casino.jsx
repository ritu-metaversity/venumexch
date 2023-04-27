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
      {/* <iframe
        src={`https://m2.fawk.app/#/splash-screen/${token}/9482?opentable=${id}`}
        className="mobile_if"
        width="100%"
        title="mobile"
      ></iframe> */}
      <iframe
        src={`https://m2.fawk.app/#/splash-screen/${token}/9482/?opentable=${id}`}
        height="calc(100vh - 100px)"
        className="mobile_if"
        width="100%"
        title="mobile"
        allowFullScreen={true}
        style={{
          height: "100vh",
          marginTop: "6%",
        }}
      ></iframe>

      {/* <iframe
        src={`https://d2.fawk.app/#/splash-screen/${token}/9482?opentable=${id}`}
        // height="calc(90vh - 10rem)"
        // style={{ height: "2000px", marginTop: -80 }}
        className="desktop_if"
        width="100%"
        title="desktop"
      /> */}
    </section>
  );
};

export default Casino;
