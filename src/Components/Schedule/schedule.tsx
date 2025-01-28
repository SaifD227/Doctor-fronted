import { IoMdArrowDropdown } from "react-icons/io";
import { BCGDialog } from "../BCGDialog";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Schedule: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  interface ScheduleItem {
    checked: boolean;
    name: string;
    time: string;
  }

  const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([]); // State to hold API data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:4000/api/schedule");
        setScheduleData(response.data);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Error fetching schedule data");
        } else {
          setError("Error fetching schedule data");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex-1 mt-20 flex flex-col lg:ml-64 p-3">
      {scheduleData.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between text-xl p-2 border-b border-gray-400"
        >
          <label
            htmlFor={`bcg-checkbox-${index}`}
            className="flex items-center"
          >
            <input
              id={`bcg-checkbox-${index}`}
              type="checkbox"
              className="mr-2 text-2xl"
              defaultChecked={item.checked || false}
            />
            <span>{item.name || "BCG"}</span>
          </label>
          <div className="flex items-center">
            <span
              onClick={handleOpenDialog}
              className="cursor-pointer flex items-center"
            >
              {item.time || "At Birth"}
              <IoMdArrowDropdown />
            </span>
          </div>
        </div>
      ))}
      <BCGDialog open={openDialog} onClose={handleCloseDialog}  />
      <div className="flex flex-col justify-end gap-6 mt-10">
        <div className="bg-blue-600 rounded-full text-white w-16 h-16 flex items-center justify-center text-4xl ml-auto">
          <FaPlus />
        </div>
        <div className="bg-blue-600 rounded-full text-white w-16 h-16 flex items-center justify-center text-4xl ml-auto">
          <TiTick />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
