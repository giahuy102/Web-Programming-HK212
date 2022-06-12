import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import JsonData from "./STATIC_DATA.json";
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CommentNews() {

    const pathStyle = {
        backgroundColor: 'white',
        textAlign: 'left',
    }
    const commentStyle = {
        backgroundColor: '#F7F8FC',
        height: '100vh'
    }

    const memberStyle = {
        backgroundColor: '#F7F8FC',
    };

    const lastTd = {
        backgroundColor: 'white',
        fontSize: 20,
        width: '10%',
    }

    const each_td = {
        lineHeight: 2,
    }

    // const [comment, setComment] = useState([]);
    // const initData = JsonData.slice(0,30);
    const initData = [];
    const [members, setMembers] = useState(initData);
    const [pageNumber, setPageNumber] = useState(0);
    const [membersPerPage, setMembersPerPage] = useState(10);
    const [membersVisited, setMembersVisited] = useState(pageNumber * membersPerPage);

    const [showComment, setShowComment] = useState(true);
    const handleComment = async (e, id_comment, id_news, visible) => {
        // setShowComment(!showComment);]
        e.preventDefault();

        if (visible == 1) {      // will call block
            await axios({
                method: 'post',
                url: `http://localhost/dashboard/newsComment/block/${id_comment}/${id_news}`,
            }).then(function (response) {
                console.log(response);
                setMembers(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        } else {            // will call unblock
            await axios({
                method: 'post',
                url: `http://localhost/dashboard/newsComment/unblock/${id_comment}/${id_news}`,
            }).then(function (response) {
                // console.log("unblock: ", response);
                setMembers(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    const openComment = {
        display: 'inline-block',
    }
    const closeComment = {
        display: 'none',
    }

    const displayMembers = (membersList) => membersList.
        slice(membersVisited, membersVisited + membersPerPage).
        map((member, idx) => {
            return (

                <tr key={idx}>
                    <td style={each_td}> {member.ID_NEWS} </td>
                    <td style={each_td}> {member.CONTENT_COMMENT} </td>
                    <td style={each_td}> {member.USERNAME} </td>
                    <td style={each_td}> {member.ID_MEMBER} </td>
                    <td style={each_td}> {member.CREATED_AT} </td>

                    <td style={lastTd}>

                        {/* <Link style={{textDecoration: "none", color:'none'}} to={`#`}>
                                                <AiIcons.AiFillEye style={showComment? openComment : closeComment} onClick={handleComment} className="icon" />
                                                <AiIcons.AiFillEyeInvisible style={!showComment? openComment : closeComment} onClick={handleComment} className="icon" />
                                            </Link> */}

                        <Link style={{ textDecoration: "none", color: 'none' }} to={`#`}>
                            {member.VISIBLE == 1 ? <AiIcons.AiFillEye onClick={e => handleComment(e, member.ID_COMMENT, member.ID_NEWS, member.VISIBLE)} className="icon" /> : <AiIcons.AiFillEyeInvisible onClick={e => handleComment(e, member.ID_COMMENT, member.ID_NEWS, member.VISIBLE)} className="icon" />}
                            {/* <AiIcons.AiFillEye style={showComment? openComment : closeComment} onClick={handleComment} className="icon" />
                                                <AiIcons.AiFillEyeInvisible style={!showComment? openComment : closeComment} onClick={handleComment} className="icon" /> */}
                        </Link>
                    </td>
                </tr>

            );
        });


    const pageCount = Math.ceil(members.length / membersPerPage);
    const changePage = ({ selected }) => {
        // console.log("selected: ", selected);
        setPageNumber(selected);
        setMembersVisited(selected * membersPerPage);   // myself
    };


    const [tempMembers, setTempMembers] = useState([]);

    const handleSearch = () => {

        // console.log("search term: ", searchTerm);
        var filterData = [];
        let count = 0;
        for (let i = 0; i < tempMembers.length; i++) {
            if (tempMembers[i].CONTENT_COMMENT.toLowerCase().includes(searchTerm.toLowerCase())) {
                filterData[count++] = tempMembers[i];
            }
        }
        // filterData.sort(function comp(a, b) { if (a.ID < b.ID) { return 1; } });
        // console.log('filter data: ', filterData);
        // console.log("page selected: ", pageNumber);

        // setMembers(filterData.slice(0, count));
        if (searchTerm.length > 0) {
            if (pageNumber == 0) {
                setMembers(filterData.slice(0, count));
            }
            else {
                // console.log("page number != 0");
                setMembersVisited(0);
                setMembers(filterData.slice(0, count));
                // setMembersVisited(10);
            }
            // setMembers(filterData.slice(0, count));
        }
        else {
            // console.log("searchTerm.length != 0: ", pageNumber);
            // setMembers(initData.slice(pageNumber*membersPerPage, pageNumber*membersPerPage + membersPerPage));
            setMembersVisited(0);   
            setMembersPerPage(10);
            setMembers(tempMembers);
        }



        // var filterData = [];
        // let count = 0;
        // for (let i = 0; i < initData.length; i++) {
        //     if (initData[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
        //         filterData[count++] = initData[i];
        //     }
        // }
        // filterData.sort(function comp (a, b) {if (a.id < b.id) {return -1;}} );

        // if (searchTerm.length > 0) {
        //     if (pageNumber ==  0) {
        //         setMembers(filterData.slice(0, count));
        //     }
        //     else {
        //         setMembersVisited(0);
        //         setMembers(filterData.slice(0, count));
        //         // setMembersVisited(10);
        //     }
        // }
        // else {
        //     // setMembers(initData.slice(pageNumber*membersPerPage, pageNumber*membersPerPage + membersPerPage));
        //     // setMembersVisited(0);   
        //     setMembersPerPage(10);
        //     setMembers(initData);
        // }
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [firstFetch, setFirstFetch] = useState(true);
    useEffect(() => {
        handleSearch();

        if (firstFetch) {
            axios({
                method: 'get',
                url: 'http://localhost/dashboard/newsComment',
            }).then(function (response) {
                console.log(response);
                setMembers(response.data);
                setTempMembers(response.data);
            }).catch(function (error) {
                console.log(error);
            });
            setFirstFetch(false);
        }

    }, [searchTerm]);

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100%' }}>
            <div className='path' style={pathStyle}>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Comment News Management</h1>
            </div>
            <div className="content" style={commentStyle}>
                <div style={{ width: 400, margin: '0 auto', marginTop: 40 }} className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </div>

                <Table style={{ width: 1100, margin: '0 auto' }} responsive>
                    <thead>
                        <tr>
                            <th>News ID</th>
                            <th>Comment</th>
                            <th>Author</th>
                            <th>Author ID</th>
                            <th>Updated at</th>

                        </tr>
                    </thead>
                    <tbody>
                        {displayMembers(members)}
                    </tbody>
                </Table>


                {/* test pagination */}
                {/* {displayUsers}*/}
                <div className="paginate">
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
                </div>
            </div>
        </div>
    );
}