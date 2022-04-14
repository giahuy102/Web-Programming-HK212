import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get(`http://localhost/example`)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      }, []);
  });

  return (
    <div className="App">

    </div>
  );
}

export default App;
