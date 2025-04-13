import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import Helloworld from "./Pages/Helloworld";
import Signin from "./Pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import Dashboard from "./Pages/Dashboard";
import Resetpassword from "./Pages/Resetpassword";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Helloworld />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/resetpassword" element = {<Resetpassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
