import { Link } from 'react-router-dom';
import '../assets/css/AdminAllUsers.css';
import TableUI from '../components/TableUI';
import SearchBar from '../components/SearchBar';
import { Doughnut} from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {localhost} from '../services/localhost';
function AdminAllUsers(){
    const [data, setUserData]=useState([]);
    const [columns, setTableColumns]=useState([]);
    const fetchUserData=async()=>{
        try{
            const response=await axios.get(`${localhost}/user/`,{
                headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        setUserData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchUserData();
        setTableColumns(data.map((d) => ({linkto:`/admin-dashboard/all-users/user?id=${d.id}`, "User ID":d.id, "User Name":d.name})));
        
    },[data])
    const header=["User ID","User Name"];
    // const columns=[
    //     {linkto:"/admin-dashboard/all-users/user/1234","User ID":12345,"User Name":"Vinaya"},
    //     {linkto:"/admin-dashboard/all-users/user/1234","User ID":56789,"User Name":"Soma Sundari"},
    //     {linkto:"/admin-dashboard/all-users/user/1234","User ID":32555,"User Name":"Sahana J"},
    //     {linkto:"/admin-dashboard/all-users/user/1234","User ID":53263,"User Name":"Sahana S"},
    //     {linkto:"/admin-dashboard/all-users/user/1234","User ID":64364,"User Name":"Subbu Lakshmi"},
    //     {linkto:"/admin-dashboard/all-users/user/1234","User ID":64644,"User Name":"Subaharini"},
    //     {linkto:"/admin-dashboard/all-users/user/1234","User ID":54266,"User Name":"Swetha"},
    // ];
    const flexRatio=[4,2];
    const [searchBar, setSearchBar]=useState("");
    return (
        <div className="admin-all-users-outer">
            <div className="admin-all-users-left">
                <SearchBar setSearchBar={setSearchBar}/>
                <TableUI header={header} columns={columns} flexRatio={flexRatio} search={searchBar}/>
            </div>
            {/* <div className="admin-all-users-right">
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
            </div> */}
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