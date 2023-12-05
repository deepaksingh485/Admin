import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
     
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;