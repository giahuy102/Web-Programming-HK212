import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

import Dropdown from 'react-bootstrap/Dropdown'
import * as BiIcons from "react-icons/bi";
// import { Footer } from 'react-bootstrap/lib/Modal';
import axios from 'axios';
export default function Footer() {

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

    return (
        <div
            style={{
                height: '250px',
                backgroundColor: '#3B3232',
                color: 'white',
                marginTop: '500px'
            }}
            className='d-flex flex-column justify-content-around'
        >
            <h5 className='footer_content'>{member.TAX_ID}</h5>
            <h5 className='footer_content'>{member.ADDRESS_COMPANY}</h5>
            <h5 className='footer_content'>{member.EMAIL}</h5>
            <h5 className='footer_content'>{member.PHONENUMBER}</h5>
        </div>
    );

}