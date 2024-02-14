import '../assets/css/AddBoatHouse.css';
function AddBoatHouse(){
    return (
        <div className="add-boat-house-outer">
            <label className="add-boat-house-label">Boat House Name</label><br/>
            <input type="text" className="add-boat-house-field"></input>
            <hr/>
            <label className="add-boat-house-label">Description</label><br/>
            <textarea className="add-boat-house-field" style={{height:"30vh",overflow:"hidden"}}></textarea>
            <hr/>
            
        </div>
    );
}
export default AddBoatHouse;