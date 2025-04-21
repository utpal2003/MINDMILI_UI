import React from "react";
import { useLocation } from "react-router-dom";

const EmailNotice = () => {
  const location = useLocation();
  const email = location.state?.email || "your email address";

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-2 sm:px-4">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-8 max-w-xs sm:max-w-md w-full text-center">
        <svg
          className="mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12H8m0 0l4-4m0 8l-4-4m12 4a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-lg sm:text-2xl font-semibold text-blue-700 mb-2">Check Your Email</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-2">
          We’ve sent a confirmation email to <br />
          <span className="font-medium text-blue-600 break-all">{email}</span>
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">
          Please check your inbox and follow the instructions to verify your account.
        </p>
      </div>
    </div>
  );
};

export default EmailNotice;
