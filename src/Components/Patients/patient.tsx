import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { IoIosMan } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import image1 from "../../assets/3048127.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Patient {
  _id: string;
  patientName: string;
  gender: string;
  dob: string;
  phone: string;
  image?: string;
}

const Patient = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); 

  useEffect(() => {
    fetchPatients("");
  }, []);

  const fetchPatients = async (searchTerm: string = "") => {
    try {
      const response = await fetch(`http://localhost:4000/api/patient${searchTerm ? `/search?patientName=${searchTerm}` : ''}`);
      const data = await response.json();
      setPatients(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching patient data:", error);
      setLoading(false);
    }
  };
  const handleDeletePatient = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/patient/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setPatients((prevPatients) =>
          prevPatients.filter((patient) => patient._id !== id)
        );
        toast.success("Patient deleted successfully");
      } else {
        toast.error("Error deleting patient");
        console.error("Error deleting patient");
      }
    } catch (error) {
      toast.error("Error deleting patient");
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div className="flex-1 mt-20 flex flex-col lg:ml-64 p-3">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between border-b border-gray-400 p-2">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none focus:border-blue-500 py-2 px-4 w-full"
              value={searchTerm} 
              onChange={(e) => {
                setSearchTerm(e.target.value); 
                fetchPatients(e.target.value); 
              }}
          />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 mx-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Search
            </button>
          </div>

          {patients.map((patient) => (
            <div
              key={patient._id}
              className="border-4 border-blue-600 p-4 rounded-lg mt-4 shadow-lg"
            >
              <div className="p-2 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="p-3 border-4 border-blue-700 rounded-full"
                    src={patient.image || image1}
                    alt="patient"
                    width={100}
                    height={100}
                  />
                  <p className="ml-2 font-semibold border-b border-gray-400">
                    {patient.patientName}
                  </p>
                </div>
                <div className="flex gap-6 text-xl text-blue-600">
                  <Link to={`/edit1/${patient._id}`}>
                    <FaRegEdit className="cursor-pointer text-3xl" />
                  </Link>

                  <DeleteConfirmationModal
                    onDelete={handleDeletePatient}
                    patientId={patient._id}
                  />
                  <button>
                    <IoChatbox className="cursor-pointer text-3xl" />
                  </button>
                </div>
              </div>
              <div className="flex gap-6 mt-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <IoIosMan />
                  <p>{patient.gender}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <SlCalender />
                  <p>{patient.dob}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MdCall />
                  <p>{patient.phone}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="border border-blue-500 py-1 px-4 text-blue-500 rounded hover:bg-blue-100">
                  Vaccine
                </button>
                <button className="border border-blue-500 py-1 px-4 text-blue-500 rounded hover:bg-blue-100">
                  Follow Up
                </button>
                <button className="border border-blue-500 py-1 px-4 text-blue-500 rounded hover:bg-blue-100">
                  Invoice
                </button>
                <button className="border border-blue-500 py-1 px-4 text-blue-500 rounded hover:bg-blue-100">
                  Deactivate
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Patient;
