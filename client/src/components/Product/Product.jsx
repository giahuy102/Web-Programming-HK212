import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import JsonData from "./PRODUCT_JOIN_CATEGORY.json";

export default function Product() {
    // style
    const pathStyle = {
        backgroundColor: '#F7F8FC',
        textAlign: 'center',
    };
    const memberStyle = {
        backgroundColor: '#F7F8FC',
    };
    const lastTd = {
        backgroundColor: '#F7F8FC',
        fontSize: 20,
        width: 220,
        textAlign: 'center'
    }
    const each_td = {
        lineHeight: 2,
    }
    const pagination = {
        marginLeft: "auto",
        marginRight: '0',
        marginTop: "40px",
        width: "fit-content",
    }
    // const spanStyle = {
    //     width:130,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     fontWeight: 'bold',
    // }

    // modal pop up when delete
    const [showDelete, setShowDelete] = useState(false);
    const [idDelete, setIdDelete] = useState();

    // const initData = JsonData.slice(0);
    const initData = [];
    const [products, setProducts] = useState(initData);
    const [pageNumber, setPageNumber] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(10);
    const [productsVisited, setProductsVisited] = useState(pageNumber * productsPerPage);

    const [searchTerm, setSearchTerm] = useState("");
    const [fisrtFetch, setFirstFetch] = useState(true);
    const [tempProduct, setTempProduct] = useState([]);

    useEffect(() => {
        handleSearch();
        // PRODUCT join CATEGORY
        axios({
            method: 'get',
            url: 'http://localhost/dashboard/product',
        })
        .then(function (response) {
            console.log("Product list: ", response.data);
            setProducts(response.data);
            if (fisrtFetch) {
                setTempProduct(response.data);
                setFirstFetch(false);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
    }, [searchTerm, showDelete, idDelete]);

    const handleCloseDelete = (e) => {
        e.preventDefault();
        setShowDelete(false);
    }
    const handleShowDelete = (e, id) => {
        e.preventDefault();
        setIdDelete(id);
        setShowDelete(true);
    }

    const handleDelete = async (e) => {
        await axios({
            method: 'post',
            url: `http://localhost/dashboard/product/delete/${idDelete}`,
        })
            .then(function (response) {
                console.log("Delete product: ", response);
            })
            .catch(function (error) {
                console.log(error);
            });

        setShowDelete(false)
    }

    const pageCount = Math.ceil(products.length / productsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
        setProductsVisited(selected * productsPerPage);   // myself
    };

    const handleSearch = () => {
        var filterData = [];
        let count = 0;
        for (let i = 0; i < tempProduct.length; i++) {
            if (tempProduct[i].NAME.toLowerCase().includes(searchTerm.toLowerCase())) {
                filterData[count++] = tempProduct[i];
            }
        }
        filterData.sort(function comp(a, b) { if (a.ID < b.ID) { return 1; } });
        // console.log("page selected: ", pageNumber);

        if (searchTerm.length > 0) {
            if (pageNumber === 0) {
                setProducts(filterData.slice(0, count));
            }
            else {
                // console.log("page number != 0");
                setProductsVisited(0);
                setProducts(filterData.slice(0, count));
                // setMembersVisited(10);
            }
        }
        else {
            // console.log("searchTerm.length != 0: ", pageNumber);
            // setMembers(initData.slice(pageNumber*membersPerPage, pageNumber*membersPerPage + membersPerPage));
            // setMembersVisited(0);   
            // setProductsPerPage(10);
            setProducts(tempProduct);
        }
    };

    const displayProducts = (productsList) => productsList
        .slice(productsVisited, productsVisited + productsPerPage)
        .map((product, idx) => {
            return (
                <tr key={idx}>
                    <td style={each_td}> {product.ID} </td>
                    <td style={each_td}> {product.NAME} </td>
                    <td style={each_td}> {product.PRICE} <i><u>USD</u></i> </td>
                    <td style={each_td}> {product.NAME_CATEGORY} </td>
                    <td style={each_td}> {product.CREATE_AT} </td>
                    <td style={lastTd}>
                        <Link style={{ textDecoration: "none", color: 'none' }} to={`/dashboard/product/edit/${product.ID}`} title='Edit'>
                            <AiIcons.AiFillEdit className="icon" />
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/dashboard/product/detail/${product.ID}`} title='Detail'>
                            <AiIcons.AiFillInfoCircle className="icon" />
                        </Link>
                        <Link onClick={e => handleShowDelete(e, product.ID)} style={{ textDecoration: "none" }} to={`#`} title='Delete'>
                            <AiIcons.AiFillDelete className="icon" />
                        </Link>
                    </td>
                </tr>

            );
        });

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
            <div className='path' style={pathStyle}>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Product Management</h1>
            </div>

            <div className="content" style={memberStyle}>
                <div style={{ width: 400, margin: '0 auto', marginTop: 40 }} className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        onChange={(event) => { setSearchTerm(event.target.value); }}
                    />
                </div>

                <Table style={{ width: 1100, margin: '0 auto' }} responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Created at</th>
                            <th style={{ textAlign: 'center' }}>
                                <Link 
                                    style={{ textDecoration: "none", color: 'green', fontSize: '25px' }} 
                                    to="/dashboard/product/create" title='Create'
                                >
                                    <AiIcons.AiFillPlusCircle className="icon" />
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayProducts(products)}
                    </tbody>
                </Table>


                {/* test pagination */}
                {/* {displayUsers}*/}
                {pageCount > 1 && <div className="paginate" style={pagination}>
                {/* {pageCount > 1 && <div className="paginate"> */}
                    <ReactPaginate
                        nextLabel="Next"
                        onPageChange={changePage}
                        pageCount={pageCount}
                        previousLabel="Previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>}

                <Modal show={showDelete} onHide={handleCloseDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this product?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleCloseDelete}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}