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

// import { Provider } from "react-redux";
// import store from "./Store";

function App() {
  let navigate = useNavigate();

  // console.log("page hit app.js")
  const [mobileRoutes, setMoileRoutes] = useState(true);

  const { pathname } = useLocation();

  useEffect(()=>{



  },[])

  return (

      <div className="App">
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
        {/* {mobileRoutes === true ? <RoutesPages /> : */}
         <RouteMobile />
         {/* } */}

      </div>


  );
}
export default App;
