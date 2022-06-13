import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import JsonData from "../STATIC_DATA.json";
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useTransition } from 'react';

export default function DetailOrderCustomer() {
    const id_obj = useParams();
    console.log("params: ", id_obj)



    const [totalPrice, setTotalPrice] = useState("0");

    // modal pop up when delete
    const [showDelete, setShowDelete] = useState(false);
    const [idDeleteOrBlock, setIdDeleteOrBlock] = useState();


    
    const handleCloseDelete = (e) => {
        e.preventDefault();
        setShowDelete(false)
    };
    const confirmDelete = async (e) => {
        console.log("confirm delete id: ", idDeleteOrBlock);

        await axios({
            method: 'post',
            url: `http://localhost/dashboard/orderMember/delete/${idDeleteOrBlock}`,
        }).then(function (response) {
            // console.log(response);
            setMembers(response.data);
            setTempMembers(response.data);
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
                // console.log(response);
                setMembers(response.data);
                setTempMembers(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            await axios({
                method: 'post',
                url: `http://localhost/dashboard/membership/unblock/${idDeleteOrBlock}`,
            }).then(function (response) {
                // console.log(response);
                setMembers(response.data);
                setTempMembers(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }

        setShowBlock(false);
    }

    const handleShowDelete = async (e, id) => {
        e.preventDefault();
        setShowDelete(true)
        await setIdDeleteOrBlock(id);
        // console.log("test id: ", id);
        // console.log("order id for delete: ", idDeleteOrBlock);
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
        // console.log("id for block: ", idDeleteOrBlock);
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

    // const initData = JsonData.slice(0, 30);
    const initData = [];
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
                    <td style={each_td}> {member.ID_PRODUCT} </td>
                    <td style={each_td}> {member.NAME} </td>
                    <td style={each_td}> {member.QUANTITY} </td>
                    <td style={each_td}> {member.PRICE} </td>

                    {/* <td style={lastTd}> */}
{/* 
                        <Link style={{ textDecoration: "none", color: 'none' }} to={`/dashboard/membership/edit/${member.ID}`}>
                            <AiIcons.AiFillEdit className="icon" />
                        </Link> */}
{/* 
                        <Link style={{ textDecoration: "none" }} to={`/dashboard/orderMember/detail/${member.ID_ORDER_MEMBER}`}>
                            <AiIcons.AiFillInfoCircle className="icon" />
                        </Link>

                        <Link onClick={e => handleShowDelete(e, member.ID_ORDER_MEMBER)} style={{ textDecoration: "none" }} to={`#`}>
                            <AiIcons.AiFillDelete className="icon" />
                        </Link> */}

                        {/* <Link onClick={e => handleShowBlock(e, member.ID, member._BLOCK)} style={{ textDecoration: "none", fontSize: 16, marginRight: member._BLOCK == 0 ? 20 : 2, color: "#fd4f4f", fontWeight: 'bold' }} to={`#`}>
                            {member._BLOCK == 0 ? "Block" : "Unblock"}
                        </Link> */}


                        {/* <Button onClick={handleShow}>
                                                <AiIcons.AiFillDelete  className="icon" />
                                            </Button> */}

                    {/* </td> */}
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
        console.log("search term: ", searchTerm);
        var filterData = [];
        let count = 0;
        for (let i = 0; i < tempMembers.length; i++) {
            if (tempMembers[i].USERNAME.toLowerCase().includes(searchTerm.toLowerCase())) {
                filterData[count++] = tempMembers[i];
            }
        }
        filterData.sort(function comp(a, b) { if (a.ID < b.ID) { return 1; } });
        console.log('filter data: ', filterData);
        // console.log("page selected: ", pageNumber);
        
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
            // setMembersVisited(0);   
            // setMembersPerPage(10);
            setMembers(tempMembers);
        }
    };

    const [searchTerm, setSearchTerm] = useState("");


    const getMembership = async () => {
        // await axios({
        //     method: 'get',
        //     url: 'http://localhost/dashboard/membership',
        // }).then(function (response) {
        //     console.log(response);
        //     setMembers(response.data);
        // }).catch(function (error) {
        //     console.log(error);
        // });
        const temp = await axios.get('http://localhost/dashboard/membership');
        setMembers(temp.data)
    }

    const [firstFetch, setFirstFetch] = useState(true);

    useEffect(() => {

        // async function fetchData()  {
        //     await axios({
        //         method: 'get',
        //         url: 'http://localhost/dashboard/membership',
        //     }).then(function (response) {
        //         console.log(response);
        //         setMembers(response.data);
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        // }
        // handleSearch();

        if (firstFetch) {
            axios({
                method: 'get',
                url: `http://localhost/dashboard/orderCustomer/detail/${id_obj.id}`,
            }).then(function (response) {
                console.log("response: ", response.data );
                setMembers(response.data);
                setTempMembers(response.data);
                // this.initData = response.data;
            }).catch(function (error) {
                console.log(error);
            });

            axios({
                method: 'get',
                url: `http://localhost/dashboard/orderCustomer/total_price/${id_obj.id}`,
            }).then(function (response) {
                console.log("response for total price detail: ", response.data.TOTAL_PRICE_CUSTOMER );
                setTotalPrice(response.data.TOTAL_PRICE_CUSTOMER)
                console.log("bug: ", totalPrice);
                // this.initData = response.data;
            }).catch(function (error) {
                console.log(error);
            });


            setFirstFetch(false);
            // console.log("first fetch: ", firstFetch);
        }

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
        // handleSearch();


    }, [totalPrice]);
    // , idDeleteOrBlock



    return (
        <div className="container" style={{ maxWidth: 2000, height: '100%' }}>
            <div className='path' style={pathStyle}>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Detail Order Member {id_obj.id} </h1>
            </div>
            <div className="content" style={memberStyle}>

                <div style={{  margin: '0 auto', marginTop: 40 }} className="input-group mb-3">


                    <Link style={{ textDecoration: "none" }} to={`/dashboard/orderCustomer`}>
                        <Button variant="warning">
                                Go back
                        </Button>
                    </Link>
                </div>

                <Table style={{ width: 1100, margin: '0 auto' }} responsive>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Price per product (USD)</th>

                        </tr>
                    </thead>
                    <tbody>
                        {displayMembers(members)}
                    </tbody>
                </Table>

                <div style={{    marginTop: '30px',
    fontSize: '20px',
    textAlign: 'right',
    marginRight: '270px'}}>
                    <span style={{fontWeight: 'bold', paddingRight: '20px'}}>Total: </span>
                    {totalPrice}
                </div>


                {/* test pagination */}
                {/* {displayUsers}*/}
                {/* <div className="paginate">
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
                </div> */}



                {/* <Modal show={showDelete} onHide={e => handleCloseDelete(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this order?</Modal.Body>
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
                </Modal> */}



            </div>
        </div>
    );
}






// import './style.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
// import ReactPaginate from "react-paginate";
// import Table from 'react-bootstrap/Table';
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import JsonData from "../STATIC_DATA.json"

// export default function DetailOrderMember() {
//     const id_obj = useParams();
//     // console.log("id object: ", id_obj);
//     const spanStyle = {
//         width:130,
//         display: 'flex',
//         justifyContent: 'center',
//         fontWeight: 'bold',
//     }
//     const [member, setMember] = useState(JsonData[id_obj.id - 1]);

//     useEffect( () => {
//          axios({
//             method: 'get',
//             url: `http://localhost/dashboard/orderMember/detail/${id_obj.id}`,
//         }).then(function (response) {
//             console.log(response);
//             // setMember(response.data);
//         }).catch(function (error) {
//             console.log(error);
//         });
//     }, [])

//     return (
//         <div className="container" style={{maxWidth: 2000, height: '100vh'}}>
//             <div className="title" style={{paddingTop: 30}}>
//                 <h1>Detailed information order {id_obj.id}</h1>
//             </div>

//             {/* <div className='input-content' style={{width: 800, margin: '0 auto', marginTop: 30}}>
//                 <div className="input-group mb-3">
//                     <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">ID</span>
//                     <input defaultValue={member.ID} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
//                 </div>

//                 <div className="input-group mb-3">
//                     <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Fullname</span>
//                     <input defaultValue={member.USERNAME} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
//                 </div>

//                 <div className="input-group mb-3">
//                     <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Phone number</span>
//                     <input defaultValue={member.EMAIL} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
//                 </div>

//                 <div className="input-group mb-3">
//                     <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Email</span>
//                     <input defaultValue={member.PHONENUMBER} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
//                 </div>
//             </div>
            
//             <div className='groupButton' style={{marginTop: 50}}>
//                 <Link style={{textDecoration: "none", marginRight:80}} to={`/dashboard/membership/`}>
//                     <button style={{width:100}} type="button" className="btn btn-primary">Done</button>
//                 </Link>   
//             </div> */}
//       </div>
//     );
// }