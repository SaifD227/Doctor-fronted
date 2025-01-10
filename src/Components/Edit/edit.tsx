import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      <div className="p-4  w-full mx-auto">
        <Link to="/clinic" className="text-2xl font-bold text-blue-600 mb-4">
          Edit Details
        </Link>
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
                <span className="text-gray-500  text-sm">No Image</span>
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
    </div>
  );
};

export default Edit;
