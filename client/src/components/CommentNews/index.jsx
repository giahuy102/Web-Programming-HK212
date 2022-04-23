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
    const initData = JsonData.slice(0,30);
    const [members, setMembers] = useState(initData);
    const [pageNumber, setPageNumber] = useState(0);
    const [membersPerPage, setMembersPerPage] = useState(10);
    const [membersVisited, setMembersVisited] = useState(pageNumber * membersPerPage);
    
    const [showComment, setShowComment] = useState(true);
    const handleComment = () => {
        setShowComment(!showComment);
    };
    const openComment = {
        display: 'inline-block',
    }
    const closeComment = {
        display: 'none',
    }

    const displayMembers = (membersList) => membersList.
                        slice(membersVisited, membersVisited + membersPerPage).
                        map( (member) => {
                            return (
                                
                                    <tr key={member.id}>
                                        <td style={each_td}> {member.id_comment} </td>
                                        <td style={each_td}> {member.comment} </td>
                                        <td style={each_td}> {member.name} </td>
                                        <td style={each_td}> {member.id} </td>
                                        <td style={each_td}> {member.updated_at} </td>
                                
                                        <td style={lastTd}>

                                            <Link style={{textDecoration: "none", color:'none'}} to={`#`}>
                                                <AiIcons.AiFillEye style={showComment? openComment : closeComment} onClick={handleComment} className="icon" />
                                                <AiIcons.AiFillEyeInvisible style={!showComment? openComment : closeComment} onClick={handleComment} className="icon" />
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

    const handleSearch = () => {
        var filterData = [];
        let count = 0;
        for (let i = 0; i < initData.length; i++) {
            if (initData[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
                filterData[count++] = initData[i];
            }
        }
        filterData.sort(function comp (a, b) {if (a.id < b.id) {return -1;}} );

        if (searchTerm.length > 0) {
            if (pageNumber ==  0) {
                setMembers(filterData.slice(0, count));
            }
            else {
                setMembersVisited(0);
                setMembers(filterData.slice(0, count));
                // setMembersVisited(10);
            }
        }
        else {
            // setMembers(initData.slice(pageNumber*membersPerPage, pageNumber*membersPerPage + membersPerPage));
            // setMembersVisited(0);   
            setMembersPerPage(10);
            setMembers(initData);
        }
    };

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    return (
        <div className="container" style={{maxWidth: 2000, height: '100%'}}>
            <div className='path' style={pathStyle}>
                <h1 style={{color: '#1570EF', fontWeight:'bold'}}>Comment News Management</h1>
            </div>
            <div className="content" style={commentStyle}>
                <div style={{width:400, margin:'0 auto', marginTop:40}} className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search..." 
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </div>

                <Table style={{width:1100, margin:'0 auto'}} responsive>
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