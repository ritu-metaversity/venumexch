import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import Home from './component/Home/Home';
// import Footer from './component/Footer/Footer';
import ResponsibleGambling from './component/rules/ResponsibleGambling';
import MidPage from './component/Mid/MidPage';
import Mybets from './component/AccountsDetails/Mybets';
import AccountStatement from './component/AccountsDetails/AccountStatement';
import BettingProfitandLoss from './component/AccountsDetails/BettingProfitandLoss';
import ChangePassword from './component/AccountsDetails/ChangePassword';
import Messages from './component/AccountsDetails/Messages';
import SecureAuthVarification from './component/AccountsDetails/SecureAuthVarification';
import TransferStatement from './component/AccountsDetails/TransferStatement';
import Footer from './component/Footer/Footer';
// import Login from './logincomponents/Login';


const Layout = lazy(() => import('./Layout/LayoutForDesktop'))
const Login = lazy(() => import('./logincomponents/Login'))



const RoutesPages = () => {

  return (
    <div>


{/* <BrowserRouter>
        <Suspense > */}
          <Routes>
          <Route exact path="/" element={<Layout />} >
          <Route  path="home" element={<Home />} />
          <Route  path="/ResponsibleGambling" element={<ResponsibleGambling />} />
          <Route  path="/mybets" element={<Mybets />} />
          <Route  path="/accountstatement" element={< AccountStatement/>} />
          <Route  path="/profitloss" element={<BettingProfitandLoss />} />
          <Route  path="/changepassword/:id" element={<ChangePassword/>} />
          <Route  path="/secureauth" element={<SecureAuthVarification/>} />
          <Route  path="/transferstatement" element={<TransferStatement/>} />
          <Route  path="/message" element={<Messages/>} />

          <Route path="/game/:id" element={<Home />} />
          
          </Route>
          
            <Route exact path="/login" element={
            <>
              <Login />
              {/* <Footer/> */}
            </>
            }/>


           <Route path="*" element={<Navigate to="/home" />} />
           

          </Routes>
        {/* </Suspense> */}
      {/* <Footer/> */}
      {/* </BrowserRouter> */}
    </div>
  )
}

export default RoutesPages