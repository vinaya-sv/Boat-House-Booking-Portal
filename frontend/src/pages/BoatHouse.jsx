import '../assets/css/BoatHouse.css';
import { MdLocationOn } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';import {localhost} from '../services/localhost';
import Calendar from '../components/MyDateRangePicker';
import { useNavigate } from 'react-router-dom';
function BoatHouse(){
    const navigate=useNavigate();
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
        if(data.numberOfPeople<bookingDetails.numberOfPeople){
            alert("Number of people count exceeded");
            return;
        }
        try{
            axios.post(`${localhost}/booking/`,{
                "userId": localStorage.getItem("id"),
                "boatId": data.id,
                "numberOfPeople":bookingDetails.numberOfPeople,
                "checkIn": bookingDetails.checkIn,
                "checkOut": bookingDetails.checkOut,
                "dateOfBooking":new Date()
            },
            {
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`
                }
            })
            alert("Booking successful");
            navigate("/dashboard/your-stays")
        }
        catch(error){
            console.log(error);
        }
        toggleBookNow(false);
    }
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate("/signin");
        }
        fetchBoatData();
    })
    const [bookingDetails, setBookingData]=useState({checkIn:null, checkOut:null});
    const [bookPanelOpen, toggleBookNow]=useState(false);
    const handleChange=(e)=>{
        const {id, value}=e.target;
        setBookingData(prevData=>({...prevData,[id]:value}));
    }
    const markedDates = [
        new Date(2024, 3, 23), // March 25, 2024
        new Date(2024, 3, 24), // March 27, 2024
        // Add more dates as needed
      ];
    
    const tileContent = ({ date }) => {
        if (markedDates.find((markedDate) => markedDate.toDateString() === date.toDateString())) {
          return <span style={{ backgroundColor: 'green' }}></span>; // Customize the style as needed
        }
      };
    return(
        <div className="boat-house-outer">
            <div className="boat-book-now-panel-outer" style={{display:(bookPanelOpen)?"flex":"none"}}>
                <div className="boat-book-now-panel-box">
                    <button className="boat-book-now-panel-close-button" onClick={()=>toggleBookNow(false)}>X</button>
                    <form onSubmit={handleBookNow}>
                    <table className="boat-book-now-panel-table">
                        <tr className="boat-book-now-panel-tr">
                            <td className="boat-book-now-panel-td">Number of people</td>
                            <td className="boat-book-now-panel-td">
                                <input type="number" className="boat-book-now-panel-input" value={bookingDetails.numberOfPeople} onChange={handleChange} id="numberOfPeople" required></input>
                            </td>
                        </tr>
                        <tr className="boat-book-now-panel-tr">
                            <td className="boat-book-now-panel-td">Check in</td>
                            <td className="boat-book-now-panel-td">
                                <input 
                                type="date" 
                                className="boat-book-now-panel-input" 
                                value={bookingDetails.checkIn} 
                                onChange={handleChange} 
                                min={bookingDetails.checkIn? new Date().toISOString().split('T')[0]: 0}
                                // disabledDates={isDateBlocked}
                                id="checkIn" required></input>
                            </td>
                        </tr>
                        <tr className="boat-book-now-panel-tr">
                            <td className="boat-book-now-panel-td">Check out</td>
                            <td className="boat-book-now-panel-td">
                                <input 
                                type="date" 
                                className="boat-book-now-panel-input" 
                                value={bookingDetails.checkOut} 
                                onChange={handleChange} 
                                id="checkOut" 
                                required></input>
                            </td>
                        </tr>
                    </table>
                    <button className="boat-book-now-panel-submit-button">Book now</button>
                    </form>
                </div>
            </div>
            <div className="boat-house-left">
                <div className="boat-house-page-image-container" style={{backgroundImage:`url('${data.image}')`}}></div>
                <button className="book-now-button" onClick={()=>toggleBookNow(true)}>Book now</button>
                {/* <button className="add-wishlist-button">Add to wishlist</button> */}
            </div>
            <div className="boat-house-right">
                <h1>{data.name}</h1>
                <h3><MdLocationOn/>{data.location}</h3>
                <h3>{data.price}/-</h3>
                <hr/>
                <h3><b>Maximum number of peoples allowed: </b></h3> 
                <p>{data.numberOfPeople}</p>
                <br/>
                <hr/>
                {/* <Calendar 
                    tileContent={tileContent}
                    selectRange={true}
                    readOnly={true}
                /> */}
                <p className="boat-house-desc">{(data.description)}</p>
                <hr/>
                <h3>Amenities</h3>
                <ul>
                    {data.amenities && data.amenities.map(a=><li>{a}</li>)}
                </ul>
                <hr/>
                <h3>Room Features</h3>
                <ul>
                    {data.roomFeatures && data.roomFeatures.map(a=><li>{a}</li>)}
                </ul>
            </div>
        </div>
    );
}
export default BoatHouse;