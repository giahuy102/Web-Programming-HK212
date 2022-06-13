import React, { useEffect, useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BSIcons from "react-icons/bs";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

import "./style.css";

export default function SideNavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [active, setActive] = useState(!isSmallScreen);
  const [myStyle, setStyle] = useState({
    minHeight: window.innerHeight
  })

  
  const [className, setClassName] = useState('');


  const updateSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // console.log("height: ", height);
    // const ele = document.getElementsByClassName("container");
    // console.log("ele: ", ele)
    const breakpoint_lg = 992;
    if (width < breakpoint_lg) {
      setActive(false);
    }
    setStyle({minHeight: height});
  }

  useEffect(() => {
    // console.log("use")
    // window.addEventListener('resize', updateSize());

    if (window.innerWidth <= 768) {
      setIsSmallScreen(false);
      setActive(true);
      setClassName('nav-bar inactive-small-screen');
    }
    else {
      setIsSmallScreen(true);
      setActive(false);
      setClassName('nav-bar');
    }
    // if (active) setClassName('nav-bar');
    // else {
    //   if (window.innerWidth  <= 768) {
    //     setIsSmallScreen(true);
        
    //   }
    //   else {
    //     setIsSmallScreen(false);
    //     setClassName('nav-bar nav-bar-inactive');
    //   }
    // }
  }, []);

  useEffect(() => {
    
  });
  
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      {/* <nav style={myStyle} className={active ? "nav-bar inactive-small-screen" : "nav-bar inactive-small-screen nav-bar-inactive"}> */}
      <nav style={myStyle} className={className}>
        
        <img style={{marginLeft: 0, marginRight: 20}} src={require("../../assets/images/logo.png")}></img>
        <Link
          className="transition-button"
          to="#"
          onClick={() => setActive(!active)}
        >
          <FaIcons.FaBars className="fabar-icon" />
        </Link>
        <ul>
            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/overview">
                    <AiIcons.AiOutlineHome className="icon" />
                    <span  >Overview</span>
                </Link>
            </li>

            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/membership">
                    <BSIcons.BsPersonCheck className="icon" />
                    <span>Membership</span>
                </Link>
            </li>

            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/commentNews">
                    <BSIcons.BsNewspaper className="icon" />
                    <span>News Comment</span>
                </Link>
            </li>

            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/commentProduct">
                    <AiIcons.AiOutlineComment className="icon" />
                    <span>Product Comment</span>
                </Link>
            </li>

            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/contact">
                    <AiIcons.AiOutlineContacts className="icon" />
                    <span>Contact</span>
                </Link>
            </li>

            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/publicInfo">
                    <AiIcons.AiOutlineInfoCircle className="icon" />
                    <span>Information</span>
                </Link>
            </li>

            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/product">
                    <FaIcons.FaHamburger className="icon" />
                    <span>Product</span>
                </Link>
            </li>

            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/news">
                    <FaIcons.FaPaperPlane className="icon" />
                    <span>News</span>
                </Link>
            </li>

            <li>
                <Link style={{textDecoration: "none"}} to="/dashboard/image-storage">
                    <FaIcons.FaImage className="icon" />
                    <span>Image Storage</span>
                </Link>
            </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}


// export default function SideNavBar() {
//     return (
//         <h1>SideNavBar</h1>
//     );
// }