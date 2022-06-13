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
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown'
import OrderMember from "../../components/OrderMember";
import DetailOrderMember from "../../components/OrderMember/Detail";
import OrderCustomer from "../../components/OrderCustomer";
import DetailOrderCustomer from "../../components/OrderCustomer/Detail";

export default class Dashboard extends React.Component {

  render = () => (
    <div className="d-flex">
      <SideNavBar />
      {/* <div className="col-lg-2">
        <SideNavBar />
      </div> */}
      <div className="col" style={{ height: '100%' }}>

        <div className="top-nav" style={{ height: 60, textAlign: 'right' }}>
          {/* <h2 style={{marginBottom: 0}}>Top nav</h2> */}
          {/* <BiIcons.BiUserCircle style={{ fontSize: 35, marginTop: 10, marginRight: 10 }} className="icon" /> */}
          {/* background: 'transparent', border: '0px transparent' */}
          <Dropdown>
            <Dropdown.Toggle style={{ background: 'transparent', border: '0px transparent' }} variant="success" id="dropdown-basic" className="btn-primary">
              <BiIcons.BiUserCircle style={{ color: 'black', fontSize: 35, marginTop: 10 }} className="icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="http://localhost:3000/">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="line" style={{ height: 1, backgroundColor: '#D2D4DD', marginTop: 0 }}></div>
        </div>

        <Routes>
          <Route
            path="/dashboard"
            element={
              <Overview
              />
            }
          />
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
          <Route
            path="/dashboard/orderMember"
            element={
              <OrderMember
              />
            }
          />
          <Route
            path="/dashboard/orderMember/detail/:id"
            element={
              <DetailOrderMember
              />
            }
          />
          <Route
            path="/dashboard/orderCustomer"
            element={
              <OrderCustomer
              />
            }
          />
          <Route
            path="/dashboard/orderCustomer/detail/:id"
            element={
              <DetailOrderCustomer
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


