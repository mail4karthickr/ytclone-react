import React, { Component } from 'react';
import DeviceTheme from './DeviceTheme/DeviceTheme';
import RootMenu from './RootMenu/RootMenu';
import * as actions from '../../../../store/actions';
import { connect } from 'react-redux';
import Spinner from './Spinner/SettingsMenuLoader';
import classes from './SettingsMenu.module.css';
import LanguageList from './List/LanguageList';
import { updateObject } from 'shared/utility';
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
        menu: MenuType.RootMenu
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchLanguages();
    }

    onDeviceThemeBackClickedHandler = () => {
        this.setState({
            ...this.state,
            menu: MenuType.RootMenu
        })
    }

    themeUpdatedHandler = (selectedTheme) => {
        console.log("ThemeUpdatedHandler", selectedTheme);
        this.props.updateTheme(selectedTheme);
        this.props.closeSettingsMenu();
    }

    languageListBackClickedHandler = () => {
        console.log("languageListBackClickedHandler");
        this.setState({menu: MenuType.RootMenu});
    }

    languageChangedHandler = (language) => {
        console.log('languageChangedHandler', language);
        this.props.changeLanguage(language);
        this.props.closeSettingsMenu();
    }

    locationChangedHandler = (location) => {
        console.log('locationChangedHandler', location);
        this.props.updateLocation(location);
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
        if (this.props.loading) {
            return <div className={classes.menu}>
                <Spinner />
            </div>
        }

        let menu = null;
        switch (this.state.menu) {
            case MenuType.RootMenu:
                menu = <RootMenu
                            currentLanguage={this.props.currentLanguage}
                            currentLocation={this.props.currentLocation}
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
                            languages={this.props.languages}
                            languageListBackClicked={this.languageListBackClickedHandler}
                            currentLanguage={this.props.currentLanguage}
                            languageChanged={(lang) => this.languageChangedHandler(lang)}
                        />
                break;
                case MenuType.Location:
                    menu = <LocationList 
                                locations={this.props.locations}
                                locationListBackClicked={this.languageListBackClickedHandler}
                                currentLocation={this.props.currentLocation}
                                locationChanged={(location) => this.locationChangedHandler(location)}
                            />
                    break;
            default:
                menu = null;
                break;
        }
        return <ul className={classes.menu}>{menu}</ul>;
    }
}

const mapStateToProps = state => {
    return {
        loading: state.userSettings.loading,
        error: state.userSettings.error,
        languages: state.userSettings.languages,
        locations: state.userSettings.locations,
        currentLanguage: state.userSettings.currentLanguage,
        currentTheme: state.userSettings.theme,
        currentLocation: state.userSettings.currentLocation
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLanguages: () => dispatch(actions.fetchLanguagesAndRegions()),
        changeLanguage: (language) => dispatch(actions.changeLanguage(language)),
        updateTheme: (theme) => dispatch(actions.updateTheme(theme)),
        updateLocation: (location) => dispatch(actions.updateLocation(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);