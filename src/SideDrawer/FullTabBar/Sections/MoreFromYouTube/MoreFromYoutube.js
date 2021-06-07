import React from 'react';
import classes from './MoreFromYoutube.module.css';
import YouTubePremiumIcon from '../../../assets/youtubePremiumIcon.svg';
import FashionAndBeautyIcon from '../../../assets/fashionAndBeautyIcon.svg';
import GamingIcon from '../../../assets/gamingIcon.svg';
import LearningIcon from '../../../assets/learningIcon.svg';
import LiveIcon from '../../../assets/liveIcon.svg';
import MoviesIcon from '../../../assets/moviesIcon.svg';
import SportsIcon from '../../../assets/sportsIcon.svg';
import TabItem from '../TabItem/TabItem';

const MoreFromYoutube = () => {
    const MenuItemType = Object.freeze({
        YoutubePremium: 'YouTube Premium',
        Movies: 'Movies',
        Gaming: 'Gaming',
        Live: 'Live',
        FashionAndBeauty: 'Fashion & Beauty',
        Learning: 'Learning',
        Sports: 'Sports'
    });
    const menuItems = [
        {title: MenuItemType.YoutubePremium, icon: YouTubePremiumIcon},
        {title: MenuItemType.Movies, icon: MoviesIcon},
        {title: MenuItemType.Gaming, icon: GamingIcon},
        {title: MenuItemType.Live, icon: LiveIcon},
        {title: MenuItemType.FashionAndBeauty, icon: FashionAndBeautyIcon},
        {title: MenuItemType.Learning, icon: LearningIcon},
        {title: MenuItemType.Sports, icon: SportsIcon},
    ]
    const menuItemClickedHandler = (title) => {
        console.log("MoreFromYoutube menuitem clicked", title);
    }
    const listItems = menuItems.map((menuItem) => {
        return <TabItem 
                key={menuItem.title}
                icon={menuItem.icon} 
                title={menuItem.title}
                onClick={() => menuItemClickedHandler(menuItem.title)}
            />
    })
    return (
        <div>{listItems}</div>
    );
};

export default MoreFromYoutube;