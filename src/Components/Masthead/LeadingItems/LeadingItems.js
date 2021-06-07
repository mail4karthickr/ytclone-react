import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LeadingItems.module.css';
import DrawerToggle from '../../../Shared/Components/UI/DrawerToggle/DrawerToggle';
import youtubeIcon from '../assets/youtubeIcon.svg';

const LeadingItems = (props) => {
    return (
        <div className={classes.leadingItems}>
            <DrawerToggle onClick={props.toggleMenu} />
            <Link to="/" className={classes.link}>
                <img src={youtubeIcon} className={classes.youtubeIcon}/>
            </Link>
        </div>
    );
};

export default LeadingItems;