import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stima from "./zizu/Electricity";
import Fuel from './zizu/Fuel';
import Selector from './zizu/Selector';
import './CSS/App.css';
import Navbar from './HomePage/NavBar';
import Shipping from './zizu/Shipping';
import Login from './HomePage/Login';
import Home from './HomePage/Home'
import AboutUs from './HomePage/About';
import GetData from './Visuals/GetData';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/zizu/Stima" element={<Stima />} ></Route>
      <Route path="/zizu/Fuel" element={<Fuel/>} ></Route>
      <Route path="/zizu/Shipping" element={<Shipping/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/estimate" element={<Selector/>} ></Route>
      <Route exact path="/aboutus" element={<AboutUs/>} ></Route>
      <Route path="/visual/GetData" element={<GetData/>} ></Route>
      <Route exact path="/" element={<Home/>} ></Route>
    </Routes>  
  </BrowserRouter>
  );
}

export default App;

 