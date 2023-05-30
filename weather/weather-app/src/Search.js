import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
    return (
        <div className="search">
            <input type="text" placeholder="Input City Name" />
            <button>
                <FontAwesomeIcon icon={faSearch} size={40}/>
            </button>
        </div>
    );
}

export default Search;