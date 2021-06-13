import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from './Redux/Actions';
import { logout } from '../../Screens/Root/Redux/Actions';
import DeviceTheme from './DeviceTheme/DeviceTheme';
import GeneralSettings from './GeneralSettings';
import Spinner from './Spinner/SettingsMenuLoader';
import LanguageList from './List/LanguageList';
import { MenuItemType } from './GeneralSettings';
import LocationList from './List/LocationList';
import UserSettings from './UserSettings';
import  { MenuRenderer } from '../../Shared/Components/Utils';

const AuthMenuRenderer = styled(MenuRenderer)`
    top: 35px;
`
const UnAuthMenuRenderer = styled(MenuRenderer)`
    top: 35px;
    right: 130px;
`
const MenuType = Object.freeze({
    AuthSettings: 'AuthSettings',
    UnAuthSettings: 'UnAuthSettings',
    DeviceTheme: 'DeviceTheme',
    Language: 'Language',
    Location: 'Location',
    RestrcitedMode: 'RestrcitedMode'
});

class Menu extends Component {
    state = {
        menu: [this.props.isAuthenticated ? MenuType.AuthSettings : MenuType.UnAuthSettings]
    }

     // Action handlers
    logoutHandler = () => {
        this.props.logout();
    }

    themeUpdatedHandler = (selectedTheme) => {
        this.props.updateCurrentTheme(selectedTheme);
        this.props.closeSettingsMenu();
    }

    languageUpdateHandler = (language) => {
        this.props.updateCurrentLanguage(language);
        this.props.closeSettingsMenu();
    }

    locationUpdateHandler = (region) => {
        this.props.updateCurrentRegion(region);
        this.props.closeSettingsMenu();
    }

    removeLastItem = () => {
        this.setState({
            ...this.state,
            menu: this.state.menu.slice(0, this.state.menu.length - 1)
        })
    }

    generalSettingsItemTappedHandler = (itemType) => {
        switch (itemType) {
            case MenuItemType.DeviceTheme:
                this.setState({...this.state, menu: this.state.menu.concat(MenuType.DeviceTheme)})
                break;
            case MenuItemType.Language:
                this.setState({...this.state, menu: this.state.menu.concat(MenuType.Language)})
                break;
            case MenuItemType.Location:
                this.setState({...this.state, menu: this.state.menu.concat(MenuType.Location)})
                break;
            case MenuItemType.RestrictedMode:
                this.setState({...this.state, menu: this.state.menu.concat(MenuType.RestrcitedMode)})
                break;
            default:
                break;
        }
    }

    userSettingsMenuItemHandler = (itemType) => {
        console.log("userSettingsMenuItemHandler", itemType);
    }

    // Component Lifecycle
    componentDidMount() {
        this.props.fetchLanguagesAndRegions();
    }
    
    render() {
        let menuItem = null;
        const menuType = this.state.menu.slice(-1)[0]
        if (menuType === undefined) {
            return menuItem;
        }
        if (this.props.fetchLanguagesAndRegionsStart) {
            menuItem = <Spinner/>
        } else {
            switch (menuType) {
                case MenuType.AuthSettings:
                    menuItem = <>
                        <UserSettings 
                            userInfo={this.props.userInfo}
                            itemClicked={this.userSettingsMenuItemHandler}
                        />
                        <GeneralSettings
                            currentLanguage={this.props.currentLanguage}
                            currentLocation={this.props.currentRegion}
                            currentTheme={this.props.currentTheme}
                            onClick={(id) => this.generalSettingsItemTappedHandler(id)}
                        />
                    </>
                    break;
                case MenuType.UnAuthSettings:
                    menuItem = <GeneralSettings
                                currentLanguage={this.props.currentLanguage}
                                currentLocation={this.props.currentRegion}
                                currentTheme={this.props.currentTheme}
                                onClick={(id) => this.generalSettingsItemTappedHandler(id)}
                            />
                    break;
                case MenuType.DeviceTheme:
                    menuItem = <DeviceTheme
                                currentTheme={this.props.currentTheme}
                                backButtonClicked={this.removeLastItem}
                                themeChanged={ (selectedTheme) => this.themeUpdatedHandler(selectedTheme)}
                            />
                    break;
                case MenuType.Language:
                    menuItem = <LanguageList 
                                languages={this.props.fetchedLanguages}
                                backButtonClicked={this.removeLastItem}
                                currentLanguage={this.props.currentLanguage}
                                languageChanged={(lang) => this.languageUpdateHandler(lang)}
                            />
                    break;
                    case MenuType.Location:
                        menuItem = <LocationList 
                                    locations={this.props.fetchedRegions}
                                    locationListBackClicked={this.removeLastItem}
                                    currentLocation={this.props.currentRegion}
                                    locationChanged={(location) => this.locationUpdateHandler(location)}
                                />
                        break;
                default:
                    menuItem = null;
                    break;
            }
        }
        return this.props.isAuthenticated ? <AuthMenuRenderer>{menuItem}</AuthMenuRenderer> : <UnAuthMenuRenderer>{menuItem}</UnAuthMenuRenderer>;
    }
}

const mapStateToProps = state => {
    return {
        fetchLanguagesAndRegionsStart: state.settingsMenu.fetchLanguagesAndRegionsStart,
        fetchLanguagesAndRegionsFailed: state.settingsMenu.fetchLanguagesAndRegionsFailed,
        fetchedLanguages: state.settingsMenu.fetchedLanguages,
        fetchedRegions: state.settingsMenu.fetchedRegions,
        currentLanguage: state.settingsMenu.currentLanguage,
        currentRegion: state.settingsMenu.currentRegion,
        currentTheme: state.settingsMenu.currentTheme,
        isAuthenticated: state.root.isAuthenticated,
        userInfo: state.root.userInfo
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLanguagesAndRegions: () => dispatch(actions.fetchLanguagesAndRegions()),
        updateCurrentLanguage: (language) => dispatch(actions.updateCurrentLanguage(language)),
        updateCurrentTheme: (theme) => dispatch(actions.updateCurrentTheme(theme)),
        updateCurrentRegion: (region) => dispatch(actions.updateCurrentRegion(region)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)