import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import JsonData from "../NEWS_DATA.json";

export default function CreateNews() {
    const spanStyle = {
        width: 130,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
    }
    const pathStyle = {
        backgroundColor: '#F7F8FC',
        textAlign: 'center',
    };

    const id_admin = Number(useParams().id_admin); console.log("ID admin: ", id_admin);

    const handleClickDone = async () => {
        let title = document.getElementById('news_title').value; 
        let content = document.getElementById('news_content').value;
        await axios({
            method: 'post',
            url: `http://localhost/dashboard/news/create`,
            data: {
                title: title,
                content: content,
                id_admin: id_admin
            }
        })
        .then(function (response) {
            console.log("Response create news: ", response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
            <div className='title' style={pathStyle}>
                <Link to="/dashboard/news" style={{ textDecoration: "none", color: 'none', fontSize: "35px", float: "left" }}>
                    <AiIcons.AiOutlineLeftCircle className='icon' />
                </Link>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Create News</h1>
            </div>

            <div className='input-content' style={{ width: 800, margin: '0 auto', marginTop: 30 }}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Title</span>
                    <input id='news_title' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Content</span>
                    <textarea id='news_content' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className='groupButton' style={{ margin: '50 auto auto auto', textAlign: 'center' }}>
                    <Link style={{ textDecoration: "none" }} to={`/dashboard/news/`}>
                        <button 
                            style={{ width: 100 }} type="button" className="btn btn-primary"
                            onClick={handleClickDone}
                        >
                            Done
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}