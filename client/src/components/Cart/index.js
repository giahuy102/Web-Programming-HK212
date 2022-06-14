import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, NavigationType } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useNavigate } from "react-router-dom";

export default function Cart(props) {
    let navigation = useNavigate();
    // useEffect(() => {
    //     axios.get(`http://localhost/example`)
    //     .then(res => {
    //         console.log(res.data);
    //         setExampleData(JSON.stringify(res.data)) ;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     }, []);
    // });
    const handleClick = () => {
        window.location.href = '/home/login'
    }

    const calculateTotalPrice = () => {
        let count = 0;
        // if (localStorage.getItem('cart_list')) {
        //     for (let item of JSON.parse(localStorage.getItem('cart_list'))) {
        //         count += item.price * item.amount;
        //     }
        // }
        for (let item of props.cartList) {
            count += item.price * item.amount;
        }
        return count;
    }


    return (   
        <div>
            {/* <h2>Your cart</h2> */}
            <div className='cart_list'>
                {   
                    props.cartList?.map((item, index) => {
                        return (

                            <div className='cart_item d-flex align-items-center justify-content-around' key={index}
                                style={{
                                    marginTop: '40px'
                                }}
                            
                            >
                                    <div className='cart_product_detail d-flex align-items-center justify-content-between'>
                                        <img
                                            style={{
                                                width: '200px',
                                                height: '200px',
                                                display: 'inline-block',
                                                borderRadius: '20px'
                                            }}
                                        
                                        src={item.urlImage}/>
                                        <div
                                            style={{
                                                marginLeft: '30px'
                                            }}
                                        >
                                            <h4>{item.productName}</h4>
                                            <button className='btn btn-warning' onClick={() => props.removeCartItem(index)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className='amount d-flex align-items-center justify-content-between'>
                                        <button className='btn btn-danger' onClick={() => props.changeCartAmount(index, '-')}>-</button>
                                        <span>{item.amount}</span>
                                        <button className='btn btn-danger' onClick={() => props.changeCartAmount(index, '+')}>+</button>

                                    </div>
                                    <span
                                        style={{
                                            fontSize: '25px'
                                        }}
                                    
                                    className='price'>{item.price}$</span>
                                
                            </div>

                        );
                    })
                }

            </div>

            <div
                style={{
                    width: '80%',
                    margin: 'auto',
                    marginTop: '50px'
                }}
                className='d-flex justify-content-around align-items-center'
            >
                <span
                    style={{
                        fontWeight: 'bold',
                        fontSize: '40px'
                    }}
                >Subtotal</span>
                <span
                    style={{
                        fontSize: '30px',
                    
                    }}
                >
                    {
                        calculateTotalPrice()
                    }$
                </span>
                <button
                    className='btn btn-primary'
                    style={{
                        backgroundColor: '#E0B531',
                        color: 'white'
                    }}

                    onClick={
                        () => {
                            localStorage.removeItem('cart_list');
                            window.location.href = '/home'
                        }
                    }
                >
                    Continue to checkout
                </button>

            </div>

        </div>
    );
}