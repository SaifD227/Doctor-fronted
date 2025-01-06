import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

type ResetPasswordParams = {
  token: string;
};

const ResetPassword: React.FC = () => {
  const { token } = useParams<ResetPasswordParams>();
  const [newPassword, setNewPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  console.log(localStorage.getItem("authToken"));
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4000/api/user/reset-password/${token}`,
        { newPassword }
      );
      console.log(localStorage.getItem("authToken"));

      setMessage(response.data.message);
      setError("");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response ? err.response.data.message : "Error resetting password"
        );
      } else {
        setError("An unexpected error occurred");
      }
      setMessage("");
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>

      {error && <div className="error">{error}</div>}
      {message && <div className="success">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
