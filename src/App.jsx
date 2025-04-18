import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import SignUp from './pages/auth/SignUp'
import Signin from './pages/auth/Signin'
import Home from './pages/home/Home';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/dashboard/Dashboard";
import Resetpassword from './pages/auth/Resetpassword'

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
