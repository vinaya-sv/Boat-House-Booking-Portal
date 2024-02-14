import React, { useEffect, useState } from 'react';
import '../assets/css/AdminViewOfUser.css';
import TableUI from '../components/TableUI';
import {localhost} from '../services/localhost';
import axios from 'axios';
function AdminViewOfUser(props){
    const [data, setUserData]=useState({});
    const [boatData, setBoatData]=useState([]);
    const query=new URLSearchParams(location.search);
    const userId=(query.get("id"));
    const fetchUserData= async ()=>{
        try{
            const response=await axios.get(`${localhost}/user/${userId}`,{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            })
            setUserData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    const fetchBoatData= async () => {
        try{
            const response=await axios.get(`${localhost}/booking/user/${userId}`,{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            })
            setBoatData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchUserData();
        fetchBoatData();
    },[])
    const header=["Booking ID", "Boat ID", "Check in", "Check out"];
    // const columns=[        {"Boat ID":12345,"Boat name":"Tide's Tranquility","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"}
    const columns=boatData.map((d)=>({"Booking ID":d.id, "Boat ID":d.boatId, "Check in":d.checkIn, "Check out":d.checkOut}))
    const flexRatio=[1,5,1,1];
    return(
        <div className="admin-user-view-outer">
            <div className="admin-user-view-personal-profile">
                <div className="admin-user-view-personal-profile-picture"></div>
                <div className="admin-user-view-personal-profile-info">
                    <table className="admin-user-view-table">
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">User ID</td>
                            <td className="admin-user-view-td">{data.userId}</td>
                        </tr>
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">User Name</td>
                            <td className="admin-user-view-td">{data.username}</td>
                        </tr>
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">Email ID</td>
                            <td className="admin-user-view-td">{data.emailId}</td>
                        </tr>
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">Phone number</td>
                            <td className="admin-user-view-td">{data.phonenumber}</td>
                        </tr>
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">Address</td>
                            <td className="admin-user-view-td">{data.address}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="admin-user-view-all-bookings">
            <TableUI header={header} columns={columns} flexRatio={flexRatio} search=""/>
                {/* All bookings of the user */}
            </div>
        </div>
    );
}
export default AdminViewOfUser;

/*

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">Boat ID</div>
                    <div className="admin-user-view-booking-contents">Boat name</div>
                    <div className="admin-user-view-booking-contents">Check in</div>
                    <div className="admin-user-view-booking-contents">Check out</div>
                    <div className="admin-user-view-booking-contents">Status</div>
                </div>
                
                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>
*/