import React, { Component } from 'react';
import SignInButton from './SignInButton/SignInButton';
import classes from './TrailingItems.module.css';
import menuIcon from '../assets/menuIcon.svg';
import { Tooltip } from '@material-ui/core';
import YouTubeAppsMenu from './YouTubeAppsMenu/YouTubeAppsMenu';
import SettingsMenu from '../../SettingsMenu/SettingsMenu';
import NotificationIcon from '../assets/notificationIcon.svg';
import CreateVideoIcon from '../assets/createVideoIcon.svg';
import YoutubeAppsIcon from '../assets/youtubeAppsIcon.svg';
import EllipsisIcon from '../assets/ellipsisIcon.svg';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styles from '../../../Shared/Styles/styles.module.css';

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
        showMenu: false,
        showSettingsMenu: false
    }

    youtubeAppsMenuHandler = () => {
        this.setState({
            ...this.state,
            showMenu: !this.state.showMenu
        });
      }
  
      settingsMenuHandler = () => {
          this.setState({
              ...this.state,
              showSettingsMenu: !this.state.showSettingsMenu
          });
      }
      
    render() {
        return this.props.userInfo !== null ? this.authenticatedTrailingItems() : this.unAuthTrailingItems()
    }

    authenticatedTrailingItems() {
        return (
            <div className={classes.trailingItems}>
                <img src={CreateVideoIcon} className={classes.menuIcon}/>
                <img src={YoutubeAppsIcon} className={classes.menuIcon}/>
                <img src={NotificationIcon} className={classes.menuIcon}/>
                <Avatar src={this.props.userInfo.picture} />
            </div>
        );
    }

    unAuthTrailingItems() {
        return (
            <div className={classes.trailingItems}>
                <Tooltip title="YouTube apps">
                    <img src={menuIcon} className={classes.menuIcon} onClick={this.youtubeAppsMenuHandler}/>
                </Tooltip>
                <Tooltip title="Settings">
                    <SettingsMenuIcon src={EllipsisIcon} onClick={this.settingsMenuHandler}/>
                </Tooltip>
                {this.state.showMenu ? <YouTubeAppsMenu /> : null}
                {this.state.showSettingsMenu ? <SettingsMenu closeSettingsMenu={this.settingsMenuHandler} /> : null}
                <SignInButton></SignInButton>
            </div>
        );
    }
}

export default TrailingItems;