import React from 'react';
import { MenuSectionRenderer }  from '../../Shared/Components/Utils';
import deviceThemeIcon from './assets/deviceThemeIcon.svg';
import helpIcon from './assets/helpIcon.svg';
import keyboardShortCutsIcon from './assets/keyboardShortCutsIcon.svg';
import languageIcon from './assets/languageIcon.svg';
import locationIcon from './assets/locationIcon.svg';
import sendFeedbackIcon from './assets/sendFeedbackIcon.svg';
import settingsIcon from './assets/settingsIcon.svg';
import yourDataIcon from './assets/yourDataIcon.svg';
import rightArrowIcon from './assets/rightArrowIcon.svg';
import ListItem from '../../Shared/Components/ListItem';

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

function RestictedMode({isRestrictedModeOn, onClick}) {
    return (
        <MenuSectionRenderer>
            <ListItem
                id={"Restricted Mode"}
                key={"RestrictedMode"}
                title= {isRestrictedModeOn ? "RestrictedMode: On" : "RestrictedMode: Off"}
                onClick={() => onClick()}
                trailingIcon={rightArrowIcon}
            />
        </MenuSectionRenderer>
    )
}


const GeneralSettings = (props) => {
    const menuItems = [
        {
            name: MenuItemType.DeviceTheme,
            leadingIcon: deviceThemeIcon, 
            title: <div>{`Appearance: ${props.currentTheme}`}</div>, 
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
        }
    ]

    let listItems = menuItems.map((item) => {
        return (
            <>
                <ListItem
                    id={item.name}
                    key={item.name}
                    leadingIcon={item.leadingIcon} 
                    title={item.title} 
                    trailingIcon={item.trailingIcon}
                    onClick={ (id) => props.onClick(id) }
                />
            </>
        )
    });
    return <>
        <MenuSectionRenderer>{listItems}</MenuSectionRenderer>
        <RestictedMode isRestrictedModeOn={false} onClick={() => { console.log("onclick"); }} />
    </>
};

export default GeneralSettings;