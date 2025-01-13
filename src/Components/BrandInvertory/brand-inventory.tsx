import { GrUpdate } from "react-icons/gr";
const BrandInventory = () => {
  const data = [
    { vaccineName: " Vaccine", brandName: "Pfizer", price: "$20", inventory: "200" },
    { vaccineName: "Flu Vaccine", brandName: "Moderna", price: "$15", inventory: "300" },
    { vaccineName: "COVID-19 ", brandName: "Pfizer", price: "$20", inventory: "200" },
    { vaccineName: "Flu Vaccine", brandName: "Moderna", price: "$15", inventory: "300" },
    { vaccineName: "Hepatitis", brandName: "GSK", price: "$25", inventory: "150" },
    { vaccineName: "Vaccine", brandName: "Pfizer", price: "$20", inventory: "200" },
    { vaccineName: "Flu Vaccine", brandName: "Moderna", price: "$15", inventory: "300" },
    { vaccineName: "Vaccine", brandName: "GSK", price: "$25", inventory: "150" },
    { vaccineName: "Hepatitis B Vaccine", brandName: "GSK", price: "$25", inventory: "150" },
  ];

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      <h2 className="text-lg text-gray-600  font-bold mb-4">Brand Inventory:</h2>
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
              <td className="border border-gray-400 px-4 py-2">{item.price}</td>
              <td className="border border-gray-400 px-4 py-2">{item.inventory}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
  <button className="bg-blue-500 rounded-full text-white p-4 flex items-center justify-center">
    <GrUpdate />
  </button>
</div>

    </div>
  );
};

export default BrandInventory;
