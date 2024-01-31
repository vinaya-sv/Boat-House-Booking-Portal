import '../assets/css/YourProfile.css';
import React from 'react';
import { BsPencilSquare } from "react-icons/bs";
function YourProfile(){
    const userData={userName:"Shreya",phoneNumber:""}
    return (
        <div className="your-profile-outer">
            <h2 className="your-profile-label">Name</h2>
            <input type="text" className="your-profile-data" value="Shreya" disabled></input>
            <BsPencilSquare className="your-profile-data-edit-icon"/>
            <hr/>
            <h2 className="your-profile-label">Phone number</h2>
            <input type="text" className="your-profile-data" value="+91 88703 48588" disabled></input>
            <BsPencilSquare className="your-profile-data-edit-icon"/>
            <hr/>
            <h2 className="your-profile-label">Email ID</h2>
            <input type="text" className="your-profile-data" value="shreya@gmail.com" disabled></input>
            <BsPencilSquare className="your-profile-data-edit-icon"/>
            <hr/>
            <h2 className="your-profile-label">Address</h2>
            <input type="text" className="your-profile-data" value="23, Adithya avenue, KNG pudur pirivu, Coimbatore 641025" disabled></input>
            <BsPencilSquare className="your-profile-data-edit-icon"/>
            <hr/>
            <h2 className="your-profile-label">Password</h2>
            <input type="text" className="your-profile-data" value="*******" disabled></input>
            <BsPencilSquare className="your-profile-data-edit-icon"/>
            <hr/>
        </div>
    );
}
export default YourProfile;