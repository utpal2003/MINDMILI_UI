import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import SignUp from './pages/auth/SignUp'
import Signin from './pages/auth/Signin'
import Home from './pages/home/Home';
import EmailNotice from "./pages/auth/EmailNotice";
import CreatePassword from './pages/auth/CreatePassword'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/dashboard/Dashboard";
import Resetpassword from './pages/auth/Resetpassword'
import Leaderboard from "./pages/dashboard/Leaderboard";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/resetpassword" element = {<Resetpassword/>}/>
        <Route path="/emailnotice" element = {<EmailNotice/>}/>
        <Route path="/createpassword" element = {<CreatePassword/>}/>
        <Route path="/leaderboard" element = {<Leaderboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
