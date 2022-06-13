import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import JsonData from "../IMAGE_STORAGE.json";
import FileUploadForm from './FileUploadForm';

export default function CreateImageStorage() {
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

    // const [news, setNews] = useState({});

    // const objId = useParams();

    // useEffect(() => {
    //     let news = JsonData.filter((news) => news.id == objId.id)[0];
    //     setNews(news);
    // });

    // function displayTimestamp (time) {  console.log("Time: ", time)  //  time -> YYYYMMDDHHMMSS
    //     if (time === "")
    //         return "";
    //     return time.slice(8, 10) + ":" + time.slice(10, 12) + ":" + time.slice(12) + "\t" + time.slice(6, 8) + "-" + time.slice(4, 6) + "-" + time.slice(0, 4);
    // }

    const id_admin = Number(useParams().id_admin); console.log("ID admin: ", id_admin);

    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");
    const [position, setPosition] = useState("");

    const handleChangeFile = (file) => {
        setFile(file);
    }

    const handleClickDone = () => {
        axios({
            method: 'post',
            url: "http://localhost/dashboard/image-storage/create",
            data: {
                url_img: url,
                position: position,
                id_admin: id_admin
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch (function (err) {
            console.log(err);
        });
    }

    return (
        <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
            <div className='title' style={pathStyle}>
                <Link to="/dashboard/image-storage" style={{ textDecoration: "none", color: 'none', fontSize: "35px", float: "left" }}>
                    <AiIcons.AiOutlineLeftCircle className='icon' />
                </Link>
                <h1 style={{ color: '#1570EF', fontWeight: 'bold' }}>Create Image Storage</h1>
            </div>

            <div className='input-content' style={{ width: 800, margin: '0 auto', marginTop: 30 }}>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Url</span>
                    {/* <input 
                        type="file" accept='image/*' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                        onChange={ (event) => handleChangeFile(event.target.files[0])}
                    /> */}
                    <FileUploadForm/>
                    <br />
                </div>
                <div className="input-group mb-3">
                    <span style={spanStyle} className="input-group-text" id="inputGroup-sizing-default">Position</span>
                    {/* <textarea 
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                        onChange={(event) => handleChangePosition(event.target.value)}
                    /> */}
                    <select type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        <option value="home">Home</option>
                        <option value="about">About</option>
                        <option value="menu">Menu</option>
                        <option value="contact">Contact</option>
                        <option value="news">News</option>
                        <option value="cart">Cart</option>
                        <option value="member">Member Information</option>
                    </select>
                    <br />
                </div>
                <div className='groupButton' style={{ margin: '50 auto auto auto', textAlign: 'center' }}>
                    <Link style={{ textDecoration: "none" }} to={`/dashboard/image-storage/`}>
                        <button 
                            style={{ width: 100 }} type="button" className="btn btn-primary"
                            onClick={() => handleClickDone()}
                        >
                            Done
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}