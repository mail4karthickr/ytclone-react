import React, {Component} from 'react';
import classes from './ToolBar.module.css';
import SearchBox from './SearchBox/SearchBox';
import TrailingItems from './TrailingItems/TrailingItems';
import LeadingItems from './LeadingItems/LeadingItems';
import YouTubeAppsMenu from './TrailingItems/YouTubeAppsMenu/YouTubeAppsMenu';
import SettingsMenu from './TrailingItems/SettingsMenu/SettingsMenu';

class Toolbar extends Component {
    state = {
        showMenu: false,
        showSettingsMenu: false
    }

    showYouTubeAppsHandler = () => {
      this.setState({
          ...this.state,
          showMenu: !this.state.showMenu
      });
    }

    showSettingsMenuHandler = () => {
        console.log("showSettingsMenuHandler")
        this.setState({
            ...this.state,
            showSettingsMenu: !this.state.showSettingsMenu
        });
    }

    closeSettingsMenuHandler = () => {
        this.setState({
            ...this.state,
            showSettingsMenu: false
        });
    }

    render() {
        let showSettingsMenu = this.state.showSettingsMenu ? <SettingsMenu closeSettingsMenu={this.closeSettingsMenuHandler}></SettingsMenu> : null;
        return (
            <header className={`${classes.toolbar}`}>
                <div className={classes.toolbarItems}>
                    <LeadingItems></LeadingItems>
                    <SearchBox></SearchBox>
                    <TrailingItems 
                        showYouTubeApps={this.showYouTubeAppsHandler}
                        showSettingsMenu={this.showSettingsMenuHandler}
                    />
                </div>
                <div className={classes.divider}></div>
                <YouTubeAppsMenu showMenu={this.state.showMenu} />
                {showSettingsMenu}
            </header>
        );
    }
}

export default Toolbar;