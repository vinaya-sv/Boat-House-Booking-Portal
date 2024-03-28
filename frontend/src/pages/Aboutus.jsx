// import React from 'react';
import { useEffect, useState } from 'react';
import '../assets/css/Aboutus.css';
import axios from 'axios';
import {localhost} from '../services/localhost'
function AboutUs(){
    const [data, setAboutData]=useState([]);
    const fetchSiteData=async()=>{
        try{
            const response=await axios.get(`${localhost}/site-settings/get/`);
            setAboutData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchSiteData();
        // console.log(data);
    })
    return(
        <div className="about-us-outer">
            <div className="about-us-page-1">
                <div className="about-us-page-1-left">
                </div>
                <div className="about-us-page-1-right">
                    <h1>Welcome to Boat Voyager </h1>
                    <h3>{data.length>=1 && data[0].heading}</h3>
                    <br/>
                    <p style={{}}>{data.length>=1 && data[0].description}</p>
                </div>
            </div>
            <div className="about-us-page-2">
            <div className="about-us-page-2-left">
                <h1>Our Story </h1>
                <p>Boat Voyager was born out of a passion for the open sea and a desire to share the beauty of waterborne escapades with the world. Our founders, avid maritime enthusiasts themselves, envisioned a platform that would connect people with the perfect boat houses for their unique preferences and needs. We understand that each voyage is as individual as its sailor, and we are committed to providing a diverse range of options to suit every taste and occasion.</p>
            </div>
            <div className="about-us-page-2-right">
                
            </div>

            </div>
        </div>
    );
}
export default AboutUs;