import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { TitleBar } from './components/TitleBar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

function App() {

  // Login states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState();
  const [token, setToken] = useState();
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setId(user.id);
    setToken(user.token);
    setDisplayName(user.displayName);
    setEmail(user.email);
    setIsAdmin(user.userLevel === 'admin');
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <TitleBar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/login' element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
          <Route path='/signup' element={<Signup handleLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
