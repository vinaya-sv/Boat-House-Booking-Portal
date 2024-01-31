import { Link } from 'react-router-dom';
import '../assets/css/AdminAllUsers.css';
function AdminAllUsers(){
    return (
        <div className="admin-all-users-outer">
            <select className="admin-all-users-filter">
                <option>All</option>
                <option>Booked</option>
            </select>
            <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                <div className="admin-all-users-user-data">User ID</div>
                <div className="admin-all-users-user-data">Username</div>
            </Link>
            
            <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                <div className="admin-all-users-user-data">User ID</div>
                <div className="admin-all-users-user-data">Username</div>
            </Link>
            
            <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                <div className="admin-all-users-user-data">User ID</div>
                <div className="admin-all-users-user-data">Username</div>
            </Link>
            
            <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                <div className="admin-all-users-user-data">User ID</div>
                <div className="admin-all-users-user-data">Username</div>
            </Link>
            
            <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                <div className="admin-all-users-user-data">User ID</div>
                <div className="admin-all-users-user-data">Username</div>
            </Link>
            
            
        </div>
    );
}
export default AdminAllUsers;