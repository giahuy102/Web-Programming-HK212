import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, NavigationType } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function NewsList() {
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
    const handleClick = (id) => {
        window.location.href = '/home/news/' + id;
    }

    const [newsList, setNewsList] = useState(null);

    // });
    useEffect(() => {
        async function fetchNewsList() {
            axios({
                method: 'get',
                url: `http://localhost/dashboard/news`,
            })
            .then(function (response) {
                console.log(response.data)
                setNewsList(response.data);
            })
            .catch(function (err) {
                console.log(err);
            }, []);
        }
        // async function fetchProducts() {
        //     axios({
        //         method: 'get',
        //         url: `http://localhost/dashboard/product`,
        //     })
        //     .then(function (response) {
        //         console.log(response.data)
        //         setProducts(response.data);
        //     })
        //     .catch(function (err) {
        //         console.log(err);
        //     }, []);
        // }
        // fetchCategories();
        // fetchProducts();

        fetchNewsList();

    }, []);

    return (   
        <div>
            <div className='news_list d-flex flex-wrap justify-content-around' >

                {
                    newsList?.map((item, index) => {
                        return (
                            <div className='news_list_item d-flex flex-column' onClick={() => handleClick(item.ID)}>
                                <img 
                                    src={require('../../assets/images/news.png')}
                            
                                />
                                <div>
                                    <span>{item.CREATED_AT}</span>
                                    <h3>{item.TITLE}</h3>
                                    
                                </div>

                        
                            </div>


                        )
                    })
                }
                {/* <div className='news_list_item d-flex flex-column' onClick={handleClick}>
                    <img 
                        src={require('../../assets/images/news.png')}
                
                    />
                    <div>
                        <span>June 1, 2022</span>
                        <h3>Hot sale 6-6!!!</h3>
                        
                    </div>

            
                </div> */}
            </div>

    

        </div>
    );
}