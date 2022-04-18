import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavBar from "../../components/SideNavBar/";
import "./style.css";
import Overview from "../../components/Overview";
import Membership from "../../components/Membership"
import Contact from "../../components/Contact";
import Comment from "../../components/Comment";
import PublicInfo from "../../components/PublicInfo";

export default class Dashboard extends React.Component {

  render = () => (
    <div className="d-flex">
      <SideNavBar />
      {/* <div className="col-lg-2">
        <SideNavBar />
      </div> */}
      <div className="col" style={{height: '100%'}}>
        <div className="top-nav" style={{height: 60}}>
          <h2 style={{marginBottom: 0}}>Top nav</h2>
          <div className="line" style={{height: 1, backgroundColor: '#D2D4DD', marginTop: 20}}></div>
        </div>
        <Routes>
          <Route
            path="/dashboard/overview"
            element={
              <Overview 
              />
            }
          />
          <Route
            path="/dashboard/membership"
            element={
              <Membership 
              />
            }
          />
          <Route
            path="/dashboard/comment"
            element={
              <Comment 
              />
            }
          />
          <Route
            path="/dashboard/contact"
            element={
              <Contact 
              />
            }
          />
          <Route
            path="/dashboard/publicInfo"
            element={
              <PublicInfo 
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}


// import './style.css';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SideNavBar from '../../components/SideNavBar';
// import Overview from '../../components/Overview';

// export default function Admin() {

//     return (
//         <div className='d-flex'>
//             <h1>Dashboard page</h1>
//             <SideNavBar/>
//             <div className="col">
//                 <Routes>
//                     <Route path="/admin/overview" element={<Overview />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// }


