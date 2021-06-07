import React from 'react';
import classes from './TabItem.module.css';

const TabItemTitle = (props) => {
    return (
        <div className={classes.tabItemTitle}>{props.title}</div>
    );
};

const TabItem = (props) => {
    return (
        <div className={classes.tabItem} onClick={props.onClick}>
            <img className={classes.tabItemIcon} src={props.url ?? props.icon} alt="" />
            <div className={classes.tabItemText}>{props.title}</div>
        </div>
    );
}

export default TabItem;