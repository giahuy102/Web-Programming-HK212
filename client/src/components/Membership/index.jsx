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
    const [idDeleteOrBlock, setIdDeleteOrBlock] = useState();
    const handleCloseDelete = (e) => {
        e.preventDefault();
        setShowDelete(false)
    };
    const confirmDelete = async (e) => {
        // console.log("confirm delete id: ", idDeleteOrBlock);

        await axios({
            method: 'post',
            url: `http://localhost/dashboard/membership/delete/${idDeleteOrBlock}`,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

        setShowDelete(false)
    }

    const confirmBlock = async (e, blockOrNot) => {
        if (blockOrNot == 0) {
            await axios({
                method: 'post',
                url: `http://localhost/dashboard/membership/block/${idDeleteOrBlock}`,
            }).then(function (response) {
                console.log(response);
                setMembers(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            await axios({
                method: 'post',
                url: `http://localhost/dashboard/membership/unblock/${idDeleteOrBlock}`,
            }).then(function (response) {
                console.log(response);
                setMembers(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }

        setShowBlock(false);
    }

    const handleShowDelete = (e, id) => {
        e.preventDefault();
        setShowDelete(true)
        setIdDeleteOrBlock(id);
        console.log("id for delete: ", idDeleteOrBlock);
    };

    const [showBlock, setShowBlock] = useState(false);
    const handleCloseBlock = (e) => {
        e.preventDefault();
        setShowBlock(false)
    };

    const [blockOrNot, setBlockOrNot] = useState();
    const handleShowBlock = (e, id, blockOrUnblock) => {
        e.preventDefault();
        setShowBlock(true);
        setIdDeleteOrBlock(id);
        setBlockOrNot(blockOrUnblock)
        console.log("id for block: ", idDeleteOrBlock);
    };

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
        height: "100vh"
    };

    const lastTd = {
        backgroundColor: 'white',
        fontSize: 20,
        width: 240,
    }

    const each_td = {
        lineHeight: 2,
    }

    const initData = JsonData.slice(0, 30);
    const [members, setMembers] = useState(initData);
    const [pageNumber, setPageNumber] = useState(0);
    // let membersPerPage = 10;
    const [membersPerPage, setMembersPerPage] = useState(10);
    // let membersVisited = pageNumber * membersPerPage;
    const [membersVisited, setMembersVisited] = useState(pageNumber * membersPerPage);
    const displayMembers = (membersList) => membersList.
        slice(membersVisited, membersVisited + membersPerPage).
        map((member, idx) => {
            return (

                <tr key={idx}>
                    <td style={each_td}> {member.ID} </td>
                    <td style={each_td}> {member.USERNAME} </td>
                    <td style={each_td}> {member.EMAIL} </td>
                    <td style={each_td}> {member.PHONENUMBER} </td>

                    <td style={lastTd}>

                        <Link style={{ textDecoration: "none", color: 'none' }} to={`/dashboard/membership/edit/${member.ID}`}>
                            <AiIcons.AiFillEdit className="icon" />
                        </Link>

                        <Link style={{ textDecoration: "none" }} to={`/dashboard/membership/detail/${member.ID}`}>
                            <AiIcons.AiFillInfoCircle className="icon" />
                        </Link>

                        <Link onClick={e => handleShowDelete(e, member.ID)} style={{ textDecoration: "none" }} to={`#`}>
                            <AiIcons.AiFillDelete className="icon" />
                        </Link>

                        <Link onClick={e => handleShowBlock(e, member.ID, member._BLOCK)} style={{ textDecoration: "none", fontSize: 16, marginRight: member._BLOCK == 0 ? 20 : 2, color: "#fd4f4f", fontWeight: 'bold' }} to={`#`}>
                            {/* <AiIcons.AiFillStop className="icon" /> */}
                            {member._BLOCK == 0 ? "Block" : "Unblock"}
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
        filterData.sort(function comp(a, b) { if (a.ID < b.ID) { return -1; } });
        console.log(filterData);
        console.log("page selected: ", pageNumber);

        if (searchTerm.length > 0) {
            if (pageNumber == 0) {
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

        axios({
            method: 'get',
            url: 'http://localhost/dashboard/membership',
        }).then(function (response) {
            console.log(response);
            setMembers(response.data);
        }).catch(function (error) {
            console.log(error);
        });

        // axios({
        //     method: 'post',
        //     url: 'http://localhost/dashboard/membership',
        //     data: {
        //         name: 'asdasdasdsa',
        //         age: 20,
        //         cc: "vo nhan",
        //     }
        // }).then(function (response) {
        //     console.log(response);
        // }).catch(function (error) {
        //     console.log(error);
        // });

    }, [searchTerm, showDelete, idDeleteOrBlock]);

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100%' }}>
            <div className='path' style={pathStyle}>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Membership Management</h1>
            </div>
            <div className="content" style={memberStyle}>

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



                <Modal show={showDelete} onHide={e => handleCloseDelete(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete member</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this member?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={e => handleCloseDelete(e)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={e => confirmDelete(e)}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showBlock} onHide={e => handleCloseBlock(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{blockOrNot == 0 ? "Block" : "Unblock"} member</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to {blockOrNot == 0 ? "block" : "unblock"} this member?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={e => handleCloseBlock(e)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={e => confirmBlock(e, blockOrNot)}>
                            {blockOrNot == 0 ? "Block" : "Unblock"}
                        </Button>
                    </Modal.Footer>
                </Modal>



            </div>
        </div>
    );
}