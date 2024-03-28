import { useEffect, useState } from 'react';
import '../assets/css/YourStays.css';
import axios from 'axios';
import {localhost} from '../services/localhost';
import BoatHouseCard from '../components/BoatHouseCard.jsx';
import YourStaysCard from '../components/YourStaysCard.jsx';
import TableUI from '../components/TableUI.jsx';
function YourStays(){
    const [data, setBookingData]=useState([{}]);
    const fetchBookingData=async()=>{
        try{
            const response=await axios.get(`${localhost}/booking/user/${localStorage.getItem("id")}`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`,
                }
            })
            setBookingData(response.data);
            // console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    const fetchBoatData=async(id)=>{
        if(!id)
            return <p></p>;
        try{
            const response=await axios.get(`${localhost}/boat/${id}`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`,
                }
            })
            // console.log(response.data);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
    }
    const handleCancelOrder=async (event, id)=>{
        event.preventDefault();
        const response=confirm("Are you sure?");
        if(!response){
            return;
        }        
        try{
            const response=await axios.delete(`${localhost}/booking/${id}`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`,
                }
            })
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        const fetchData = async () => {
            const newColumns = await Promise.all(data.map(async (d) => {
                const boatData = await fetchBoatData(d.boatId);
                return {
                    linkto:`/boat-house?id=${d.boatId}`,
                    "ID": d.id,
                    "Image":<img src={`${boatData.image}`} className="my-stays-boat-image"></img>,
                    "Boat": boatData.name,
                    "Check In": d.checkIn,
                    "Check Out": d.checkOut,
                    "Booked on":d.dateOfBooking,
                    "Cancel":<button className="order-cancel-button" onClick={(e)=>handleCancelOrder(e,d.id)}>Cancel</button>
                };
            }));
            setColumns(newColumns);
        };

        fetchData();
        fetchBookingData();
    },[data])
    const header=["ID","Image","Boat","Check In","Check Out","Booked on","Cancel"];
    // const columns=data.map((d)=>({"Booking ID":d.id,"Boat Name":()=>fetchBoatData(d.boatId),"Check In":d.checkIn,"Check Out":d.checkOut,"Delete":""}));
    const [columns, setColumns]=useState([])
    const flexRatio=[1,4,4,4,4,4,2];
    return(
        <div className="your-stays-outer">
            <TableUI header={header} columns={columns} flexRatio={flexRatio}/>
        </div>
    );
}
export default YourStays;