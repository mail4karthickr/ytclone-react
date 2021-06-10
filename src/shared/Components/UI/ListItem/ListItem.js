import React from 'react';
import classes from './ListItem.module.css';

const ListItem = (props) => {
    let trailingIcon = null;
    if (props.trailingIcon !== null && props.trailingIcon !== undefined) {
        trailingIcon = <img src={props.trailingIcon} className={classes.trailingIcon} alt=""/>;
    }
    let leadingIcon = null;
    if (props.leadingIcon !== null && props.leadingIcon !== undefined) {
        leadingIcon = <img src={props.leadingIcon} className={classes.leadingIcon} alt=""/>;
    }
    return(
        <div className={`${classes.listItem}`} onClick={() => props.onClick(props.id)}>
            <div className={classes.flex}>
                <div className={classes.imageContainer}>
                    {leadingIcon}
                </div>
                {React.cloneElement(props.title)}
            </div>
            {trailingIcon}
        </div>
    );
}

export default ListItem;