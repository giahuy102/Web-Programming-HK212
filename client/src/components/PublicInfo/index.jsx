import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import JsonData from "./STATIC_DATA.json";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function PublicInfo() {


    const [member, setMember] = useState({});

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost/dashboard/publicInfo',
        }).then(function (response) {
            console.log(response);
            setMember(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    const pathStyle = {
        backgroundColor: 'white',
        textAlign: 'left',
    }
    const infoStyle = {
        backgroundColor: '#F7F8FC',
    }

    const spanStyle = {
        width:130,
        display: 'flex',
        justifyContent: 'center',
    }
    // const [member, setMember] = useState({});

    // const [newID, setNewID] = useState();

    const confirmEdit = async () => {
        // console.log("change: ", document.getElementById('tax_id').value)
        // console.log("change: ", document.getElementById('company_name').value)
        // console.log("change: ", document.getElementById('address').value)
        // console.log("change: ", document.getElementById('email').value)
        // console.log("change: ", document.getElementById('phone_number').value)
        let tax_id = document.getElementById('tax_id').value;
        let newCompanyName = document.getElementById('company_name').value;
        let newAddress = document.getElementById('address').value;
        let newEmail = document.getElementById('email').value;
        let newPhoneNumber = document.getElementById('phone_number').value;

        await axios({
            method: 'post',
            url: `http://localhost/dashboard/publicInfoEdit`,
            data: {
                tax_id: tax_id,
                company_name: newCompanyName,
                phone_number: newPhoneNumber,
                email: newEmail,
                address: newAddress
            }
        }).then(function (response) {
            console.log(response);
            setShowBlock(true);
        }).catch(function (error) {
            console.log(error);
        });
    }


    const [showBlock, setShowBlock] = useState(false);
    const handleCloseBlock = (e) => {
        e.preventDefault();
        setShowBlock(false)
    };

    const [blockOrNot, setBlockOrNot] = useState();
    const handleShowBlock = (e, id, blockOrUnblock) => {
        e.preventDefault();
        setShowBlock(true);
        setBlockOrNot(blockOrUnblock)
    };

    return (
        <div className="container" style={{maxWidth: 2000, height: '100%'}}>
            <div className='path' style={pathStyle}>
                <h1 style={{color: '#1570EF', fontWeight:'bold'}}>Public Information Management</h1>
            </div>

            <div style={{height: '100vh'}}>
                <div className='input-content' style={{width: 800, margin: '0 auto', marginTop: 30}}>
                    <div className="input-group mb-3">
                        <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Tax ID</span>
                        <input disabled id="tax_id"  defaultValue={member.TAX_ID} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                    </div>

                    <div className="input-group mb-3">
                        <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Company name</span>
                        <input id='company_name'  defaultValue={member.NAME_COMPANY} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                    </div>

                    <div className="input-group mb-3">
                        <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Address</span>
                        <input id='address'  defaultValue={member.ADDRESS_COMPANY} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                    </div>

                    <div className="input-group mb-3">
                        <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input id='email' defaultValue={member.EMAIL} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                    </div>

                    <div className="input-group mb-3">
                        <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Phone number</span>
                        <input id='phone_number' defaultValue={member.PHONENUMBER} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                    </div>
                </div>
                
                <div className='groupButton' style={{marginTop: 50, width:'fit-content', margin: '0 auto'}}>
                    {/* <Link style={{textDecoration: "none", marginRight:80}} to={`/dashboard/membership/`}> */}
                        <button onClick={confirmEdit} type="button" className="btn btn-primary">Confirm edit</button>
                    {/* </Link>    */}
                </div>
            </div>


            <Modal show={showBlock} onHide={e => handleCloseBlock(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update successfully!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have updated public information successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={e => handleCloseBlock(e)}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
      </div>
    );
}






// import './style.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ReactPaginate from "react-paginate";
// import Table from 'react-bootstrap/Table';
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import JsonData from "./STATIC_DATA.json";

// export default function PublicInfo() {

//     const pathStyle = {
//         backgroundColor: 'white',
//         textAlign: 'left',
//     }
//     const infoStyle = {
//         backgroundColor: '#F7F8FC',
//     }
//     const lastTd = {
//         backgroundColor: 'white',
//         fontSize: 20,
//         width: 220,
//     }

//     const each_td = {
//         lineHeight: 2,
//     }

//     const initData = JsonData.slice(0,30);
//     const [members, setMembers] = useState(initData);
//     const [pageNumber, setPageNumber] = useState(0);
//     // let membersPerPage = 10;
//     const [membersPerPage, setMembersPerPage] = useState(10);
//     // let membersVisited = pageNumber * membersPerPage;
//     const [membersVisited, setMembersVisited] = useState(pageNumber * membersPerPage);
//     const displayMembers = (membersList) => membersList.
//                         slice(membersVisited, membersVisited + membersPerPage).
//                         map( (member) => {
//                             return (
                                
//                                     <tr key={member.id}>
//                                         <td style={each_td}> {member.id} </td>
//                                         <td style={each_td}> {member.name} </td>
//                                         <td style={each_td}> {member.email} </td>
//                                         <td style={each_td}> {member.phone_number} </td>
//                                         <td style={lastTd}>
//                                             <Link style={{textDecoration: "none", color:'none'}} to={`/dashboard/publicInfo/edit/${member.id}`}>
//                                                 <AiIcons.AiFillEdit className="icon" />
//                                             </Link>
//                                         </td>
//                                     </tr>
                                
//                             );
//                         });
                    
                        
//     const pageCount = Math.ceil(members.length / membersPerPage);
//     const changePage = ({ selected }) => {
//         console.log("selected: ", selected);
//         setPageNumber(selected);
//         setMembersVisited(selected * membersPerPage);   // myself
//     };

//     const handleSearch = () => {
//         var filterData = [];
//         let count = 0;
//         for (let i = 0; i < initData.length; i++) {
//             if (initData[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
//                 filterData[count++] = initData[i];
//             }
//         }
//         filterData.sort(function comp (a, b) {if (a.id < b.id) {return -1;}} );
//         console.log(filterData);
//         console.log("page selected: ", pageNumber);

//         if (searchTerm.length > 0) {
//             if (pageNumber ==  0) {
//                 setMembers(filterData.slice(0, count));
//             }
//             else {
//                 console.log("page number != 0");
//                 setMembersVisited(0);
//                 setMembers(filterData.slice(0, count));
//             }
//         }
//         else {
//             console.log("searchTerm.length != 0: ", pageNumber); 
//             setMembersPerPage(10);
//             setMembers(initData);
//         }
//     };

//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         handleSearch();
//     }, [searchTerm]);

//     return (
//         <div className="container" style={{maxWidth: 2000, height: '100%'}}>
//             <div className='path' style={pathStyle}>
//                 <h1 style={{color: '#1570EF', fontWeight:'bold'}}>Public Information Management</h1>
//             </div>
//             <div className="content" style={infoStyle}>
//             <div style={{width:400, margin:'0 auto', marginTop:40}} className="input-group mb-3">
//                     <input 
//                         type="text" 
//                         className="form-control" 
//                         placeholder="Search..." 
//                         onChange={(event) => {
//                             setSearchTerm(event.target.value);
//                         }}
//                     />
//                 </div>

//                 <Table style={{width:1100, margin:'0 auto'}} responsive>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone number</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {displayMembers(members)}
//                     </tbody>
//                 </Table>

//                 <div className="paginate">
//                     <ReactPaginate
//                         nextLabel="Next"
//                         onPageChange={changePage}
//                         pageCount={pageCount}
//                         previousLabel="Previous"
//                         pageClassName="page-item"
//                         pageLinkClassName="page-link"
//                         previousClassName="page-item"
//                         previousLinkClassName="page-link"
//                         nextClassName="page-item"
//                         nextLinkClassName="page-link"
//                         breakLabel="..."
//                         breakClassName="page-item"
//                         breakLinkClassName="page-link"
//                         containerClassName="pagination"
//                         activeClassName="active"
//                     /> 
//                 </div>
//             </div>
//       </div>
//     );
// }