import React from 'react';
import classes from './SearchBox.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons"
import SearchButton from './SearchButton/SearchButton';
import { Tooltip } from '@material-ui/core';
import microphoneIcon from "../../../assets/images/microphoneIcon.svg";

const SearchBox = (props) => {
    return (
        <div className={`${classes.container}`}>
            <Tooltip title="Search" placement="bottom-end">
                <div className={`${classes.searchBox}`}>
                    <input type="text" placeholder="Search" className={`${classes.searchInput}`} />
                    <SearchButton></SearchButton>
                </div>
            </Tooltip>
            <Tooltip title="Search with your voice">
                <img src={microphoneIcon} className={classes.microphoneIcon}/>
            </Tooltip>
        </div>
    );
};

export default SearchBox;