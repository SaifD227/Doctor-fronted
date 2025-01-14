import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Login from "../src/Components/Login";
import SignUp from "../src/Components/signUp";
import ForgetPassword from "../src/Components/forgetPassword";
import ResetPassword from "./Components/ResetPassword";
import Layout from "./Components/Layout/layout";
import Dashboard from "./Components/Dashboard/dashboard";
import Clinic from "./Components/Clinics/clinic";
import Edit from "./Components/Edit/edit";
import Message from "./Components/Message/message";
import BrandAmount from "./Components/BrandInvertory/brand-inventory";
import Patient from "./Components/Patients/patient";
import Add from "./Components/Add/add";
import Alert from "./Components/Alert/alert";

// Mock authentication function
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

// Private Route Component
const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword/:token" element={<ResetPassword />} />

        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/clinic"
            element={<PrivateRoute element={<Clinic />} />}
          />

          <Route path="/edit" element={<PrivateRoute element={<Edit />} />} />
          <Route
            path="/message"
            element={<PrivateRoute element={<Message />} />}
          />
          <Route
            path="/brand-inventory"
            element={<PrivateRoute element={<BrandAmount />} />}
          />
          <Route
            path="/patient"
            element={<PrivateRoute element={<Patient />} />}
          />
          <Route path="/add" element={<PrivateRoute element={<Add />} />} />
          <Route path="/alert" element={<PrivateRoute element={<Alert />} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
