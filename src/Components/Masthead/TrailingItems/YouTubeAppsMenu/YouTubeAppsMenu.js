import React from 'react';
import styled from 'styled-components';
import { MenuRenderer, MenuSectionRenderer } from '../../../../Shared/Components/Utils';
import tvIcon from '../../assets/youTubeTv.svg';
import musicIcon from '../../assets/youTubeMusic.svg';
import kidsIcon from '../../assets/youTubeKids.svg';
import creatorAcademyIcon from '../../assets/youTubeCreatorAcademy.svg';
import artistsIcon from '../../assets/youTubeArtist.svg';
import ListItemLink from '../../../../Shared/Components/ListItemLink';

const YoutubeAppsMenuRenderer = styled(MenuRenderer)`
    top: 45px;
    right: 175px;
    width: 215px;
    padding: 0px;
`

const YoutubeMenuItemType = Object.freeze({
    YoutubeTv: 'YouTube TV',
    YoutubeMusic: 'YouTube Music',
    YoutubeKids: 'YouTube kids',
    CreatorAcademy: 'Creator Academy',
    YoutubeForArtists: 'YouTube for Artists'
});

const menuItems = Object.freeze([
    [
        {
            type: YoutubeMenuItemType.YoutubeTv,
            icon: tvIcon,
            url: 'https://tv.youtube.com/welcome/?utm_servlet=prod&utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273'
        }
    ],
    [
        {
            type: YoutubeMenuItemType.YoutubeMusic,
            icon: musicIcon,
            url: 'https://music.youtube.com/'
        },
        {
            type: YoutubeMenuItemType.YoutubeKids,
            icon: kidsIcon,
            url: 'https://www.youtubekids.com/?source=youtube_web'
        }
    ],
    [
        {
            type: YoutubeMenuItemType.CreatorAcademy,
            icon: creatorAcademyIcon,
            url: 'https://creatoracademy.youtube.com/page/home?utm_source=YouTube&utm_medium=YT%20Main&utm_campaign=YT%20Appsn'
        },
        {
            type: YoutubeMenuItemType.YoutubeForArtists,
            icon: artistsIcon,
            url: 'https://artists.youtube.com/'
        }
    ]
]);

const YouTubeAppsMenu = () => {
    const sections =  menuItems.map((menuItem) => {
        return <MenuSectionRenderer> {
                 menuItem.map((item) => {
                    return <ListItemLink
                         key={item.type}
                         title={item.type}
                         url={item.url}
                         leadingIconImage={item.icon}                     
                     />
                }
            )}
            </MenuSectionRenderer>
    })
    return <YoutubeAppsMenuRenderer>{sections}</YoutubeAppsMenuRenderer>
}

export default YouTubeAppsMenu;