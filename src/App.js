

import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Textform from './components/Textform'
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  
  
  const [mode, newmode] = useState("white");
  const darkmode = (mode) => {
    if (mode==="dark") {
      console.log('dark mode on')
      newmode("white")
      document.body.style.backgroundColor='#0b0e1c'
       document.body.style.color="white"
    }
    else if (mode==='white') {
      newmode("dark")  
      console.log('light mode on')
      document.body.style.backgroundColor='white'
            document.body.style.color="black"
  }
}
  return (
<>
   <BrowserRouter>

   <Navbar setdarkmode={darkmode}  mode={mode} />
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/texto" element={<div className="container my-8">
<Textform heading="Enter your text"/>
</div>} />
    </Routes>
  </BrowserRouter>
 </>
  );
}
export default App;
