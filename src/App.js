import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import './App.css';

const HatsPage = () =>(
  <div>
    <h1> Hat page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route  path='/shop/hats' element={<HatsPage />} />
      </Routes> 
    </div>
  );
}

export default App;
