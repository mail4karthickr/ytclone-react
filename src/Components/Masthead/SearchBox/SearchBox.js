import React from 'react';
import classes from './SearchBox.module.css';
import SearchButton from './SearchButton/SearchButton';
import microphoneIcon from "../assets/microphoneIcon.svg";
import styles from '../../../Shared/Styles/styles.module.css';

const SearchBox = () => {
    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.searchBox}`}>
                <input type="text" placeholder="Search" className={`${classes.searchInput}`} />
                <SearchButton></SearchButton>
            </div> 
            <img
                className={`${styles.icon} ${classes.microphoneIcon}`}
                src={microphoneIcon}
                alt=""
            />
        </div>
    );
};

export default SearchBox;