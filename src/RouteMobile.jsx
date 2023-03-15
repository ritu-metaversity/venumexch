import React, { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ResponsibleGambling from "./component/rules/ResponsibleGambling";
import LayoutForMobile from "./Layout/LayoutForMobile";
import Midpage from "./MobileComponent/MidPageM/Midpage";
import MobileHome from "./MobileComponent/MobileHome/MobileHome";
import Mybets from "./MobileComponent/RightMenu/Mybets";
import BettingProfitLoss from "./MobileComponent/RightMenu/BettingProfitLoss";
import ChangePassword from "./MobileComponent/RightMenu/ChangePassword";
import Secureauth from "./MobileComponent/RightMenu/Secureauth";
import Transferstatement from "./MobileComponent/RightMenu/Transferstatement";
import Messages from "./MobileComponent/RightMenu/Messages";
import Setting from "./MobileComponent/RightMenu/Setting";
import Rulesregulations from "./MobileComponent/RightMenu/Rulesregulations";
import TimeSetting from "./MobileComponent/RightMenu/TimeSetting";
import Rules from "./MobileComponent/NavbarM/Rules";
import GameDetails from "./MobileComponent/GameFolder/GameDetails";
import Login from "./logincomponents/Login"
import LoginForMobile from "./LoginForMobile/LoginForMobile";
import MarketPage from "./MobileComponent/EyeIcon/MarketPage";
import { useState } from "react";
// const Login = lazy(() => import('./logincomponents/Login'))
const RouteMobile = () => {
  const { pathname } = useLocation();


  return (
    <div>
      {/* <BrowserRouter>
    <Suspense> */}

      <Routes>
        <Route path="m" element={<LayoutForMobile />}>
          <Route path="home" element={<Midpage />} />
          <Route path="mybets" element={<Mybets />} />
          <Route path="profitloss" element={<BettingProfitLoss />} />
          <Route  path="/m/responsibleGambling" element={<ResponsibleGambling />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="secureauth" element={<Secureauth />} />
          <Route path="transferstatement" element={<Transferstatement />} />
          <Route path="message" element={<Messages />} />
          <Route path="Settings" element={<Setting />} />
          <Route path="TimeSetting" element={<TimeSetting />} />
          <Route path="rules-regulations" element={<Rulesregulations />} />
          <Route path="rules-casino" element={<Rules />} />
          <Route path="mymarkets" element={<MarketPage />} />

          <Route path="/m/game/:id" element={<Midpage />} />
          <Route path="/m/gamedetail/:id" element={<GameDetails />} />
          {/* <Route path="/m/login" element={<Login />} /> */}

        </Route>
        <Route path="/m/login" element={<><Login /></>}/>


        {/* <Route path="*" element={<Navigate to="m/home" />} /> */}

        {/* <Route path="*" element={<Navigate to="/m/home" />} /> */}
      </Routes>
      {/* </Suspense>
            </BrowserRouter> */}
    </div>
  );
};

export default RouteMobile;
