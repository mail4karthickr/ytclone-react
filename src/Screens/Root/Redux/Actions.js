import * as ActionTypes from './ActionTypes';
import Api from '../../../Api/YoutubeApi';

// GetUserInfo api call
const fetchingUserInfo = () => {
    return {
        type: ActionTypes.FETCHING_USER_INFO,
    }
}

const fetchedUserInfo = (userInfo) => {
    return {
        type: ActionTypes.FETCHED_USER_INFO,
        userInfo: userInfo
    }
}

const fetchUserInfoError = (error) => {
    return {
        type: ActionTypes.FETCH_USER_INFO_ERROR,
        error: error
    }
}

export const authSuccess = (accessToken, userInfo) => {
    return {
        type: ActionTypes.AUTHENTICATION_SUCCESS,
        accessToken: accessToken,
        userInfo: userInfo
    }
}

const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userInfo');
    return {
        type: ActionTypes.LOGOUT
    };
};

const authCheckState = () => {
    return dispatch => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            const userInfo = localStorage.getItem('userInfo');
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(accessToken, JSON.parse(userInfo)));
            }
        }
    }
}


const authenticationCompleted = (accessToken, tokenValidity) => {
    return dispatch => {
        const expirationDate = new Date(new Date().getTime() + tokenValidity * 1000);
        let api = new Api();
        api.getUserInfo(accessToken)
            .then((response) => {
                localStorage.setItem('expirationDate', expirationDate.toString());
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('userInfo', JSON.stringify(response));
                dispatch(authSuccess(accessToken, response));
            })
            .catch((error) => {
                dispatch(authenticationError(error));
            }
        );
    }
}

const authenticationError = (error) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.AUTHENTICATION_ERROR,
            error: error
        });
    }
}

export {
    authenticationCompleted,
    authenticationError,
    authCheckState,
    logout
}