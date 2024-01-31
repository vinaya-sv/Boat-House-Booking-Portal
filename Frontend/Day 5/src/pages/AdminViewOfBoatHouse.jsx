import { useState } from 'react';
import '../assets/css/AdminViewOfBoatHouse.css';
import { Link } from 'react-router-dom';
import TableUI from '../components/TableUI';
function AdminViewOfBoatHouse(){
    const header=["User ID", "Username", "Check in", "Check out","Status"];
    const columns=[
        {"User ID":12345,"Username":"John's Retreat","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
        {"User ID":12345,"Username":"Emma's Escape","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
        {"User ID":12345,"Username":"Michael's Oasis","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
        {"User ID":12345,"Username":"Sophie's Serenity","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
        {"User ID":12345,"Username":"David's Drift","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"}
    ];
    const flexRatio=[1,3,1,1,1];
    const query=new URLSearchParams(location.search);
    const boatId=query.get("id")
    const [editPanelOpen, toggleEditPanel]=useState(false);
    const boatData=["Boat ID","Boat Name","Boat Description","Number of adults","Number of Childrens"];
    return (
        <div className="admin-boat-view-outer">
            <div className="admin-boat-view-edit-panel-outer" style={{display:(editPanelOpen)?"flex":"none"}}>
                <div className="admin-boat-view-edit-panel-box">
                    <button className="admin-boat-view-edit-panel-close-button" onClick={()=>toggleEditPanel(false)}>X</button>
                    <table className="admin-boat-view-edit-panel-table">
                        {boatData.map((boat)=>
                        <tr className="admin-boat-view-edit-panel-tr">
                            <td className="admin-boat-view-edit-panel-td">{boat}</td>
                            <td className="admin-boat-view-edit-panel-td">
                                <input type="text" className="admin-boat-view-edit-panel-input"></input>
                            </td>
                            {/* <td></td> */}
                        </tr>)}
                    </table>
                    <button className="admin-boat-view-edit-panel-submit-button" onClick={()=>toggleEditPanel(false)}>Submit</button>
                </div>
            </div>
            <div className="admin-boat-view-info">
                <div className="admin-boat-view-picture"></div>
                <div className="admin-boat-view-data">
                    <button className="admin-boat-view-edit-button" onClick={()=>toggleEditPanel(true)}>Edit</button>
                    <table className="admin-boat-view-info-table"> 
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Boat name</td>
                            <td className="admin-boat-view-info-td">La Guesta Boat</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Description</td>
                            <td className="admin-boat-view-info-td">The best boat house for your family trip...</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Price</td>
                            <td className="admin-boat-view-info-td">15000</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Number of adults</td>
                            <td className="admin-boat-view-info-td">4</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Number of children</td>
                            <td className="admin-boat-view-info-td">2</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Rating</td>
                            <td className="admin-boat-view-info-td">* * * * *</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="admin-boat-view-bookings">
                {/* <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                    <div className="admin-all-users-user-data">User ID</div>
                    <div className="admin-all-users-user-data">Username</div>
                    <div className="admin-all-users-user-data">Check in</div>
                    <div className="admin-all-users-user-data">Check out</div>
                    <div className="admin-all-users-user-data">Status</div>
                </Link>
                
                <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                    <div className="admin-all-users-user-data">User ID</div>
                    <div className="admin-all-users-user-data">Username</div>
                    <div className="admin-all-users-user-data">Check in</div>
                    <div className="admin-all-users-user-data">Check out</div>
                    <div className="admin-all-users-user-data">Status</div>
                </Link>
                
                <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                    <div className="admin-all-users-user-data">User ID</div>
                    <div className="admin-all-users-user-data">Username</div>
                    <div className="admin-all-users-user-data">Check in</div>
                    <div className="admin-all-users-user-data">Check out</div>
                    <div className="admin-all-users-user-data">Status</div>
                </Link>
                
                <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                    <div className="admin-all-users-user-data">User ID</div>
                    <div className="admin-all-users-user-data">Username</div>
                    <div className="admin-all-users-user-data">Check in</div>
                    <div className="admin-all-users-user-data">Check out</div>
                    <div className="admin-all-users-user-data">Status</div>
                </Link>
                
                <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                    <div className="admin-all-users-user-data">User ID</div>
                    <div className="admin-all-users-user-data">Username</div>
                    <div className="admin-all-users-user-data">Check in</div>
                    <div className="admin-all-users-user-data">Check out</div>
                    <div className="admin-all-users-user-data">Status</div>
                </Link>
                
                <Link to={`/admin-dashboard/all-users/user?id=${12345}`}  className="admin-all-users-user">
                    <div className="admin-all-users-user-data">User ID</div>
                    <div className="admin-all-users-user-data">Username</div>
                    <div className="admin-all-users-user-data">Check in</div>
                    <div className="admin-all-users-user-data">Check out</div>
                    <div className="admin-all-users-user-data">Status</div>
                </Link> */}
                <TableUI header={header} columns={columns} flexRatio={flexRatio}/>
            </div>
        </div>
    );
}
export default AdminViewOfBoatHouse;