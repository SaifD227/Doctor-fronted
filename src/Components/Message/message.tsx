import { useState, useEffect } from "react";

const Message = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 mt-20 flex flex-col lg:ml-64">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <>
          {/* Buttons Section */}
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <div className="relative mb-4 lg:mb-0">
              <button className="h-12 w-full lg:w-72 flex justify-center items-center hover:bg-blue-100 text-gray-500 font-medium focus:bg-blue-300 focus:border-b-2 focus:border-b-blue-600 focus:ring-0 transition-all duration-200">
                SENT MESSAGE
              </button>
            </div>
            <div className="relative mb-4 lg:mb-0">
              <button className="h-12 w-full lg:w-72 flex justify-center items-center hover:bg-blue-100 text-gray-500 font-medium focus:bg-blue-300 focus:border-b-2 focus:border-b-blue-600 focus:ring-0 transition-all duration-200">
                FAILED MESSAGE
              </button>
            </div>
          </div>

          {/* No Messages Section */}
          <div className="flex items-center justify-center bg-gray-50 shadow-lg rounded-md py-6 px-4 sm:px-8 md:px-16 lg:px-64">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600">
              No found Message!
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
