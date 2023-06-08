import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Home from "./component/Home/Home";
// import Footer from './component/Footer/Footer';
import ResponsibleGambling from "./component/rules/ResponsibleGambling";
import MidPage from "./component/Mid/MidPage";
import Mybets from "./component/AccountsDetails/Mybets";
import AccountStatement from "./component/AccountsDetails/AccountStatement";
import BettingProfitandLoss from "./component/AccountsDetails/BettingProfitandLoss";
import ChangePassword from "./component/AccountsDetails/ChangePassword";
import Messages from "./component/AccountsDetails/Messages";
import SecureAuthVarification from "./component/AccountsDetails/SecureAuthVarification";
import TransferStatement from "./component/AccountsDetails/TransferStatement";
import Footer from "./component/Footer/Footer";
import LayoutForMobile from "./Layout/LayoutForMobile";
import LayoutForDesktop from "./Layout/LayoutForDesktop";
import DestGamePage from "./component/DesktopGamePage/DestGamePage";
import LoginForMobile from "./LoginForDesktop/LoginForDesktop";
import Deposit from "./MobileComponent/RightMenu/DepositPages/Deposit";
import WithDraw from "./MobileComponent/RightMenu/WithDrawPage/WithDraw";
import WithdrawForDesktop from "./component/AccountsDetails/WithDrawDesktop/WithdrawForDesktop";
import DepositForDesktop from "./component/AccountsDetails/DepositDesktop/DepositForDesktop";
import Game from "./component/Mid/Game";
import Casinolist from "./component/SideBar/Casinolist";
import Casino from "./component/SideBar/Casino";
import Signup from "./LoginForDesktop/Signup";
import TermsandConditions from "./MobileComponent/MMFooter/TermsandConditions";
import AboutUs from "./MobileComponent/MMFooter/AboutUs";



const Layout = lazy(() => import("./Layout/LayoutForDesktop"));


const RoutesPages = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Suspense > */}
      <Routes>
        <Route path="login" element={<LoginForMobile />} />
        <Route exact path="/" element={<LayoutForDesktop />}>
          <Route path="home" element={<Home />} />
          <Route
            path="/ResponsibleGambling"
            element={<ResponsibleGambling />}
          />
          <Route path="/mybets" element={<Mybets />} />
          <Route path="/accountstatement" element={<AccountStatement />} />
          <Route path="/profitloss" element={<BettingProfitandLoss />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/secureauth" element={<SecureAuthVarification />} />
          <Route path="/transferstatement" element={<TransferStatement />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/deposit" element={<DepositForDesktop />} />
          <Route path="/withDraw" element={<WithdrawForDesktop />} />
          <Route path="/Casino" element={<Casinolist />} />
          <Route path="/Casino" element={<Casinolist />} />
          <Route path="/Casino" element={<Casinolist />} />
          <Route path="/casino/:id" element={<Casino />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/gamedetails/:id" element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Terms-and-Conditions" element={<TermsandConditions />} />

        </Route>
        <Route path="/Signup" element={<Signup />} />



      </Routes>

    </div>
  );
};

export default RoutesPages;
