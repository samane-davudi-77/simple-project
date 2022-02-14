import React from 'react';
import { Button } from 'react-bootstrap';


const Search = ({handleSearchNote}) => {
    return (
            <div className="mysearch">
                <input
                className="w-100 myinput"
                 placeholder="Search"
                 />
                
            </div>

    );
}

export default Search;