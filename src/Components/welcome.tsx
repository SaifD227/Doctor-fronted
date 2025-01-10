// import { useState } from "react";
// import image1 from "../assets/images__9_-removebg-preview.png";
// import { IoMdSettings } from "react-icons/io";
// import { RiLogoutCircleRLine } from "react-icons/ri";
// import { FaBell } from "react-icons/fa";
// import { MdLightMode, MdSchedule } from "react-icons/md";
// import { MdDashboardCustomize } from "react-icons/md";
// import { IoAlertSharp } from "react-icons/io5";
// import { MdMarkEmailUnread } from "react-icons/md";
// import { BiSolidClinic } from "react-icons/bi";
// import { MdHvac } from "react-icons/md";
// import { FaKey } from "react-icons/fa";
// import { TbBrandAppleFilled } from "react-icons/tb";
// import { IoIosPersonAdd } from "react-icons/io";
// import { IoMan } from "react-icons/io5";
// // import Dashboard from "./Dashboard/dashboard";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const Welcome = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     try {
//       localStorage.clear();
//       navigate("/");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []);

//   if (!isAuthenticated) {
//     return <div>Error: You are not authorized to view this page.</div>;
//   }

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-gray-700 to-gray-900 text-white transform lg:translate-x-0 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out lg:block shadow-xl`}
//       >
//         <div className="flex items-center bg-gradient-to-r from-blue-500  p-3">
//           <img
//             className="rounded-full mr-4"
//             src={image1}
//             alt="Company Logo"
//             width={40}
//             height={50}
//           />
//           <h2 className="text-2xl  font-bold">Health Care</h2>
//         </div>
//         <div className="p-4">
//           <nav>
//             <ul className="space-y-2">
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <MdDashboardCustomize />
//                 <Link to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <IoAlertSharp />
//                 <a href="#">Alerts</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <MdMarkEmailUnread />
//                 <a href="#">Messages</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <BiSolidClinic />
//                 <Link to="/clinic">Clinics</Link>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <MdSchedule />
//                 <a href="#">Schedule</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <MdHvac />
//                 <a href="#">Vacations</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <FaKey />
//                 <a href="#">Change Password</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <TbBrandAppleFilled />
//                 <a href="#">Brand Invertory</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <IoMan />
//                 <a href="#">Patients</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <IoIosPersonAdd />
//                 <a href="#">Add</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <IoMdSettings />
//                 <a href="#">Settings</a>
//               </li>
//               <li className="hover:bg-gray-700 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
//                 <RiLogoutCircleRLine />
//                 <p onClick={handleLogout}>Logout</p>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col lg:ml-64 bg-gray-100">

//         {/* Navbar */}
//         <header className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg px-6 py-4">
//           <button
//             className="text-gray-600 lg:hidden"
//             onClick={() => setSidebarOpen(!isSidebarOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//           <p className="text-xl font-semibold text-gray-700">
//             Dr. Muhammad Saveed
//           </p>
//           <div className="flex items-center gap-4">
//             <button className="text-2xl text-gray-700 hover:text-blue-500 transition">
//               <MdLightMode />
//             </button>
//             <button className="text-2xl text-gray-700 hover:text-blue-500 transition">
//               <FaBell />
//             </button>
//           </div>
//         </header>

//         {/* Page Content */}
//         {/* <main>
//           <Dashboard />
//         </main> */}
//       </div>

//       {/* Sidebar Overlay for mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Welcome;




// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar/sidebar";
// import Navbar from "./Navbar/navbar";
// import { useNavigate } from "react-router-dom";

// const Welcome: React.FC = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     try {
//       localStorage.removeItem("authToken");
//       setIsAuthenticated(false);
//       navigate("/");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-200">
//         <div className="p-4 bg-white shadow rounded">
//           <p className="text-red-500 font-bold">
//             Error: You are not authorized to view this page.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen">
//       <Sidebar isSidebarOpen={isSidebarOpen} handleLogout={handleLogout} />
//       <div
//         className={`flex-1 flex flex-col ${
//           isSidebarOpen ? "lg:ml-64" : ""
//         } bg-gray-100`}
//       >
//         <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
//       </div>
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Welcome;





// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar/sidebar";
// import Navbar from "./Navbar/navbar";
// import { useNavigate } from "react-router-dom";

// const Welcome: React.FC = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token);

//     // Redirect to login page if not authenticated
//     if (!token) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     try {
//       // Clear the auth token from localStorage
//       localStorage.removeItem("authToken");
//       setIsAuthenticated(false);
//       // Navigate to the login page
//       navigate("/");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-200">
//         <div className="p-4 bg-white shadow rounded">
//           <p className="text-red-500 font-bold">
//             Error: You are not authorized to view this page.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen">
//       <Sidebar isSidebarOpen={isSidebarOpen} handleLogout={handleLogout} />
//       <div
//         className={`flex-1 flex flex-col ${isSidebarOpen ? "lg:ml-64" : ""} bg-gray-100`}
//       >
//         <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
//       </div>
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Welcome;





import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/sidebar";
import Navbar from "./Navbar/navbar";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);

    if (!token) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
      navigate("/"); // Redirect to login
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="p-4 bg-white shadow rounded">
          <p className="text-red-500 font-bold">
            Error: You are not authorized to view this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} handleLogout={handleLogout} />
      <div
        className={`flex-1 flex flex-col ${isSidebarOpen ? "lg:ml-64" : ""} bg-gray-100`}
      >
        <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
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
