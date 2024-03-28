import { useEffect, useState } from "react";
import {localhost} from '../services/localhost';
import '../assets/css/YourStaysCard.css';
import axios from "axios";
function YourStaysCard({bookings, boatId}){
    const [data, setBoatData]=useState({})
    async function fetchBoatData(){
        try{
            const response=await axios.get(`${localhost}/boat/${boatId}`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`,
                }
            })
            setBoatData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        if(boatId)
            fetchBoatData();
    },[boatId])
    return(
        <div className="your-stays-card">
        <span>{bookings.id}</span>
        <span>{data.name}</span> 
        <span>{bookings.numberOfPeople}</span> 
        <span>{bookings.checkIn}</span> 
        <span>{bookings.checkOut}</span>
        </div>
    );
}
export default YourStaysCard;