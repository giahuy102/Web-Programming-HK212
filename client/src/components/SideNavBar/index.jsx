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
  const [active, setActive] = useState(true);
  const [myStyle, setStyle] = useState({
    minHeight: window.innerHeight
  })
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
  });
  
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav style={myStyle} className={active ? "nav-bar" : "nav-bar nav-bar-inactive"}>
        
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
                <Link style={{textDecoration: "none"}} to="/dashboard/comment">
                    <AiIcons.AiOutlineComment className="icon" />
                    <span>Comment</span>
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