const Vacation = () => {
  return (
    <div className="flex-1 mt-20 flex flex-col lg:ml-64 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Date Inputs */}
        <div className="flex space-x-4">
          <div className="w-full">
            <label
              htmlFor="start-date"
              className="text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              className="mt-2 w-full p-3 border-b border-gray-300  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="end-date"
              className="text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              className="mt-2 w-full p-3 border-b border-gray-300  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <p className="text-3xl text-blue-500 font-medium">Clinics</p>

        {/* Radio Input */}
        <div className="flex items-center space-x-3 p-3 border-b-2 border-gray-300 hover:bg-indigo-100">
          {/* Checkbox */}
          <input
            type="checkbox"
            id="saif"
            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
          />

          <label
            htmlFor="saif"
            className="text-sm text-gray-700 w-full cursor-pointer py-2 px-4 rounded-md "
          >
            Saif Ali
          </label>
        </div>
        <div className="flex ">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vacation;
