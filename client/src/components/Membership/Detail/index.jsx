import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import JsonData from "../STATIC_DATA.json"

export default function DetailMembership() {
    const id_obj = useParams();
    // console.log("params: ", id_obj)
    const spanStyle = {
        width:130,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
    }
    const [member, setMember] = useState(JsonData[id_obj.id - 1]);

    useEffect( () => {
         axios({
            method: 'get',
            url: `http://localhost/dashboard/membership/detail/${id_obj.id}`,
        }).then(function (response) {
            console.log(response);
            setMember(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, [])

    return (
        <div className="container" style={{maxWidth: 2000, height: '100vh'}}>
            <div className="title" style={{paddingTop: 30}}>
                <h1>Detailed information member {id_obj.id}</h1>
            </div>

            <div className='input-content' style={{width: 800, margin: '0 auto', marginTop: 30}}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">ID</span>
                    <input defaultValue={member.ID} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Fullname</span>
                    <input defaultValue={member.USERNAME} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Phone number</span>
                    <input defaultValue={member.EMAIL} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>

                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input defaultValue={member.PHONENUMBER} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/> <br/>
                </div>
            </div>
            
            <div className='groupButton' style={{marginTop: 50}}>
                <Link style={{textDecoration: "none", marginRight:80}} to={`/dashboard/membership/`}>
                    <button style={{width:100}} type="button" className="btn btn-primary">Done</button>
                </Link>   
            </div>
      </div>
    );
}