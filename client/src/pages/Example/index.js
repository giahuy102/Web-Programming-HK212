
import './style.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Example() {

    const [exampleData, setExampleData] = useState('');
    useEffect(() => {
        // axios.get(`http://localhost/example/99?a=2`)
        axios.get(`http://localhost/Web-Programming-HK212/index.php/example/99?a=2&b=5`)
        .then(res => {
            console.log(res.data);
            setExampleData(JSON.stringify(res.data));
        })
        .catch(error => {
            console.log(error);
        }, []);
    });
    return (
        // <p>{ exampleData }</p>
        <h1>Example page</h1>
    );
}