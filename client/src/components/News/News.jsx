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
        marginRight: "0",
        marginTop: "40px",
        width: "fit-content",
    }

    // modal pop up when delete
    const [showDelete, setShowDelete] = useState(false);
    const [idDelete, setIdDelete] = useState();

    const id_admin = 2;                 // get admin id
    // const initData = JsonData.filter((news) => news.id_admin === id_admin).slice(0);
    const initData = [];
    const [news, setNews] = useState(initData);
    const [pageNumber, setPageNumber] = useState(0);
    const [newsPerPage, setNewsPerPage] = useState(10);
    const [newsVisited, setNewsVisited] = useState(pageNumber * newsPerPage);

    const [searchTerm, setSearchTerm] = useState("");
    const [fisrtFetch, setFirstFetch] = useState(true);
    const [tempNews, setTempNews] = useState([]);

    useEffect(() => {
        handleSearch();


        axios({
            method: 'get',
            url: 'http://localhost/dashboard/news',
        })
        .then(function (response) {
            console.log("News list: ", response.data);
            setNews(response.data);
            if (fisrtFetch) {
                setTempNews(response.data);
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
            url: `http://localhost/dashboard/image-storage/delete/${idDelete}`,
        })
            .then(function (response) {
                console.log("Delete news: ", response);
            })
            .catch(function (error) {
                console.log(error);
            });

        setShowDelete(false)
    }

    const pageCount = Math.ceil(news.length / newsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
        setNewsVisited(selected * newsPerPage);   // myself
    };

    const handleSearch = () => {
        var filterData = [];
        let count = 0;
        for (let i = 0; i < tempNews.length; i++) {
            if (tempNews[i].TITLE.toLowerCase().includes(searchTerm.toLowerCase())) {
                filterData[count++] = tempNews[i];
            }
        }
        filterData.sort(function comp(a, b) { if (a.ID < b.ID) { return 1; } });
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
            // setNewsPerPage(10);
            setNews(tempNews);
        }
    };

    const displayNews = (newsList) => newsList
        .slice(newsVisited, newsVisited + newsPerPage)
        .map((news, idx) => {
            return (
                <tr key={idx}>
                    <td style={each_td}> {news.ID} </td>
                    <td style={each_td}> {news.TITLE} </td>
                    {/* <td style={each_td}> {displayTimestamp(news.CREATED_AT)} </td> */}
                    <td style={each_td}> {news.CREATED_AT} </td>
                    <td style={lastTd}>
                        <Link style={{ textDecoration: "none", color: 'none' }} to={`/dashboard/news/edit/${news.ID}`} title='Edit'>
                            <AiIcons.AiFillEdit className="icon" />
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/dashboard/news/detail/${news.ID}`} title='Detail'>
                            <AiIcons.AiFillInfoCircle className="icon" />
                        </Link>
                        <Link onClick={e => handleShowDelete(e, news.ID)} style={{ textDecoration: "none" }} to={`#`} title='Delete'>
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
                            <th style={{ textAlign: 'center' }}>
                                <Link
                                    style={{ textDecoration: "none", color: 'green', fontSize: '25px' }}
                                    to={`/dashboard/news/${id_admin}/create`} title='Create'
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
                        <Modal.Title>Delete news</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this news?</Modal.Body>
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