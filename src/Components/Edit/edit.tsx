// import Switch from "@mui/material/Switch";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Edit = () => {
//   const [mondayChecked, setMondayChecked] = useState(false);
//   const [session1Checked, setSession1Checked] = useState(false);
//   const [session2Checked, setSession2Checked] = useState(false);

//   const handleMondayChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     setMondayChecked(event.target.checked);
//   };

//   const handleSession1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSession1Checked(event.target.checked);
//   };

//   const handleSession2Change = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     setSession2Checked(event.target.checked);
//   };

//   return (
//     <div className="flex-1 flex flex-col lg:ml-64 p-3">
//       <div className="p-4 w-full mx-auto">
//         <Link to="/clinic" className="text-2xl font-bold text-blue-600 mb-4">
//           Edit Details
//         </Link>
//         <form className="space-y-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm text-blue-600 font-medium mb-1">
//               Name:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block text-sm font-medium text-blue-600 mb-1">
//               Phone Number :
//             </label>
//             <input
//               type="tel"
//               placeholder="Enter your phone number"
//               className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Consultation Fee */}
//           <div>
//             <label className="block text-sm text-blue-600 font-medium mb-1">
//               Consultation Fee :
//             </label>
//             <input
//               type="number"
//               placeholder="Enter consultation fee"
//               className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-sm text-blue-600 font-medium mb-1">
//               Address :
//             </label>
//             <textarea
//               placeholder="Enter your address"
//               className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
//             ></textarea>
//           </div>

//           {/* Doctor Image Upload */}
//           <div>
//             <label className="block text-blue-600 text-sm font-medium mb-1">
//               Doctor Image :
//             </label>
//             <div className="flex items-center space-x-4">
//               <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
//                 <span className="text-gray-500 text-sm">No Image</span>
//               </div>
//               <input
//                 type="file"
//                 className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-blue-600 file:cursor-pointer hover:file:bg-blue-700"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//       {mondayChecked && ( // Card visibility based on Monday switch
//         <div className="bg-white rounded-md shadow-2xl p-4">
//           <div className="flex justify-between border-b border-blue-500">
//             <p className="text-blue-600 font-medium">Monday</p>
//             <Switch
//               checked={mondayChecked}
//               onChange={handleMondayChange}
//               inputProps={{ "aria-label": "controlled" }}
//             />
//           </div>
//           <div className="flex gap-6">
//             <p className="text-blue-600 font-medium">Session1:</p>
//             <Switch
//               checked={session1Checked}
//               onChange={handleSession1Change}
//               inputProps={{ "aria-label": "controlled" }}
//             />
//           </div>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="text-blue-600 font-medium">Start Time</h1>
//               <p className="text-blue-600 font-medium">12:24am</p>
//             </div>
//             <div>
//               <h1 className="text-blue-600 font-medium">End Time</h1>
//               <p className="text-blue-600 font-medium">12:26pm</p>
//             </div>
//           </div>
//           <button className="bg-blue-700 text-white p-3 font-medium rounded-md">
//             Apply Session:1 to All
//           </button>
//           <div className="flex gap-6">
//             <h1 className="text-blue-600 font-medium">Session2:</h1>
//             <Switch
//               checked={session2Checked}
//               onChange={handleSession2Change}
//               inputProps={{ "aria-label": "controlled" }}
//             />
//           </div>
//           <button className="bg-blue-700 text-white p-3 font-medium rounded-md">
//             Apply Session:2 to All
//           </button>
//         </div>
//       )}
//       <div className="flex justify-between items-center mt-4">
//         <p className="text-blue-600 font-medium">Monday</p>
//         <Switch
//           checked={mondayChecked}
//           onChange={handleMondayChange}
//           inputProps={{ "aria-label": "controlled" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Edit;








import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

interface ClinicData {
  _id: string;
  name: string;
  consultation_fee: number;
  phone_number: string;
  address: string;
  is_online: boolean;
  monogram_image: string;
}

const Edit = () => {
  const [clinic, setClinic] = useState<ClinicData | null>(null);
  // const [mondayChecked, setMondayChecked] = useState(false);
  // const [session1Checked, setSession1Checked] = useState(false);
  // const [session2Checked, setSession2Checked] = useState(false);
  const { clinicId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (clinicId) {
      fetch(`http://localhost:4000/api/clinic/${clinicId}`)
        .then((response) => response.json())
        .then((data) => {
          setClinic(data);
        })
        .catch((error) => console.error("Error fetching clinic:", error));
    }
  }, [clinicId]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Update clinic logic
    fetch(`http://localhost:4000/api/clinic/${clinicId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clinic),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/clinic");
      })
      .catch((error) => console.error("Error updating clinic:", error));
  };

  if (!clinic) {
    return <div>Loading clinic data...</div>;
  }

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      <div className="p-4 w-full mx-auto">
        <Link to="/clinic" className="text-2xl font-bold text-blue-600 mb-4">
          Edit Details
        </Link>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-blue-600 font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              value={clinic.name}
              onChange={(e) => setClinic({ ...clinic, name: e.target.value })}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-600 mb-1">
              Phone Number :
            </label>
            <input
              type="tel"
              value={clinic.phone_number}
              onChange={(e) =>
                setClinic({ ...clinic, phone_number: e.target.value })
              }
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-blue-600 font-medium mb-1">
              Consultation Fee :
            </label>
            <input
              type="number"
              value={clinic.consultation_fee}
              onChange={(e) =>
                setClinic({
                  ...clinic,
                  consultation_fee: parseInt(e.target.value),
                })
              }
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-blue-600 font-medium mb-1">
              Address :
            </label>
            <textarea
              value={clinic.address}
              onChange={(e) => setClinic({ ...clinic, address: e.target.value })}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;


