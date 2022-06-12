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


