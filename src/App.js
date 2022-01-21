import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { TitleBar } from './components/TitleBar';

function App() {
  return (
    <div className="App">
      <TitleBar />
    </div>
  );
}

export default App;
