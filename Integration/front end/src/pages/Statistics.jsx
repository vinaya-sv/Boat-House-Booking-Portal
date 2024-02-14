import axios from 'axios';
import '../assets/css/Statistics.css';
import {useState} from 'react';
import { Chart } from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
import {localhost} from '../services/localhost';
import { useEffect } from 'react';
function Statistics(){
    const [numberOfBoats, setNumberBoats]=useState(0);
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
    useEffect(()=>{
        getTotalNumberOfBoats();
    },[])
    return (
        <div className="admin-dashboard-boat-info">
            <div className="admin-dashboard-boat-count-wrapper">
                <div className="admin-dashboard-boat-count">
                    <div className="admin-dashboard-boat-count-value">{numberOfBoats}</div>
                    <div className="admin-dashboard-boat-count-desc">Total Number of Boats</div>
                </div>
                <div className="admin-dashboard-boat-count">
                        <div className="admin-dashboard-boat-count-value">17</div>
                        <div className="admin-dashboard-boat-count-desc">Total Boats Booked Today</div>
                </div>
                <div className="admin-dashboard-boat-count">
                    <div className="admin-dashboard-boat-count-value">13</div>
                    <div className="admin-dashboard-boat-count-desc">Total Boats Available Today</div>
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