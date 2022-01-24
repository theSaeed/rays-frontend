import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import './App.css';
import { TitleBar } from './components/TitleBar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Logout } from './components/Logout';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <BrowserRouter>
          <TitleBar />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
