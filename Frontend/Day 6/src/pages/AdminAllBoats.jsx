import { Link } from 'react-router-dom';
import '../assets/css/AdminAllBoats.css';
import { useState } from 'react';
import TableUI from '../components/TableUI';
import SearchBar from '../components/SearchBar';
function AdminAllBoats(){
    const header=["Boat ID","Boat Name","Delete"];
    const columns=[
        {linkto:`/admin-dashboard/all-boats/boat?id=${12345}`, "Boat ID":12345,"Boat Name":"Da Vinci - The Boat House", "Delete":<button className="admin-all-boats-boat-delete-button" >Delete</button>},
        {linkto:`/admin-dashboard/all-boats/boat?id=${12345}`, "Boat ID":12345,"Boat Name":"Aqua Haven boathouse", "Delete":<button className="admin-all-boats-boat-delete-button" >Delete</button>},
        {linkto:`/admin-dashboard/all-boats/boat?id=${12345}`, "Boat ID":12345,"Boat Name":"River Retreat", "Delete":<button className="admin-all-boats-boat-delete-button" >Delete</button>},
        {linkto:`/admin-dashboard/all-boats/boat?id=${12345}`, "Boat ID":12345,"Boat Name":"Nautical Nest", "Delete":<button className="admin-all-boats-boat-delete-button" >Delete</button>},
        {linkto:`/admin-dashboard/all-boats/boat?id=${12345}`, "Boat ID":12345,"Boat Name":"Tide's Tranquility", "Delete":<button className="admin-all-boats-boat-delete-button" >Delete</button>}


    ];
    const flexRatio=[1,3,1];
    const [editPanelOpen, toggleEditPanel]=useState(false);
    const boatData=["Boat ID","Boat name","Description","Number of adults","Number of children","Price"];

    const boatDetailRow=["Boat ID","Boat name"];
    const boatDetailValues=[[21235,"La Guesta Boat"],[31313,"Da Vinci"]]
    return (
        <div className="admin-all-boats-outer">
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
            <button className="admin-all-boats-add-boat" onClick={()=>toggleEditPanel(true)}>Add new boat</button>
            <SearchBar/>          
            <TableUI header={header} columns={columns} flexRatio={flexRatio}/>
                        
        </div>
    );
}
export default AdminAllBoats;