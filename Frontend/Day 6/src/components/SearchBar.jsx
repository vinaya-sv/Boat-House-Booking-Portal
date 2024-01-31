import '../assets/css/SearchBar.css';
import { IoSearch } from "react-icons/io5";
function SearchBar(){
    return(
        <div className="search-bar">
            <input type="text" className="search-bar-input"></input>
            <IoSearch className="search-bar-icon" />
        </div>
    )
}
export default SearchBar;