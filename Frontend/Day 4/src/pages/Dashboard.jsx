import { Link } from 'react-router-dom';
import '../assets/css/Dashboard.css';
function Dashboard({rightContent}){
    return(
        <div className="dashboard-outer">
            <div className="dashboard-left">
                <Link to="/dashboard/your-profile" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Your profile</p></Link>
                <hr/>
                <Link to="/dashboard/your-stays" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Your stays</p></Link>
                <hr/>
                <Link to="/dashboard/your-wishlist" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Your wishlist</p></Link>
                <hr/>
                <Link to="/" style={{textDecoration:"none"}}><p className="dashboard-left-contents">Logout</p></Link>
                <hr/>
            </div>

            <div className="dashboard-right">
                {rightContent}
            </div>
        </div>
    );
}
export default Dashboard;