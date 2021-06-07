import React from 'react';
import LibIcon from '../../../assets/libraryIcon.svg';
import HistoryIcon from '../../../assets/historyIcon.svg';
import YourVideosIcon from '../../../assets/yourVideosIcon.svg';
import WatchLaterIcon from '../../../assets/watchLaterIcon.svg';
import TabItem from '../TabItem/TabItem';

const Settings = () => {
    const MenuItemType = Object.freeze({
        Settings: 'Settings',
        ReportHistory: 'Report history',
        Help: 'Help',
        SendFeedback: 'Send feedback'
    })
    const menuItems = [
        {title: MenuItemType.Settings, icon: LibIcon},
        {title: MenuItemType.ReportHistory, icon: HistoryIcon},
        {title: MenuItemType.Help, icon: YourVideosIcon},
        {title: MenuItemType.SendFeedback, icon: WatchLaterIcon}
    ]
    const menuItemClickedHandler = (title) => {

    }
    const tabItems = menuItems.map((item) => {
        return <TabItem 
                key={item.title} 
                icon={item.icon} 
                title={item.title}
                onClick={() => menuItemClickedHandler(item.title)}
            />
    })
    return (
        <div>{tabItems}</div>
    );
};

export default Settings;
