import React from 'react';
import classes from './SearchButton.module.css';
import SearchIcon from '../../assets/searchIcon.svg';
import styles from '../../../../Shared/Styles/styles.module.css';

const SearchButton = () => {
    return (
        <button className={`${classes.searchButton}`}>
            <img
                src={SearchIcon}
                className={`${styles.icon} ${classes.searchIcon}`}
            />
        </button>
    );
};

export default SearchButton;