import { useState } from 'react';
import '../assets/css/SiteSettings.css';
import axios from 'axios';
import {localhost} from '../services/localhost';
function SiteSettings(){
    const [siteSettingsData, setSiteData]=useState({
        aboutUs:[
            {id:1, heading:"Hey Boat Voyagers,",description:"At Boat Voyager! We believe that every journey is an opportunity for discovery, and what better way to explore the wonders of the water than aboard our carefully curated fleet of boats. Whether you're seeking a tranquil escape or an exhilarating aquatic adventure, we are here to make your boat house booking experience seamless and unforgettable."},
            {id:2, heading:"Hey Boat Voyagers,",description:"At Boat Voyager, we believe that every journey is an opportunity for discovery, and what better way to explore the wonders of the water than aboard our carefully curated fleet of boats. Whether you're seeking a tranquil escape or an exhilarating aquatic adventure, we are here to make your boat house booking experience seamless and unforgettable."},
            {heading:"Hey Boat Voyagers,",description:"At Boat Voyager, we believe that every journey is an opportunity for discovery, and what better way to explore the wonders of the water than aboard our carefully curated fleet of boats. Whether you're seeking a tranquil escape or an exhilarating aquatic adventure, we are here to make your boat house booking experience seamless and unforgettable."},
        ],
        contactUs:"Get in Touch with Boat Voyager        Have questions, need assistance, or just want to share your excitement about your upcoming nautical adventure? We're here to help! Contact Boat Voyager through the following channels: Customer Support Our dedicated customer support team is available around the clock to ensure your journey with Boat Voyager is smooth sailing. Whether you have inquiries about a specific booking, need assistance navigating our platform, or just want some personalized recommendations, we're here for you.",
    });
    const [aboutUsPage1,setAboutUsPage1]=useState("");
    const fetchSiteData=async()=>{
        try{
            const response=await axios.get(`${localhost}/site-settings/get/`);
            setAboutData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    const handleEditSettings = async (data) =>{
        const userId=localStorage.getItem('id');
        try{
            const response=await axios.post(`${localhost}/site-settings/`,{
                "id":data.id,
                "heading":data.heading,
                "description":data.description,
                "image":data.img
            },{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <div className="site-settings-outer">
            <h1 className="site-setting-label">About us</h1>
            {siteSettingsData.aboutUs.map((m,index)=>
            <>
            <h2>Page {index+1}</h2>
            <label className="site-settings-label">Heading</label>
            <input type="text" className="site-settings-heading-input-tag" value={m.heading}/>
            <label className="site-settings-label">Description</label>
            <textarea className="site-settings-textarea" value={m.description}/>
            <button className="site-settings-apply">Apply</button>
            <br/>
            </>
            )}

            <h1 className="site-setting-label">ContactUs</h1>
            <textarea className="site-settings-textarea">{siteSettingsData.contactUs}</textarea>
            <button className="site-settings-apply">Apply</button>
        </div>
    );
}
export default SiteSettings;