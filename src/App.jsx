import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from"./pages/Home";
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/login'
import Navbar from './Components/Navbar';

const App = () => {
  return(
     <>
    
        <Navbar />
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/Login"element={<Login/>}/>
          <Route path="/Profile"element={<Profile/>}/>
          <Route path="/Signup"element={<Signup/>}/>
        </Routes>
     
  </>
  );
};

export default App;