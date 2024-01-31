import '../assets/css/BoatHouse.css';
import { MdLocationOn } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
function BoatHouse(){
    return(
        <div className="boat-house-outer">
            <div className="boat-house-left">
                <div className="boat-house-page-image-container"></div>
                <button className="add-wishlist-button">Add to wishlist</button>
                <button className="book-now-button">Book now</button>
            </div>
            <div className="boat-house-right">
                <h1>Aqua Haven Boathouse</h1>
                <h2><MdLocationOn/>Allapuzha<FaMapLocationDot/></h2>
                <h3>Starting from 15000/-</h3>
                <p className="boat-house-desc">We takes you back to an era when large barges or kettuvallams laden with rice, spices and coir plied through the canals of Alleppey. These barges also carried provisions, through the rivers, lakes and streams to the houses on the riverbanks. Vibrant, spicy, evergreen, colourfull, exotic, tropical coconut trees and paddy fields blessed Alappuzha immensely The vembanadu lake and its surroundings will literally conquer your heart. It is just “God’s own country”</p>
                <hr/>
                <h3>Facilities</h3>
                <ul>
                    <li>Free WIFI</li>
                    <li>DJ with music</li>
                </ul>
                <hr/>
                <h3>Activities</h3>
                <ul>
                    <li>Free WIFI</li>
                    <li>DJ with music</li>
                </ul>
                <hr/>
                <div style={{columnCount:2, paddingTop:"2vh"}}>
                    <h2>Food Menu</h2>
                    <h3>Welcome drink</h3>
                    <ul>
                        <li>Tender Coconut</li>
                        <li>Fruit juice</li>
                    </ul>
                    <h3>Breakfast</h3>
                    <ul>
                        <li>Idli/Dosa</li>
                        <li>Sambar</li>
                        <li>Steamed banana</li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Lunch</h3>
                    <ul>
                        <li>Rice</li>
                        <li>Sambar</li>
                        <li>Cabbage</li>
                        <li>Beans</li>
                        <li>Pappadam</li>
                    </ul>
                    <h3>Dinner</h3>
                    <ul>
                        <li>Tomatosoup</li>
                        <li>Chappathi</li>
                        <li>Salad</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default BoatHouse;