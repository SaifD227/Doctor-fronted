import { useState } from "react";

const Patient = () => {
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

  const [selectedCountry, setSelectedCountry] = useState<keyof typeof countryPhoneCodes | "">("");
  const [selectedCity, setSelectedCity] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCity) {
      alert(`You have selected: ${selectedCity}`);
    } else {
      alert("Please select a city.");
    }
  };

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      <div className="bg-white shadow rounded p-4">
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
            required
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
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Gender</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input type="radio" name="gender" value="male" className="mr-2" />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-2"
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
          />
        </div>

        {/* Subscription Plan */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Subscription Plan
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="plan"
                value="regular"
                className="mr-2"
              />
              Regular
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="plan"
                value="epiPlus"
                className="mr-2"
              />
              EPI Plus
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="plan"
                value="customize"
                className="mr-2"
              />
              Customize
            </label>
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
              onChange={(e) => setSelectedCountry(e.target.value as keyof typeof countryPhoneCodes)}
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
                />
              </div>
            </div>
          )}
        </div>

        {/* City Selection */}
        <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Patient;
