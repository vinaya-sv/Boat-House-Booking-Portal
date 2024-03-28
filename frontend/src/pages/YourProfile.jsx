import axios from 'axios';
import '../assets/css/YourProfile.css';
import React, { useEffect, useState } from 'react';
import { BsPencilSquare } from "react-icons/bs";
import {localhost} from '../services/localhost';
function YourProfile(){
    const [userData,setUserData]=useState({
        "username": "",
        "emailId": "",
        "image": "",
        "phonenumber": "",
        "address": ""
    })
    useEffect(()=>{
        if(disabled)
            getUserDetails();
    })
    const getUserDetails=async()=>{
        try{
            const response=await axios.get(`${localhost}/user/${localStorage.getItem("id")}`,{
                headers:{
                'Authorization':`Bearer ${localStorage.getItem("token")}`
            }
        });
        setUserData(response.data);
    }
    catch(error){
        console.log(error);
    }
    }
    const updateUserDetails=async()=>{
        setDisabled(!disabled)
        try{
            await axios.put(`${localhost}/user/${localStorage.getItem("id")}`,userData,{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            })
        }
        catch(error){
            console.log(error);
        }
    }
    const handleChange=(e)=>{
        const {id,value}=e.target;
        setUserData(prevData=>({...prevData,[id]:value}))
    }
    const [disabled, setDisabled]=useState(true);
    return (
        <div className="your-profile-outer">
            <div className='your-profile-image-dp-container' style={{backgroundImage:`url('${userData.image}')`}}></div>
            {
                disabled
                ?
                <BsPencilSquare onClick={()=>setDisabled(!disabled)} className="your-profile-data-edit-icon"/>
                :
                <button className="your-profile-data-edit-icon" onClick={updateUserDetails}>Apply</button>
            }
            <h2 className="your-profile-label">Image</h2>
            <input type="text" className="your-profile-data" value={userData.image} disabled={disabled} onChange={handleChange} id="image"></input>
            <hr/>
            <h2 className="your-profile-label">Name</h2>
            <input type="text" className="your-profile-data" value={userData.username} disabled={disabled} onChange={handleChange} id="username"></input>
            <hr/>
            <h2 className="your-profile-label">Phone number</h2>
            <input type="text" className="your-profile-data" value={userData.phonenumber} disabled={disabled} onChange={handleChange} id="phonenumber"></input>
            {/* <BsPencilSquare className="your-profile-data-edit-icon"/> */}
            <hr/>
            <h2 className="your-profile-label">Email ID</h2>
            <input type="text" className="your-profile-data" value={userData.emailId} disabled={disabled} onChange={handleChange} id="emailId"></input>
            {/* <BsPencilSquare className="your-profile-data-edit-icon"/> */}
            <hr/>
            <h2 className="your-profile-label">Address</h2>
            <input type="text" className="your-profile-data" value={userData.address} disabled={disabled} onChange={handleChange} id="address"></input>
            {/* <BsPencilSquare className="your-profile-data-edit-icon"/> */}
            <hr/>
            {/* <h2 className="your-profile-label">Password</h2>
            <input type="text" className="your-profile-data" value="*******" disabled={disabled}></input>
            <BsPencilSquare className="your-profile-data-edit-icon"/>
            <hr/> */}
        </div>
    );
}
export default YourProfile;