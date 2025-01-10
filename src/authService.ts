
import axios, { AxiosResponse } from "axios";
import {
  UserData,
  SignUpResponse,
  LoginResponse,
  LoginCredentials,
} from "./types/user";

const API_URL = "http://localhost:4000/api/user";

// Sign Up user API
export const signUpUser = (
  userData: UserData
): Promise<AxiosResponse<SignUpResponse>> => {
  return axios.post(`${API_URL}/signup`, userData);
};

// Login user API
export const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_URL}/login`,
      credentials
    );

    // Save token to localStorage
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed. Please check your credentials.");
  }
};

// Add Axios interceptor to include token in request headers
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
