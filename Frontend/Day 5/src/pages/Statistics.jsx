import '../assets/css/Statistics.css';
import { Chart } from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
function Statistics(){
    return (
        <div className="admin-dashboard-boat-info">
            <div className="admin-dashboard-boat-count-wrapper">
                <div className="admin-dashboard-boat-count">
                    <div className="admin-dashboard-boat-count-value">35</div>
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