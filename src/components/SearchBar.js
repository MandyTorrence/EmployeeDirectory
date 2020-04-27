import React, { useContext } from "react";
import "../styles/style.css";
import GlobalContext from "../utils/GlobalContext";

const SearchBar = () => {
    const context = useContext(GlobalContext);

    return (
        <div className="searchbar">
            <div className="searchform">
                <div className="searchlabel"><i class="fas fa-search"></i> Search Directory:</div>
                <div className="searchinput">
                    <input type="search" placeholder="George Wasington" aria-label="Search" onChange={e => context.handleSearchChange(e)} />
                </div>
            </div>
        </div>
    )
};

export default SearchBar;