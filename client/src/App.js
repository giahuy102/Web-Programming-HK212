import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Example from './pages/Example';
import Home from './pages/Home';


function App() {

  // useEffect(() => {
  //   axios.get(`http://localhost/example`)
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     }, []);
  // });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/example" element={<Example />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
