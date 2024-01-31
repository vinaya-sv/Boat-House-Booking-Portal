import { Link } from 'react-router-dom';
import '../assets/css/AdminAllBoats.css';
import { useState } from 'react';
function AdminAllBoats(){
    const [editPanelOpen, toggleEditPanel]=useState(false);
    const boatData=["Boat ID","Boat name","Description","Number of adults","Number of children","Price"]
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
            <select className="admin-all-boats-filter">
                <option>All</option>
                <option>Booked</option>
            </select>
            <Link to={`/admin-dashboard/all-boats/boat?id=${12345}`} className="admin-all-boats-boat">
                <div className="admin-all-boats-boat-data">Boat ID</div>
                <div className="admin-all-boats-boat-data">Boat name</div>
            </Link>
                        
        </div>
    );
}
export default AdminAllBoats;