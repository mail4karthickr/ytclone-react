import classes from './Copyright.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
    const primaryLinks = Object.freeze([
        {title: 'About', url: 'https://www.youtube.com/about/'},
        {title: 'Press', url: 'https://www.youtube.com/about/'},
        {title: 'Copyright', url: 'https://www.youtube.com/about/'},
        {title: 'ContactUs', url: 'https://www.youtube.com/about/'},
        {title: 'Creators', url: 'https://www.youtube.com/about/'},
        {title: 'Advertise', url: 'https://www.youtube.com/about/'},
        {title: 'Developers', url: 'https://www.youtube.com/youtube/'},
    ])
    const secondaryLinks = Object.freeze([
        {title: 'Terms', url: 'https://www.youtube.com/t/terms'},
        {title: 'Privacy', url: 'https://policies.google.com/privacy?hl=en'},
        {title: 'Policy & Safety', url: 'https://www.youtube.com/about/policies/'},
        {title: 'How YouTube works', url: 'https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&amp;utm_source=ythp&amp;utm_medium=LeftNav&amp;utm_content=txt&amp;u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen'},
        {title: 'Test new features', url: 'https://www.youtube.com/new'},
    ])
    const ff = primaryLinks.map((link) => {
        return  <Link 
                    className={classes.link} 
                    to={{ pathname: link.url }} 
                    target="_blank" >
                    {link.title}
                </Link>
    })
    const ff1 = secondaryLinks.map((link) => {
        return  <Link 
                    className={classes.link} 
                    to={{ pathname: link.url }} 
                    target="_blank" >
                    {link.title}
                </Link>
    })
    return (
        <div className={classes.flex}>
            <div className={classes.primaryLinks}>{ff}</div>
            <div className={classes.secondaryLinks}>{ff1}</div>
            <div className={classes.googleLLC}>© 2021 Google LLC</div>
        </div>
    );
};

export default Copyright;