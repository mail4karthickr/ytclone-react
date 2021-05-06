import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import classes from './LeadingItems.module.css';
import youtubeIcon from '../../../assets/images/youtubeIcon.svg';

const LeadingItems = () => {
    return (
        <div className={classes.leadingItems}>
            <DrawerToggle></DrawerToggle>
            <Link to="/" className={classes.link}>
                <img src={youtubeIcon} className={classes.youtubeIcon}/>
            </Link>
        </div>
    );
};

export default LeadingItems;