import React, { useContext } from "react";
import "../styles/style.css";
import searchContext from '../utils/SearchContext';

const SearchBar = () => {
    const searches = useContext(searchContext);

    return (
        <searchContext.Provider value={searches}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse row" id="navbarNav">
                    <div className="searchbar">
                        <div className="searchform">
                            <div className="searchlabel"><i className="fas fa-search"></i> Search Directory:</div>
                            <div className="searchinput">
                                <input className="form-control" type="search" onChange={(event) => searches.onChange("search", event.target.value)} placeholder="Search for a name" aria-label="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </searchContext.Provider>
    )
};

export default SearchBar;