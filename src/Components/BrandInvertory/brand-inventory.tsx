import { MdOutlineFileDownloadDone } from "react-icons/md";
import { useEffect, useState } from "react";

interface BrandData {
  vaccineName: string;
  brandName: string;
  price: number;
  inventory: number;
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
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      {loading ? (
        // Spinner while loading
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <>
          <h2 className="text-lg text-gray-600 font-bold mb-4">Brand Inventory:</h2>
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Vaccine Name</th>
                <th className="border border-gray-400 px-4 py-2">Brand Name</th>
                <th className="border border-gray-400 px-4 py-2">Price</th>
                <th className="border border-gray-400 px-4 py-2">Inventory</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-400 px-4 py-2">{item.vaccineName}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.brandName}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        setData((prevState) =>
                          prevState.map((dataItem, idx) =>
                            idx === index
                              ? { ...dataItem, price: parseFloat(e.target.value) }
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
                      value={item.inventory}
                      onChange={(e) =>
                        setData((prevState) =>
                          prevState.map((dataItem, idx) =>
                            idx === index
                              ? { ...dataItem, inventory: parseInt(e.target.value) }
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
            <button className="bg-blue-500 rounded-full text-white p-4 flex items-center justify-center">
              <MdOutlineFileDownloadDone />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BrandInventory;








