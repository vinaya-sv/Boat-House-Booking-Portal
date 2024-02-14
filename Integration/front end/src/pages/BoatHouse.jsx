import '../assets/css/BoatHouse.css';
import { MdLocationOn } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';import {localhost} from '../services/localhost';
function BoatHouse(){
    const query=new URLSearchParams(location.search);
    const boatId=query.get("id")
    const [data, setBoatData]=useState({});
    const fetchBoatData= async ()=>{
        try{
            const response=await axios.get(`${localhost}/boat/${boatId}`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`
            }
        });
        setBoatData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    const handleBookNow=(e)=>{
        e.preventDefault();
        alert("Booking successful");
        try{
            axios.post(`${localhost}/booking/`,{
                "userId": localStorage.getItem("id"),
                "boatId": data.id,
                "checkIn": bookingDetails.checkIn,
                "checkOut": bookingDetails.checkOut
            },
            {
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`
                }
            })
        }
        catch(error){
            console.log(error);
        }
        toggleBookNow(false);
    }
    useEffect(()=>{
        fetchBoatData();
    })
    const [bookingDetails, setBookingData]=useState({});
    const [bookPanelOpen, toggleBookNow]=useState(false);
    const handleChange=(e)=>{
        const {id, value}=e.target;
        setBookingData(prevData=>({...prevData,[id]:value}));
    }
    return(
        <div className="boat-house-outer">
            <div className="boat-book-now-panel-outer" style={{display:(bookPanelOpen)?"flex":"none"}}>
                <div className="boat-book-now-panel-box">
                    <button className="boat-book-now-panel-close-button" onClick={()=>toggleBookNow(false)}>X</button>
                    <form onSubmit={handleBookNow}>
                    <table className="boat-book-now-panel-table">
                        <tr className="boat-book-now-panel-tr">
                            <td className="boat-book-now-panel-td">Check in</td>
                            <td className="boat-book-now-panel-td">
                                <input type="date" className="boat-book-now-panel-input" value={bookingDetails.checkIn} onChange={handleChange} id="checkIn" required></input>
                            </td>
                        </tr>
                        <tr className="boat-book-now-panel-tr">
                            <td className="boat-book-now-panel-td">Check out</td>
                            <td className="boat-book-now-panel-td">
                                <input type="date" className="boat-book-now-panel-input" value={bookingDetails.checkOut} onChange={handleChange} id="checkOut" required></input>
                            </td>
                        </tr>
                    </table>
                    <button className="boat-book-now-panel-submit-button">Book now</button>
                    </form>
                </div>
            </div>
            <div className="boat-house-left">
                <div className="boat-house-page-image-container" style={{backgroundImage:`url('${data.image}')`}}></div>
                {/* <button className="add-wishlist-button">Add to wishlist</button> */}
            </div>
            <div className="boat-house-right">
                <h1>{data.name}</h1>
                <h3><MdLocationOn/>{data.location}</h3>
                <h3>{data.price}/-</h3>
                <p className="boat-house-desc">{(data.description)}</p>
                <button className="book-now-button" onClick={()=>toggleBookNow(true)}>Book now</button>
            </div>
        </div>
    );
}
export default BoatHouse;