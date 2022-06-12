
import './style.css';

import React, {useState, useEffect} from "react";
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomeComponent from '../../components/HomeComponent';
import Menu from '../../components/Menu';
import Login from '../../components/Login';
import Register from '../../components/Register';

export default function Home() {

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
        <div>
            <Header />  
            {/* <HomeComponent /> */}
            {/* <Menu /> */}
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </div>
    );
}