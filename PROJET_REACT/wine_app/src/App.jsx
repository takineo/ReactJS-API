import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Cocktail from './Cocktail';
import Favoris from './Favoris';
import NoPage from './NoPage';


function App() {
  
    return (
      <>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="Cocktail" element={<Cocktail />} />
              <Route path="Favoris" element={<Favoris />} />
              <Route path="NoPage" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  
}


export default App
