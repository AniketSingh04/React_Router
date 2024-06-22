import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function ReactRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<div>Home Page</div>} ></Route>
        <Route path='/about' element={<div>About Us</div>} ></Route>
        <Route path='/contact' element={<div>Contact</div>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}
