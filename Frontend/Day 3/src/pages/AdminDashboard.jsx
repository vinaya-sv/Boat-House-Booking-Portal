import { Link } from 'react-router-dom';
import '../assets/css/Dashboard.css';
function AdminDashboard({rightContent}){
    return (
        <div className="dashboard-outer">
            <div className="dashboard-left">
                <Link to="/dashboard/add-boat-house" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Add BoatHouse</p></Link>
                <hr/>
                <Link to="/dashboard/edit-boat-house" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Edit BoatHouse</p></Link>
                <hr/>
                <Link to="/dashboard/delete-boat-house" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Delete BoatHouse</p></Link>
                <hr/>
            </div>

            <div className="dashboard-right">
                {rightContent}
            </div>
        </div>
    );
}
export default AdminDashboard;