import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, NavigationType } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useNavigate } from "react-router-dom";

export default function NewsDetail() {
    let navigation = useNavigate();
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
    const handleClick = () => {
        window.location.href = '/home/login'
    }
    return (   
        <div>
            <div className='news_list d-flex flex-wrap justify-content-around' >
                <div className='news_list_item d-flex flex-column' onClick={handleClick}>
                    <img 
                        src={require('../../assets/images/news.png')}
                
                    />
                    <div>
                        <span>June 1, 2022</span>
                        <h3>Hot sale 6-6!!!</h3>
                        
                    </div>

            
                </div>
            </div>

    

        </div>
    );
}