import React, { useContext } from "react";
import "../styles/style.css";
import GlobalContext from "../utils/GlobalContext";

const SearchBar = () => {
    const context = useContext(GlobalContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse row" id="navbarNav">
                <div className="searchbar">
                    <div className="searchform">
                        <div className="searchlabel"><i className="fas fa-search"></i> Search Directory:</div>
                        <div className="searchinput">
                            <input className="form-control" type="search" placeholder="name" aria-label="Search" onSearchChange={e => context.handleSearchChange()} />
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
};

export default SearchBar;