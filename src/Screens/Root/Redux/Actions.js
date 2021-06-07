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

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userInfo');
    return {
        type: ActionTypes.LOGOUT
    };
};

const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = localStorage.getItem('accessToken');
            const userInfo = localStorage.getItem('userInfo');
            const userInfoJson = JSON.parse(userInfo);
            dispatch(authenticationCompleted(token, expirationDate));
            dispatch(fetchedUserInfo(userInfoJson));
        }
    }
}

const authenticationCompleted = (accessToken, tokenValidity) => {
    return dispatch => {
        let expirationDate = new Date();
        expirationDate.setSeconds(expirationDate.getSeconds() + tokenValidity);
        localStorage.setItem('expirationDate', expirationDate.toString());
        localStorage.setItem('accessToken', accessToken);
        dispatch({ 
            type: ActionTypes.AUTHENTICATION_SUCCESS,
            accessToken: accessToken,
            tokenExpiryDate: expirationDate
        });
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

const fetchUserInfo = () => {
    return (dispatch, getState) => {
        let api = new Api();
        dispatch(fetchingUserInfo());
        api.getUserInfo(getState().root.accessToken)
        .then((response) => {
            localStorage.setItem('userInfo', JSON.stringify(response));
            dispatch(fetchedUserInfo(response));
        })
        .catch((error) => {
            dispatch(fetchUserInfoError(error));
        });
    }
}

export {
    authenticationCompleted,
    authenticationError,
    fetchUserInfo,
    authCheckState
}