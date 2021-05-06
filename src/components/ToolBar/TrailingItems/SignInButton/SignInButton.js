import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SignInButton.module.css';

const SignInButton = () => {
    return (
        <Link to="/auth" target="_blank" className={`${classes.signInButton}`}>
            <FontAwesomeIcon 
                icon={faUserCircle}
                className={classes.signInIcon}
            />
            SIGN IN
        </Link>
    );
};

export default SignInButton;