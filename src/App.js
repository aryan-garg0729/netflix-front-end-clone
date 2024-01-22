import React from 'react'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { Route, Routes } from 'react-router-dom';
import Err404 from './pages/Err404';
import Home from './pages/Home';
import Watch from './pages/Watch';

const App = ()=>{
  return (
    <>
      {/* <Watch/>
      <Home/> */}
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='*' element={<Err404/>}/>
      </Routes>
    </>
  );
}

export default App;
