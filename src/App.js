import logo from './logo.svg';
import './App.scss';

import Navbar from './components/Navbar';
import Grid from './components/Grid';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
