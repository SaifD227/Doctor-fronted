import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword/:token" element={<ResetPassword />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/clinic/edit" element={<Edit />} />
          <Route path="/message" element={<Message />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
