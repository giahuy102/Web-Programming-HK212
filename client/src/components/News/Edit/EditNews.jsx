import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import JsonData from "../NEWS_DATA.json";

export default function EditNews() {
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

    const [news, setNews] = useState({});

    const objId = useParams();

    useEffect(() => {
        let news = JsonData.filter((news) => news.id == objId.id)[0];
        setNews(news);
    });

    // function displayTimestamp (time) {  console.log("Time: ", time)  //  time -> YYYYMMDDHHMMSS
    //     if (time === "")
    //         return "";
    //     return time.slice(8, 10) + ":" + time.slice(10, 12) + ":" + time.slice(12) + "\t" + time.slice(6, 8) + "-" + time.slice(4, 6) + "-" + time.slice(0, 4);
    // }

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
            <div className='title' style={pathStyle}>
                <Link to="/dashboard/news" style={{ textDecoration: "none", color: 'none', fontSize: "35px", float: "left" }}>
                    <AiIcons.AiOutlineLeftCircle className='icon' />
                </Link>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Edit News Information</h1>
            </div>

            <div className='input-content' style={{ width: 800, margin: '0 auto', marginTop: 30 }}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">ID</span>
                    <input defaultValue={news.id} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Title</span>
                    <input defaultValue={news.title} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Content</span>
                    <textarea defaultValue={news.content} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Created at</span>
                    <input
                        defaultValue={news.created_at}
                        disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    />
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">ID Admin</span>
                    <input defaultValue={news.id_admin} disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <br />
                </div>
                <div className='groupButton' style={{ margin: '50 auto auto auto', textAlign: 'center' }}>
                    <Link style={{ textDecoration: "none" }} to={`/dashboard/news/`}>
                        <button style={{ width: 100 }} type="button" className="btn btn-primary">Done</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}