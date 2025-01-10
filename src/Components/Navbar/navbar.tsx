import { MdLightMode } from "react-icons/md";
import { FaBell } from "react-icons/fa";

type NavbarProps = {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void; 
};

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    // <div className="  lg:ml-64 bg-gray-100}">
      <header className="flex lg:ml-64 items-center justify-between bg-blue-600 px-6 py-4">
        <button
          className="text-gray-600 lg:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <p className="text-xl font-semibold text-white">
          Dr. Muhammad Saveed
        </p>
        <div className="flex items-center gap-4">
          <button className="text-2xl text-white hover:text-blue-500 transition">
            <MdLightMode />
          </button>
          <button className="text-2xl text-white hover:text-blue-500 transition">
            <FaBell />
          </button>
        </div>
      </header>
    // </div>
  );
};

export default Navbar;
