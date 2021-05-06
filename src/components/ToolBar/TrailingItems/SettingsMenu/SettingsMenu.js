import React, { Component } from 'react';
import DeviceTheme from './DeviceTheme/DeviceTheme';
import RootMenu from './RootMenu/RootMenu';
import * as actions from '../../../../store/actions';
import { connect } from 'react-redux';
import Spinner from './Spinner/SettingsMenuLoader';
import classes from './SettingsMenu.module.css';
import LanguageList from './LanguageList/LanguageList';
import { updateObject } from 'shared/utility';
import { themeType } from './DeviceTheme/DeviceTheme'

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

    showDeviceThemeHandler = () => {
        this.setState({
            ...this.state,
            menu: MenuType.DeviceTheme
        })
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

    showLanguageSettingsHandler = () => {
        this.setState({menu: MenuType.Language});
    }

    languageListBackClickedHandler = () => {
        console.log("languageListBackClickedHandler");
        this.setState({menu: MenuType.RootMenu});
    }

    showLocationSettingsHandler = () => {
        console.log('showLocationSettingsHandler')
    }

    showRestrictedModeHandler = () => {
        console.log('showRestrictedModeHandler')
    }

    languageChangedHandler = (language) => {
        console.log('languageChangedHandler', language);
        this.props.changeLanguage(language);
        this.props.closeSettingsMenu();
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
                    showDeviceTheme={this.showDeviceThemeHandler}
                    showLanguageSettings={this.showLanguageSettingsHandler}
                    showLocationSettings={this.showLocationSettingsHandler}
                    showRestrictedMode={this.showRestrictedModeHandler}
                    currentLanguage={this.props.currentLanguage}
                    currentTheme={this.props.currentTheme}
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
            default:
                menu = null;
                break;
        }
        return <div className={classes.menu}>{menu}</div>;
    }
}

const mapStateToProps = state => {
    return {
        loading: state.userSettings.loading,
        error: state.userSettings.error,
        languages: state.userSettings.languages,
        regions: state.userSettings.regions,
        currentLanguage: state.userSettings.currentLanguage,
        currentTheme: state.userSettings.theme
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLanguages: () => dispatch(actions.fetchLanguagesAndRegions()),
        changeLanguage: (language) => dispatch(actions.changeLanguage(language)),
        updateTheme: (theme) => dispatch(actions.updateTheme(theme))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);