import '../assets/css/DeleteBoatHouse.css';
function DeleteBoatHouse(){
    return (
        <div className="delete-boat-house-outer">
            <h1>Enter boat house ID to delete:</h1>
            <input type="text" className="delete-boat-house-field"></input>
            <button className="delete-boat-house-button">Delete</button>
        </div>
    )
}
export default DeleteBoatHouse;