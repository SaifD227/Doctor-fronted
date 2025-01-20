import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface FormErrors {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const Password: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Validation
    if (!formData.oldPassword) {
      newErrors.oldPassword = "Old password is required.";
    }
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    
    if (Object.keys(newErrors).length === 0) {
      try {
        const userId = "6784abaf3b02cd65aecdd41f"; 

        const data = {
          userId,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        };

        const response = await axios.post(
          "http://localhost:4000/api/user/change-password", 
          data
        );

        if (response.status === 200) {
          toast.success("Password updated successfully!");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.message || "An error occurred.");
        } else {
          toast.error("An error occurred.");
        }
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col lg:ml-64 p-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="oldPassword" className="block text-blue-500 text-sm font-medium mb-1">
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            placeholder="Enter old password"
            className={`w-full border-b px-3 py-2 focus:outline-none ${errors.oldPassword ? "border-red-500" : "border-gray-300"}`}
            value={formData.oldPassword}
            onChange={handleChange}
          />
          {errors.oldPassword && <p className="text-red-500 text-sm mt-1">{errors.oldPassword}</p>}
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-blue-500 text-sm font-medium mb-1">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter new password"
            className={`w-full border-b px-3 py-2 focus:outline-none ${errors.newPassword ? "border-red-500" : "border-gray-300"}`}
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-blue-500 text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password"
            className={`w-full border-b px-3 py-2 focus:outline-none ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Update Password
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Password;
