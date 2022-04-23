import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavBar from "../../components/SideNavBar/";
import "./style.css";
import Overview from "../../components/Overview";
import Membership from "../../components/Membership"
import CommentNews from "../../components/CommentNews";
import EditMembership from "../../components/Membership/Edit";
import DetailMembership from "../../components/Membership/Detail";
import CommentProduct from "../../components/CommentProduct";
import Contact from "../../components/Contact";
import PublicInfo from "../../components/PublicInfo";
import EditPublicInfo from "../../components/PublicInfo/Edit";

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
            path="/dashboard/membership/edit/:id"
            element={
              <EditMembership 
              />
            }
          />
          <Route
            path="/dashboard/membership/detail/:id"
            element={
              <DetailMembership 
              />
            }
          />
          <Route
            path="/dashboard/commentNews"
            element={
              <CommentNews 
              />
            }
          />
          <Route
            path="/dashboard/commentProduct"
            element={
              <CommentProduct
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
          <Route
            path="/dashboard/publicInfo/edit/:id"
            element={
              <EditPublicInfo 
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


