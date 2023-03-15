import { Route, useLocation, useNavigate } from "react-router";
// import './App.css';
// import Footer from './component/Footer/Footer';
import NavBar from "./component/navBar/NavBar";
import Home from "./component/Home/Home";
import RoutesPages from "./routePages";
import RouteMobile from "./RouteMobile.jsx";
import { useEffect, useState } from "react";
// import { Provider } from "react-redux";
// import store from "./Store";

function App() {
  let navigate = useNavigate();

  // console.log("page hit app.js")
  const [mobileRoutes, setMoileRoutes] = useState(true);

  const { pathname } = useLocation();
  useEffect(() => {
    if (window.innerWidth <= 1024) {
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
  }, [navigate]);

  return (

      <div className="App">

        {mobileRoutes === true ? <RouteMobile /> : <RoutesPages />}

      </div>


  );
}
export default App;
