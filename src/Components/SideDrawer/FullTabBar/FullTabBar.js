import classes from './FullTabBar.module.css';
import React, { Component } from 'react';
import Divider from 'Shared/Components/UI/Divider/Divider';
import Section1 from './Sections/Section1/Section1';
import Playlist from './Sections/Playlist/Playlist';
import SubcpsSection from './Sections/SubscriptionsSection/SubcpsSection';
import MoreFromYoutube from './Sections/MoreFromYouTube/MoreFromYoutube';
import Settings from './Sections/Settings/Settings';
import Copyright from './Sections/Copyright/Copyright';
import DrawerToggle from '../../../Shared/Components/UI/DrawerToggle/DrawerToggle';
import youtubeIcon from '../assets/youtubeIcon.svg';
import SignIn from './SignIn';
import BestOfYoutube from './Sections/BestofYoutube/BestOfYoutube';
import browseChannelsIcon from '../assets/browseChannelsIcon.svg';
import TabItem from './Sections/TabItem/TabItem';

class FullTabBar extends Component {

    render() {
        return (
            this.props.isAuthenticated ? this.authMenu() : this.unauthMenu()
        );
    }

    unauthMenu() {
        let attachedClasses = [classes.tabBar];
        return (
            <div className={attachedClasses.join(" ")}>
                {this.props.showHeader ? <Header closeMenu={this.props.closeMenu} /> : null}
                <Divider />
                <Section1 />
                <SectionDivider />
                <SignIn />
                <SectionDivider />
                <BestOfYoutube />
                <SectionDivider />
                <BrowseChannels />
                <SectionDivider />
                <Copyright />
            </div>
        );
    }

    authMenu() {
        let attachedClasses = [classes.tabBar];
        return (
            <div className={attachedClasses.join(" ")}>
                {this.props.showHeader ? <Header closeMenu={this.props.closeMenu} /> : null}
                <Divider />
                <Section1 />
                <SectionDivider />
                <Playlist playlist={this.props.playlist} />
                <SectionDivider />
                <SubcpsSection subscriptions={this.props.subscriptions} />
                <SectionDivider />
                <MoreFromYoutube />
                <SectionDivider />
                <Settings />
                <SectionDivider />
                <Copyright />
            </div>
        );
    }
}

export default FullTabBar;

const BrowseChannels = () => {
    return (
        <TabItem
            title ={"Browse channels"}
            icon={browseChannelsIcon}
        />
    )
}

const SectionDivider = () => {
    return (
        <div className={classes.dividerContainer}>
            <Divider />
        </div>
    )
}

const Header = (props) => {
    return (
        <div className={classes.header}>
            <DrawerToggle onClick={props.closeMenu}  />
            <img 
                className={classes.youtubeIcon} 
                src={youtubeIcon}
                alt=""
            />
        </div>)
}