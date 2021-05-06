import React from 'react';
import { Link } from 'react-router-dom';
import classes from './YouTubeApps.module.css';
import tvIcon from '../../assets/images/youTubeTv.svg';
import musicIcon from '../../assets/images/youTubeMusic.svg';
import kidsIcon from '../../assets/images/youTubeKids.svg';
import creatorAcademyIcon from '../../assets/images/youTubeCreatorAcademy.svg';
import artistsIcon from '../../assets/images/youTubeArtist.svg';

const YouTubeAppsType = Object.freeze({
    Tv: {link: "", title:"YouTube TV", icon: tvIcon},
    Music: {link: "", title:"YouTube Music", icon: musicIcon},
    Kids: {link: "", title:"YouTube Kids", icon: kidsIcon},
    Academy: {link: "", title:"Creator Academy", icon: creatorAcademyIcon},
    Artists: {link: "", title:"YouTube for Artists", icon: artistsIcon}
});


const MenuItemLink = (props) => {
    return (
        <Link to={props.appType.link} className={classes.link}>
            <img src={props.appType.icon} alt="" className={classes.icon}/>
            <div className={classes.title}>{props.appType.title}</div>
        </Link>
    );
};

const YouTubeAppsMenu = (props) => {
    let attachedClasses = `${classes.menu}`;
    if (!props.showMenu) {
        attachedClasses = `${classes.menu} ${classes.hide}`;
    }
    return (
        <ul className={attachedClasses}>
            <li><MenuItemLink appType={YouTubeAppsType.Tv}/></li>
            <div className={classes.divider}></div>
            <li><MenuItemLink appType={YouTubeAppsType.Music}/></li>
            <li><MenuItemLink appType={YouTubeAppsType.Kids}/></li>
            <div className={classes.divider}></div>
            <li><MenuItemLink appType={YouTubeAppsType.Academy}/></li>
            <li><MenuItemLink appType={YouTubeAppsType.Artists}/></li>
        </ul>
    );
};

export default YouTubeAppsMenu;