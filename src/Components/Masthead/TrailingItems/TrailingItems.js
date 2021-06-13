import React, { Component } from 'react';
import classes from './TrailingItems.module.css';
import SignInButton from './SignInButton/SignInButton';
import menuIcon from '../assets/menuIcon.svg';
import { Tooltip } from '@material-ui/core';
import YouTubeAppsMenu from './YouTubeAppsMenu/YouTubeAppsMenu';
import Menu from '../../SettingsMenu/Menu';
import NotificationIcon from '../assets/notificationIcon.svg';
import CreateVideoIcon from '../assets/createVideoIcon.svg';
import YoutubeAppsIcon from '../assets/youtubeAppsIcon.svg';
import EllipsisIcon from '../assets/ellipsisIcon.svg';
import styled from 'styled-components';
import AuthSettingsMenu from '../../SettingsMenu/UserSettings';

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`

const SettingsMenuIcon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    filter: invert(31%) sepia(6%) saturate(0%) hue-rotate(256deg) brightness(96%)
    contrast(83%);
`

const MenuType = Object.freeze({
    Auth: 'Auth',
    UnAuth: 'UnAuth',
    YoutubeAppsMenu: 'YoutubeAppsMenu',
    None: 'None'
});

const TrailingItemsType = Object.freeze({
    Auth: 'Auth',
    UnAuth: 'UnAuth',
})

class TrailingItems extends Component {
    state = {
        trailingItemsType: this.props.isAuthenticated ? TrailingItemsType.Auth : TrailingItemsType.UnAuth,
        menuType: null,
    }

    youtubeAppsMenuHandler = () => {
        this.setState({
            ...this.state,
            showYoutubeAppsMenu: !this.state.showYoutubeAppsMenu
        });
      }
  
      settingsMenuHandler = () => {
        this.setState({
            ...this.state,
            showSettingsMenu: !this.state.showSettingsMenu
        });
    }

    showAuthSettingsMenuHandler = () => {
        this.setState({
            ...this.state,
            showAuthSettingsMenu: !this.state.showAuthSettingsMenu
        });
    }

    changeMenuTypeHandler = (menuType) => {
        this.setState({
            ...this.state,
            menuType: this.state.menuType === menuType ? MenuType.None : menuType
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            trailingItemsType: nextProps.isAuthenticated ? TrailingItemsType.Auth : TrailingItemsType.UnAuth,
        }
    }
      
    render() {
        switch (this.state.trailingItemsType){
            case TrailingItemsType.Auth:
                return this.authenticatedTrailingItems();
            case TrailingItemsType.UnAuth:
                return this.unAuthTrailingItems();
            default:
                return null;
        }
    }

    authenticatedTrailingItems() {
        return (
            <div className={classes.trailingItems}>
                <img
                    className={classes.menuIcon}
                    src={CreateVideoIcon}  
                    alt=""
                />
                <img 
                    className={classes.menuIcon} 
                    src={YoutubeAppsIcon}  
                    alt=""
                />
                <img 
                    className={classes.menuIcon} 
                    src={NotificationIcon}  
                    alt=""
                />
                {this.state.menuType === MenuType.Auth ? <Menu logout={this.props.logout} closeSettingsMenu={() => this.changeMenuTypeHandler(MenuType.None)} /> : null}
                <Avatar 
                    src={this.props.userInfo.picture}
                    onClick={() => this.changeMenuTypeHandler(MenuType.Auth)}
                />
            </div>
        );
    }

    unAuthTrailingItems() {
        return (
            <div className={classes.trailingItems}>
                <Tooltip title="YouTube apps">
                    <img
                        className={classes.menuIcon}
                        src={menuIcon}
                        alt=""
                        onClick={() => this.changeMenuTypeHandler(MenuType.YoutubeAppsMenu)}
                    />
                </Tooltip>
                <Tooltip title="Settings">
                    <SettingsMenuIcon src={EllipsisIcon} onClick={() => this.changeMenuTypeHandler(MenuType.UnAuth)}/>
                </Tooltip>
                {this.state.menuType === MenuType.YoutubeAppsMenu ? <YouTubeAppsMenu /> : null}
                {this.state.menuType === MenuType.UnAuth ? <Menu closeSettingsMenu={() => this.changeMenuTypeHandler(MenuType.None)} /> : null}
                <SignInButton></SignInButton>
            </div>
        );
    }
}

export default TrailingItems;