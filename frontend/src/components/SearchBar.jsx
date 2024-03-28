import '../assets/css/SearchBar.css';
import { IoSearch } from "react-icons/io5";
function SearchBar({setSearchBar}){
    return(
        <div className="search-bar">
            <input type="text" className="search-bar-input" onChange={(e)=>setSearchBar(e.target.value)}></input>
            <IoSearch className="search-bar-icon" />
        </div>
    )
}
export default SearchBar;