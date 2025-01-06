import image2 from "../assets/images__9_-removebg-preview.png";
import {
  FaArrowLeft,
  FaUser,
  FaPhoneAlt,
  FaCommentDollar,
  FaDollarSign,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUpUser } from "../authService";
import { FaDatabase } from "react-icons/fa6";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      displayName,
      email,
      phoneNumber,
      password,
      qualification,
    };

    try {
      // Call the sign-up API
      const response = await signUpUser(formData);
      console.log("Response:", response);

      toast.success("Sign-up successful!.");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error during sign-up, please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-300 bg-opacity-60 h-16 px-4">
        <Link
          to="/"
          className="text-blue-600 flex items-center gap-5 text-xl font-medium hover:text-blue-700 transition duration-300"
        >
          <FaArrowLeft />
          Personal Information
        </Link>
        <div className="flex items-center space-x-4">
          <img
            src={image2}
            alt="Logo"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Form */}
      <div className="mt-7 mx-10 bg-transparent">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="flex gap-10">
            <div className="flex-1">
              <label className="gap-1 items-center text-sm font-medium text-blue-700 flex">
                <FaUser />
                First Name:
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-2 border-b-2 border-blue-700 focus:outline-none focus:border-red-600 bg-transparent"
              />
            </div>

            {/* Last Name */}
            <div className="flex-1">
              <label className="gap-1 items-center text-sm font-medium text-blue-700 flex">
                <FaUser />
                Last Name:
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-4 py-2 border-b-2 border-blue-700 focus:outline-none focus:border-red-600 bg-transparent"
              />
            </div>
          </div>

          {/* Display Name */}
          <div>
            <label className="gap-1 items-center text-sm font-medium text-blue-700 flex">
              <FaCommentDollar />
              Display Name:
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="w-full px-4 py-2 border-b-2 border-blue-700 focus:outline-none focus:border-red-600 bg-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="gap-1 items-center text-sm font-medium text-blue-700 flex">
              <MdEmail />
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border-b-2 border-blue-700 focus:outline-none focus:border-red-600 bg-transparent"
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="gap-1 items-center text-sm font-medium text-blue-700 flex">
              <FaDollarSign />
              Qualification:
            </label>
            <input
              type="text"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
              className="w-full px-4 py-2 border-b-2 border-blue-700 focus:outline-none focus:border-red-600 bg-transparent"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="gap-1 items-center text-sm font-medium text-blue-700 flex">
              <FaPhoneAlt />
              Phone Number:
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full px-4 py-2 border-b-2 border-blue-700 focus:outline-none focus:border-red-600 bg-transparent"
            />
          </div>

          {/* Password */}
          <div>
            <label className="gap-1 items-center text-sm font-medium text-blue-700 flex">
              <IoLockClosed />
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border-b-2 border-blue-700 focus:outline-none focus:border-red-600 bg-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center justify-center w-full ">
            <button
              type="submit"
              className="px-6 flex items-center justify-center gap-2  py-2 bg-blue-700 text-white font-medium text-sm rounded-lg hover:bg-blue-800 transition duration-300"
            >
              <FaDatabase />
              Register Now
            </button>
          </div>
        </form>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
