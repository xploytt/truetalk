import React from "react";
import {Route, Routes} from 'react-router-dom'
import SharedLayout from './SharedLayout';
import Home from './pages/Home';
import About from './pages/About';


function App(props) {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
