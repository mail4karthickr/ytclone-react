import React from 'react';
import classes from './RootMenu.module.css';
import commonClasses from '../../Shared/Styles/styles.module.css';
import deviceThemeIcon from '../assets/deviceThemeIcon.svg';
import helpIcon from '../assets/helpIcon.svg';
import keyboardShortCutsIcon from '../assets/keyboardShortCutsIcon.svg';
import languageIcon from '../assets/languageIcon.svg';
import locationIcon from '../assets/locationIcon.svg';
import sendFeedbackIcon from '../assets/sendFeedbackIcon.svg';
import settingsIcon from '../assets/settingsIcon.svg';
import yourDataIcon from '../assets/yourDataIcon.svg';
import rightArrowIcon from '../assets/rightArrowIcon.svg';
import ListItem from '../../Shared/Components/UI/ListItem/ListItem';

export const MenuItemType = Object.freeze({
    DeviceTheme: 'DeviceTheme',
    Language: 'Language',
    Location: 'Location',
    Settings: 'Settings',
    DataInYouTube: 'DataInYouTube',
    Help: 'Help',
    Feedback: 'Feedback',
    KeyboardShortcuts: 'KeyboardShortcuts',
    RestrictedMode: 'RestrictedMode'
})

const RootMenu = (props) => {
    const menuItems = [
        {
            name: MenuItemType.DeviceTheme,
            leadingIcon: deviceThemeIcon, 
            title: <div className={classes.title}>{`Appearance: ${props.currentTheme}`}</div>, 
            trailingIcon: rightArrowIcon,
            onClick: props.showDeviceTheme
        },
        {
            name: MenuItemType.Language,
            leadingIcon: languageIcon, 
            title: <div>{`Language: ${props.currentLanguage.name}`}</div>, 
            trailingIcon: rightArrowIcon,
            onClick: props.showLanguageSettings
        },
        {
            name: MenuItemType.Location,
            leadingIcon: locationIcon,
            title: <div>{`Location: ${props.currentLocation.name}`}</div>, 
            trailingIcon: rightArrowIcon,
            onClick: props.showLocationSettings
        },
        {
            name: MenuItemType.Settings,
            leadingIcon: settingsIcon,
            title: <div>Settings</div>,
        },
        {
            name: MenuItemType.DataInYouTube,
            leadingIcon: yourDataIcon,
            title: <div>Your data in YouTube</div>,
        },
        {
            name: MenuItemType.Help,
            leadingIcon: helpIcon, 
            title: <div>Help</div>,
        },
        {
            name: MenuItemType.Feedback,
            leadingIcon: sendFeedbackIcon, 
            title: <div>Send Feedback</div>,
        },
        {
            name: MenuItemType.KeyboardShortcuts,
            leadingIcon: keyboardShortCutsIcon, 
            title: <div>Keyboard shortcuts</div>
        },
        {
            name: MenuItemType.RestrictedMode,
            title: <div>Restricted Mode: Off</div>,
            trailingIcon: rightArrowIcon,
            onClick: props.showRestrictedMode
        }
    ]

    let listItems = menuItems.map((item) => {
        let divider = null;
        if (item.name === MenuItemType.KeyboardShortcuts) {
            divider = <div key="divider" className={`${commonClasses.divider} ${classes.divder}`}></div>
        }
        return (
            <div>
                <ListItem
                    id={item.name}
                    key={item.name}
                    leadingIcon={item.leadingIcon}
                    trailingIcon={item.trailingIcon}
                    title={item.title}
                    onClick={ (id) => props.onClick(id) }
                />
                {divider}
            </div>
        )
    });
    return <ul className={classes.menu}>{listItems}</ul>
};

export default RootMenu;