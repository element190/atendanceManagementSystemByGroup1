import SignUp from './features/auth/register/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/auth/login/Login';
import SideBar from './features/layout/NavBar/SideBar';

// import SideBar from "./features/layout/NavBar/SideBar";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/sideBar' element={<SideBar/>}/>
      </Routes>
    </Router>
  //  <SideBar></SideBar>
  );
}

export default App;
