import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "../../graphqlapi/signinMutation";

import vectorimage1 from "../../assets/images/vector1.png";
import vectorimage2 from "../../assets/images/vector2.png";
import vectorimage3 from "../../assets/images/vector3.png";
import roundvectorimage from "../../assets/images/Ellipse3.png";
import ellaspsesymbol from "../../assets/images/Ellipse2.png";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const [signIn] = useMutation(SIGNIN_USER); // useMutation is a react hook provided by Apollo client
  const handlesubmit = async (event) => {
    event.preventDefault();

    const finalemail = email.trim();
    const finalpassword = password.trim();

    if (!finalemail || !finalpassword) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsButtonDisabled(true);
    try {
      const { data } = await signIn({
        variables: {
          email: finalemail,
          password: finalpassword,
        },
      });
      toast.success("Sign-in successful!");
      setemail("");
      setpassword("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("Invalid credentials");
    }
    setIsButtonDisabled(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3f2f2] relative overflow-hidden">
      <div>
        {/* Left Side Images */}

        <div className="absolute  left-[20%] sm:left-10 md:left-[3rem] lg:left-[6rem] top-[7rem] sm:top-[2rem] md:top-[5rem] lg:top-[7rem] h-[4rem] sm:-h[5rem] md:h-[8rem] w-[4rem]  md:w-[8rem] z-30 ">
          <img
            src={vectorimage2}
            alt="Vector Icon"
            className="w-full h-full sm:object-cover object-cover"
          />
        </div>

        {/* <div className="absolute left-0 sm:left-10  lg:left-20 bottom-[2rem] lg:bottom-[3rem] sm:bottom-[0.5rem] md:bottom-[1rem] h-[15rem] sm:h-[25rem] lg:h-[30rem] sm:w-[18rem] lg:w-[24rem] z-30">
          <img
            src={vectorimage1}
            alt="Vector Icon"
            className="w-full h-full object-scale-down"
          />
        </div> */}

        {/* Right Side Images */}
        <div className="absolute right-10 sm:right-[10rem] lg:right-[18rem] top-10 md:top-[6rem] lg:top-[6rem] h-[3rem] w-[3rem] z-30">
          <img
            src={roundvectorimage}
            alt="Vector Icon"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute right-0 top-[30%] w-[10rem] md:w-[15rem] lg:w-[20rem] z-30">
          <img
            src={vectorimage3}
            alt="Vector Icon"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute right-5 sm:right-[10rem] lg:right-[18rem] bottom-7 md:bottom-[9rem] lg:bottom-[6rem]  lg:h-[8rem] md:w-[5rem] lg:w-[8rem] z-30">
          <img
            src={vectorimage2}
            alt="Vector Icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* for phone only */}
      </div>

      {/* Sign-in Form */}
      <div className="mx-3 bg-[#ffffff] h-[28rem] sm:h-[38rem] w-[90%] sm:w-[80%] flex justify-center items-center rounded-2xl relative ">
        <div className="absolute z-50 left-[50%] top-0 ">
          <img
            src={ellaspsesymbol}
            alt="Vector Icon"
            className="w-full h-full object-cover z-30"
          />
        </div>

        <form
          onSubmit={handlesubmit}
          className="bg-[#ffffff] p-4 sm:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-[23rem] md:w-[25rem] relative z-50 mx-2 opacity-"
        >
          <h2 className="text-center text-2xl font-semibold mb-4">Sign In</h2>

          <div className="space-y-4">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email or username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            <div>
              <button
                className={`w-full ${
                  isButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                } text-white py-2 rounded-md`}
                type="submit"
              >
                {isButtonDisabled ? "SIGNING IN..." : "SIGN IN"}
              </button>
            </div>
          </div>

          {/* Sign-in and Reset Password Links */}
          <div className="flex flex-col mt-2 space-y-1">
            <div className="flex space-x-2">
              <p>Don't have an account?</p>
              <p
                className="text-blue-500 cursor-pointer hover:underline hover:text-blue-900"
                onClick={() => navigate("/Signup")}
              >
                Sign Up
              </p>
            </div>

            <div className="flex space-x-2">
              <p>Forgot your password?</p>
              <p
                className="text-blue-500 cursor-pointer hover:underline hover:text-blue-900"
                onClick={() => navigate("/resetpassword")}
              >
                Reset Password
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
