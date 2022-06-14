import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, NavigationType, useParams } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

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

    const objId = useParams();
    const [news, setNews] = useState({});
    useEffect(() => {
        // let product = JsonData.filter((product) => product.id == objId.id)[0];
        // setProduct(product);
        axios({
            method: 'get',
            url: `http://localhost/dashboard/news/detail/${objId.news_id}`,
        }).then(function (response) {
            console.log("News: ", response.data);
            setNews(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
    const handleClick = () => {
        window.location.href = '/home/login'
    }
    return (   
        <div>
            <div style={{
                width: '75%',
                margin: 'auto',
                marginTop: '50px'
            }}
            // className='d-flex flex-column align-items-center'
            >
                <h3
                    style={{
                        fontSize: '30px',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >{news.TITLE}</h3>
                <p>{news.CONTENT}</p>


            </div>

    

        </div>
    );
}