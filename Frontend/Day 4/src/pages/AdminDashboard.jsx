import { Link } from 'react-router-dom';
import '../assets/css/AdminDashboard.css';
function AdminDashboard({rightContent}){
    return (
        <div className="admin-dashboard-outer">
            <div className="admin-dashboard-sidebar">
                <Link to="/admin-dashboard/statistics" className="admin-dashboard-sidebar-content">Statistics</Link>
                <Link to="/admin-dashboard/all-users" className="admin-dashboard-sidebar-content">All Users</Link>
                <Link to="/admin-dashboard/all-boats" className="admin-dashboard-sidebar-content">All Boats</Link>
                <Link to="/admin-dashboard/statistic" className="admin-dashboard-sidebar-content">User Feedbacks</Link>
                <Link to="/admin-dashboard/statistis" className="admin-dashboard-sidebar-content">Settings</Link>
            </div>
            <div className="admin-dashboard-main">
                {rightContent}
            </div>
        </div>
    );
}
export default AdminDashboard;