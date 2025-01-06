import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images__9_-removebg-preview.png";
import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    } else {
      setError(null);
    }

    try {
      const response = await fetch(
        "http://localhost:4000/api/user/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24OubI6ewFaoRXFEMUnHewHryVT8VY_zksQ&s)`,
        filter: "brightness(1) contrast(1.2) saturate(1.2)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-16 bg-opacity-60 bg-gray-300 text-white flex justify-between items-center">
        <div className="mr-4 mx-4">
          <Link
            to="/"
            className="text-blue-600 flex items-center gap-5 text-xl font-medium hover:text-blue-700 transition duration-300"
          >
            <FaArrowLeft />
            Forget Password
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={image1}
            alt="Logo"
            width={130}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="w-3/4 mt-40 mx-auto p-6 bg-transparent rounded-lg shadow-inner">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex gap-1 items-center text-sm font-medium text-blue-700">
              <MdEmail />
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border-b-2 border-blue-700 focus:outline-none focus:border-blue-700 bg-transparent"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            <FaArrowUpRightFromSquare />
            Send Password
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
