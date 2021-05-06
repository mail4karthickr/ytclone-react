import React, { Component } from 'react';
import SignInButton from './SignInButton/SignInButton';
import classes from './TrailingItems.module.css';
import menuIcon from '../../../assets/images/menuIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@material-ui/core';

class TrailingItems extends Component {
    state = {
        iconFocused: false
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={classes.trailingItems}>
                <Tooltip title="YouTube apps">
                    <button onClick={this.props.showYouTubeApps} className={classes.showYouTubeApps}>
                        <img src={menuIcon} className={classes.menuIcon}/>
                    </button>
                </Tooltip>
                <Tooltip title="Settings">
                    <button className={classes.button} onClick={this.props.showSettingsMenu}>
                        <FontAwesomeIcon
                            icon={faEllipsisV}
                            size="lg"
                        />
                     </button>
                </Tooltip>
                <SignInButton></SignInButton>
            </div>
        );
    }
}

export default TrailingItems;