import classes from './Chips.module.css';
import React from 'react';

const Chips = (props) => {
    let attachedClasses = [classes.chips]
    if (props.isSelected) {
        attachedClasses = [classes.chips, classes.selected]
    }
    return (
        <div 
            className={attachedClasses.join(' ')}
            onClick={() => props.tabChanged(props.id)}
        >{props.title}</div>
    );
};

export default Chips;