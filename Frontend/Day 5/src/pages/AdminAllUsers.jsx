import { Link } from 'react-router-dom';
import '../assets/css/AdminAllUsers.css';
import TableUI from '../components/TableUI';
import SearchBar from '../components/SearchBar';
import { Doughnut} from 'react-chartjs-2';
function AdminAllUsers(){
    const header=["User ID","User Name"];
    const columns=[
        {linkto:"/admin-dashboard/all-users/user/1234","User ID":12345,"User Name":"Vinaya"},
        {linkto:"/admin-dashboard/all-users/user/1234","User ID":56789,"User Name":"Soma Sundari"},
        {linkto:"/admin-dashboard/all-users/user/1234","User ID":32555,"User Name":"Sahana J"},
        {linkto:"/admin-dashboard/all-users/user/1234","User ID":53263,"User Name":"Sahana S"},
        {linkto:"/admin-dashboard/all-users/user/1234","User ID":64364,"User Name":"Subbu Lakshmi"},
        {linkto:"/admin-dashboard/all-users/user/1234","User ID":64644,"User Name":"Subaharini"},
        {linkto:"/admin-dashboard/all-users/user/1234","User ID":54266,"User Name":"Swetha"},
    ];
    const flexRatio=[1,3];
    return (
        <div className="admin-all-users-outer">
            <div className="admin-all-users-left">
                <SearchBar/>
                <br/>
                <TableUI header={header} columns={columns} flexRatio={flexRatio}/>
            </div>
            <div className="admin-all-users-right">
                <div className="admin-all-users-chart">
                    <Doughnut data = {{
                        labels: ["Gujarat","Rajasthan","Tamil Nadu", "Kerala", "Andhra Pradesh"],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [500,300,400,399,100],
                            }
                        ]
                    }}/>
                <p className="admin-all-users-chart-label">Users from a different regions</p>
                </div>

                <div className="admin-all-users-chart">
                    <Doughnut data = {{
                        labels: ["Deluxe","Premium","Luxury"],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [500,300,200],
                            }
                        ]
                    }}/>
                <p className="admin-all-users-chart-label">Users boat preferences</p>
                </div>
            </div>
        </div>
    );
}
export default AdminAllUsers;

/*
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
            
*/