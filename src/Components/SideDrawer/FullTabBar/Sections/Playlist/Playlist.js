import React, { Component }  from 'react';
import LibIcon from '../../../assets/libraryIcon.svg';
import HistoryIcon from '../../../assets/historyIcon.svg';
import YourVideosIcon from '../../../assets/yourVideosIcon.svg';
import WatchLaterIcon from '../../../assets/watchLaterIcon.svg';
import LikedVideosIcon from '../../../assets/likeIcon.svg';
import ShowMoreIcon from '../../../assets/showMoreIcon.svg';
import ShowFewerItemsIcon from '../../../assets/showFewerIcon.svg';
import TabItem from '../TabItem/TabItem';
import { updateObject } from 'Shared/Utility';

class Playlist extends Component {
    state = {
        showPlaylist: false
    }
    
     menuItemType = Object.freeze({
        Library: 'Library',
        History: 'History',
        YourVideos: 'Your videos',
        WatchLater: 'Watch later',
        LikedVideos: 'Liked videos',
        ShowMore: 'Show more'
    })

     menuItems = [
        {title: this.menuItemType.Library, icon: LibIcon},
        {title: this.menuItemType.History, icon: HistoryIcon},
        {title: this.menuItemType.YourVideos, icon: YourVideosIcon},
        {title: this.menuItemType.WatchLater, icon: WatchLaterIcon},
        {title: this.menuItemType.LikedVideos, icon: LikedVideosIcon},
    ]

    menuItemClickedHandler = (title) => {
        switch (title) {
            case this.menuItemType.ShowMore:
                updateObject(
                    this.state,
                    {showPlaylist: !this.state.showPlaylist}
                );
                break;
            default:
                console.log("menuItemClickedHandler", title);
                break;
        }
    }

    showMore = () => {
        this.setState({
            ...this.state,
            showPlaylist: !this.state.showPlaylist
        });
    }

    render() {
        const tabItems = this.menuItems.map((item) => {
            return <TabItem 
                    key={item.title} 
                    icon={item.icon} 
                    title={item.title}
                    onClick={() => this.menuItemClickedHandler(item.title)}
                />
        })
        let playList = null;
        let showMore = <TabItem 
                            icon={ShowMoreIcon} 
                            title={"Show more"}
                            onClick={() => this.showMore()}
                        />
        if (this.state.showPlaylist) {
            playList = this.props.playlist.map((item) => {
                console.log("Playlist item", item);
                return <TabItem 
                        key={item.snippet.title} 
                        url={item.snippet.thumbnails.high.url}
                        title={item.snippet.title}
                        onClick={() => this.menuItemClickedHandler(item.snippet.title)}
                    />
            });
            showMore = <TabItem 
                            icon={ShowFewerItemsIcon} 
                            title={"Show fewer"}
                            onClick={() => this.showMore()}
                        />
        }
        return <div>
                {tabItems}
                {playList}
                {showMore}
                </div>;
    }
}

export default Playlist;