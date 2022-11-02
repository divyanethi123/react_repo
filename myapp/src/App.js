import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hocks from './components/hocks';
import Sample from './components/sample';

import Nav from './components/nav';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/Sample' element={<Sample/>}/> 
          <Route path='/Hocks' element={<Hocks/>}/> 
          </Routes>     
        </BrowserRouter>
    </div>
  );
}

export default App;
