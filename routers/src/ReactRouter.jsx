import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Error from './Components/Error';

export default function ReactRouter() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<div>Login</div>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}
