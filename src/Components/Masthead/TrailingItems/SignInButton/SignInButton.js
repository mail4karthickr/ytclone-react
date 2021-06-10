import React from 'react';
import classes from './SignInButton.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignInButton = () => {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    let url = new URL(oauth2Endpoint);
    url.searchParams.set('client_id', '181168842361-s30doarclgc2he9nk455r5njq10t4di0.apps.googleusercontent.com');
    url.searchParams.set('redirect_uri', 'http://localhost:3000/');
    url.searchParams.set('response_type', 'token');
    url.searchParams.set('scope', 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile');
    url.searchParams.set('include_granted_scopes', 'true');
    url.searchParams.set('state', 'pass-through value');
    return (
        <a href={url.toString()} className={classes.signInButton}>
            <FontAwesomeIcon 
                icon={faUserCircle}
                className={classes.signInIcon}
            />
            SIGN IN
        </a>
    );
};

export default SignInButton;