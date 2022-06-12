import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

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
                        <Link to='/home/contact' className='home_header_link'>
                            Contact
                        </Link>
                    </li> 

                    <li>
                        <Link to='/home/cart' className='home_header_link'>
                            Cart
                            (<span
                                style={{
                                    color: '#E5B507'
                                }}
                            
                            >3</span>)
                        </Link>
                    </li> 
                    
                </ul>
                <div className='d-flex justify-content-between home_header_list_link_1'>
                    <Link to='/home/register' className='home_header_link_1'>
                        Sign up
                    </Link>
                    <Link to='/home/login' className='home_header_link_2'>
                        Login
                    </Link>

                </div>
            </div>
        


         
        </div>
    );
}