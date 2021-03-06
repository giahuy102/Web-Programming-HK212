import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import JsonData from "./STATIC_DATA.json";

export default function PublicInfo() {

    const pathStyle = {
        backgroundColor: 'white',
        textAlign: 'left',
    }
    const infoStyle = {
        backgroundColor: '#F7F8FC',
    }
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
                                            <Link style={{textDecoration: "none", color:'none'}} to={`/dashboard/publicInfo/edit/${member.id}`}>
                                                <AiIcons.AiFillEdit className="icon" />
                                            </Link>
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
            }
        }
        else {
            console.log("searchTerm.length != 0: ", pageNumber); 
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
                <h1 style={{color: '#1570EF', fontWeight:'bold'}}>Public Information Management</h1>
            </div>
            <div className="content" style={infoStyle}>
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