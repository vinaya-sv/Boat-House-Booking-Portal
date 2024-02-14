import { useEffect, useState } from 'react';
import '../assets/css/AdminViewOfBoatHouse.css';
import TableUI from '../components/TableUI';
import axios from 'axios';
import {localhost} from '../services/localhost';
import { useNavigate } from 'react-router-dom';
function AdminViewOfBoatHouse(){
    const [userBookingData, setUserData]=useState([]);
    const navigate=useNavigate();
    const query=new URLSearchParams(location.search);
    const [boatId, setBoatId]=useState(query.get("id"));
    const [data, setBoatData]=useState({});
    const [editPanelOpen, toggleEditPanel]=useState(false);
    useEffect(()=>{
        if(!editPanelOpen)
            fetchBoatData();
        fetchUserData();
        setBoatId(query.get("id"))
        setColumns(userBookingData.map((d)=>({"Booking ID":d.id, "User ID":d.userId, "Check in": d.checkIn, "Check out":d.checkOut})))
    },[])
    const fetchBoatData=async ()=>{
        try{
            const response=await axios.get(`${localhost}/boat/${boatId}`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`,
                }
            })
            setBoatData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    const fetchUserData= async () => {
        try{
            const response=await axios.get(`${localhost}/booking/boat/${boatId}`,{
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
    const header=["Booking ID", "User ID", "Check in", "Check out"];
    // const columns=[{"User ID":12345,"Username":"John's Retreat","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
    const [columns, setColumns]=useState([])
    const flexRatio=[1,5,1,1];
    const [editBoatData, setEditData]=useState({});
    const handleDelete=async()=>{
        try{
            await axios.delete(`${localhost}/boat/${boatId}`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`
                }
            })
            navigate("/admin-dashboard/all-boats");
        }
        catch(error){
            console.log(error);
        }
    }
    const handleEditChange=(e)=>{
        const {id, value}=e.target;
        setBoatData((prevData)=>({...prevData, [id]:value}))
    }
    const handleEditSubmit=()=>{
        toggleEditPanel(false);
        try{
            axios.put(`${localhost}/boat/`,data,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className="admin-boat-view-outer">
            <div className="admin-boat-view-edit-panel-outer" style={{display:(editPanelOpen)?"flex":"none"}}>
                <div className="admin-boat-view-edit-panel-box">
                    <button className="admin-boat-view-edit-panel-close-button" onClick={()=>toggleEditPanel(false)}>X</button>
                    <table className="admin-boat-view-edit-panel-table">
                        <tr className="admin-boat-view-edit-panel-tr">
                            <td className="admin-boat-view-edit-panel-td">Image</td>
                            <td className="admin-boat-view-edit-panel-td">
                                <input type="text" className="admin-boat-view-edit-panel-input" value={data.image} onChange={handleEditChange} id="image"></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-edit-panel-tr">
                            <td className="admin-boat-view-edit-panel-td">Boat Name</td>
                            <td className="admin-boat-view-edit-panel-td">
                                <input type="text" className="admin-boat-view-edit-panel-input" value={data.name} onChange={handleEditChange} id="name"></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-edit-panel-tr">
                            <td className="admin-boat-view-edit-panel-td">Description</td>
                            <td className="admin-boat-view-edit-panel-td">
                                <input type="text" className="admin-boat-view-edit-panel-input " value={data.description} onChange={handleEditChange} id="description"></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-edit-panel-tr">
                            <td className="admin-boat-view-edit-panel-td">Price</td>
                            <td className="admin-boat-view-edit-panel-td">
                                <input type="text" className="admin-boat-view-edit-panel-input " value={data.price} onChange={handleEditChange} id="price"></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-edit-panel-tr">
                            <td className="admin-boat-view-edit-panel-td">No of people</td>
                            <td className="admin-boat-view-edit-panel-td">
                                <input type="text" className="admin-boat-view-edit-panel-input " value={data.capacity} onChange={handleEditChange} id="capacity"></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-edit-panel-tr">
                            <td className="admin-boat-view-edit-panel-td">Location</td>
                            <td className="admin-boat-view-edit-panel-td">
                                <input type="text" className="admin-boat-view-edit-panel-input " value={data.location} onChange={handleEditChange} id="location"></input>
                            </td>
                        </tr>
                    </table>
                    <button className="admin-boat-view-edit-panel-submit-button" onClick={handleEditSubmit}>Submit</button>
                </div>
            </div>
            <div className="admin-boat-view-info">
                <div className="admin-boat-view-picture" style={{backgroundImage:`url('${data.image}')`}}></div>
                <div className="admin-boat-view-data">
                    <button className="admin-boat-view-edit-button" onClick={()=>toggleEditPanel(true)}>Edit</button>
                    <button className="admin-boat-view-edit-button" onClick={handleDelete}>Delete</button>
                    <table className="admin-boat-view-info-table"> 
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Boat ID</td>
                            <td className="admin-boat-view-info-td">{data.id}</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Boat Name</td>
                            <td className="admin-boat-view-info-td">{data.name}</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Description</td>
                            <td className="admin-boat-view-info-td">
                            {data.description}
                            </td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Price</td>
                            <td className="admin-boat-view-info-td">{data.price}</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Number of people</td>
                            <td className="admin-boat-view-info-td">{data.capacity}</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">location</td>
                            <td className="admin-boat-view-info-td">{data.location}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="admin-boat-view-bookings">
                <TableUI header={header} columns={columns} flexRatio={flexRatio} search=""/>
            </div>
        </div>
    );
}
export default AdminViewOfBoatHouse;