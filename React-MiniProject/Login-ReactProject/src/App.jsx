import Navbar from "./Navbar";
import { useState } from 'react';
import { Routes, Route, useLocation} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LoginPage from "./Login_Register Pages/LoginPage";

import Header from "./Header/Header";

import RegisterPage from "./Login_Register Pages/RegisterPage";



function App(){

  const [ShowNav, setShowNav] = useState(false);
  const location = useLocation();

  // Define paths where we want to HIDE the layout (like Header, Navbar)
  const hideLayoutRoutes = [];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return(
    <>
      {!shouldHideLayout && <Header setShowNav={setShowNav} />}
      {!shouldHideLayout && <Navbar show={ShowNav} />}

        <div className="Main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="register" element={<RegisterPage/>} />
          </Routes>
        </div>
    </>
  );
}
export default App
