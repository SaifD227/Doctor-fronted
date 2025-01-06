export interface UserData {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  password: string;
  qualification: string;
}
export interface SignUpResponse {
  success: boolean;
  message: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    qualification: string;
    phoneNumber: string;
  };
}
