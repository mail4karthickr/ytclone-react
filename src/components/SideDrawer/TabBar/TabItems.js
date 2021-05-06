import React, { Component } from 'react';
import TabItem from './TabItem';
import { TabItemType } from './TabItem';
import classes from './TabItems.module.css';


class TabItems extends Component {
    state = {
        selectedTabIndex: 0
    }

    tabItemClickedHandler = (tag) => {
        this.setState({selectedTabIndex: tag});
    }

    render() {
        return (
            <div className={classes.tabItems}>
                <TabItem 
                    iconType={TabItemType.Home}
                    title={"Home"}
                    tag={TabItemType.Home}
                    selectedTabIndex = {this.state.selectedTabIndex}
                    onTabItemClicked = {(tag) => this.tabItemClickedHandler(tag)}
                />
                <TabItem 
                    iconType={TabItemType.Explore}
                    title={"Explore"}
                    tag={TabItemType.Explore}
                    selectedTabIndex = {this.state.selectedTabIndex}
                    onTabItemClicked = {(tag) => this.tabItemClickedHandler(tag)}
                />
                <TabItem 
                    iconType={TabItemType.Subscriptions}
                    title={"Subscriptions"}
                    tag={TabItemType.Subscriptions}
                    selectedTabIndex = {this.state.selectedTabIndex}
                    onTabItemClicked = {(tag) => this.tabItemClickedHandler(tag)}
                />
                <TabItem 
                    iconType={TabItemType.Library}
                    title={"Library"}
                    tag={TabItemType.Library}
                    selectedTabIndex = {this.state.selectedTabIndex}
                    onTabItemClicked = {(tag) => this.tabItemClickedHandler(tag)}
                />
                <TabItem 
                    iconType={TabItemType.History}
                    title={"History"}
                    tag={TabItemType.History}
                    selectedTabIndex = {this.state.selectedTabIndex}
                    onTabItemClicked = {(tag) => this.tabItemClickedHandler(tag)}
                />
            </div>
        );
    }
}

export default TabItems;