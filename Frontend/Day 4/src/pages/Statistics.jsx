import '../assets/css/Statistics.css';
function Statistics(){
    return (
        <div className="admin-dashboard-boat-info">
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
    );
}
export default Statistics;