import classes from './VideoItem.module.css';
import React from 'react';
import VerifiedIcon from '../assets/verifiedIcon.svg';

const VideoItem = (props) => {
    return (
        <div className={classes.videoItemContainer}>
            <VideoThumbnail 
                thumbnail={props.video.snippet.thumbnails.high.url} 
                duration={props.video.contentDetails.duration} 
            />
            <VideoInfo 
                title={props.video.snippet.title} 
                channelTitle={props.video.snippet.channelTitle} 
            />
        </div>
    );
};

export default VideoItem;

const VideoThumbnail = (props) => {
    return (
        <div className={classes.videoThumbnail}>
            <img
                className={classes.thumbnailImage}
                src={props.thumbnail}
            />
            <div className={classes.duration}>{props.duration}</div>
        </div>
    )
}

const VideoInfo = (props) => {
    return (
        <div className={classes.videoInfo}>
            <div className={classes.videoInfo1}>
                <img
                    className={classes.channelLogo} 
                    src="https://yt3.ggpht.com/ytc/AAUvwnjqYYrJg1PMKMJPoGOV8WQetFO9K5tHkCfNJwwY3w=s68-c-k-c0x00ffffff-no-rj" alt="" 
                />
                <p className={classes.videoDescription}>{props.title}</p>
            </div>
            <div className={classes.videoInfo2}>
                <div className={classes.channelInfo}>
                    <span>{props.channelTitle}</span>
                    <img className={classes.verifiedIcon} src={VerifiedIcon} alt="" />
                </div>
                <div className={classes.channelStats}>
                    <span>35K views</span>
                    <div className={classes.dot}></div>
                    <span>1 hour ago</span>
                </div>
            </div>
        </div>
    );
}
