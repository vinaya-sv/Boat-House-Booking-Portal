import { Link } from "react-router-dom";
import '../assets/css/NavBar.css';
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useUserContext } from "../pages/UserContext";

// import React from 'react';
function NavBar(){
    const {isLoggedIn, adminOrUser}=useUserContext();
    return(
        <div className="navbar-outer">
            <Link to="/" className="link-tag"><div className="navbar-field">HOME</div></Link>
            <Link to="/aboutus" className="link-tag"><div className="navbar-field">ABOUT US</div></Link>
            <div className="logo">
                BOAT VOYAGER
            </div>
            <Link to="/contact-us" className="link-tag"><div className="navbar-field">CONTACT US</div></Link>
            {
                isLoggedIn ?
                <>
                    <Link to={(adminOrUser=="user")?"/dashboard/your-profile":"/admin-dashboard/statistics"} className="link-tag" ><div className="navbar-field"><CgProfile size={35} className="navbar-profile-icon"/></div></Link>
                </>
                :
                <Link to="/signin" className="link-tag"><div className="navbar-field">LOGIN/REGISTER</div></Link>
            }
            
            <div className="navbar-bottom-border"></div>
        </div>  
    );
}
export default NavBar;