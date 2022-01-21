import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { TitleBar } from './components/TitleBar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <TitleBar />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
