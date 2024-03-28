import axios from 'axios';
import '../assets/css/Statistics.css';
import {useState} from 'react';
import { Chart } from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
import {localhost} from '../services/localhost';
import { useEffect } from 'react';
function Statistics(){
    const [numberOfBoats, setNumberBoats]=useState(0);
    const [numberOfUsers, setNumberUsers]=useState(0);
    const [numberOfBookings, setNumberBookings]=useState(0);
    const getTotalNumberOfBoats=async()=>{
        try{
            const response=await axios.get(`${localhost}/boat/count`,{
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setNumberBoats(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    const getTotalNumberOfUsers=async()=>{
        try{
            const response=await axios.get(`${localhost}/user/count`,{
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setNumberUsers(response.data-1);
        }
        catch(error){
            console.log(error);
        }
    }
    const getTotalNumberOfBookings=async()=>{
        try{
            const response=await axios.get(`${localhost}/booking/count`,{
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setNumberBookings(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getTotalNumberOfBoats();
        getTotalNumberOfUsers();
        getTotalNumberOfBookings();
    },[])
    return (
        <div className="admin-dashboard-boat-info">
            <div className="admin-dashboard-boat-count-wrapper">
                <div className="admin-dashboard-boat-count">
                    <div className="admin-dashboard-boat-count-value">{numberOfBoats}</div>
                    <div className="admin-dashboard-boat-count-desc">Total Number of Boats</div>
                </div>
                <div className="admin-dashboard-boat-count">
                        <div className="admin-dashboard-boat-count-value">{numberOfUsers}</div>
                        <div className="admin-dashboard-boat-count-desc">Total Number of Users</div>
                </div>
                <div className="admin-dashboard-boat-count">
                    <div className="admin-dashboard-boat-count-value">{numberOfBookings}</div>
                    <div className="admin-dashboard-boat-count-desc">Total Number of Bookings</div>
                </div>
            </div>
            <div className="admin-dashboard-boat-statistics-chart">
            <Bar  
                    data={{
                        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                        datasets: [
                            {
                                label: "Revenue",
                                data: [50000,45023,32532,53256,53269,59239,59257,78654,23465,54365,67854,54664]
                            },
                        ]
                    }}
                />
            </div>
        </div>
    );
}
export default Statistics;