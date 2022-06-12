import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import JsonData from "./NEWS_DATA.json";

export default function News() {
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
        marginRight: "auto",
        marginTop: "40px",
        width: "fit-content",
    }

    // modal pop up when delete
    const [showDelete, setShowDelete] = useState(false);
    // const [showCreate, setShowCreate] = useState(false);

    // const [id, setId] = useState(0);
    // const [name, setName] = useState("");
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState("");
    // const [image, setImage] = useState("");
    // const [createAt, setCreateAt] = useState("");
    // const [totalLike, setTotalLike] = useState(0);
    // const [idCategory, setIdCategory] = useState(0);

    const id_admin = 2;                 // get admin id
    const initData = JsonData.filter( (news) => news.id_admin === id_admin).slice(0);
    const [news, setNews] = useState(initData);
    const [pageNumber, setPageNumber] = useState(0);
    const [newsPerPage, setNewsPerPage] = useState(10);
    const [newsVisited, setNewsVisited] = useState(pageNumber * newsPerPage);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    // const handleCloseCreate = () => setShowCreate(false);
    // const handleShowCreate = () => {
    //     setShowCreate(true);
    //     setName("");
    //     setPrice(0);
    //     setDescription("");
    //     setImage("");
    //     setCreateAt("");
    //     setTotalLike(0);
    //     setIdCategory(0);
    // }
    // const handleCreateOK = () => {
    //     let d = new Date();
    //     let create_at = d.getFullYear().toString();
    //     if (d.getMonth() < 9)
    //         create_at += "0" + (d.getMonth() + 1).toString();
    //     else
    //         create_at += (d.getMonth() + 1).toString();
    //     if (d.getDate() < 9)
    //         create_at += "0" + (d.getDate() + 1).toString();
    //     else
    //         create_at += (d.getDate() + 1).toString();
    //     if (d.getHours() < 9)
    //         create_at += "0" + (d.getHours() + 1).toString();
    //     else
    //         create_at += (d.getHours() + 1).toString();
    //     if (d.getMinutes() < 9)
    //         create_at += "0" + (d.getMinutes() + 1).toString();
    //     else
    //         create_at += (d.getMinutes() + 1).toString();
    //     if (d.getSeconds() < 9)
    //         create_at += "0" + (d.getSeconds() + 1).toString();
    //     else
    //         create_at += (d.getSeconds() + 1).toString();

    //     let newnew = {
    //         name: name,
    //         price: price,
    //         description: description,
    //         image: image,
    //         createAt: create_at,
    //         totalLike: totalLike,
    //         idCategory: idCategory,
    //     }

    //     setShowCreate(false);
    // }

    const pageCount = Math.ceil(news.length / newsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
        setNewsVisited(selected * newsPerPage);   // myself
    };

    const handleSearch = () => {
        var filterData = [];
        let count = 0;
        for (let i = 0; i < initData.length; i++) {
            if (initData[i].title.toLowerCase().includes(searchTerm.toLowerCase())) {
                filterData[count++] = initData[i];
            }
        }
        filterData.sort(function comp(a, b) { if (a.id < b.id) { return -1; } });
        // console.log("page selected: ", pageNumber);

        if (searchTerm.length > 0) {
            if (pageNumber === 0) {
                setNews(filterData.slice(0, count));
            }
            else {
                // console.log("page number != 0");
                setNewsVisited(0);
                setNews(filterData.slice(0, count));
                // setMembersVisited(10);
            }
        }
        else {
            // console.log("searchTerm.length != 0: ", pageNumber);
            // setMembers(initData.slice(pageNumber*membersPerPage, pageNumber*membersPerPage + membersPerPage));
            // setMembersVisited(0);   
            setNewsPerPage(10);
            setNews(initData);
        }
    };

    const displayTimestamp = (time) => {   //  time -> YYYYMMDDHHMMSS
        if (time === "")
            return "";
        return time.slice(8, 10) + ":" + time.slice(10, 12) + ":" + time.slice(12) + "\t" + time.slice(6, 8) + "-" + time.slice(4, 6) + "-" + time.slice(0, 4);
    }

    const displayNews = (newsList) => newsList
        .slice(newsVisited, newsVisited + newsPerPage)
        .map((news) => {
            return (
                <tr key={news.id}>
                    <td style={each_td}> {news.id} </td>
                    <td style={each_td}> {news.title} </td>
                    <td style={each_td}> {displayTimestamp(news.created_at)} </td>
                    <td style={lastTd}>
                        <Link style={{ textDecoration: "none", color: 'none' }} to={`/dashboard/news/edit/${news.id}`} title='Edit'>
                            <AiIcons.AiFillEdit className="icon" />
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/dashboard/news/detail/${news.id}`} title='Detail'>
                            <AiIcons.AiFillInfoCircle className="icon" />
                        </Link>
                        <Link onClick={handleShowDelete} style={{ textDecoration: "none" }} to={`#`} title='Delete'>
                            <AiIcons.AiFillDelete className="icon" />
                        </Link>
                    </td>
                </tr>

            );
        });

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
            <div className='path' style={pathStyle}>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>News Management</h1>
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
                            <th>Title</th>
                            <th>Created at</th>
                            <th style={{ textAlign: 'center'}}>
                                <Link 
                                    style={{ textDecoration: "none", color: 'green', fontSize: '25px' }} 
                                    to="/dashboard/news/create" title='Create'
                                >
                                    <AiIcons.AiFillPlusCircle className="icon" />
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayNews(news)}
                    </tbody>
                </Table>


                {/* test pagination */}
                {/* {displayUsers}*/}
                {/* {pageCount > 1 && <div className="paginate" style={pagination}> */}
                {pageCount > 1 && <div className="paginate">
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
                        <Modal.Title>Delete news</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this news?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleCloseDelete}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleCloseDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}