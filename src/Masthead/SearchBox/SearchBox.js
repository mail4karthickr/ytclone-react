import React from 'react';
import classes from './SearchBox.module.css';
import SearchButton from './SearchButton/SearchButton';
import { Tooltip } from '@material-ui/core';
import microphoneIcon from "../assets/images/microphoneIcon.svg";
import styles from '../../Shared/Styles/styles.module.css';

const SearchBox = () => {
    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.searchBox}`}>
                <input type="text" placeholder="Search" className={`${classes.searchInput}`} />
                <SearchButton></SearchButton>
            </div> 
            <img src={microphoneIcon} className={`${styles.icon} ${classes.microphoneIcon}`}/>
        </div>
    );
};

export default SearchBox;