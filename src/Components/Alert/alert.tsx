



import { useState, useEffect } from "react";
import { TbVaccine } from "react-icons/tb";
import { RiWaterFlashFill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";

const Alert = () => {
  const [loading, setLoading] = useState(true);

  // Simulating a loading state on initial render
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loading
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      {loading ? (
        // Spinner while loading
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        // Main content after loading
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

          <div className="flex justify-center gap-24 mt-96">
            <div className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center">
              <TbVaccine />
              <button>Vaccine Alert</button>
            </div>
            <div className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center">
              <RiWaterFlashFill />
              <button>Follow Up Alert</button>
            </div>
            <div className="hover:text-blue-600 mt-16 text-gray-600 flex flex-col items-center">
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
