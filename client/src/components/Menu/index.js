import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Menu() {

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
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
    return (   
        <div>
            <div
            
            style={{
                marginTop: '100px',
                marginBottom: '100px'
            }}
            className='d-flex justify-content-center'
            
            >
                <Carousel 
                
                    responsive={responsive}
                    containerClass="menu_slider_container"   
                    itemClass='d-flex justify-content-center'
                >
                    <button className='home_menu_category'>
                        All
                    </button>
                    <button className='home_menu_category'>
                        All
                    </button>
                    <button className='home_menu_category'>
                        All
                    </button>
                    <button className='home_menu_category'>
                        All
                    </button>

                    <button className='home_menu_category'>
                        All
                    </button>
                </Carousel>
            </div>

            <div 
                style={{
                    width: '90%',
                    margin: 'auto'
                }}
                className='home_menu_list d-flex flex-wrap justify-content-around'
            
            >
                <div 
                    className='d-flex flex-column align-items-center' 
                    style={{
                        width: '244px'
                    }}
                >
                    <img 
                        src={require('../../assets/images/product_demo.png')}
                        style={{
                            borderRadius: 20,
                            width: '100%',
                            height: '220px'
                        }} 
                    />
                    <h4>Banh mi</h4>
                    <h5>Price: 100000 VND</h5>
                    <Link to='/' className='home_menu_category d-flex justify-content-center align-items-center'
                        style={{
                            width: '100px',
                            
                        }}
                    >
                        Buy
                    </Link>                  

                </div>

                <div 
                className='d-flex flex-column align-items-center' 
                style={{
                    width: '244px'
                }}>
                    <img 
                        src={require('../../assets/images/product_demo.png')}
                        style={{
                            borderRadius: 20,
                            width: '100%',
                            height: '220px'
                        }} 
                    />
                    <h4>Banh mi</h4>
                    <h5>Price: 100000 VND</h5>
                    <Link to='/' className='home_menu_category d-flex justify-content-center align-items-center'
                        style={{
                            width: '100px',
                            
                        }}
                    >
                        Buy
                    </Link>                  

                </div>


                <div 
                className='d-flex flex-column align-items-center' 
                style={{
                    width: '244px'
                }}>
                    <img 
                        src={require('../../assets/images/product_demo.png')}
                        style={{
                            borderRadius: 20,
                            width: '100%',
                            height: '220px'
                        }} 
                    />
                    <h4>Banh mi</h4>
                    <h5>Price: 100000 VND</h5>
                    <Link to='/' className='home_menu_category d-flex justify-content-center align-items-center'
                        style={{
                            width: '100px',
                            
                        }}
                    >
                        Buy
                    </Link>                  

                </div>

        
                <div 
                className='d-flex flex-column align-items-center' 
                style={{
                    width: '244px'
                }}>
                    <img 
                        src={require('../../assets/images/product_demo.png')}
                        style={{
                            borderRadius: 20,
                            width: '100%',
                            height: '220px'
                        }} 
                    />
                    <h4>Banh mi</h4>
                    <h5>Price: 100000 VND</h5>
                    <Link to='/' className='home_menu_category d-flex justify-content-center align-items-center'
                        style={{
                            width: '100px',
                            
                        }}
                    >
                        Buy
                    </Link>                  

                </div>

                <div 
                className='d-flex flex-column align-items-center' 
                style={{
                    width: '244px'
                }}>
                    <img 
                        src={require('../../assets/images/product_demo.png')}
                        style={{
                            borderRadius: 20,
                            width: '100%',
                            height: '220px'
                        }} 
                    />
                    <h4>Banh mi</h4>
                    <h5>Price: 100000 VND</h5>
                    <Link to='/' className='home_menu_category d-flex justify-content-center align-items-center'
                        style={{
                            width: '100px',
                            
                        }}
                    >
                        Buy
                    </Link>                  

                </div>
            </div>


        </div>
    );
}