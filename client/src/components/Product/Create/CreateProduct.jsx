import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import FileUploadForm from './FileUploadForm';

export default function CreateProduct() {
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

    const [categoryList, setCategoryList] = useState([]);
    const [url, setUrl] = useState([]);
    // const [firstFetch, setFirstFetch] = useState(true);

    useEffect( () => {
        // if (firstFetch) {
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
            // setFirstFetch(false);
        // }       
    }, []);

    const handleClickDone = async () => {
        let name = document.getElementById('product_name').value; 
        let price = document.getElementById('product_price').value;
        let description = document.getElementById('product_description').value;
        // let image = document.getElementById('product_image').value;
        let c = document.getElementById('product_category');
        let category = c.options[c.selectedIndex].value; 
        console.log("Selected category id: ", category);
        await axios({
            method: 'post',
            url: `http://localhost/dashboard/product/create`,
            data: {
                name: name,
                price: price,
                description: description,
                image: url,
                category: category
            }
        })
        .then(function (response) {
            console.log("Response create news: ", response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
            <div className='title' style={pathStyle}>
                <Link to="/dashboard/product" style={{ textDecoration: "none", color: 'none', fontSize: "35px", float: "left" }}>
                    <AiIcons.AiOutlineLeftCircle className='icon' />
                </Link>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Create Product Information</h1>
            </div>

            <div className='input-content' style={{ width: 800, margin: '0 auto', marginTop: 30 }}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input id='product_name' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Price</span>
                    <input id='product_price' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Description</span>
                    <textarea id='product_description' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Image</span>
                    {/* <input id='product_image' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" /> */}
                    <FileUploadForm setUrl={setUrl}/>
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Category</span>
                    <select id='product_category' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        {
                            categoryList.map((cat, idx) => {
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
                            Create
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}