import React from 'react';

const Schedule: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      <div className="flex items-center justify-between  p-2  border-b border-gray-400">
        <label htmlFor="bcg-checkbox" className="flex items-center">
          <input 
            id="bcg-checkbox"
            type="checkbox" 
            className="mr-2" 
          />
          <span>BCG</span>
        </label>
        <div>
          <span>At Birth</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
