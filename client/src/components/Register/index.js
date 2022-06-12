import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Register() {

    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [successful, setSuccessful] = useState(true);
    const [message, setMessage] = useState('');

    const handleRegister = async(event) => {
        event.preventDefault();
        // AuthService.register(
        //     username, email, password
        // ).then(response => {
        //     setSuccessful(true);
        //     console.log(response);
        //     navigate('/login');
        // }).catch(err => { 
        //     // console.log(4);
        //     setSuccessful(false);
        //     setMessage(err.response.data);
        //     console.log(err.response.data);
        // })
        await axios({
            method: 'post',
            url: `http://localhost/user/register`,
            data: {
                username: username,
                email: email,
                password: password,
                name: name,
                phoneNumber: phoneNumber,
                address: address
            }
        }).then(function (response) {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="wrapper-container">
            <form className="form home_form">
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Email address</label>
                    <input className="form-control" id="email" type='email' onChange={ (event) => setEmail(event.target.value) }></input>
                </div>
                <div className="mb-3">
                    <label htmlFor='phone' className="form-label">Phone number</label>
                    <input className="form-control" id="phone" type='text' onChange={ (event) => setPhoneNumber(event.target.value) }></input>
                </div>

                <div className="mb-3">
                    <label htmlFor='username' className="form-label">Username</label>
                    <input className="form-control" id="username" type='text' onChange={ (event) => setUsername(event.target.value) }></input>
                </div>

                <div className="mb-3">
                    <label htmlFor='password' className="form-label">Password</label>
                    <input className="form-control" id="password" type='password' onChange={ (event) => setPassword(event.target.value) }></input>
                </div>
                <button className='btn btn-primary my-btn' type='submit' onClick={ handleRegister }>Register</button>
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