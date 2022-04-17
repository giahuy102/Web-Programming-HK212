
import './style.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Example() {

    const [exampleData, setExampleData] = useState('');
    useEffect(() => {
        axios.get(`http://localhost/example/8`)
        .then(res => {
            console.log(res.data);
            setExampleData(JSON.stringify(res.data));
        })
        .catch(error => {
            console.log(error);
        }, []);
    });
    return (
        <p>{ exampleData }</p>
    );
}