import { useState } from "react";
import image1 from "../assets/images__9_-removebg-preview.png";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { MdLightMode, MdSchedule } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { IoAlertSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { BiSolidClinic } from "react-icons/bi";
import { MdHvac } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { TbBrandAppleFilled } from "react-icons/tb";
import { IoIosPersonAdd } from "react-icons/io";
import { IoMan } from "react-icons/io5";

const Welcome = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-blue-400 text-white transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:block`}
      >
        <div className="flex items-center p-2 bg-gray-900">
          <img
            className="rounded-full mr-4"
            src={image1}
            alt="Company Logo"
            width={40}
            height={40}
          />
          <h2 className="text-2xl  font-bold">Health Care</h2>
        </div>
        <div className="p-4">
          <nav>
            <ul className="space-y-2">
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <MdDashboardCustomize />
                <a href="#">Dashboard</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <IoAlertSharp />
                <a href="#">Alerts</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <MdMarkEmailUnread />
                <a href="#">Messages</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <BiSolidClinic />
                <a href="#">Clinics</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <MdSchedule />
                <a href="#">Schedule</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <MdHvac />
                <a href="#">Vacations</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <FaKey />
                <a href="#">Change Password</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <TbBrandAppleFilled />
                <a href="#">Brand Invertory</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <IoMan />
                <a href="#">Patients</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <IoIosPersonAdd />
                <a href="#">Add</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <IoMdSettings />
                <a href="#">Settings</a>
              </li>
              <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
                <RiLogoutCircleRLine />
                <a href="#">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64 bg-gray-100 min-h-screen">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
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
          <p className="text-xl font-semibold text-gray-700">
            Dr. Muhammad Saveed
          </p>
          <div className="flex items-center gap-4">
            <button className="text-2xl text-gray-700 hover:text-blue-500 transition">
              <MdLightMode />
            </button>
            <button className="text-2xl text-gray-700 hover:text-blue-500 transition">
              <FaBell />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-2">
          <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
          <p className="mt-2 text-gray-600">
            This is your dashboard. Use the sidebar to navigate through the
            sections.
          </p>
        </main>
      </div>

      {/* Sidebar Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Welcome;
