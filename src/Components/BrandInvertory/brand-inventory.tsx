import { MdOutlineFileDownloadDone } from "react-icons/md";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BrandData {
  _id: string;
  amount: number;
  brand_id: {
    _id: string;
    name: string;
    vaccine_id: {
      _id: string;
      name: string;
    };
  };
  count: number;
}

const BrandInventory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<BrandData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/brandAmount/brand/6784ab2ce6a9819efc51a8c9"
        );
        const result = await response.json();
        console.log(result);

        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateData = async () => {
    try {
      const updatePromises = data.map(async (item) => {
        const response = await fetch(
          `http://localhost:4000/api/brandAmount/brand/6784ab2ce6a9819efc51a8c9/${item._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: item.amount,
              count: item.count,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update data");
        }

        return await response.json();
      });

      const updatedItems = await Promise.all(updatePromises);
      setData(updatedItems);
      toast.success("All data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="flex-1 mt-20 flex flex-col lg:ml-64 p-3">
      {loading ? (
        // Spinner while loading
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <>
          <h2 className="text-lg text-gray-600 font-bold mb-4">
            Brand Inventory:
          </h2>
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">
                  Vaccine Name
                </th>
                <th className="border border-gray-400 px-4 py-2">Brand Name</th>
                <th className="border border-gray-400 px-4 py-2">Price</th>
                <th className="border border-gray-400 px-4 py-2">Inventory</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-400 px-4 py-2">
                    {item.brand_id.vaccine_id.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.brand_id.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <input
                      type="number"
                      value={item.amount}
                      onChange={(e) =>
                        setData((prevState) =>
                          prevState.map((dataItem, idx) =>
                            idx === index
                              ? {
                                  ...dataItem,
                                  amount: parseFloat(e.target.value),
                                }
                              : dataItem
                          )
                        )
                      }
                      className="w-full text-center border-none"
                    />
                  </td>
                  <td className="border  focus:border-none border-gray-400 px-4 py-2">
                    <input
                      type="number"
                      value={item.count}
                      onChange={(e) =>
                        setData((prevState) =>
                          prevState.map((dataItem, idx) =>
                            idx === index
                              ? {
                                  ...dataItem,
                                  count: parseInt(e.target.value),
                                }
                              : dataItem
                          )
                        )
                      }
                      className="w-full text-center border-none"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <button
              // onClick={() => data.forEach(updateData)}
              onClick={updateData}
              className="bg-blue-500 rounded-full text-white p-4 flex items-center justify-center"
            >
              <MdOutlineFileDownloadDone />
            </button>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default BrandInventory;
