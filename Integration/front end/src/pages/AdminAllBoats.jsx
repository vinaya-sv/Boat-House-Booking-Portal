import '../assets/css/AdminAllBoats.css';
import { useEffect, useState } from 'react';
import TableUI from '../components/TableUI';
import SearchBar from '../components/SearchBar';
import {localhost} from '../services/localhost';
import axios from 'axios';
function AdminAllBoats(){
    const [data, setBoatData]=useState([]);
    const fetchBoatData=async()=>{
        try{
            const response=await axios.get(`${localhost}/boat/get/`);
            setBoatData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    const header=["Boat ID","Boat Name"];
    // const columns=[{linkto:`/admin-dashboard/all-boats/boat?id=${12345}`, "Boat ID":52634,"Boat Name":"Tide's Tranquility", "Delete":<button className="admin-all-boats-boat-delete-button" >Delete</button>}
    const [columns, setTableColumns]=useState([]);
    const flexRatio=[3,2];
    const [editPanelOpen, toggleEditPanel]=useState(false);
    useEffect(()=>{
        fetchBoatData();
        setTableColumns(data.map((d)=>({linkto:`/admin-dashboard/all-boats/boat?id=${d.id}`, "Boat ID":d.id, "Boat Name":d.name})));
    },[data]);
    const boatData=["Boat ID","Boat name","Description","Number of adults","Number of children","Price"];
    const [addBoatData, setAddBoat]=useState({
        "name": "",
        "description": "",
        "phoneNumber": "",
        "location": "",
        "image": "",
        "noOfBedrooms": 0,
        "capacity": 0,
        "type": "",
        "price": 0
    })
    const [searchBar, setSearchBar]=useState("")
    const handleInputChange=(event)=>{
        const {id, value}=event.target;
        setAddBoat((prevData)=>({...prevData, [id]:value}));
    }
    const handleAddSubmit=async()=>{
        try{
            const response=await axios.post(`${localhost}/boat/`,addBoatData,{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            })
            window.location.reload();
        }
        catch(error){
            console.log(error)
        }
        toggleEditPanel(false);
    }
    return (
        <div className="admin-all-boats-outer">
            <div className="admin-boat-view-add-panel-outer" style={{display:(editPanelOpen)?"flex":"none"}}>
                <div className="admin-boat-view-add-panel-box">
                    <button className="admin-boat-view-add-panel-close-button" onClick={()=>toggleEditPanel(false)}>X</button>
                    <table className="admin-boat-view-add-panel-table">
                        <tr className="admin-boat-view-add-panel-tr">
                            <td className="admin-boat-view-add-panel-td">Boat name</td>
                            <td className="admin-boat-view-add-panel-td">
                                <input type="text" className="admin-boat-view-add-panel-input" value={addBoatData.name} onChange={handleInputChange} id="name" required ></input>
                            </td>
                        </tr><tr className="admin-boat-view-add-panel-tr">
                            <td className="admin-boat-view-add-panel-td">Description</td>
                            <td className="admin-boat-view-add-panel-td">
                                <input type="text" className="admin-boat-view-add-panel-input" value={addBoatData.description} onChange={handleInputChange} id="description" required></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-add-panel-tr">
                            <td className="admin-boat-view-add-panel-td">Phone number</td>
                            <td className="admin-boat-view-add-panel-td">
                                <input type="text" className="admin-boat-view-add-panel-input" value={addBoatData.phoneNumber} onChange={handleInputChange} id="phoneNumber" required></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-add-panel-tr">
                            <td className="admin-boat-view-add-panel-td">Location</td>
                            <td className="admin-boat-view-add-panel-td">
                                <input type="text" className="admin-boat-view-add-panel-input" value={addBoatData.location} onChange={handleInputChange} id="location"></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-add-panel-tr">
                            <td className="admin-boat-view-add-panel-td">Image</td>
                            <td className="admin-boat-view-add-panel-td">
                                <input type="text" className="admin-boat-view-add-panel-input" value={addBoatData.image} onChange={handleInputChange} id="image"></input>
                            </td>
                        </tr>
                        <tr className="admin-boat-view-add-panel-tr">
                            <td className="admin-boat-view-add-panel-td">Price</td>
                            <td className="admin-boat-view-add-panel-td">
                                <input type="text" className="admin-boat-view-add-panel-input" value={addBoatData.price} onChange={handleInputChange} id="price"></input>
                            </td>
                        </tr>
                    </table>
                    <button className="admin-boat-view-edit-panel-submit-button" onClick={handleAddSubmit}>Submit</button>
                </div>
            </div>
            <button className="admin-all-boats-add-boat" onClick={()=>toggleEditPanel(true)}>Add new boat</button>
            <SearchBar setSearchBar={setSearchBar}/>          
            <TableUI header={header} columns={columns} flexRatio={flexRatio} search={searchBar}/>
        </div>
    );
}
export default AdminAllBoats;