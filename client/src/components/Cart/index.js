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
        for (let item of JSON.parse(localStorage.getItem('cart_list'))) {
            count += item.price;
        }
        return count;
    }


    return (   
        <div>
            <h2>Your cart</h2>
            <div className='cart_list'>
                {
                    JSON.parse(localStorage.getItem('cart_list')).map((item, index) => {
                        return (

                            <div className='cart_item d-flex align-items-center justify-content-around' key={index}>
                                    <div className='cart_product_detail d-flex align-items-center justify-content-between'>
                                        <img src={item.urlImage}/>
                                        <div>
                                            <h4>{item.productName}</h4>
                                            <button className='btn btn-warning' onClick={() => props.removeCartItem(index)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className='amount d-flex align-items-center justify-content-between'>
                                        <button className='btn btn-danger' onClick={() => props.changeCartAmount(index, '-')}>-</button>
                                        <span>{item.amount}</span>
                                        <button className='btn btn-danger' onClick={() => props.changeCartAmount(index, '+')}>+</button>

                                    </div>
                                    <span className='price'>{item.price}$</span>
                                
                            </div>

                        );
                    })
                }

            </div>

            <div>
                <span>Subtotal</span>
                <span>
                    {
                        
                    }
                </span>
                <button
                    className='btn btn-primary'
                    style={{
                        backgroundColor: '#E0B531',
                        color: 'white'
                    }}
                >
                    Continue to checkout
                </button>

            </div>

            <button onClick={
                () => props.addToCart('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShB1xsEzzOpt0YpIyMpddte2msyOIf3vBb1b_FmyWX&s=36', 'Test', 1, 300)
                
            }>Test</button>

    

        </div>
    );
}