import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/AdminDashboard.css';
import { BsGraphUp} from "react-icons/bs";import { FaUsers} from "react-icons/fa";import { MdDirectionsBoat} from "react-icons/md";import { MdFeedback} from "react-icons/md";import { IoSettingsSharp } from "react-icons/io5";import { TbLogout } from "react-icons/tb";
import { useUserContext } from './UserContext';
function AdminDashboard({rightContent}){
    const navigate=useNavigate();
    const {logout}=useUserContext();
    return (
        <div className="admin-dashboard-outer">
            <div className="admin-dashboard-sidebar">
                <div className="admin-dashboard-logo">BOAT VOYAGER</div>
                <Link to="/admin-dashboard/statistics" className="admin-dashboard-sidebar-content">Statistics<BsGraphUp/></Link>
                <Link to="/admin-dashboard/all-users" className="admin-dashboard-sidebar-content">All Users<FaUsers/></Link>
                <Link to="/admin-dashboard/all-boats" className="admin-dashboard-sidebar-content">All Boats<MdDirectionsBoat/></Link>
                {/* <Link to="/admin-dashboard/statistic" className="admin-dashboard-sidebar-content">User Feedbacks<MdFeedback/></Link> */}
                {/* <Link to="/admin-dashboard/statistis" className="admin-dashboard-sidebar-content">Settings<IoSettingsSharp/></Link> */}
                <div onClick={()=>{logout();navigate("/")}} className="admin-dashboard-sidebar-content">Logout<TbLogout/></div>
            </div>
            <div className="admin-dashboard-main">
                {rightContent}
            </div>
        </div>
    );
}
export default AdminDashboard;