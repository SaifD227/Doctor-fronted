import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "../src/Components/Login";
import SignUp from "../src/Components/signUp";
import Welcome from "./Components/welcome";
import ForgetPassword from "../src/Components/forgetPassword";
import ResetPassword from "./Components/ResetPassword";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/ResetPassword/:token" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

