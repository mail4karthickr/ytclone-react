import React, { Component } from 'react';
import DeviceTheme from './DeviceTheme/DeviceTheme';
import RootMenu from './RootMenu/RootMenu';
import * as actions from './Redux/Actions';
import { connect } from 'react-redux';
import Spinner from './Spinner/SettingsMenuLoader';
import classes from './SettingsMenu.module.css';
import LanguageList from './List/LanguageList';
import { updateObject } from 'Shared/utility';
import { themeType } from './DeviceTheme/DeviceTheme'
import { MenuItemType } from './RootMenu/RootMenu';
import LocationList from './List/LocationList';

const MenuType = Object.freeze({
    RootMenu: 'RootMenu',
    DeviceTheme: 'DeviceTheme',
    Language: 'Language',
    Location: 'Location',
    RestrcitedMode: 'RestrcitedMode'
});

class SettingsMenu extends Component {
    state = {
        menu: MenuType.RootMenu,
    }

    componentDidMount() {
        this.props.fetchLanguagesAndRegions();
    }

    onDeviceThemeBackClickedHandler = () => {
        this.setState({
            ...this.state,
            menu: MenuType.RootMenu
        })
    }

    themeUpdatedHandler = (selectedTheme) => {
        this.props.updateCurrentTheme(selectedTheme);
        this.props.closeSettingsMenu();
    }

    languageListBackClickedHandler = () => {
        console.log("languageListBackClickedHandler");
        this.setState({menu: MenuType.RootMenu});
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

    rootMenuListItemTappedHandler = (itemType) => {
        switch (itemType) {
            case MenuItemType.DeviceTheme:
                this.setState({...this.state, menu: MenuType.DeviceTheme})
                break;
            case MenuItemType.Language:
                this.setState({...this.state, menu: MenuType.Language})
                break;
            case MenuItemType.Location:
                this.setState({...this.state, menu: MenuType.Location})
                break;
            case MenuItemType.RestrictedMode:
                this.setState({...this.state, menu: MenuType.RestrcitedMode})
                break;
        }
    }

    render() {
        console.log('this.props.currentLanguage', this.props.currentLanguage);
        if (this.props.fetchLanguagesAndRegionsStart) {
            return <div className={classes.menu}>
                <Spinner />
            </div>
        }
        let menu = null;
        switch (this.state.menu) {
            case MenuType.RootMenu:
                menu = <RootMenu
                            currentLanguage={this.props.currentLanguage}
                            currentLocation={this.props.currentRegion}
                            currentTheme={this.props.currentTheme}
                            onClick={(id) => this.rootMenuListItemTappedHandler(id)}
                        />
                break;
            case MenuType.DeviceTheme:
                menu = <DeviceTheme 
                            onDeviceThemeBackClicked={this.onDeviceThemeBackClickedHandler}
                            themeChanged={ (selectedTheme) => this.themeUpdatedHandler(selectedTheme)}
                            currentTheme={this.props.currentTheme}
                        />
                break;
            case MenuType.Language:
                menu = <LanguageList 
                            languages={this.props.fetchedLanguages}
                            languageListBackClicked={this.languageListBackClickedHandler}
                            currentLanguage={this.props.currentLanguage}
                            languageChanged={(lang) => this.languageChangedHandler(lang)}
                        />
                break;
                case MenuType.Location:
                    menu = <LocationList 
                                locations={this.props.fetchedRegions}
                                locationListBackClicked={this.languageListBackClickedHandler}
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