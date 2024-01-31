import { useLocation } from 'react-router-dom';
import '../assets/css/YourProfile.css';
import React from 'react';
function YourProfile(){
    return (
        <div className="your-profile-outer">
            <h2 className="your-profile-label">Name</h2>
            <p className="your-profile-data">Shreya </p>
            <hr/>
            <h2 className="your-profile-label">Phone number</h2>
            <p className="your-profile-data">+91 88703 48588 </p>
            <hr/>
            <h2 className="your-profile-label">Email ID</h2>
            <p className="your-profile-data">shreya24@gmail.com </p>
            <hr/>
            <h2 className="your-profile-label">Address</h2>
            <p className="your-profile-data"> 23, Adithya avenue, KNG pudur pirivu, Coimbatore 641025</p>
            <hr/>
            <h2 className="your-profile-label">Password</h2>
            <p className="your-profile-data">********</p>
        </div>
    );
}
export default YourProfile;