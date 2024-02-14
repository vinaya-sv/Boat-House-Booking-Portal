import '../assets/css/BoatHouseCard.css';
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function BoatHouseCard({boat}){
    const navigate=useNavigate();
    return(
        <div className="boathouse-card-outer" onClick={()=>navigate(`/boat-house?id=${boat.id}`)}>
            <div className="boathouse-card-image-container" style={{backgroundImage:`url('${boat.image}')`}} >
                <div className="boat-house-card-heart-outlined"><FaRegHeart /></div>
            </div>
            <div className="boathouse-card-detail-container">
                <h2 className="boathouse-card-name">{boat.name}</h2>
                <div className="rating-container"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <p className="boathouse-card-location"><IoLocationSharp/>{boat.location}</p>
                <p className="boathouse-card-price">{boat.price}/- </p>
            </div>
        </div>
    );
}
export default BoatHouseCard;