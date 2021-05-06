import React from 'react';
import rightArrowIcon from '../assets/images/rightArrowIcon.svg';
import classes from './ListItem.module.css';

const ListItem = (props) => {
    let trailingIcon = null;
    if (props.trailingIcon !== null && props.trailingIcon !== undefined) {
        trailingIcon = <img src={props.trailingIcon} className={classes.trailingIcon}/>;
    }
    let leadingIcon = null;
    if (props.leadingIcon !== null && props.leadingIcon !== undefined) {
        leadingIcon = <img src={props.leadingIcon} className={classes.leadingIcon}/>;
    }
    // let attachedClasses = `${classes.menuItem}`
    // if (leadingIcon === null) {
    //     attachedClasses = `${classes.menuItem} ${classes.leadingIconNull}`
    // }
    return(
        <div className={`${classes.listItem}`} onClick={props.onClick}>
            <div className={classes.flex}>
                {leadingIcon}
                {React.cloneElement(props.title)}
            </div>
            {trailingIcon}
        </div>
    );
}

export default ListItem;