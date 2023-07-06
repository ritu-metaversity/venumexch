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
import Login from "./logincomponents/Login";

import MarketPage from "./MobileComponent/EyeIcon/MarketPage";
import { useState } from "react";
import Casinolist from "./MobileComponent/Livecasino/Casinolist";
import Casino from "./MobileComponent/Livecasino/Casino";
import Deposit from "./MobileComponent/RightMenu/DepositPages/Deposit";
import WithDraw from "./MobileComponent/RightMenu/WithDrawPage/WithDraw";
import Signup from "./logincomponents/Signup";
import Gamepage from "./MobileComponent/MidPageM/Gamepage";
import SingupBanner1 from "./MobileComponent/LandingForSignup/SingupBanner1";
import SingupBanner2 from "./MobileComponent/LandingForSignup/SingupBanner2";
import SingupBanner3 from "./MobileComponent/LandingForSignup/SingupBanner3";
import SingupBanner4 from "./MobileComponent/LandingForSignup/SingupBanner4";
import SingupBanner5 from "./MobileComponent/LandingForSignup/SingupBanner5";
import AboutUs from "./MobileComponent/MMFooter/AboutUs";
import TermsandConditions from "./MobileComponent/MMFooter/TermsandConditions";
import WithDraw1 from "./MobileComponent/RightMenu/WithDrawPage/WithDraw1";
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
          <Route path="/m/responsibleGambling" element={<ResponsibleGambling />} />
          <Route path="secureauth" element={<Secureauth />} />
          <Route path="transferstatement" element={<Transferstatement />} />
          <Route path="message" element={<Messages />} />
          <Route path="Settings" element={<Setting />} />
          <Route path="TimeSetting" element={<TimeSetting />} />
          <Route path="rules-regulations" element={<Rulesregulations />} />
          <Route path="rules-casino" element={<Rules />} />
          <Route path="mymarkets" element={<MarketPage />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withDraw" element={<WithDraw1 />} />
          <Route path="Terms-and-Conditions" element={<TermsandConditions />} />
          <Route path="/m/game/:id" element={<Gamepage />} />
          <Route path="/m/gamedetail/:id" element={<GameDetails />} />
          <Route path="casino-list" element={<Casinolist />} />
          <Route path="/m/casino/:id" element={<Casino />} />
          {/* <Route path="/m/login" element={<Login />} /> */}
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="changepassword" element={<ChangePassword />} />


        </Route>


        <Route path="/m/Singup1" element={<SingupBanner1 />} />
        <Route path="/m/Singup2" element={<SingupBanner2 />} />
        <Route path="/m/Singup3" element={<SingupBanner3 />} />
        <Route path="/m/Singup4" element={<SingupBanner4 />} />
        <Route path="/m/Singup5" element={<SingupBanner5 />} />
        <Route path="/m/login" element={<><Login /></>} />
        <Route
          path="/m/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route path="*" element={<Navigate to="m/home" />} />
      </Routes>
    </div>
  );
};

export default RouteMobile;
