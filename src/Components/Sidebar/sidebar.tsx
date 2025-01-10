// import { Link } from "react-router-dom";
// // import logo from "../../assets/logo.png"; // Correct path to your logo file
// import image from "../../assets/images__8_-removebg-preview.png";
// import {
//   MdDashboardCustomize,
//   MdMarkEmailUnread,
//   MdSchedule,
//   MdHvac,
// } from "react-icons/md";
// import { IoAlertSharp, IoPersonAdd, IoMan } from "react-icons/io5";
// import { FaKey } from "react-icons/fa";
// import { TbBrandAppleFilled } from "react-icons/tb";
// import { BiSolidClinic } from "react-icons/bi";
// import { RiLogoutCircleRLine } from "react-icons/ri";

// type SidebarProps = {
//   isSidebarOpen: boolean;
//   handleLogout: () => void;
// };

// const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, handleLogout }) => {
//   return (
//     <div
//       className={`fixed inset-y-0 left-0 z-30 w-64 bg-white text-white transform lg:translate-x-0 ${
//         isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 ease-in-out lg:block shadow-xl`}
//     >
//       <div
//         className="flex items-center bg-blue-600 "
//         style={{ height: "60px" }}
//       >
//         <img
//           className="rounded-full bg-blue-600 mr-4"
//           src={image} // Use imported logo here
//           alt="Company Logo"
//           width={40}
//           height={40}
//         />
//         <h2 className="text-2xl font-bold">Health Care</h2>
//       </div>
//       <div className="p-4">
//         <nav>
//           <ul className="space-y-2 ">
//             <li className="hover:bg-gray-700 p-1 text-gray-500  text-lg font-medium flex items-center gap-2  rounded-md">
//               <MdDashboardCustomize className="text-blue-500" />
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1 text-gray-500  text-lg font-medium flex items-center gap-2 rounded-md">
//               <IoAlertSharp className="text-red-600" />
//               <Link to="#">Alerts</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1  text-gray-500   text-lg font-medium flex items-center gap-2  rounded-md">
//               <MdMarkEmailUnread className="text-blue-500" />
//               <Link to="/message">Messages</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1 text-gray-500  flex items-center gap-2 text-lg font-medium rounded-md">
//               <BiSolidClinic className="text-blue-500" />
//               <Link to="/clinic">Clinics</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1 text-gray-500  flex items-center gap-2 text-lg font-medium rounded-md">
//               <MdSchedule className="text-blue-500" />
//               <Link to="#">Schedule</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1 text-gray-500  flex items-center gap-2 text-lg font-medium rounded-md">
//               <MdHvac className="text-blue-500" />
//               <Link to="#">Vacations</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1 text-gray-500  flex items-center gap-2 text-lg font-medium rounded-md">
//               <FaKey className="text-blue-500" />
//               <Link to="#">Change Password</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1 text-gray-500  flex items-center gap-2 text-lg font-medium rounded-md">
//               <TbBrandAppleFilled className="text-blue-500" />
//               <Link to="#">Brand Inventory</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1 text-gray-500   flex items-center gap-2 text-lg font-medium rounded-md">
//               <IoMan className="text-blue-500" />
//               <Link to="#">Patients</Link>
//             </li>
//             <li className="hover:bg-gray-700 p-1 text-gray-500  flex items-center gap-2 text-lg font-medium rounded-md">
//               <IoPersonAdd className="text-blue-500" />
//               <Link to="#">Add</Link>
//             </li>

//             <li className="hover:bg-gray-700 p-1 text-gray-500  flex items-center gap-2 text-lg font-medium rounded-md">
//               <RiLogoutCircleRLine className="text-blue-500" />
//               <button onClick={handleLogout} className="text-left">
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;











import { Link } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdMarkEmailUnread,
  MdSchedule,
  MdHvac,
} from "react-icons/md";
import { IoAlertSharp, IoPersonAdd, IoMan } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { TbBrandAppleFilled } from "react-icons/tb";
import { BiSolidClinic } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";

type SidebarProps = {
  isSidebarOpen: boolean;
  handleLogout: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, handleLogout }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white text-black transform lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:block shadow-xl`}
    >
      <div className="flex items-center bg-blue-600 text-white" style={{ height: "60px" }}>
        <h2 className="text-2xl font-bold ml-4">Health Care</h2>
      </div>
      <div className="p-4">
        <nav>
          <ul className="space-y-2">
            {/* Dashboard */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <MdDashboardCustomize className="text-blue-500" />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* Alerts */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <IoAlertSharp className="text-red-600" />
              <Link to="/alerts">Alerts</Link>
            </li>
            {/* Messages */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <MdMarkEmailUnread className="text-blue-500" />
              <Link to="/message">Messages</Link>
            </li>
            {/* Clinics */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <BiSolidClinic className="text-blue-500" />
              <Link to="/clinic">Clinics</Link>
            </li>
            {/* Schedule */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <MdSchedule className="text-blue-500" />
              <Link to="/schedule">Schedule</Link>
            </li>
            {/* Vacations */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <MdHvac className="text-blue-500" />
              <Link to="/vacations">Vacations</Link>
            </li>
            {/* Change Password */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <FaKey className="text-blue-500" />
              <Link to="/change-password">Change Password</Link>
            </li>
            {/* Brand Inventory */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <TbBrandAppleFilled className="text-blue-500" />
              <Link to="/brand-inventory">Brand Inventory</Link>
            </li>
            {/* Patients */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <IoMan className="text-blue-500" />
              <Link to="/patients">Patients</Link>
            </li>
            {/* Add */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <IoPersonAdd className="text-blue-500" />
              <Link to="/add">Add</Link>
            </li>
            {/* Logout */}
            <li className="hover:bg-gray-200 p-1 flex items-center gap-2 text-lg font-medium rounded-md">
              <RiLogoutCircleRLine className="text-blue-500" />
              <button onClick={handleLogout} className="text-left">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
