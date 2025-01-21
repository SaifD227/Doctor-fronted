import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Patient {
  _id: string;
  patientName: string;
  fatherName?: string;
  guardianName?: string;
  gender: string;
  dob: string;
  phone: string;
  image?: string;
  city?: string;
}

const Edit = () => {
  const { id: patientId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState<Patient | null>(null);
  const [formData, setFormData] = useState<Patient>({
    _id: "",
    patientName: "",
    gender: "",
    dob: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    fetchPatientData(patientId);
  }, [patientId]);
  const fetchPatientData = async (patientId: string | undefined) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/patient/${patientId}`
      );
      const data = await response.json();
      console.log(data);
      setPatientData(data);
      setFormData(data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {}, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/patient/${patientId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        navigate("/patient"); // Redirect after successful update
        toast.success("Patient updated successfully");
      } else {
        alert("Error updating patient");
      }
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 mt-20 flex flex-col lg:ml-64 p-3">
      <h1 className="text-2xl font-bold mb-4">Edit Patient</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label
            htmlFor="patientName"
            className="block font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name"
          />
        </div>

        {/* Father's Name */}
        <div>
          <label
            htmlFor="guardianName"
            className="block font-medium text-gray-700"
          >
            guardianName
          </label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            value={formData.guardianName || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter guardianName"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter mobile number"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium text-gray-700">
            city
          </label>
          <input
            type="city"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter mobile number"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
