import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BiWindowAlt } from 'react-icons/bi';

export default function Login() {

    let navigate = useNavigate();
    // const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(true);
    const [message, setMessage] = useState('');

    const handleLogin = async(event) => {
        event.preventDefault();
        // AuthService.login(
        //     email, password
        // ).then(response => {
        //     if (response.data.accessToken) {
        //         localStorage.setItem("user", JSON.stringify(response.data));
        //     }
        //     // navigate('/', {replace: true});
        //     window.location.href = '/';
        //     console.log(response.data);
        // }).catch(err => { 
        //     // console.log(4);
        //     setSuccessful(false);
        //     setMessage(err.response.data);
        //     console.log(err.response.data);
        // })
        await axios({
            method: 'post',
            url: `http://localhost/user/login`,
            data: {
                phoneNumber: phoneNumber,
                password: password
            }
        }).then(function (response) {
            localStorage.setItem('jwt_data', JSON.stringify(response.data.jwt_data));
            if (response.data.jwt_data.role == 'admin') window.location.href = '/dashboard/overview';
            else window.location.href = '/home';
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }


    return (
        <div className="wrapper-container">
            <form className="form home_form">
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Phone number</label>
                    <input className="form-control" id="email" type='text' onChange={ (event) => setPhoneNumber(event.target.value) }></input>
                </div>

                <div className="mb-3">
                    <label htmlFor='password' className="form-label">Password</label>
                    <input className="form-control" id="password" type='password' onChange={ (event) => setPassword(event.target.value) }></input>
                </div>
                <div style={{marginBottom: '20px'}}>   
                    <small id="register-navigate" className="form-text text-muted">
                        Don't have an account.   
                        <a href="#" onClick={ (event) => navigate('/register') } > Register here</a> 
                    </small>
                </div>
                <button className='btn btn-primary my-btn' type='submit' onClick={ handleLogin }>Login</button>
            </form>
            {
                !successful &&
                <div className="alert alert-danger my-alert" role="alert">
                    { message }
                </div>
            }
            
        </div>
        
    );
}