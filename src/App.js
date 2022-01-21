import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { TitleBar } from './components/TitleBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Footer />
    </div>
  );
}

export default App;
