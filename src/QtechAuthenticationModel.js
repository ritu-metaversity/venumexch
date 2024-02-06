import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const QtechAuthenticationModel = () => {
  let REACT_APP_API_URL_PLAY_INDIA = process.env.REACT_APP_API_URL_PLAY_INDIA;

  const token = localStorage.getItem("TokenId");
  useEffect(() => {
    let timers;
    if (token) {
      timers = setInterval(() => {
        axios
          .post(
            `${REACT_APP_API_URL_PLAY_INDIA}/api/qtech/authentication`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            localStorage.setItem(
              "GameToken",
              response?.data?.data?.access_token
            );
          });
      }, 3600000);
    }
    return () => clearInterval(timers);
  }, []);
  useEffect(() => {
    if (token) {
      axios
        .post(
          `${REACT_APP_API_URL_PLAY_INDIA}/api/qtech/authentication`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          localStorage.setItem("GameToken", response?.data?.data?.access_token);
        });
    }
  }, []);
  return <div></div>;
};

export default QtechAuthenticationModel;
