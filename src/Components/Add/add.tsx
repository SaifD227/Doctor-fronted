import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const countryPhoneCodes = {
    Pakistan: "+92",
    USA: "+1",
    UK: "+44",
    Canada: "+1",
    Australia: "+61",
    India: "+91",
    Germany: "+49",
    France: "+33",
    China: "+86",
    Japan: "+81",
  };

  const [selectedCountry, setSelectedCountry] = useState<
    keyof typeof countryPhoneCodes | ""
  >("");
  const [selectedCity, setSelectedCity] = useState("");
  const [formData, setFormData] = useState({
    patientName: "",
    guardianName: "",
    gender: "",
    dob: "",
    plan: "",
    email: "",
    phone: "",
  });

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Quetta",
    "Multan",
    "Faisalabad",
    "Sialkot",
    "Hyderabad",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { patientName, gender, dob, plan, email, phone } = formData;

    if (!patientName.trim()) {
      toast.error("Patient Name is required!");
      return false;
    }
    if (!gender) {
      toast.error("Please select a gender!");
      return false;
    }
    if (!dob) {
      toast.error("Date of Birth is required!");
      return false;
    }
    if (!plan) {
      toast.error("Please select a subscription plan!");
      return false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Valid email is required!");
      return false;
    }
    if (!selectedCountry) {
      toast.error("Please select a country!");
      return false;
    }
    if (!phone.trim() || !/^\d+$/.test(phone)) {
      toast.error("Valid phone number is required!");
      return false;
    }
    if (!selectedCity) {
      toast.error("Please select a city!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const fullFormData = {
      ...formData,
      country: selectedCountry,
      city: selectedCity,
      clinic_id: "64b6a6e2dabc3a4f8f8e5678",
      user_id: "64b6a6e2dabc3a4f8f8e1234",
    };

    try {
      setLoading(true); // Set loading true when making the request
      const response = await fetch("http://localhost:4000/api/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      toast.success("Form submitted successfully!");
      setFormData({
        patientName: "",
        guardianName: "",
        gender: "",
        dob: "",
        plan: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setLoading(false); // Set loading false after the request finishes
    }
  };

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      {loading ? (
        // Spinner while loading
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <>
          <ToastContainer />
          <div className="bg-white shadow rounded p-4">
            <form onSubmit={handleSubmit}>
              {/* Patient Name */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="patientName"
                >
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  className="border-b border-gray-500 w-full p-2 focus:outline-none"
                  placeholder="Enter patient name"
                  value={formData.patientName}
                  onChange={handleChange}
                />
              </div>

              {/* Guardian's Name */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="guardianName"
                >
                  Guardian's Name
                </label>
                <input
                  type="text"
                  id="guardianName"
                  name="guardianName"
                  className="border-b border-gray-500 w-full p-2 focus:outline-none"
                  placeholder="Enter guardian's name"
                  value={formData.guardianName}
                  onChange={handleChange}
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Gender
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="mr-2"
                      onChange={handleChange}
                      checked={formData.gender === "male"}
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="mr-2"
                      onChange={handleChange}
                      checked={formData.gender === "female"}
                    />
                    Female
                  </label>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="dob"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="border rounded w-full p-2"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              {/* Subscription Plan */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Subscription Plan
                </label>
                <div className="flex items-center justify-between gap-4">
                  {["regular", "epiPlus", "customize"].map((plan) => (
                    <label key={plan} className="flex items-center">
                      <input
                        type="radio"
                        name="plan"
                        value={plan}
                        className="mr-2"
                        onChange={handleChange}
                        checked={formData.plan === plan}
                      />
                      {plan.charAt(0).toUpperCase() + plan.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-b border-gray-500 w-full p-2 focus:outline-none"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Country Phone Form */}
              <div className="flex flex-wrap gap-4">
                <div className="mb-4 w-full max-w-sm">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="country"
                  >
                    Select Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="border rounded w-full p-2 focus:outline-none"
                    onChange={(e) =>
                      setSelectedCountry(
                        e.target.value as keyof typeof countryPhoneCodes
                      )
                    }
                    value={selectedCountry}
                  >
                    <option value="">-- Select a Country --</option>
                    {Object.keys(countryPhoneCodes).map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedCountry && (
                  <div className="mb-4 w-full max-w-sm">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="phone"
                    >
                      Phone Number ({selectedCountry})
                    </label>
                    <div className="flex items-center">
                      <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l">
                        {countryPhoneCodes[selectedCountry]}
                      </span>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="border rounded-r w-full p-2 focus:outline-none"
                        placeholder={`Enter phone number for ${selectedCountry}`}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* City Selection */}
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Select City
                </label>
                <select
                  id="city"
                  name="city"
                  className="border rounded w-full p-2 focus:outline-none"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">-- Select a City --</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Add;
