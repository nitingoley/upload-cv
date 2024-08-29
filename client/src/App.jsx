import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './components/Home';
 
import './index.css';
import Signup from './components/Signup';
import Success from './components/Success';

const App = () => (
  <Router>
  <Routes>
      <Route path="/" element={<Home />} />
       <Route path='/signup' element= {<Signup/>} />
       <Route path='/success' element= {<Success/>} />
  </Routes>
</Router>
);

export default App;
