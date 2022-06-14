import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, NavigationType, useParams } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

// import CommentProduct from '../CommentProduct';
import Comment from '../Comment';

export default function NewsList(props) {
    let navigation = useNavigate();
    
    const objId = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        // let product = JsonData.filter((product) => product.id == objId.id)[0];
        // setProduct(product);
        axios({
            method: 'get',
            url: `http://localhost/dashboard/product/detail/${objId.menu_id}`,
        }).then(function (response) {
            console.log("Product: ", response.data);
            setProduct(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
    
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
        <div>
            <div className='d-flex'
                style={{
                    width: '70%',
                    margin: 'auto',
                    marginTop: '30px'
                }}
            >
                <img src={`http://localhost/uploads/image/${product.IMAGE}`}
                    style={{
                        display: 'inline-block',
                        width: '300px',
                        height: '300px',
                        borderRadius: '20px',
                        marginRight: '40px'
                    }}
                
                >


                </img>
                <div className='d-flex flex-column justify-content-around'

                
                >
                    <h3
                        style={{
                            fontSize: '55px'
                        }}
                    >{product.NAME}
                    </h3>
                    <span
                        style={{
                            fontSize: '25px'
                        }}
                    >Price: {product.PRICE}$</span>
                    <p style={{
                        fontSize: '20px'
                    }}>{product._DESCRIPTION}</p>
                    <button className='btn btn-danger'
                        onClick={() => props.addToCart(`http://localhost/uploads/image/${product.IMAGE}`, product.NAME, 1, product.PRICE)}
                    >
                        Add to cart
                    </button>
                </div>

                
            </div>

                {
                    localStorage.getItem('jwt_data') ?
                    <Comment product_id={product.ID} />

                    : <span></span>
                    
                }

        </div>
    );
}