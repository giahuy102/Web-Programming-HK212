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
        setMember(prev => ({
            member: {
                ...prev,
                id:event.target.value
            }
        }))
    }

    useEffect(() => {
        // console.log(id_obj.id);
        let getMember = JsonData.filter( (member) => member.id == id_obj.id);
        // console.log(getMember[0]);
        setMember(getMember[0]);
        console.log(member);
    });

    return (
        <div className="container" style={{maxWidth: 2000, height: '100vh'}}>
            <div className="title" style={{paddingTop: 30}}>
                <h1>Edit information member {id_obj.id}</h1>
            </div>

            <div className='input-content' style={{width: 800, margin: '0 auto', marginTop: 30}}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">ID</span>
                    <input onChange={handleChange} defaultValue={member.id} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Fullname</span>
                    <input onChange={handleChange} defaultValue={member.name} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Phone number</span>
                    <input onChange={handleChange} defaultValue={member.phone_number} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input onChange={handleChange} defaultValue={member.email} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>
            </div>
            
            <div className='groupButton' style={{marginTop: 50}}>
                <Link style={{textDecoration: "none", marginRight:80}} to={`/dashboard/membership/`}>
                    <button type="button" className="btn btn-secondary">Go back</button>
                </Link>
                <Link style={{textDecoration: "none", marginRight:80}} to={`/dashboard/membership/`}>
                    <button type="button" className="btn btn-primary">Confirm</button>
                </Link>   
            </div>


      </div>
    );
}