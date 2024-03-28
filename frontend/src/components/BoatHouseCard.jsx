import '../assets/css/BoatHouseCard.css';
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegHeart,FaHeart} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BoatHouseCard({boat}){
    const navigate=useNavigate();
    const [wishListHover, setWishlistHover]=useState(false);
    return(
        <div className="boathouse-card-outer" onClick={()=>navigate(`/boat-house?id=${boat.id}`)}>
            <div className="boathouse-card-image-container" style={{backgroundImage:`url('${boat.image}')`}} >
                {/* <div className="boat-house-card-heart-outlined" onMouseOver={()=>setWishlistHover(true)}  onMouseOut={()=>setWishlistHover(false)}>{!wishListHover?<FaRegHeart/>:<FaHeart class="boat-house-card-heart-icon" color='white'/>}</div> */}
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