import { Route, useLocation, useNavigate } from "react-router";
import './App.css';
// import Footer from './component/Footer/Footer';
import NavBar from "./component/navBar/NavBar";
import Home from "./component/Home/Home";
import RoutesPages from "./routePages";
import RouteMobile from "./RouteMobile.jsx";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { PostBalance, Postvalidatejwttoken } from "./App/Features/auth/authActions";
import axios from "axios";

// import { Provider } from "react-redux";
// import store from "./Store";

function App() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("page hit app.js")
  const [mobileRoutes, setMoileRoutes] = useState(null);

  const { pathname } = useLocation();
  let appUrll = window.location.hostname;
  const token = localStorage.getItem("TokenId");
  let REACT_APP_API_URL = process.env.REACT_APP_API_URL;
  let REACT_APP_API_URL_PLAY_INDIA = process.env.REACT_APP_API_URL_PLAY_INDIA;


  useEffect(() => {
    let timers;
    if (token) {


      timers = setInterval(
        () => {
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
            })


        }, 3600000)
      }
      return () => clearInterval(timers)

  }, [token])

  useEffect(() => {

    // console.log(window.innerWidth, "mobidasdasle")

    if (window.innerWidth > 1000) {
      setMoileRoutes(false);
      // navigate("./home");
      if (pathname.includes("/m/")) {
        navigate("/home");
      }
    } else {

      setMoileRoutes(true);
      if (!pathname.includes("/m/"))
        navigate("./m/home");

      // if (pathname.includes("/m/")) {
      //   navigate("./home");
      // }
      // console.log("pc")
    }
  }, []);

  useEffect(() => {
    if (token === null) {
      navigate("./home");
    }
  }, [token]);



  useEffect(() => {
    if (token) {

      if (localStorage.getItem("PassWordType") === "old") {
      } else {
        // const time = setInterval(() => {
        const token = localStorage.getItem("TokenId");

        if (token) {
          dispatch(PostBalance());

          if (localStorage.getItem("PassWordType") === "old") {
          } else {
            const time = setInterval(() => {
              dispatch(PostBalance());
            }, 3000);
            return () => clearInterval(time);
          }
        }

        // }, 3000);
        // return () => clearInterval(time);
      }
    }
  }, [token]);

  useEffect(() => {
    const time = setInterval(() => {
      if (localStorage.getItem("PassWordType") === "old") {
      } else {
        if (localStorage.getItem("TokenId")) {

          dispatch(Postvalidatejwttoken());
        }
      }
    }, 1000);
    return () => clearInterval(time);
  }, []);

  // useEffect(() => {
  //   if (PostvalidatejwttokenDataError?.status === false) {
  //     localStorage.clear();
  //     navigate("/m/home");
  // window.location.replace("/");
  //   }
  // }, [PostvalidatejwttokenDataError]);
  useEffect(() => {
    axios
      .post(
        `${REACT_APP_API_URL}/login/is-self-by-app-url`,
        { appUrl: appUrll }
      )
      .then((res) => {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = res.data.data.favicon;
        document.getElementsByTagName('head')[0].appendChild(link);
      })
  }, []);


  useEffect(() => {
    document.title = window.location.hostname;
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem("PassWordType") !== "new" && !pathname.includes("changepassword")) {

  //   }

  //   return () => {
  //   }
  // }, [])


  return (

    <div className="App">

      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        position="bottom-left"
        closeButton={<div style={{ display: 'flex', alignItems: "center", paddingInline: "3px" }}>
          <ImCross />
        </div>}
        icon={<></>}
        progress={undefined}
      />


      {mobileRoutes === true ?
        <RouteMobile />
        : mobileRoutes === false ? <RoutesPages /> : <></>
      }

    </div>


  );
}
export default App;
