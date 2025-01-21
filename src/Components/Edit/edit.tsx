import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
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

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Edit = () => {
  const [daysChecked, setDaysChecked] = useState(
    DAYS.reduce(
      (acc, day) => ({ ...acc, [day]: false }),
      {} as Record<string, boolean>
    )
  );
  const [sessionsChecked, setSessionsChecked] = useState(
    DAYS.reduce(
      (acc, day) => ({
        ...acc,
        [day]: { session1: false, session2: false },
      }),
      {} as Record<string, { session1: boolean; session2: boolean }>
    )
  );

  const [clinic, setClinic] = useState<ClinicData | null>(null);

  const { clinicId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

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

  const handleDayToggle = (day: string, checked: boolean) => {
    setDaysChecked((prev) => ({ ...prev, [day]: checked }));
  };

  const handleSessionToggle = (
    day: string,
    session: "session1" | "session2",
    checked: boolean
  ) => {
    setSessionsChecked((prev) => ({
      ...prev,
      [day]: { ...prev[day], [session]: checked },
    }));
  };

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
              Phone Number:
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
              Consultation Fee:
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
              Address:
            </label>
            <textarea
              value={clinic.address}
              onChange={(e) =>
                setClinic({ ...clinic, address: e.target.value })
              }
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-xl font-bold text-blue-600">
              Profile Image Upload
            </h1>
            <div className="max-h-fit border  w-full overflow-hidden bg-gray-100 flex items-center justify-center">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">No image selected</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
            >
              Choose Image
            </label>
            {selectedImage && (
              <button
                onClick={handleRemoveImage}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Remove Image
              </button>
            )}
          </div>

          {DAYS.map((day) => (
            <div key={day} className="bg-white rounded-md shadow-2xl p-4 my-4">
              <div className="flex justify-between border-b border-blue-500 pb-2">
                <p className="text-blue-600 font-medium">{day}</p>
                <Switch
                  checked={daysChecked[day]}
                  onChange={(e) => handleDayToggle(day, e.target.checked)}
                  inputProps={{ "aria-label": `Toggle ${day}` }}
                />
              </div>
              {daysChecked[day] && (
                <>
                  <div className="flex gap-6 mt-4">
                    <p className="text-blue-600 font-medium">Session 1:</p>
                    <Switch
                      checked={sessionsChecked[day].session1}
                      onChange={(e) =>
                        handleSessionToggle(day, "session1", e.target.checked)
                      }
                      inputProps={{ "aria-label": `Session 1 ${day}` }}
                    />
                  </div>
                  <div className="flex justify-between my-4">
                    <div>
                      <h1 className="text-blue-600 font-medium">Start Time</h1>
                      <p className="text-blue-600 font-medium">12:24 am</p>
                    </div>
                    <div>
                      <h1 className="text-blue-600 font-medium">End Time</h1>
                      <p className="text-blue-600 font-medium">12:26 pm</p>
                    </div>
                  </div>
                  <button className="bg-blue-700 text-white p-3 font-medium rounded-md">
                    Apply Session 1 to All
                  </button>

                  <div className="flex gap-6 mt-4">
                    <h1 className="text-blue-600 font-medium">Session 2:</h1>
                    <Switch
                      checked={sessionsChecked[day].session2}
                      onChange={(e) =>
                        handleSessionToggle(day, "session2", e.target.checked)
                      }
                      inputProps={{ "aria-label": `Session 2 ${day}` }}
                    />
                  </div>
                  <button className="bg-blue-700 text-white p-3 font-medium rounded-md mt-2">
                    Apply Session 2 to All
                  </button>
                </>
              )}
            </div>
          ))}
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
