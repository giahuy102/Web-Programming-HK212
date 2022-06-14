import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import axios from 'axios';

import CommentProduct from '../CommentProduct';

export default function Menu() {
    const [categories, setCategories] = useState(null)
    const [products, setProducts] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(1);
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
    useEffect(() => {
        async function fetchCategories() {
            axios({
                method: 'get',
                url: `http://localhost/dashboard/category`,
            })
            .then(function (response) {
                console.log(response.data)
                setCategories(response.data);
            })
            .catch(function (err) {
                console.log(err);
            }, []);
        }
        async function fetchProducts() {
            axios({
                method: 'get',
                url: `http://localhost/dashboard/product`,
            })
            .then(function (response) {
                console.log(response.data)
                setProducts(response.data);
            })
            .catch(function (err) {
                console.log(err);
            }, []);
        }
        fetchCategories();
        fetchProducts();

    }, []);
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
                {
                    categories && 
                <Carousel 
                
                    responsive={responsive}
                    containerClass="menu_slider_container d-flex justify-content-around"   
                    itemClass='d-flex justify-content-center'
                >
                    {
                        categories?.map((item, index) => {
                            return (
                                <button key={index} className='home_menu_category' onClick={() => {setCurrentCategory(item.ID)}}>
                                    {item.NAME}
                                </button>
                            )
                        })
                    }


                </Carousel>
                }

            </div>

            <div 
                style={{
                    width: '90%',
                    margin: 'auto'
                }}
                className='home_menu_list d-flex flex-wrap justify-content-around'
            
            >
                {
                    products?.map((item, index) => {
                        if (item.ID_CATEGORY == currentCategory) return (
                        <div 
                            key={index}
                            className='d-flex flex-column align-items-center' 
                            style={{
                                width: '244px'
                            }}
                        >
                        <img 
                            src={`http://localhost/uploads/image/${item.IMAGE}`}
                            style={{
                                borderRadius: 20,
                                width: '100%',
                                height: '220px'
                            }} 
                        />
                        <h4>{item.NAME}</h4>
                        <h5>Price: {item.PRICE}$</h5>
                        <Link to={`/home/menu/${item.ID}`} className='home_menu_category d-flex justify-content-center align-items-center'
                            style={{
                                width: '100px',
                                
                            }}
                        >
                            Buy
                        </Link>                  
    
                    </div>)
                    })
                }

            </div>


        </div>
    );
}