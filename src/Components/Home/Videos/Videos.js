import React from 'react';
import VideoItem from './VideoItem/VideoItem';
import classes from './Videos.module.css';

function Videos(props) {
    const videos = props.videos.map((item) => {
        return <VideoItem key={item.id} video={item} />
    })
    return (
        <div className={classes.grid}>{videos}</div>
    )
}

export default Videos;