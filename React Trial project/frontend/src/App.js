import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import UserRecord from "./Pages/UserRecord";

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/about" element={<About />} />    
      <Route path="/contact" element={<Contact />} />  
      <Route path="/login" element={<Login />} />       
      <Route path="/userRecords/:id" element={<UserRecord />} />       
    </Routes>
    <h2>Footer</h2>
    </BrowserRouter>
    </>
  );
}

export default App;
