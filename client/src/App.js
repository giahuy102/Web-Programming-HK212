import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Example from './pages/Example';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from './components/Overview';


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
          <Route path="/home/*" element={<Home />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
