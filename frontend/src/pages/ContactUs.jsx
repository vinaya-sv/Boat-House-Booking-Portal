import '../assets/css/ContactUs.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import {localhost} from '../services/localhost';
function ContactUs(){
    const [feedback, setFeedBack]=useState();

    const addFeedBack=async()=>{
        const userId=localStorage.getItem('id');
        try{
            const response=await axios.post(`${localhost}/feedback`,{
                "userId":userId,
                "feedbackContent": feedback
            },{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(userId);
            console.log(feedback);
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div className="contact-us-outer">
            <div className="contact-us-page-1">
                <div className="contact-us-page-1-container-1">
                    <h1>Get in Touch with Boat Voyager</h1>
                    <p>Have questions, need assistance, or just want to share your excitement about your upcoming nautical adventure? We're here to help! Contact Boat Voyager through the following channels:</p>
                </div>
                <div className="contact-us-page-1-container-2">
                    <h1>Customer Support</h1>
                    <p>Our dedicated customer support team is available around the clock to ensure your journey with Boat Voyager is smooth sailing. Whether you have inquiries about a specific booking, need assistance navigating our platform, or just want some personalized recommendations, we're here for you.</p>
                    <br/>
                    <p><BiSolidPhoneCall style={{marginRight:"2vh"}}/>+91 88703 48588</p>
                    <br/>
                    <p><MdEmail style={{marginRight:"2vh"}}/>boatvoyager@gmail.com</p>
                </div>
            </div>
            <div className="contact-us-page-2">
                <div className="contact-us-page-2-container-1">
                    <h1>Business Enquiries</h1>
                    <p>If you're a boat owner interested in partnering with Boat Voyager or a business looking to collaborate, we'd love to hear from you.</p>    
                    <br/>
                    <p><MdEmail style={{marginRight:"2vh"}}/>boatvoyager@gmail.com</p>
                </div>
                <div className="contact-us-page-2-container-2">
                    <h1>Social Media</h1>
                    <p>Stay connected with Boat Voyager on social media for the latest updates, special offers, and inspiring stories from fellow sea enthusiasts.</p>
                    <br/>
                    <p><FaFacebookSquare style={{marginRight:"2vh"}}/>boat-voyager</p>
                    <br/>
                    <p><FaInstagramSquare style={{marginRight:"2vh"}}/>@boat_voyager</p>
                    <br/>
                    <p><FaTwitterSquare style={{marginRight:"2vh"}}/>boat.voyager</p>
                </div>
            </div>
            {/* <div className="contact-us-page-feedback">
                <div className="contact-us-page-feedback-container">
                    <h1>Please provide your valuable feedback here</h1>
                    <textarea className="contact-us-page-feedback-textarea" value={feedback} onChange={(e)=>setFeedBack(e.target.value)}></textarea>
                <button className='contact-us-page-feedback-button' onClick={addFeedBack}>Post</button>
                </div>
            </div> */}
        </div>
    );
}
export default ContactUs;
/*
Visit Us
Want to meet us in person or send us something by mail? Feel free to visit our office or send your correspondence to:

[Your Company Name]
[Office Address]
[City, State, Zip Code]
*/