import React, {Component} from 'react';
import ListItem from '../MenuItem/ListItem';
import classes from './DeviceTheme.module.css';
import commonClasses from '../../../../../shared/styles/styles.module.css';
import backArrowIcon from '../assets/images/backArrowIcon.svg';
import tickIcon from '../assets/images/tickIcon.svg';
import MenuTitle from '../MenuTitle/MenuTitle';
import MenuItem1 from '../MenuItem/MenuItem1';

export const themeType = Object.freeze({
    DeviceTheme: 'DeviceTheme',
    DarkTheme: 'DarkTheme',
    LightTheme: 'LightTheme',
})

const DeviceTheme = (props) => {
    return (
        <ul className={classes.menu}>
            <MenuTitle title={'Appearance'} onBackClicked={props.onDeviceThemeBackClicked}/>
            <div className={commonClasses.divider}></div>
            <div className={`${commonClasses.menuSubHeadColor} ${classes.subHeading}`}>Setting applies to this browser only</div>
             <ListItem
                id={themeType.DeviceTheme}
                key={themeType.DeviceTheme}
                leadingIcon={props.currentTheme === themeType.DeviceTheme ? tickIcon : null}
                title={<div>DeviceTheme</div>}
                onClick={ (theme) => props.themeChanged(theme)}
            />
             <ListItem
                id={themeType.DarkTheme}
                key={themeType.DarkTheme}
                leadingIcon={props.currentTheme === themeType.DarkTheme ? tickIcon : null}
                title={<div>DarkTheme</div>}
                onClick={ (theme) => props.themeChanged(theme)}
            />
            <ListItem
                id={themeType.LightTheme}
                key={themeType.LightTheme}
                leadingIcon={props.currentTheme === themeType.LightTheme ? tickIcon : null}
                title={<div>LightTheme</div>}
                onClick={ (theme) => props.themeChanged(theme)}
            />
        </ul>
    );
};

export default DeviceTheme;