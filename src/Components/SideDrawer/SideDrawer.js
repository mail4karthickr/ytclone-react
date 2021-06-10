import React, { Component } from 'react';
import FullTabBar from './FullTabBar/FullTabBar';
import TabItems from './TabBar/TabItems';
import { connect } from 'react-redux';
import * as actions from './Redux/Actions';

export const SideDrawerMenuType = Object.freeze({
    TabItems: 'TabItems',
    FullTabBar: 'FullTabBar',
    none: 'none'
});

class SideDrawer extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isAuthenticated !== this.props.isAuthenticated && this.props.isAuthenticated) {
            this.props.getUserSubscriptions();
            this.props.getPlaylist();
        }
    }

    render() {
        let contents = null
        switch (this.props.sideDrawerMenuType) {
            case SideDrawerMenuType.FullTabBar:
                contents = <FullTabBar tabBarDismissed={this.props.tabBarDismissed}
                                isAuthenticated = {this.props.isAuthenticated}
                                overlayTabBar={false}
                                showMenu={this.props.showMenu}
                                playlist={this.props.getPlaylistSuccess}
                                subscriptions={this.props.getSubscriptionsSuccess}
                            /> 
                break;
            case SideDrawerMenuType.TabItems:
                contents = <TabItems />
                break;
            default:
                break;
        }
        return <div style={{width: this.props.width}}>{contents}</div>;
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.root.accessToken !== null,
        getSubscriptionsStarted: state.sideDrawer.fetchSubscriptionsStart,
        getSubscriptionsError: state.sideDrawer.fetchSubscriptionsError,
        getSubscriptionsSuccess: state.sideDrawer.fetchSubscriptionsSuccess,
        getPlaylistStarted: state.sideDrawer.fetchPlaylistStart,
        getPlaylistSuccess: state.sideDrawer.fetchPlaylistSuccess,
        getPlaylistError: state.sideDrawer.fetchPlaylistError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserSubscriptions: () => dispatch(actions.getUserSubscriptions()),
        getPlaylist: () => dispatch(actions.getPlaylists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);