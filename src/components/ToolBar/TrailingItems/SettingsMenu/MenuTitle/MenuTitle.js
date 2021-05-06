import React from 'react';
import classes from './MenuTitle.module.css';
import backArrow from '../assets/images/backArrowIcon.svg';

const MenuTitle = (props) => {
    return (
        <div className={classes.menuTitle}>
            <img src={backArrow} className={classes.icon} onClick={props.onBackClicked}/>
            <div className={classes.text}>{props.title}</div>
        </div>
    );
};

export default MenuTitle;