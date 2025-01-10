import image1 from "../../assets/vacn2.webp";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for the JWT token
    const token = localStorage.getItem("authToken");

    if (token) {
      // Token exists, user is authenticated
      setIsAuthenticated(true);
    } else {
      // Token is not found, user is not authenticated
      setIsAuthenticated(false);
    }
  }, []);

  if (!isAuthenticated) {
    return <div>Error: You are not authorized to view this page.</div>;
  }

  return (
    <div className="flex-1 flex flex-col lg:ml-64 bg-gray-100">
      <div className="  ">
        <img
          src={image1}
          alt="Vaccination Logo"
          className="w-[1500px] h-[250px]"
        />
      </div>
      <div className="justify-center text-white text-2xl p-2 bg-blue-300">
        <p className="text-center font-medium p-2  rounded-md">
          Welcome to Dashboard
        </p>
      </div>
      <div className="p-4 bg-gray-100 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white rounded-lg shadow-md p-4">
          <div className="bg-blue-100 p-2 rounded-lg shadow hover:shadow-lg transition">
            <h1 className="text-lg font-semibold text-blue-800">
              This Month Patients
            </h1>
            <p className="text-2xl font-bold text-blue-600">8</p>
          </div>
          <div className="bg-green-100 p-2 rounded-lg shadow hover:shadow-lg transition">
            <h1 className="text-lg font-semibold text-green-800">
              Total Patients
            </h1>
            <p className="text-2xl font-bold text-green-600">20</p>
          </div>
          <div className="bg-yellow-100 p-2 rounded-lg shadow hover:shadow-lg transition">
            <h1 className="text-lg font-semibold text-yellow-800">
              Previous Alerts (Current Month)
            </h1>
            <p className="text-2xl font-bold text-yellow-600">3</p>
          </div>
          <div className="bg-purple-100 p-2 rounded-lg shadow hover:shadow-lg transition">
            <h1 className="text-lg font-semibold text-purple-800">
              Future Alerts (Current Month)
            </h1>
            <p className="text-2xl font-bold text-purple-600">8</p>
          </div>
          <div className="bg-red-100 p-2 rounded-lg shadow hover:shadow-lg transition">
            <h1 className="text-lg font-semibold text-red-800">
              Doses Given (Current Month)
            </h1>
            <p className="text-2xl font-bold text-red-600">0</p>
          </div>
          <div className="bg-teal-100 p-2 rounded-lg shadow hover:shadow-lg transition">
            <h1 className="text-lg font-semibold text-teal-800">
              Revenue (Current Month)
            </h1>
            <p className="text-2xl font-bold text-teal-600">4</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
