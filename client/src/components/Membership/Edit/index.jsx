import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import JsonData from "../STATIC_DATA.json";


export default function EditMembership() {
    const id_obj = useParams();
    const spanStyle = {
        width:130,
        display: 'flex',
        justifyContent: 'center',
    }
    const [member, setMember] = useState({});

    const handleChange = (event) => {
        // setMember(prev => ({
        //     member: {
        //         ...prev,
        //         id:event.target.value
        //     }
        // }))
        
    }

    const handleChangeID = async (event) => {
        // setMember(prev => ({
        //     member: {
        //         ...prev,
        //         id:event.target.value
        //     }
        // }))
        await setNewID(event.target.value);
        // console.log("new id: ", newID);
    }

    const [newID, setNewID] = useState();

    const confirmEdit = async () => {
        // console.log("change: ", document.getElementById('id').value)
        // console.log("change: ", document.getElementById('username').value)
        // console.log("change: ", document.getElementById('phone_number').value)
        // console.log("change: ", document.getElementById('email').value)
        let newID = document.getElementById('id').value;
        let newUsername = document.getElementById('username').value;
        let newPhoneNumber = document.getElementById('phone_number').value;
        let newEmail = document.getElementById('email').value;
        await axios({
            method: 'post',
            url: `http://localhost/dashboard/membership/edit/${id_obj.id}`,
            data: {
                id: newID,
                username: newUsername,
                phone_number: newPhoneNumber,
                email: newEmail
            }
        }).then(function (response) {
            // console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    useEffect( () => {
        // let getMember = JsonData.filter( (member) => member.id == id_obj.id);
        // setMember(getMember[0]);
        // console.log(member);
         axios({
            method: 'get',
            url: `http://localhost/dashboard/membership/detail/${id_obj.id}`,
        }).then(function (response) {
            console.log(response);
            setMember(response.data);
        }).catch(function (error) {
            console.log(error);
        });

    }, [newID]);

    return (
        <div className="container" style={{maxWidth: 2000, height: '100vh'}}>
            <div className="title" style={{paddingTop: 30}}>
                <h1>Edit information member {id_obj.id}</h1>
            </div>

            <div className='input-content' style={{width: 800, margin: '0 auto', marginTop: 30}}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">ID</span>
                    <input id="id" onChange={handleChangeID} defaultValue={member.ID} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Fullname</span>
                    <input id='username' onChange={handleChange} defaultValue={member.USERNAME} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Phone number</span>
                    <input id='phone_number' onChange={handleChange} defaultValue={member.PHONENUMBER} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input id='email' onChange={handleChange} defaultValue={member.EMAIL} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>
            </div>
            
            <div className='groupButton' style={{marginTop: 50}}>
                <Link style={{textDecoration: "none", marginRight:80}} to={`/dashboard/membership/`}>
                    <button type="button" className="btn btn-secondary">Go back</button>
                </Link>
                <Link style={{textDecoration: "none", marginRight:80}} to={`/dashboard/membership/`}>
                    <button onClick={confirmEdit} type="button" className="btn btn-primary">Confirm</button>
                </Link>   
            </div>


      </div>
    );
}