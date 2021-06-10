import React from 'react';
import classes from './MenuTitle.module.css';
import backArrow from '../assets/backArrowIcon.svg';

const MenuTitle = (props) => {
    return (
        <div className={classes.menuTitle}>
            <img
                className={classes.icon}
                src={backArrow}
                alt=""
                onClick={props.onBackClicked}
            />
            <div className={classes.text}>{props.title}</div>
        </div>
    );
};

export default MenuTitle;