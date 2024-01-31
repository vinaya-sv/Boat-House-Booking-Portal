import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Dashboard.css';
import { useUserContext } from './UserContext';
function Dashboard({rightContent}){
    const navigate=useNavigate();
    const {logout}=useUserContext();
    return(
        <div className="dashboard-outer">
            <div className="dashboard-left">
                <Link to="/dashboard/your-profile" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Your profile</p></Link>
                <hr/>
                <Link to="/dashboard/your-stays" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Your stays</p></Link>
                <hr/>
                <Link to="/dashboard/your-wishlist" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Your wishlist</p></Link>
                <hr/>
                <div onClick={()=>{logout();navigate("/");}} style={{textDecoration:"none"}}><p className="dashboard-left-contents">Logout</p></div>
                <hr/>
            </div>

            <div className="dashboard-right">
                {rightContent}
            </div>
        </div>
    );
}
export default Dashboard;