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
        fetchUserData();
        if(!editPanelOpen)
            fetchBoatData();
        setBoatId(query.get("id"))
        setColumns(userBookingData.map((d)=>({linkto:`/admin-dashboard/all-users/user?id=${d.userId}`, "Booking ID":d.id, "User ID":d.userId, "Number of people":d.numberOfPeople,"Check in": d.checkIn, "Check out":d.checkOut,"Booked on":d.dateOfBooking})))
    },[userBookingData])
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
    const header=["Booking ID", "User ID", "Number of people","Check in", "Check out","Booked on"];
    // const columns=[{"User ID":12345,"Username":"John's Retreat","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
    const [columns, setColumns]=useState([])
    const flexRatio=[1,7,2,2,2,2];
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
    const handleAmenitiesChange=()=>{
        const arr=data.amenities;
        arr.push(amenities);
        setBoatData((prevData)=>({...prevData, "amenities":arr}));
        setAmenitiesIn("");
    }
    const handleAmenitiesDelete=(index)=>{
        const arr=data.amenities;
        arr.splice(index,1);
        setBoatData((prevData)=>({...prevData, "amenities":arr}));
    }
    const roomFeaturesChange=()=>{
        const arr=data.roomFeatures;
        arr.push(roomFeatures);
        setRoomFeatures((prevData)=>({...prevData, "roomFeatures":arr}));
        setRoomFeatures("");
    }
    const roomFeaturesDelete=(index)=>{
        const arr=data.roomFeatures;
        arr.splice(index,1);
        setRoomFeatures((prevData)=>({...prevData, "roomFeatures":arr}));
    }
    const [amenities, setAmenitiesIn]=useState("");
    const [roomFeatures, setRoomFeatures]=useState("");
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
                                <input type="number" className="admin-boat-view-edit-panel-input " value={data.numberOfPeople} onChange={handleEditChange} id="numberOfPeople"></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-add-panel-tr">
                            <td className="admin-boat-view-add-panel-td">Amenities</td>
                            <td className="admin-boat-view-add-panel-td">
                                <div className="amenities-list-container">
                                    {data.amenities && data.amenities.map((a, index)=>
                                        <div className="amenities-list-div">{a} <span style={{cursor:"pointer"}} onClick={()=>handleAmenitiesDelete(index)}>x</span></div>
                                    )}
                                </div>
                                <input value={amenities} onChange={(e)=>setAmenitiesIn(e.target.value)}></input>
                                <button onClick={handleAmenitiesChange}>+</button>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-add-panel-tr">
                            <td className="admin-boat-view-add-panel-td">Room Features</td>
                            <td className="admin-boat-view-add-panel-td">
                                <div className="amenities-list-container">
                                    {data.roomFeatures && data.roomFeatures.map((a, index)=>
                                        <div className="amenities-list-div">{a} <span style={{cursor:"pointer"}} onClick={()=>roomFeaturesDelete(index)}>x</span></div>
                                    )}
                                </div>
                                <input value={roomFeatures} onChange={(e)=>setRoomFeatures(e.target.value)}></input>
                                <button onClick={roomFeaturesChange}>+</button>
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
                            <td className="admin-boat-view-info-td">{data.numberOfPeople}</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Amenities</td>
                            <td className="admin-boat-view-info-td">{data.amenities && data.amenities.map(a=><li>{a}</li>)}</td>
                        </tr>
                        <tr className="admin-boat-view-info-tr">
                            <td className="admin-boat-view-info-td">Room Features</td>
                            <td className="admin-boat-view-info-td">{data.roomFeatures && data.roomFeatures.map(a=><li>{a}</li>)}</td>
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