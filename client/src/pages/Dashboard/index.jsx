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
import Product from "../../components/Product/Product";
import DetailProduct from "../../components/Product/Detail/DetailProduct";
import EditProduct from "../../components/Product/Edit/EditProduct";
import CreateProduct from "../../components/Product/Create/CreateProduct";
import News from "../../components/News/News.jsx";
import DetailNews from "../../components/News/Detail/DetailNews";
import EditNews from "../../components/News/Edit/EditNews";
import CreateNews from "../../components/News/Create/CreateNews";
import ImageStorage from "../../components/ImageStorage/ImageStorage";
import EditImageStorage from "../../components/ImageStorage/EditImageStorage/EditImageStorage";
import CreateImageStorage from "../../components/ImageStorage/CreateImageStorage/CreateImageStorage";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown'
import OrderMember from "../../components/OrderMember";
import DetailOrderMember from "../../components/OrderMember/Detail";
import OrderCustomer from "../../components/OrderCustomer";
import DetailOrderCustomer from "../../components/OrderCustomer/Detail";
import Category from "../../components/Category/Category";

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
              <Dropdown.Item onClick={() => {
                localStorage.removeItem('jwt_data');
                window.location.href = '/home';
              }}>Logout</Dropdown.Item>
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

          <Route
            path="/dashboard/product"
            element={
              <Product 
              />
            }
          />
          <Route
            path="/dashboard/product/detail/:id"
            element={
              <DetailProduct 
              />
            }
          />
          <Route
            path="/dashboard/product/edit/:id"
            element={
              <EditProduct 
              />
            }
          />
          <Route
            path="/dashboard/product/create"
            element={
              <CreateProduct 
              />
            }
          />

          <Route
            path="/dashboard/news"
            element={
              <News 
              />
            }
          />
          <Route
            path="/dashboard/news/detail/:id"
            element={
              <DetailNews 
              />
            }
          />
          <Route
            path="/dashboard/news/edit/:id"
            element={
              <EditNews 
              />
            }
          />
          <Route
            path="/dashboard/news/:id_admin/create"
            element={
              <CreateNews 
              />
            }
          />

          <Route
            path="/dashboard/image-storage"
            element={
              <ImageStorage 
              />
            }
          />
          <Route
            path="/dashboard/image-storage/edit/:id"
            element={
              <EditImageStorage 
              />
            }
          />
          <Route
            path="/dashboard/image-storage/:id_admin/create"
            element={
              <CreateImageStorage 
              />
            }
          />

          <Route
            path="/dashboard/category"
            element={
              <Category 
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


