import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Patient from "../Patients/patient";
import { MdAdd } from "react-icons/md";

interface ClinicData {
  _id: string;
  name: string;
  consultation_fee: number;
  phone_number: string;
  address: string;
  is_online: boolean;
  monogram_image: string;
}

const Clinic = () => {
  const [clinics, setClinics] = useState<ClinicData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/clinic")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setClinics(data);
        } else if (data && data._id) {
          setClinics([data]);
        } else {
          setError("No clinic data found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching clinic data:", error);
        setError("Error fetching clinic data.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDeleteClinic = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/clinic/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setClinics((prevClinics) =>
          prevClinics.filter((clinic) => clinic._id !== id)
        );
        toast.success("Clinic deleted successfully");
      } else {
        toast.error("Error deleting clinic");
      }
    } catch {
      toast.error("Error deleting clinic");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 mt-20 flex flex-col lg:ml-64 p-3">
      {error && <div>{error}</div>}

      {clinics.length > 0 ? (
        clinics.map((clinic) => (
          <div
            key={clinic._id}
            className="p-6 bg-white shadow-xl rounded-md mb-4"
          >
            <div className="flex justify-between border-b-2 border-gray-500">
              <div>
                <p>{clinic.name}</p>
              </div>
              <div className="flex">
                <Link
                  to={{ pathname: `/clinic/edit/${clinic._id}` }}
                  className="text-3xl text-blue-600"
                >
                  <FaEdit />
                </Link>
                <button className="text-3xl text-blue-600">
                  <DeleteConfirmationModal
                    onDelete={handleDeleteClinic}
                    patientId={clinic._id}
                  />
                </button>
              </div>
            </div>
            <div>
              <div className="text-gray-700">
                <p>Consultation Fee: {clinic.consultation_fee}</p>
                <p>Phone Number: {clinic.phone_number}</p>
                <p>Address: {clinic.address}</p>
              </div>
              <div className="space-x-4">
                <button className="border-blue-600 p-2 px-8 border-2">
                  <div className="flex items-center">
                    patients
                    <span className="bg-blue-500 rounded-3xl text-white px-2">
                      {Patient.length}
                    </span>
                  </div>
                </button>
                <button className="border-blue-600 p-2 px-8 border-2">
                  {clinic.is_online ? "Set as offline" : "Set as online"}
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-600 my-4">
          No clinic data available.
        </div>
      )}

      <ToastContainer />
      <div className="flex justify-end">
        <Link
          to="/newClinic"
          className="flex items-center bg-blue-500 text-white rounded-lg py-2 px-4 shadow-lg hover:bg-blue-600 transition duration-300 mt-40"
        >
          <MdAdd className="mr-2 text-xl" />
          <span className="text-sm font-semibold">New Clinic</span>
        </Link>
      </div>
    </div>
  );
};

export default Clinic;
