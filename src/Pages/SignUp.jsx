// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import vectorimage1 from "../assets/images/Vector 2.png";
// import vectorimage2 from "../assets/images/Rectangle 7.png";
// import roundvectorimage from "../assets/images/Ellipse 3.png";
// import vectorimage3 from "../assets/images/Vector 1.png";
// import ellaspsesymbol from "../assets/images/Ellipse 2.png"

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   // const [showtext, setshowtext] = useState(0)

//   // const handleshowtext = (event) => {
//   //   setshowtext() += event.target.value
//   // }
//   const navigate = useNavigate();


//   const firstnameRef = useRef();
//   const lastnameRef = useRef();
//   const usernameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();

//   const calculatePasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 8) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[a-z]/.test(password)) strength++;
//     if (/\d/.test(password)) strength++;
//     if (/[@$!%*?&]/.test(password)) strength++;
//     setPasswordStrength(strength);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const firstname = firstnameRef.current.value.trim();
//     const lastname = lastnameRef.current.value.trim();
//     const username = usernameRef.current.value.trim();
//     const email = emailRef.current.value.trim();
//     const password = passwordRef.current.value.trim();

//     if (!firstname || !lastname || !username || !email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }
//     if (password.length < 8) {
//       toast.error("Password must contain 8 character");
//       return;
//     }
//     if (passwordStrength < 4) {
//       toast.error("Please use strong password");
//       return;
//     }

//     setIsButtonDisabled(true);
//     setTimeout(() => {
//       toast.success("Registered successfully", { duration: 1000 });
//       setIsButtonDisabled(false);

//       firstnameRef.current.value = "";
//       lastnameRef.current.value = "";
//       usernameRef.current.value = "";
//       emailRef.current.value = "";
//       passwordRef.current.value = "";
//       setPasswordStrength(0);

//     }, 3000);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#f3f2f2] relative overflow-hidden">



//       <div>
//         {/* Left Side Images */}
//         <div className="absolute  left-[20%] sm:left-10 md:left-[3rem] lg:left-[6rem] top-[7rem] sm:top-[2rem] md:top-[5rem] lg:top-[7rem] h-[3rem] sm:-h[5rem] md:h-[8rem] w-[3rem] sm:w-[5rem] md:w-[8rem] z-30 ">
//           <img src={vectorimage2} alt="Vector Icon" className="w-full h-full sm:object-cover object-cover" />
//         </div>

//         <div className="absolute left-0 sm:left-10  lg:left-20 bottom-[2rem] lg:bottom-[3rem] sm:bottom-[0.5rem] md:bottom-[1rem] h-[15rem] sm:h-[25rem] lg:h-[30rem] sm:w-[18rem] lg:w-[24rem] z-30" >
//           <img src={vectorimage1} alt="Vector Icon" className="w-full h-full object-scale-down" />
//         </div>

//         {/* Right Side Images */}
//         <div className="absolute right-10 sm:right-[10rem] lg:right-[18rem] top-10 md:top-[6rem] lg:top-[6rem] h-[3rem] w-[3rem] z-30">
//           <img src={roundvectorimage} alt="Vector Icon" className="w-full h-full object-cover" />
//         </div>

//         <div className="absolute right-0 top-[30%] w-[10rem] md:w-[15rem] lg:w-[20rem] z-30">
//           <img src={vectorimage3} alt="Vector Icon" className="w-full h-full object-cover" />
//         </div>

//         <div className="absolute right-5 sm:right-[10rem] lg:right-[18rem] bottom-7 md:bottom-[9rem] lg:bottom-[6rem]  lg:h-[8rem] md:w-[5rem] lg:w-[8rem] z-30">
//           <img src={vectorimage2} alt="Vector Icon" className="w-full h-full object-cover" />
//         </div>

//         {/* for phone only */}


//       </div>



//       {/* Signup Form */}
//       <div className="mx-3 sm:bg-[#ffffff] h-[38rem] w-[90%] sm:w-[80%] flex justify-center items-center rounded-2xl relative">

//         <div className="absolute z-50 left-[50%] top-0 ">
//           <img src={ellaspsesymbol} alt="Vector Icon" className="w-full h-full object-cover z-30" />
//         </div>


//         <form
//           className="bg-[#ffffff] p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-[25rem] md:w-[25rem] relative z-50 mx-1 opacity-100"
//           onSubmit={handleSubmit}
//         >
//           <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>

//           <div className="space-y-4">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 placeholder="Firstname"
//                 className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 ref={firstnameRef}
//               />
//               <input
//                 type="text"
//                 placeholder="Lastname"
//                 className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 ref={lastnameRef}
//               />
//             </div>

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 ref={usernameRef}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 ref={emailRef}
//               />
//             </div>

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 ref={passwordRef}
//                 onChange={() => {
//                   calculatePasswordStrength(passwordRef.current.value);
//                 }}
//               />
//               <span
//                 className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
//               </span>
//             </div>

//             {/* Password Strength Meter */}
//             <div className="w-full h-2 rounded-md bg-gray-300 mt-1 overflow-hidden">
//               <motion.div
//                 className="h-full"
//                 animate={{
//                   width: `${(passwordStrength / 5) * 100}%`,
//                   backgroundColor:
//                     passwordStrength === 5
//                       ? "green"
//                       : passwordStrength === 4
//                         ? "limegreen"
//                         : passwordStrength === 3
//                           ? "orange"
//                           : passwordStrength === 2
//                             ? "yellow"
//                             : "red",
//                 }}
//                 transition={{ duration: 0.3 }}
//               ></motion.div>
//             </div>

//             {/* Password Strength Message */}
//             {/* <p className={` text-sm text-red-600 flex justify-center  ${passwordStrength > 4 ? "hidden" : "block"}`}>
//           Password must be Strong
//         </p> */}

