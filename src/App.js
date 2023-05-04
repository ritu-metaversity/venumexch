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

// import { Provider } from "react-redux";
// import store from "./Store";

function App() {
  let navigate = useNavigate();

  // console.log("page hit app.js")
  const [mobileRoutes, setMoileRoutes] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setMoileRoutes(true);
      if (!pathname.includes("/m/")) {
        navigate("./m/home");
      }
      // console.log("mobile")
    } else {
      setMoileRoutes(false);
      if (pathname.includes("/m/")) {
        navigate("./home");
      }
      // console.log("pc")
    }
  }, []);



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
