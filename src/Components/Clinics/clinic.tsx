// import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Clinic = () => {
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
    return <div className="flex-1 flex flex-col lg:ml-64 p-3 justify-center items-center">Error: You are not authorized to view this page.</div>;
  }

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      <div className=" p-6  bg-white shadow-xl rounded-md ">
        <div className="flex  justify-between  border-b-2 border-gray-500  ">
          <div>
            <p>Durrani</p>
          </div>
          <div>
            <button>
            <Link to="/clinic/edit" className="text-3xl text-blue-600">
              <FaEdit />
            </Link>
            </button>
            <button className="text-3xl text-blue-600">
              <DeleteConfirmationModal />
            </button>
          </div>
        </div>
        <div>
          <div className="text-gray-700">
            <p>Consultation Fee: 5000</p>
            <p>Phone Number:3333333333</p>
            <p>Address: Islamabad</p>
          </div>
          <div className="  space-x-4 ">
            <button className="border-blue-600 p-2 px-8 border-2">
              <div className="flex items-center ">
                patients
                <span className="bg-blue-500 rounded-3xl text-white px-2">
                  0
                </span>
              </div>
            </button>

            <button className=" border-blue-600 p-2  px-8  border-2">
              Set as online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;


