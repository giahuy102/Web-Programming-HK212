
import './style.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Contact() {

    const pathStyle = {
        backgroundColor: 'white',
        textAlign: 'left',
    }
    const contactStyle = {
        backgroundColor: '#F7F8FC',
    }

    return (
        <div className="container" style={{maxWidth: 2000, height: '100%'}}>
            <div className='path' style={pathStyle}>
                <h1>Contact Management</h1>
            </div>
            <div className="content" style={contactStyle}>
                <h2>Some content</h2>
                <h2>Some content</h2>
                <h2>Some content</h2>
            </div>
      </div>
    );
}