import React from 'react';
import HomeIcon from '../../../assets/homeIcon.svg';
import ExploreIcon from '../../../assets/exploreIcon.svg';
import SubscriptionsIcon from '../../../assets/subscriptionsIcon.svg';
import TabItem from '../TabItem/TabItem';

const Section1 = () => {
    const MenuItemType = Object.freeze({
        Home: 'Home',
        Explore: 'Explore',
        Subscriptions: 'Subscriptions',
    })
    const menuItems = [
        {title: MenuItemType.Home, icon: HomeIcon},
        {title: MenuItemType.Explore, icon: ExploreIcon},
        {title: MenuItemType.Subscriptions, icon: SubscriptionsIcon}
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

export default Section1;