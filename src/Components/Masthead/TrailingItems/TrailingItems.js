import React, { Component } from 'react';
import classes from './TrailingItems.module.css';
import SignInButton from './SignInButton/SignInButton';
import menuIcon from '../assets/menuIcon.svg';
import { Tooltip } from '@material-ui/core';
import YouTubeAppsMenu from './YouTubeAppsMenu/YouTubeAppsMenu';
import SettingsMenu from '../../SettingsMenu/SettingsMenu';
import NotificationIcon from '../assets/notificationIcon.svg';
import CreateVideoIcon from '../assets/createVideoIcon.svg';
import YoutubeAppsIcon from '../assets/youtubeAppsIcon.svg';
import EllipsisIcon from '../assets/ellipsisIcon.svg';
import styled from 'styled-components';
import AuthSettingsMenu from '../../SettingsMenu/AuthSettingsMenu';

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

class TrailingItems extends Component {
    state = {
        showYoutubeAppsMenu: false,
        showSettingsMenu: false,
        showAuthSettingsMenu: false
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
      
    render() {
        return this.props.userInfo !== null ? this.authenticatedTrailingItems() : this.unAuthTrailingItems()
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
                {this.state.showAuthSettingsMenu ? <AuthSettingsMenu /> : null}
                <Avatar 
                    src={this.props.userInfo.picture}
                    onClick={this.props.avatarClicked}
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
                        onClick={this.youtubeAppsMenuHandler}
                    />
                </Tooltip>
                <Tooltip title="Settings">
                    <SettingsMenuIcon src={EllipsisIcon} onClick={this.settingsMenuHandler}/>
                </Tooltip>
                {this.state.showYoutubeAppsMenu ? <YouTubeAppsMenu /> : null}
                {this.state.showSettingsMenu ? <SettingsMenu closeSettingsMenu={this.settingsMenuHandler} /> : null}
                <SignInButton></SignInButton>
            </div>
        );
    }
}

export default TrailingItems;