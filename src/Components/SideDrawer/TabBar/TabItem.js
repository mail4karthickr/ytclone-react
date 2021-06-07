import React from 'react';
import homeIcon from '../assets/homeIcon.svg';
import exploreIcon from '../assets/exploreIcon.svg';
import subscriptionsIcon from '../assets/subscriptionsIcon.svg';
import libraryIcon from '../assets/libraryIcon.svg';
import historyIcon from '../assets/historyIcon.svg';
import classes from './TabItem.module.css';

export const TabItemType = Object.freeze({
    Home: 0,
    Explore: 1,
    Subscriptions: 2,
    Library: 3,
    History: 4
})

const TabItem = (props) => {
    let icon = null;
    switch (props.iconType) {
        case TabItemType.Home:
            icon = homeIcon;
            break;
        case TabItemType.Explore:
            icon = exploreIcon;
            break;
        case TabItemType.Subscriptions:
            icon = subscriptionsIcon;
            break;
        case TabItemType.Library:
            icon = libraryIcon;
            break;
        case TabItemType.History:
            icon = historyIcon;
            break;
    }
    let tabItemClasses = `${classes.tabItem}`;
    let tabIconClasses = `${classes.tabIcon}`;
    if (props.tag === props.selectedTabIndex) {
        tabItemClasses = `${classes.tabItem} ${classes.tabItemSelected}`;
        tabIconClasses = `${classes.tabIcon} ${classes.tabIconSelected}`;
    }
    return (
        <button className={tabItemClasses} onClick={() => props.onTabItemClicked(props.tag)}>
            <img src={icon} className={tabIconClasses}/>
            {props.title}
        </button>
    );
};

export default TabItem;