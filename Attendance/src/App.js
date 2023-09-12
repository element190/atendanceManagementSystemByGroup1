import SignUp from './features/auth/register/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/auth/login/Login';
// import SignUp from "./features/auth/register/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
    // <Login></Login>

    // <SignUp></SignUp>
  );
}

export default App;
