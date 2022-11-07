import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Nav from './components/nav';

import App from './App';
// import Company from './components/Company';
import Parent from './propsfunctions/Parent';
// import Hocks from './components/hocks';
// import Sample from './components/sample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
    {/* <Hocks/> */} 
    {/* <Sample/> */}
       {/* <Company/>  */}
  
   {/* <Parent></Parent> */}
  </React.StrictMode>
);


