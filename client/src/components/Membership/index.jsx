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

export default function Membership() {
    // modal pop up when delete
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const [showBlock, setShowBlock] = useState(false);
    const handleCloseBlock = () => setShowBlock(false);
    const handleShowBlock = () => setShowBlock(true);

    // test pagination 
    // const [users, setUsers] = useState(JsonData.slice(0, 200));
    // const [pageNumber, setPageNumber] = useState(0);
    // const usersPerPage = 10;
    // const usersVisited = pageNumber * usersPerPage;
    // const displayUsers = users.slice(usersVisited, usersVisited + usersPerPage).map( (user) => {
    //     return (
    //         <div className="user" key={user.id}>
    //             <h3> {user.id} </h3>
    //             <h3> {user.first_name} </h3>
    //             <h3> {user.last_name} </h3>
    //         </div>
    //     );
    // } );
    // const pageCount = Math.ceil(users.length / usersPerPage);
    // const changePage = ({ selected }) => {
    //     console.log("selected: ", selected);
    //     setPageNumber(selected);
    // };
    const pathStyle = {
        backgroundColor: 'white',
        textAlign: 'left',
    };

    const memberStyle = {
        backgroundColor: '#F7F8FC',
    };

    const lastTd = {
        backgroundColor: 'white',
        fontSize: 20,
        width: 220,
    }

    const each_td = {
        lineHeight: 2,
    }

    const initData = JsonData.slice(0,30);
    const [members, setMembers] = useState(initData);
    const [pageNumber, setPageNumber] = useState(0);
    // let membersPerPage = 10;
    const [membersPerPage, setMembersPerPage] = useState(10);
    // let membersVisited = pageNumber * membersPerPage;
    const [membersVisited, setMembersVisited] = useState(pageNumber * membersPerPage);
    const displayMembers = (membersList) => membersList.
                        slice(membersVisited, membersVisited + membersPerPage).
                        map( (member) => {
                            return (
                                
                                    <tr key={member.id}>
                                        <td style={each_td}> {member.id} </td>
                                        <td style={each_td}> {member.name} </td>
                                        <td style={each_td}> {member.email} </td>
                                        <td style={each_td}> {member.phone_number} </td>
                                        
                                        <td style={lastTd}>

                                            <Link style={{textDecoration: "none", color:'none'}} to={`/dashboard/membership/edit/${member.id}`}>
                                                <AiIcons.AiFillEdit className="icon" />
                                            </Link>

                                            <Link style={{textDecoration: "none"}} to={`/dashboard/membership/detail/${member.id}`}>
                                                <AiIcons.AiFillInfoCircle className="icon" />
                                            </Link>

                                            <Link onClick={handleShowDelete} style={{textDecoration: "none"}} to={`#`}>
                                                <AiIcons.AiFillDelete className="icon" />
                                            </Link>

                                            <Link onClick={handleShowBlock} style={{textDecoration: "none"}} to={`#`}>
                                                <AiIcons.AiFillStop className="icon" />
                                            </Link>


                                            
                                            {/* <Button onClick={handleShow}>
                                                <AiIcons.AiFillDelete  className="icon" />
                                            </Button> */}

                                        </td>
                                    </tr>
                                
                            );
                        });
                    
                        
    const pageCount = Math.ceil(members.length / membersPerPage);
    const changePage = ({ selected }) => {
        console.log("selected: ", selected);
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
        console.log(filterData);
        console.log("page selected: ", pageNumber);

        if (searchTerm.length > 0) {
            if (pageNumber ==  0) {
                setMembers(filterData.slice(0, count));
            }
            else {
                console.log("page number != 0");
                setMembersVisited(0);
                setMembers(filterData.slice(0, count));
                // setMembersVisited(10);
            }
        }
        else {
            console.log("searchTerm.length != 0: ", pageNumber);
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
                <h1 style={{color: '#1570EF', fontWeight:'bold'}}>Membership Management</h1>
            </div>
            <div className="content" style={memberStyle}>

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
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            
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