import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stima from './component/zizu/Electricity';
import Fuel from './component/zizu/Fuel';
import Selector from './component/zizu/Selector';
import './App.css';
import Navbar from './component/HomePage/NavBar';
import Shipping from './component/zizu/Shipping';
import Login from './component/HomePage/Login';
import Home from './component/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/stima" ><Stima/></Route>
        <Route path="/fuel" ><Fuel/></Route>
        <Route path="/shipping" ><Shipping/></Route>
        <Route path="/login" ><Login/></Route>
        <Route path="/estimate" ><Selector/></Route>
        <Route exact path="/" ><Home/></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;

