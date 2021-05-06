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
            <MenuItem1
                title="DeviceTheme"
                key={themeType.DeviceTheme}
                id={themeType.DeviceTheme}
                itemClicked={ (theme) => props.themeChanged(theme)}
                isSelected={props.currentTheme === themeType.DeviceTheme}
            />
            <MenuItem1
                title="DarkTheme" 
                key={themeType.DarkTheme}
                id={themeType.DarkTheme}
                itemClicked={ (theme) => props.themeChanged(theme)}
                isSelected={props.currentTheme === themeType.DarkTheme}
            />
             <MenuItem1
                title="LightTheme" 
                key={themeType.LightTheme}
                id={themeType.LightTheme}
                itemClicked={ (theme) => props.themeChanged(theme)}
                isSelected={props.currentTheme === themeType.LightTheme}
            />
        </ul>
    );
};

export default DeviceTheme;