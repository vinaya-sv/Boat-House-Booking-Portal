import { useState } from 'react';
import '../assets/css/SiteSettings.css';
function SiteSettings(){
    const [siteSettingsData, setSiteData]=useState({
        aboutUs:[
            {heading:"Hey Boat Voyagers,",description:"At Boat Voyager, we believe that every journey is an opportunity for discovery, and what better way to explore the wonders of the water than aboard our carefully curated fleet of boats. Whether you're seeking a tranquil escape or an exhilarating aquatic adventure, we are here to make your boat house booking experience seamless and unforgettable."},
            {heading:"Hey Boat Voyagers,",description:"At Boat Voyager, we believe that every journey is an opportunity for discovery, and what better way to explore the wonders of the water than aboard our carefully curated fleet of boats. Whether you're seeking a tranquil escape or an exhilarating aquatic adventure, we are here to make your boat house booking experience seamless and unforgettable."},
            {heading:"Hey Boat Voyagers,",description:"At Boat Voyager, we believe that every journey is an opportunity for discovery, and what better way to explore the wonders of the water than aboard our carefully curated fleet of boats. Whether you're seeking a tranquil escape or an exhilarating aquatic adventure, we are here to make your boat house booking experience seamless and unforgettable."},
        ],
        contactUs:"Get in Touch with Boat Voyager        Have questions, need assistance, or just want to share your excitement about your upcoming nautical adventure? We're here to help! Contact Boat Voyager through the following channels: Customer Support Our dedicated customer support team is available around the clock to ensure your journey with Boat Voyager is smooth sailing. Whether you have inquiries about a specific booking, need assistance navigating our platform, or just want some personalized recommendations, we're here for you.",
    });
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