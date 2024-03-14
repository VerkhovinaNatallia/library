import React, { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import CardBuy from "./Pages/CardBuy/CardBuy";


function App() {



  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path="/library/" element={<Home/>}/>
        <Route path="/library/login" element={<Login/>} />
        <Route path="/library/register" element={<Register/>} />
        <Route path="/library/buycard" element={<CardBuy/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;