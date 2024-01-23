import { Link } from "react-router-dom";
import '../assets/css/NavBar.css';
// import React from 'react';
function NavBar(){
    return(
        <div className="navbar-outer">
            <Link to="/" className="link-tag"><div className="navbar-field">HOME</div></Link>
            <Link to="/aboutus" className="link-tag"><div className="navbar-field">ABOUT US</div></Link>
            <div className="logo">
                BOAT VOYAGER
            </div>
            <Link to="/aboutus" className="link-tag"><div className="navbar-field">CONTACT</div></Link>
            <Link to="/login" className="link-tag"><div className="navbar-field">LOGIN</div></Link>
        </div>
    );
}
export default NavBar;