//             <div>
//               <button
//                 disabled={isButtonDisabled}
//                 className={`w-full ${isButtonDisabled
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-500 hover:bg-blue-700"
//                   } text-white py-2 rounded-md`}
//                 type="submit"
//               >
//                 {isButtonDisabled ? "SIGNUP..." : "SIGN UP"}
//               </button>
//             </div>
//           </div>

//           {/* Sign-in and Reset Password Links */}
//           <div className="flex flex-col mt-2 space-y-1">
//             <div className="flex space-x-2">
//               <p>Already have an account?</p>
//               <p
//                 className="text-blue-500 cursor-pointer hover:underline hover:text-blue-900"
//                 onClick={() => navigate("/Signin")}
//               >
//                 Sign in
//               </p>
//             </div>

//             <div className="flex space-x-2">
//               <p>Forgot your password?</p>
//               <p
//                 className="text-blue-500 cursor-pointer hover:underline hover:text-blue-900"
//                 onClick={() => navigate("/resetpassword")}
//               >
//                 Reset Password
//               </p>
//             </div>
//           </div>
//         </form>


//       </div>
//     </div>
//   );
// };

// export default SignUp;
// For fect backend api
{/*  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstname = firstnameRef.current.value.trim();
    const lastname = lastnameRef.current.value.trim();
    const username = usernameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    if (!firstname || !lastname || !username || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsButtonDisabled(true);

    try {
      const response = await fetch("https://your-backend-api.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, username, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Registered successfully");
      firstnameRef.current.value = "";
      lastnameRef.current.value = "";
      usernameRef.current.value = "";
      emailRef.current.value = "";
      navigate("/Signin");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsButtonDisabled(false);
    }
  };*/}



  
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import vectorimage1 from "../assets/images/Vector 2.png";
import vectorimage2 from "../assets/images/Rectangle 7.png";
import roundvectorimage from "../assets/images/Ellipse 3.png";
import vectorimage3 from "../assets/images/Vector 1.png";
import ellaspsesymbol from "../assets/images/Ellipse 2.png"

const SignUp = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const navigate = useNavigate();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const firstname = firstnameRef.current.value.trim();
    const lastname = lastnameRef.current.value.trim();
    const username = usernameRef.current.value.trim();
    const email = emailRef.current.value.trim();


    if (!firstname || !lastname || !username || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      console.log(firstname,lastname,username,email)
      toast.success("Registered successfull check your email to generate password", { duration: 1000 });
      setIsButtonDisabled(false);

      firstnameRef.current.value = "";
      lastnameRef.current.value = "";
      usernameRef.current.value = "";
      emailRef.current.value = "";

    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3f2f2] relative overflow-hidden">
      <div>
        {/* Left Side Images */}
        <div className="absolute  left-[20%] sm:left-10 md:left-[3rem] lg:left-[6rem] top-[7rem] sm:top-[2rem] md:top-[5rem] lg:top-[7rem] h-[4rem] sm:-h[5rem] md:h-[8rem] w-[4rem]  md:w-[8rem] z-30 ">
          <img src={vectorimage2} alt="Vector Icon" className="w-full h-full sm:object-cover object-cover" />
        </div>

        <div className="absolute left-0 sm:left-10  lg:left-20 bottom-[2rem] lg:bottom-[3rem] sm:bottom-[0.5rem] md:bottom-[1rem] h-[15rem] sm:h-[25rem] lg:h-[30rem] sm:w-[18rem] lg:w-[24rem] z-30" >
          <img src={vectorimage1} alt="Vector Icon" className="w-full h-full object-scale-down" />
        </div>

        {/* Right Side Images */}
        <div className="absolute right-10 sm:right-[10rem] lg:right-[18rem] top-10 md:top-[6rem] lg:top-[6rem] h-[3rem] w-[3rem] z-30">
          <img src={roundvectorimage} alt="Vector Icon" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-0 top-[30%] w-[10rem] md:w-[15rem] lg:w-[20rem] z-30">
          <img src={vectorimage3} alt="Vector Icon" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-5 sm:right-[10rem] lg:right-[18rem] bottom-7 md:bottom-[9rem] lg:bottom-[6rem]  lg:h-[8rem] md:w-[5rem] lg:w-[8rem] z-30">
          <img src={vectorimage2} alt="Vector Icon" className="w-full h-full object-cover" />
        </div>

        {/* for phone only */}


      </div>



      {/* Signup Form */}
      <div className="mx-3 bg-[#ffffff] h-[38rem] w-[90%] sm:w-[80%] flex justify-center items-center rounded-2xl relative">

        <div className="absolute z-50 left-[50%] top-0 ">
          <img src={ellaspsesymbol} alt="Vector Icon" className="w-full h-full object-cover z-30" />
        </div>


        <form
          className="bg-[#ffffff] p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-[25rem] md:w-[25rem] relative z-50 mx-1 opacity-100"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>

          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                ref={firstnameRef}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                ref={lastnameRef}
              />
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                ref={usernameRef}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                ref={emailRef}
              />
            </div>


            <div>
              <button
                disabled={isButtonDisabled}
                className={`w-full ${isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
                  } text-white py-2 rounded-md text-xl`}
                type="submit"
              >Sign up
                {/* {isButtonDisabled ? "SIGNUP..." : "SIGN UP"} */}
              </button>
            </div>
          </div>

          {/* Sign-in and Reset Password Links */}
          <div className="flex flex-col mt-2 space-y-1">
            <div className="flex space-x-2">
              <p>Already have an account?</p>
              <p
                className="text-blue-500 cursor-pointer hover:underline hover:text-blue-900"
                onClick={() => navigate("/Signin")}
              >
                Sign in
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

export default SignUp;
