import React from 'react';
import classes from './MenuItem1.module.css';
import tickIcon from '../assets/images/tickIcon.svg';

const MenuItem1 = (props) => {
    let selectedIcon = props.isSelected ? <img src={tickIcon} className={classes.menuIcon}/> : null;
    return (
        <div className={classes.menuItem1} onClick={ () => props.itemClicked(props.id)}>
            {selectedIcon}
            <div>{props.title}</div>
        </div>
    );
};

export default MenuItem1;