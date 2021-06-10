import React from 'react';
import LiveIcon from '../../../assets/liveIcon.svg'
import classes from './SectionItem.module.css';

const SectionItem = (props) => {
    return (
        <div className={classes.sectionItem}>
            <img src={props.channelLogo} className={`${classes.channelLogo} ${classes.icon}`} alt="" />
            <span className={classes.title}>{props.title}</span>
            {props.isLive ? <img src={LiveIcon} className={`${classes.liveIcon} ${classes.icon}`} alt="" /> : null}
            {props.hasActivity ? <span className={classes.dot}></span> : null}  
        </div>
    )
}

export default SectionItem;