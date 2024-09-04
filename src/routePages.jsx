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
// import Signup from "./LoginForDesktop/Signup";
import TermsandConditions from "./MobileComponent/MMFooter/TermsandConditions";
import AboutUs from "./MobileComponent/MMFooter/AboutUs";
import WithDraw1 from "./MobileComponent/RightMenu/WithDrawPage/WithDraw1";
import Signup from "./LoginForDesktop/Signup";
import MainGamePageCasino from "./MobileComponent/CasinoAllGames/MainGamePageCasino";
import IndianCasinoHome from "./MobileComponent/CasinoAllGames/IndianCasion/IndianCasinoHome";
import InterNationalCasinoHome from "./MobileComponent/CasinoAllGames/InterNationalCasino/InterNationalCasinoHome";
import OurCasinoHome from "./MobileComponent/CasinoAllGames/OurCasino/OurCasinoHome";
import LotteryGameHome from "./MobileComponent/CasinoAllGames/LotteryGames/LotteryGameHome";
import LotteryGamesPage from "./MobileComponent/CasinoAllGames/LotteryGames/LotteryGamesPage";
import SlotGamesHome from "./MobileComponent/CasinoAllGames/SlotGames/SlotGamesHome";
import SlotGamesList from "./MobileComponent/CasinoAllGames/SlotGames/SlotGamesList";
import FantasyGameHome from "./MobileComponent/CasinoAllGames/FantasyGame/FantasyGameHome";
import FantasyGamePage from "./MobileComponent/CasinoAllGames/FantasyGame/FantasyGamePage";
import SuperNowaPage from "./MobileComponent/CasinoAllGames/IndianCasion/SuperNowa/SuperNowaPage";
import SuperNowa from "./MobileComponent/CasinoAllGames/IndianCasion/SuperNowa/SuperNowa";



const Layout = lazy(() => import("./Layout/LayoutForDesktop"));


const RoutesPages = () => {
  return (
    <div>

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
          <Route path="/p&l" element={<BettingProfitandLoss />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/secureauth" element={<SecureAuthVarification />} />
          <Route path="/transferstatement" element={<TransferStatement />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/deposit" element={<DepositForDesktop />} />
          <Route path="/withDraw" element={<WithDraw1 />} />
          {/*New Casino route*/}
          <Route path="/Casino" element={<Casinolist />} />
          <Route path="/Casino" element={<Casinolist />} />


          <Route path="/Casino" element={<Casinolist />} />
          <Route path="/Casino" element={<Casinolist />} />
          <Route path="/Casino" element={<Casinolist />} />
          <Route path="/Casino" element={<Casinolist />} />

          <Route path="/m/Indian-home" element={<IndianCasinoHome />} />
          <Route path="/m/International-home" element={<InterNationalCasinoHome />} />
          <Route path="/m/Our-home" element={<OurCasinoHome />} />
          <Route path="/m/Lottery-home" element={<LotteryGameHome />} />
          <Route path="/m/Lottery-Game-List" element={<LotteryGamesPage />} />
          <Route path="/m/Slot-home" element={<SlotGamesHome />} />
          <Route path="/m/Slot-List" element={<SlotGamesList />} />
          <Route path="/m/Fantasy-home" element={<FantasyGameHome />} />
          <Route path="/m/Fantasy-List" element={<FantasyGamePage />} />
          <Route path="/m/SuperNowa_casion" element={<SuperNowa />} />
          <Route path="/m/casino-list" element={<Casinolist />} />


          <Route path="/casino/:id" element={<Casino />} />
          <Route path="/game/:type/:id" element={<Game />} />
          <Route path="/gamedetails/:id" element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Terms-and-Conditions" element={<TermsandConditions />} />

        </Route>
        <Route path="/Signup" element={<Signup />} />


        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/m/SuperNowa-Game-page" element={<SuperNowaPage />} />

        <Route path="/m/All-Games-page" element={<MainGamePageCasino />} />

      </Routes>

    </div>
  );
};

export default RoutesPages;
