import { Route, useLocation, useNavigate } from "react-router";
// import './App.css';
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
import { PostBalance } from "./App/Features/auth/authActions";

// import { Provider } from "react-redux";
// import store from "./Store";

function App() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("page hit app.js")
  const [mobileRoutes, setMoileRoutes] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    if (window.innerWidth > 750) {
      setMoileRoutes(true);
      // navigate("./home");

      if (pathname.includes("/m/")) {
        navigate("/home");
      }
      // console.log("mobile")
    } else {
      setMoileRoutes(false);
      // navigate("./m/home");

      // if (pathname.includes("/m/")) {
      //   navigate("./home");
      // }
      // console.log("pc")
    }
  }, []);
  const token = localStorage.getItem("TokenId");

  useEffect(() => {
    if (token) {

      if (localStorage.getItem("PassWordType") === "old") {
      } else {
        // const time = setInterval(() => {
        const token = localStorage.getItem("TokenId");
        if (token) {

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

  // console.log(mobileRoutes, "fsdfsd")
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


      {mobileRoutes === true ? <RoutesPages /> :
        <RouteMobile />
      }

    </div>


  );
}
export default App;
