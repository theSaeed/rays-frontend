import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { TitleBar } from './components/TitleBar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className='App'>
      <TitleBar />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
