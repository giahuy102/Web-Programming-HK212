
import './style.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Example() {

    // useEffect(() => {
    //     axios.get(`http://localhost/example`)
    //     .then(res => {
    //         console.log(res.data);
    //         setExampleData(JSON.stringify(res.data));
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     }, []);
    // });
    return (
        <p>Home page</p>
    );
}