import React from 'react'
import {BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Expense from './pages/Dashboard/Expense'
import Income from './pages/Dashboard/Income';
import UserProvider from './context/UserContext';
import LandingPage from './pages/Landing/LandingPage';
import FeaturesPage from './pages/Landing/FeaturesPage';
import HowItWorksPage from './pages/Landing/HowItWorksPage';
const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>

         <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/expense" element={<Expense />}></Route>
          <Route path="/income" element={<Income />}></Route>
        
        </Routes>
      </Router>
    </div>
    </UserProvider>
  )
}

export default App


// function Root() {
//   const isAuthentication = localStorage.getItem("token") ? true : false;

//   return isAuthentication ? (<Navigate to="/dashboard" />) : (<Navigate to="/home" />) ;
// }

