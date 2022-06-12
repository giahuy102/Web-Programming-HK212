import './style.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

export default function Header() {

    // useEffect(() => {
    //     axios.get(`http://localhost/example`)
    //     .then(res => {
    //         console.log(res.data);
    //         setExampleData(JSON.stringify(res.data));
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     }, []);
    // });
    return (
        <div>
            <div className='home_section_1 d-flex justify-content-center'>
                <div className='inner_home_section_1 d-flex flex-column justify-content-center align-items-center' style={{
                    textAlign: 'center'
                }}>

                    <h2>The best place to try Vietnamese food.</h2>
                    <p>BK Restaurant is one of the famous restaurants on Vietnamese cuisine. Let's order and enjoy our delicious dishes!</p>
                    <Link to='/' className='home_section_1_link'>
                        Order now
                    </Link>
                </div>
            </div>
            <div className='home_section_2 d-flex flex-wrap'>
                <div className='home_section_2_1 d-flex flex-column justify-content-center'>
                    <h3>Our restaurant was established in <span>2000</span></h3>
                    <p>
                    Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
                    </p>
                </div>
                <div className='home_section_2_2 d-flex justify-content-center align-items-center'>
                    <img src={require('../../assets/images/background_1.png')}></img>
                </div>
            </div>

            <div className='home_section_3 d-flex flex-wrap-reverse'>
                <div className='home_section_3_1 d-flex justify-content-center align-items-center'>
                    <img src={require('../../assets/images/background_1.png')}></img>
                </div>
                <div className='home_section_3_2 d-flex flex-column justify-content-center'>
                    <h3>Spacius and typical Vietnamese space.</h3>
                    <p>
                    Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
                    </p>
                </div>



            </div>

            <div className='home_section_3 d-flex flex-wrap'>

                <div className='home_section_3_2 d-flex flex-column justify-content-center'>
                    <h3>Open from 9 AM to 10 PM.</h3>
                    <p>
                    Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
                    </p>
                </div>
                <div className='home_section_3_1 d-flex justify-content-center align-items-center'>
                    <img src={require('../../assets/images/background_1.png')}></img>
                </div>

            </div>




         
        </div>
    );
}