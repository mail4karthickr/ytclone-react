import React from 'react';
import classes from './SearchButton.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchButton = () => {
    return (
        <button className={`${classes.searchButton}`}>
            <FontAwesomeIcon 
                icon={faSearch}
                size="1x"
                className={classes.searchIcon}
            />
        </button>
    );
};

export default SearchButton;