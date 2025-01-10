import { useState } from "react";
import image1 from "../assets/images__9_-removebg-preview.png";
import image from "../assets/images__8_-removebg-preview.png";
import { IoLockClosed, IoLogInOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../authService";
import image2 from "../assets/saif.jpg";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const credentials = { email, password };
      const data = await loginUser(credentials);
      console.log("Logged in successfully:", data);

      setError("");
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Login failed. Please check your credentials.");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundPosition: "0% -33%",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-16  bg-black text-white flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={image1}
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="mr-4">
          <Link
            to="/signUp"
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>

      <div className="w-3/4 mt-36 mx-auto p-6 bg-transparent rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-center mb-6 flex justify-center items-center">
          <img
            src={image}
            alt="image"
            width={100}
            height={50}
            style={{ filter: "drop-shadow(0 0 0.75rem crimson)" }}
          />
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex gap-1 items-center text-sm font-medium text-white">
              <MdEmail />
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border-b-2 text-white border-white focus:outline-none  bg-transparent"
            />
          </div>
          <div>
            <label className=" gap-1 items-center text-sm font-medium text-white flex">
              <IoLockClosed />
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border-b-2 text-white border-white focus:outline-none bg-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 flex items-center justify-center gap-2 rounded-md focus:outline-none ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
              <>
                <IoLogInOutline />
                Login
              </>
            )}
          </button>
        </form>
        <div className="flex flex-col items-end text-white mt-4 text-sm font-medium">
          <Link
            to="/forgetPassword"
            className="hover:underline hover:text-white cursor-pointer"
          >
            Forget Password
          </Link>
        </div>
        {error && (
          <div className="flex items-center bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md animate-fade-in">
            <svg
              className="w-6 h-6 mr-3 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856C18.68 19.004 20 16.874 20 14.5c0-4.1-1.79-6.865-4.823-8.828a4 4 0 00-6.354 0C5.79 7.635 4 10.4 4 14.5c0 2.374 1.32 4.504 3.082 5.472z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
