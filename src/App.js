import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shoppage/shoppage.component';
import './App.css';



function App() {
  return (
    <div >
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route  path='/shop' element={<ShopPage />} />
      </Routes> 
    </div>
  );
}

export default App;
