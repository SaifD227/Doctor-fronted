// import { useState, useEffect } from "react";
// import { TbVaccine } from "react-icons/tb";
// import { RiWaterFlashFill } from "react-icons/ri";
// import { MdLightMode } from "react-icons/md";
// import { Link, Outlet } from "react-router-dom";

// const Alert = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex-1  mt-14 flex flex-col lg:ml-64 p-3">
//       {loading ? (
//         <div className="flex justify-center items-center h-screen">
//           <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//         </div>
//       ) : (
//         <div className="flex flex-col h-full justify-between">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-3">
//               <button className="border border-blue-500 bg-blue-100 text-blue-500 font-medium py-2 px-8">
//                 Email
//               </button>
//               <button className="border border-blue-500 bg-blue-100 text-blue-500 font-medium py-2 px-8">
//                 Sheet
//               </button>
//             </div>
//             <div>
//               <input type="date" />
//             </div>
//           </div>
//           <main className="flex-1 flex flex-col lg:ml-64 ">
//             <Outlet />
//           </main>

//           <div className="flex justify-center gap-24 mt-96">
//             <div className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center">
//               <TbVaccine />
//               <button>
//                 {" "}
//                 <Link to="/alert/vaccinealert">Vaccine Alert</Link>
//               </button>
//             </div>
//             <div className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center">
//               <RiWaterFlashFill />
//               <button>Follow Up Alert</button>
//             </div>
//             <div className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center">
//               <MdLightMode />
//               <button>Birthday Alert</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Alert;

import { useState, useEffect } from "react";
import { TbVaccine } from "react-icons/tb";
import { RiWaterFlashFill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { Routes, Route, useNavigate } from "react-router-dom";

const Alert = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  interface HandleNavigationProps {
    path: string;
  }

  const handleNavigation = (path: HandleNavigationProps["path"]) => {
    navigate(path);
  };

  return (
    <div className="flex-1 mt-14 flex flex-col lg:ml-64 p-3">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <button className="border border-blue-500 bg-blue-100 text-blue-500 font-medium py-2 px-8">
                Email
              </button>
              <button className="border border-blue-500 bg-blue-100 text-blue-500 font-medium py-2 px-8">
                Sheet
              </button>
            </div>
            <div>
              <input type="date" />
            </div>
          </div>
          <main className="flex-1 flex flex-col lg:ml-64">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="text-red-500 text-center mt-4">
                    No alert found
                  </div>
                }
              />
              <Route
                path="/alert/vaccinealert"
                element={
                  <div className="text-green-500 text-center mt-4">
                    Vaccine Alert Active
                  </div>
                }
              />
              <Route
                path="/alert/followupalert"
                element={
                  <div className="text-blue-500 text-center mt-4">
                    Follow Up Alert Active
                  </div>
                }
              />
              <Route
                path="/alert/birthdayalert"
                element={
                  <div className="text-purple-500 text-center mt-4">
                    Birthday Alert Active
                  </div>
                }
              />
            </Routes>
          </main>

          <div className="flex justify-center gap-24 mt-96">
            <div
              className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center"
              onClick={() => handleNavigation("/alert/vaccinealert")}
            >
              <TbVaccine />
              <button>Vaccine Alert</button>
            </div>
            <div
              className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center"
              onClick={() => handleNavigation("/alert/followupalert")}
            >
              <RiWaterFlashFill />
              <button>Follow Up Alert</button>
            </div>
            <div
              className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center"
              onClick={() => handleNavigation("/alert/birthdayalert")}
            >
              <MdLightMode />
              <button>Birthday Alert</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
