import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import vectorimage1 from "../../assets/images/vector1.png";
import vectorimage2 from "../../assets/images/vector2.png";
import vectorimage3 from "../../assets/images/vector3.png";
import roundvectorimage from "../../assets/images/Ellipse3.png";
import ellaspsesymbol from "../../assets/images/Ellipse2.png";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalPassword = password.trim();
    const finalConfirm = confirmPassword.trim();

    if (!finalPassword || !finalConfirm) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (finalPassword !== finalConfirm) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsButtonDisabled(true);
    try {
      // Place logic for saving the password (e.g. API call) here

      toast.success("Password set successfully!");
      setPassword("");
      setConfirmPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Password setup error:", error);
      toast.error("Something went wrong.");
    }
    setIsButtonDisabled(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3f2f2] relative overflow-hidden">
      <div>
        {/* Background Images */}
        <div className="absolute left-[20%] sm:left-10 md:left-[3rem] lg:left-[6rem] top-[7rem] sm:top-[2rem] md:top-[5rem] lg:top-[7rem] h-[4rem] md:h-[8rem] w-[4rem] md:w-[8rem] z-30">
          <img src={vectorimage2} alt="Vector Icon" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-0 sm:left-10 lg:left-20 bottom-[2rem] lg:bottom-[3rem] sm:bottom-[0.5rem] md:bottom-[1rem] h-[15rem] sm:h-[25rem] lg:h-[30rem] sm:w-[18rem] lg:w-[24rem] z-30">
          <img src={vectorimage1} alt="Vector Icon" className="w-full h-full object-scale-down" />
        </div>

        <div className="absolute right-10 sm:right-[10rem] lg:right-[18rem] top-10 md:top-[6rem] lg:top-[6rem] h-[3rem] w-[3rem] z-30">
          <img src={roundvectorimage} alt="Vector Icon" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-0 top-[30%] w-[10rem] md:w-[15rem] lg:w-[20rem] z-30">
          <img src={vectorimage3} alt="Vector Icon" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-5 sm:right-[10rem] lg:right-[18rem] bottom-7 md:bottom-[9rem] lg:bottom-[6rem] lg:h-[8rem] md:w-[5rem] lg:w-[8rem] z-30">
          <img src={vectorimage2} alt="Vector Icon" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Create Password Form */}
      <div className="mx-3 bg-[#ffffff] h-[28rem] sm:h-[38rem] w-[90%] sm:w-[80%] flex justify-center items-center rounded-2xl relative">
        <div className="absolute z-50 left-[50%] top-0">
          <img src={ellaspsesymbol} alt="Vector Icon" className="w-full h-full object-cover z-30" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#ffffff] p-4 sm:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-[23rem] md:w-[25rem] relative z-50"
        >
          <h2 className="text-center text-2xl font-semibold mb-4">Create Password</h2>

          <div className="space-y-4">
            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaRegEye /> : <FaRegEyeSlash />}
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
                {isButtonDisabled ? "SETTING..." : "SET PASSWORD"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
