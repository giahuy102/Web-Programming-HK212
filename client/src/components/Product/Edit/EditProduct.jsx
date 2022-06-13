import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import JsonData from "../PRODUCT_JOIN_CATEGORY.json";
import JsonCategory from "../CATEGORY.json";

export default function EditProduct() {
    const spanStyle = {
        width: 130,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
    }
    const pathStyle = {
        backgroundColor: '#F7F8FC',
        textAlign: 'center',
    };

    const [product, setProduct] = useState({});
    const [categoryList, setCategoryList] = useState([]);

    const objId = useParams();

    useEffect(() => {
        // let product = JsonData.filter((product) => product.id == objId.id)[0];
        // setProduct(product);
        axios({
            method: 'get',
            url: `http://localhost/dashboard/product/detail/${objId.id}`,
        }).then(function (response) {
            console.log("Product: ", response.data);
            setProduct(response.data);
        }).catch(function (error) {
            console.log(error);
        });

        axios({
            method: 'get',
            url: 'http://localhost/dashboard/category',
        })
        .then(function (response) {
            console.log("Product -> Category list: ", response.data);
            setCategoryList(response.data);
        })
        .catch(function (err) {
            console.log(err);
        });
    }, []);

    const handleClickDone = async () => {
        let name = document.getElementById('product_name').value; 
        let price = document.getElementById('product_price').value;
        let description = document.getElementById('product_description').value;
        let image = document.getElementById('product_image').value;
        let c = document.getElementById('product_category');
        let category = c.options[c.selectedIndex].value; console.log("Selected category id: ", category);
        await axios({
            method: 'post',
            url: `http://localhost/dashboard/product/edit`,
            data: {
                id: product.ID,
                name: name,
                price: price,
                description: description,
                image: image,
                category: category
            }
        })
        .then(function (response) {
            console.log("Response edit news: ", response);
        }).catch(function (error) {
            console.log(error);
        });
    }
    
    return (
        <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
            {/* <div style={{ maxWidth: '500' }}>
                <Alert dismissible variant='success'>
                    <Alert.Heading>
                        Update product information successfully!
                    </Alert.Heading>
                </Alert>
            </div> */}
            <div className='title' style={pathStyle}>
                <Link to="/dashboard/product" style={{ textDecoration: "none", color: 'none', fontSize: "35px", float: "left" }}>
                    <AiIcons.AiOutlineLeftCircle className='icon' />
                </Link>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Edit Product Information</h1>
            </div>

            <div className='input-content' style={{ width: 800, margin: '0 auto', marginTop: 30 }}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">ID</span>
                    <input defaultValue={product.ID} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input id='product_name' defaultValue={product.NAME} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Price</span>
                    <input id='product_price' defaultValue={product.PRICE} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Description</span>
                    <textarea id='product_description' defaultValue={product._DESCRIPTION} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Image</span>
                    <input id='product_image' defaultValue={product.IMAGE} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Created at</span>
                    <input
                        defaultValue={product.CREATE_AT}
                        disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Total like</span>
                    <input defaultValue={product.TOTAL_LIKES_PRODUCT} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Category</span>
                    <select id='product_category' defaultValue={product.NAME_CATEGORY} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        {
                            categoryList.map((cat, idx) => {
                                if (cat.ID === product.ID_CATEGORY) {
                                    return (
                                        <option key={idx} value={cat.ID} selected>{cat.NAME}</option>
                                    );
                                }
                                return (
                                    <option key={idx} value={cat.ID}>{cat.NAME}</option>
                                );
                            })
                        }
                    </select>
                    <br />
                </div>
                <div className='groupButton' style={{ margin: '50 auto auto auto', textAlign: 'center' }}>
                    <Link style={{ textDecoration: "none" }} to={`/dashboard/product/`}>
                        <button 
                            style={{ width: 100 }} type="button" className="btn btn-primary"
                            onClick={handleClickDone}
                        >
                            Done
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}