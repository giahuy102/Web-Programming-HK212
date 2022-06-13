import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Category() {
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
        marginRight: "0",
        marginTop: "40px",
        width: "fit-content",
    }
    const spanStyle = {
        width: 130,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
    }

    // modal pop up when delete
    const [showDelete, setShowDelete] = useState(false);
    const [idDelete, setIdDelete] = useState();

    const initData = [];
    const [category, setCategory] = useState(initData);
    const [pageNumber, setPageNumber] = useState(0);
    const [categoryPerPage, setCategoryPerPage] = useState(10);
    const [categoryVisited, setCategoryVisited] = useState(pageNumber * categoryPerPage);

    const [searchTerm, setSearchTerm] = useState("");
    const [fisrtFetch, setFirstFetch] = useState(true);
    const [tempCategory, setTempCategory] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [categoryEdit, setCategoryEdit] = useState();

    useEffect(() => {
        handleSearch();


        axios({
            method: 'get',
            url: 'http://localhost/dashboard/category',
        })
            .then(function (response) {
                console.log("category list: ", response.data);
                setCategory(response.data);
                if (fisrtFetch) {
                    setTempCategory(response.data);
                    setFirstFetch(false);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }, [searchTerm, showDelete, idDelete, showCreate, showEdit]);

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
            url: `http://localhost/dashboard/category/delete/${idDelete}`,
        })
            .then(function (response) {
                console.log("Delete category: ", response);
            })
            .catch(function (error) {
                console.log(error);
            });

        setShowDelete(false)
    }

    const handleClickPlus = () => {
        setShowCreate(!showCreate)
    }

    const handleCreate = async () => {
        let name = document.getElementById('create_name').value;
        await axios({
            method: 'post',
            url: `http://localhost/dashboard/category/create`,
            data: {
                name: name
            }
        })
        .then(function (response) {
            console.log("Response create category: ", response);
        }).catch(function (error) {
            console.log(error);
        });

        setShowCreate(false);
    }

    const handleShowEdit = (e, category) => { console.log("cate edit: ", category);
        e.preventDefault();
        setCategoryEdit(category);
        setShowEdit(true);
    }

    const handleCancelEdit = (e) => {
        e.preventDefault();
        setShowEdit(false);
    }

    const handleEdit = async () => {
        let id = document.getElementById('edit_id').value;
        let name = document.getElementById('edit_name').value;
        await axios({
            method: 'post',
            url: `http://localhost/dashboard/category/edit`,
            data: {
                id: id,
                name: name
            }
        })
        .then(function (response) {
            console.log("Response edit category: ", response);
        }).catch(function (error) {
            console.log(error);
        });

        setShowEdit(false);
    }

    const pageCount = Math.ceil(category.length / categoryPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
        setCategoryVisited(selected * categoryPerPage);   // myself
    };

    const handleSearch = () => {
        var filterData = [];
        let count = 0;
        for (let i = 0; i < tempCategory.length; i++) {
            if (tempCategory[i].NAME.toLowerCase().includes(searchTerm.toLowerCase())) {
                filterData[count++] = tempCategory[i];
            }
        }
        filterData.sort(function comp(a, b) { if (a.ID < b.ID) { return 1; } });
        // console.log("page selected: ", pageNumber);

        if (searchTerm.length > 0) {
            if (pageNumber === 0) {
                setCategory(filterData.slice(0, count));
            }
            else {
                // console.log("page number != 0");
                setCategoryVisited(0);
                setCategory(filterData.slice(0, count));
                // setMembersVisited(10);
            }
        }
        else {
            // console.log("searchTerm.length != 0: ", pageNumber);
            // setMembers(initData.slice(pageNumber*membersPerPage, pageNumber*membersPerPage + membersPerPage));
            // setMembersVisited(0);   
            // setCategoryPerPage(10);
            setCategory(tempCategory);
        }
    };

    const displayCategory = (categoryList) => categoryList
        .slice(categoryVisited, categoryVisited + categoryPerPage)
        .map((category, idx) => {
            return (
                <tr key={idx}>
                    <td style={each_td}> {category.ID} </td>
                    <td style={each_td}> {category.NAME} </td>
                    <td style={lastTd}>
                        <Link 
                            style={{ textDecoration: "none", color: 'none' }} to={`#`} title='Edit'
                            onClick={(e) => handleShowEdit(e, category)}
                        >
                            <AiIcons.AiFillEdit className="icon" />
                        </Link>
                        <Link onClick={e => handleShowDelete(e, category.ID)} style={{ textDecoration: "none" }} to={`#`} title='Delete'>
                            <AiIcons.AiFillDelete className="icon" />
                        </Link>
                    </td>
                </tr>

            );
        });

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
            <div className='path' style={pathStyle}>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Category Management</h1>
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

                {showCreate && <div className='input-content' style={{ width: 800, margin: '0 auto', marginTop: 30 }}>
                    <div className="input-group mb-3">
                        <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Create Name</span>
                        <input id='create_name' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                    </div>
                    <div className='groupButton' style={{ margin: '50 auto auto auto', textAlign: 'center' }}>
                        <Link style={{ textDecoration: "none" }} to={`#`}>
                            <button
                                style={{ width: 100 }} type="button" className="btn btn-outline-secondary"
                                onClick={handleClickPlus}
                            >
                                Cancel
                            </button>
                        </Link>
                        &nbsp;
                        <Link style={{ textDecoration: "none" }} to={`#`}>
                            <button
                                style={{ width: 100 }} type="button" className="btn btn-primary"
                                onClick={handleCreate}
                            >
                                Create
                            </button>
                        </Link>
                    </div>
                </div>}

                {showEdit && <div className='input-content' style={{ width: 800, margin: '0 auto', marginTop: 30 }}>
                    <div className="input-group mb-3">
                        <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">ID</span>
                        <input defaultValue={categoryEdit.ID} id="edit_id" disabled className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        <br />
                    </div>
                    <div className="input-group mb-3">
                        <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Edit Name</span>
                        <input defaultValue={categoryEdit.NAME} id='edit_name' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                    </div>
                    <div className='groupButton' style={{ margin: '50 auto auto auto', textAlign: 'center' }}>
                        <Link style={{ textDecoration: "none" }} to={`#`}>
                            <button
                                style={{ width: 100 }} type="button" className="btn btn-outline-secondary"
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>
                        </Link>
                        &nbsp;
                        <Link style={{ textDecoration: "none" }} to={`#`}>
                            <button
                                style={{ width: 100 }} type="button" className="btn btn-primary"
                                onClick={handleEdit}
                            >
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>}

                <Table style={{ width: 1100, margin: '0 auto' }} responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th style={{ textAlign: 'center' }}>
                                <Link
                                    style={{ textDecoration: "none", color: 'green', fontSize: '25px' }}
                                    to={`#`} title='Create' onClick={handleClickPlus}
                                >
                                    <AiIcons.AiFillPlusCircle className="icon" />
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayCategory(category)}
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
                        <Modal.Title>Delete category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this category?</Modal.Body>
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