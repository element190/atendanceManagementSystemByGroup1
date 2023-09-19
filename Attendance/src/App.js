import SignUp from './features/auth/register/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/auth/login/Login';
import signUp from "./features/auth/register/SignUp";

// import SideBar from "./features/layout/NavBar/SideBar";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  //  <SideBar></SideBar>
  );
}

export default App;
