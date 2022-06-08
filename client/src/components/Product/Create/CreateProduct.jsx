import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'

import JsonData from "../PRODUCT_JOIN_CATEGORY.json";
import JsonCategory from "../CATEGORY.json";

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

    /* const [product, setProduct] = useState({});
    // const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    // const objId = useParams();

    // useEffect(() => {
    //     let product = JsonData.filter((product) => product.id == objId.id)[0];
    //     setProduct(product);
    // });

    // function displayTimestamp (time) {  console.log("Time: ", time)  //  time -> YYYYMMDDHHMMSS
    //     if (time === "")
    //         return "";
    //     return time.slice(8, 10) + ":" + time.slice(10, 12) + ":" + time.slice(12) + "\t" + time.slice(6, 8) + "-" + time.slice(4, 6) + "-" + time.slice(0, 4);
    */

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [createAt, setCreateAt] = useState("");
    const [totalLike, setTotalLike] = useState(0);
    const [idCategory, setIdCategory] = useState(0);

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
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Create Product Information</h1>
            </div>

            <div className='input-content' style={{ width: 800, margin: '0 auto', marginTop: 30 }}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Price</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Description</span>
                    <textarea className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Image</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Category</span>
                    <select type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        {
                            JsonCategory.map((cat) => {
                                return (
                                    <option value={cat.id}>{cat.name}</option>
                                );
                            })
                        }
                    </select>
                    <br />
                </div>
                <div className='groupButton' style={{ margin: '50 auto auto auto', textAlign: 'center' }}>
                    <Link style={{ textDecoration: "none" }} to={`/dashboard/product/`}>
                        <button style={{ width: 100 }} type="button" className="btn btn-primary">Create</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}