import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

import Dropdown from 'react-bootstrap/Dropdown'
import * as BiIcons from "react-icons/bi";

export default function Header() {

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
    const calculateTotalAmount = () => {
        let count = 0;
        if (localStorage.getItem('cart_list')) {
            for (let item of JSON.parse(localStorage.getItem('cart_list'))) {
                count += item.amount;
            }
        }

        return count;
    }


    return (
        <div className='home_header_general align-items-center'>
            <div className='d-flex justify-content-between align-items-center' style={{
                width: '90%',
                backgroundColor: 'white',
                margin: 'auto'
            }}>
                <img src={require('../../assets/images/main_logo.png')} 
                    style={{
                        height: '80px',
                        width: '264px'
                    }}
                />   
                <ul className='d-flex home_header_list_link justify-content-between'
                    style={{
                        marginBottom: 0
                    }}
                
                >
                    <li>
                        <Link to='/home' className='home_header_link'>
                            Home
                        </Link>
                    </li>  

                    <li>
                        <Link to='/home/menu' className='home_header_link'>
                            Menu
                        </Link>
                    </li> 

                    <li>
                        <Link to='/home/news' className='home_header_link'>
                            News
                        </Link>
                    </li> 

                    <li>
                        <Link to='/home/cart' className='home_header_link'>
                            Cart
                            (<span
                                style={{
                                    color: '#E5B507'
                                }}
                            
                            >{calculateTotalAmount()}</span>)
                        </Link>
                    </li> 
                    
                </ul>
                {
                    localStorage.getItem('jwt_data') ? 
                    <Dropdown>
                        <Dropdown.Toggle style={{ background: 'transparent', border: '0px transparent' }} variant="success" id="dropdown-basic" className="btn-primary">
                            <BiIcons.BiUserCircle style={{ color: 'black', fontSize: 35, marginTop: 10 }} className="icon" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="http://localhost:3000/">{JSON.parse(localStorage.getItem('jwt_data')).username}</Dropdown.Item>
                            <Dropdown.Item href="http://localhost:3000/home/userinfo">Info</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                localStorage.removeItem('jwt_data');
                                window.location.href = '/home';
                            }}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    :
                <div className='d-flex justify-content-between home_header_list_link_1'>
                    <Link to='/home/register' className='home_header_link_1'>
                        Sign up
                    </Link>
                    <Link to='/home/login' className='home_header_link_2'>
                        Login
                    </Link>

                </div>
                }

            </div>
        


         
        </div>
    );
}