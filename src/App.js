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
import axios from "axios";

// import { Provider } from "react-redux";
// import store from "./Store";

function App() {
  let navigate = useNavigate();

  // console.log("page hit app.js")
  const [mobileRoutes, setMoileRoutes] = useState(true);

  const { pathname } = useLocation();
  let appUrll = window.location.hostname;

  useEffect(() => {
    axios
      .post(
        "http://api.247365.exchange/admin-new-apis/login/is-self-by-app-url",
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


      {/* {mobileRoutes === true ? <RoutesPages /> : */}
      <RouteMobile />
      {/* } */}

    </div>


  );
}
export default App;
