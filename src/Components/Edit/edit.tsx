// import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const Edit = () => {
  const [mondayChecked, setMondayChecked] = useState(false); // Monday switch state
  const [session1Checked, setSession1Checked] = useState(false); // Session 1 switch state
  const [session2Checked, setSession2Checked] = useState(false); // Session 2 switch state

  const handleMondayChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMondayChecked(event.target.checked); // Toggle Monday card visibility
  };

  const handleSession1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSession1Checked(event.target.checked); // Toggle Session 1 switch
  };

  const handleSession2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSession2Checked(event.target.checked); // Toggle Session 2 switch
  };

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      <div className="p-4 w-full mx-auto">
        <p className="text-2xl font-bold text-blue-600 mb-4">Edit Details</p>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm text-blue-600 font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-blue-600 mb-1">
              Phone Number :
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Consultation Fee */}
          <div>
            <label className="block text-sm text-blue-600 font-medium mb-1">
              Consultation Fee :
            </label>
            <input
              type="number"
              placeholder="Enter consultation fee"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm text-blue-600 font-medium mb-1">
              Address :
            </label>
            <textarea
              placeholder="Enter your address"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Doctor Image Upload */}
          <div>
            <label className="block text-blue-600 text-sm font-medium mb-1">
              Doctor Image :
            </label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
              <input
                type="file"
                className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-blue-600 file:cursor-pointer hover:file:bg-blue-700"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      {mondayChecked && ( // Card visibility based on Monday switch
        <div className="bg-white rounded-md shadow-2xl p-4">
          <div className="flex justify-between border-b border-blue-500">
            <p className="text-blue-600 font-medium">Monday</p>
            <Switch
              checked={mondayChecked}
              onChange={handleMondayChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="flex gap-6">
            <p className="text-blue-600 font-medium">Session1:</p>
            <Switch
              checked={session1Checked}
              onChange={handleSession1Change}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-blue-600 font-medium">Start Time</h1>
              <p className="text-blue-600 font-medium">12:24am</p>
            </div>
            <div>
              <h1 className="text-blue-600 font-medium">End Time</h1>
              <p className="text-blue-600 font-medium">12:26pm</p>
            </div>
          </div>
          <button className="bg-blue-700 text-white p-3 font-medium rounded-md">
            Apply Session:1 to All
          </button>
          <div className="flex gap-6">
            <h1 className="text-blue-600 font-medium">Session2:</h1>
            <Switch
              checked={session2Checked}
              onChange={handleSession2Change}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <button className="bg-blue-700 text-white p-3 font-medium rounded-md">
            Apply Session:2 to All
          </button>
        </div>
      )}
      <div className="flex justify-between items-center mt-4">
        <p className="text-blue-600 font-medium">Monday</p>
        <Switch
          checked={mondayChecked}
          onChange={handleMondayChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  );
};

export default Edit;
