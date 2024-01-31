import '../assets/css/BoatHouseCard.css';
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function BoatHouseCard(){
    const navigate=useNavigate();
    return(
        <div className="boathouse-card-outer" onClick={()=>navigate("/boat-house")}>
            <div className="boathouse-card-image-container" >
                <div className="boat-house-card-heart-outlined"><FaRegHeart /></div>
            </div>
            <div className="boathouse-card-detail-container">
                <h2 className="boathouse-card-name">Aqua Haven Boat House</h2>
                <div className="rating-container"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <p className="boathouse-card-location"><IoLocationSharp/>Location</p>
                <p className="boathouse-card-price">10000/-</p>
            </div>
        </div>
    );
}
export default BoatHouseCard;