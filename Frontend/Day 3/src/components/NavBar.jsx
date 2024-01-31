import { Link } from "react-router-dom";
import '../assets/css/NavBar.css';
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

// import React from 'react';
function NavBar({login, userOrAdmin}){
    return(
        <div className="navbar-outer">
            <Link to="/" className="link-tag"><div className="navbar-field">HOME</div></Link>
            <Link to="/aboutus" className="link-tag"><div className="navbar-field">ABOUT US</div></Link>
            <div className="logo">
                BOAT VOYAGER
            </div>
            <Link to="/contact-us" className="link-tag"><div className="navbar-field">CONTACT US</div></Link>
            {
                login ?
                <>
                    <Link to={(userOrAdmin=="user")?"/dashboard/your-profile":"/dashboard/add-boat-house"} className="link-tag" ><div className="navbar-field"><CgProfile size={35} className="navbar-profile-icon"/></div></Link>
                </>
                :
                <Link to="/signin" className="link-tag"><div className="navbar-field">LOGIN/REGISTER</div></Link>
            }
            
            <div className="navbar-bottom-border"></div>
        </div>  
    );
}
export default NavBar;