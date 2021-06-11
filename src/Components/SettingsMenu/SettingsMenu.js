import React, { Component } from 'react';
import DeviceTheme from './DeviceTheme/DeviceTheme';
import RootMenu from './RootMenu/RootMenu';
import * as actions from './Redux/Actions';
import { connect } from 'react-redux';
import Spinner from './Spinner/SettingsMenuLoader';
import classes from './SettingsMenu.module.css';
import LanguageList from './List/LanguageList';
import { MenuItemType } from './RootMenu/RootMenu';
import LocationList from './List/LocationList';
import AuthSettingsMenu from './AuthSettingsMenu';

const MenuType = Object.freeze({
    Auth: 'Auth',
    UnAuth: 'UnAuth',
    DeviceTheme: 'DeviceTheme',
    Language: 'Language',
    Location: 'Location',
    RestrcitedMode: 'RestrcitedMode'
});

class SettingsMenu extends Component {
    state = {
        menu: [this.props.isAuthenticated ? MenuType.Auth : MenuType.UnAuth]
    }

    componentDidMount() {
        this.props.fetchLanguagesAndRegions();
    }

    onDeviceThemeBackClickedHandler = () => {
        this.removeLastItem();
    }

    themeUpdatedHandler = (selectedTheme) => {
        this.props.updateCurrentTheme(selectedTheme);
        this.props.closeSettingsMenu();
    }

    languageListBackClickedHandler = () => {
        console.log("languageListBackClickedHandler");
        // this.setState({menu: MenuType.RootMenu});
    }

    languageChangedHandler = (language) => {
        console.log('languageChangedHandler', language);
        this.props.updateCurrentLanguage(language);
        this.props.closeSettingsMenu();
    }

    locationChangedHandler = (region) => {
        console.log('locationChangedHandler', region);
        this.props.updateCurrentRegion(region);
        this.props.closeSettingsMenu();
    }

    removeLastItem = () => {
        this.setState({
            ...this.state,
            menu: this.state.menu.slice(0, this.state.menu.length - 1)
        })
    }

    showSelectThemeMenu = () => {
        console.log('showSelectThemeMenu');
        this.setState({
            ...this.state,
            menu: this.state.menu.concat(MenuType.DeviceTheme)
        })
    }

    rootMenuListItemTappedHandler = (itemType) => {
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

    render() {
        if (this.props.fetchLanguagesAndRegionsStart) {
            return <div className={classes.menu}>
                <Spinner />
            </div>
        }
        let menu = null;
        const menuType = this.state.menu.slice(-1)[0]
        if (menuType === undefined) {
            return menu;
        }
        switch (menuType) {
            case MenuType.Auth:
                menu = <div>
                    <AuthSettingsMenu userInfo={this.props.userInfo} />
                    <RootMenu
                        currentLanguage={this.props.currentLanguage}
                        currentLocation={this.props.currentRegion}
                        currentTheme={this.props.currentTheme}
                        onClick={(id) => this.rootMenuListItemTappedHandler(id)}
                    />
                </div>
                break;
            case MenuType.UnAuth:
                menu = <RootMenu
                            currentLanguage={this.props.currentLanguage}
                            currentLocation={this.props.currentRegion}
                            currentTheme={this.props.currentTheme}
                            onClick={(id) => this.rootMenuListItemTappedHandler(id)}
                        />
                break;
            case MenuType.DeviceTheme:
                menu = <DeviceTheme 
                            onDeviceThemeBackClicked={this.removeLastItem}
                            themeChanged={ (selectedTheme) => this.themeUpdatedHandler(selectedTheme)}
                            currentTheme={this.props.currentTheme}
                        />
                break;
            case MenuType.Language:
                menu = <LanguageList 
                            languages={this.props.fetchedLanguages}
                            languageListBackClicked={this.removeLastItem}
                            currentLanguage={this.props.currentLanguage}
                            languageChanged={(lang) => this.languageChangedHandler(lang)}
                        />
                break;
                case MenuType.Location:
                    menu = <LocationList 
                                locations={this.props.fetchedRegions}
                                locationListBackClicked={this.removeLastItem}
                                currentLocation={this.props.currentRegion}
                                locationChanged={(location) => this.locationChangedHandler(location)}
                            />
                    break;
            default:
                menu = null;
                break;
        }
        return <div className={classes.menu}>{menu}</div>;
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
        updateCurrentRegion: (region) => dispatch(actions.updateCurrentRegion(region))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu)