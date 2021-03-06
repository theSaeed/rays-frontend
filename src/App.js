import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import './App.css';
import { TitleBar } from './components/TitleBar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Logout } from './components/Logout';
import { Collections } from './components/Collections';
import { Collection } from './components/Collection';
import { Create } from './components/Create';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <BrowserRouter>
          <TitleBar />
          <Routes>
            <Route exact path='/' element={<Collections />} />
            <Route path='/collection/:collectionId' element={<Collection />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/create' element={<Create />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
