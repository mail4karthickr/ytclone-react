import { updateObject } from 'Shared/utility';
import * as ActionTypes from './ActionTypes';

const initialState = {
    accessToken: null,
    tokenExpiry: null,
    authError: null,
    fetchingUserInfo: false,
    fecthedUserInfo: null,
    fetchUserInfoError: null
}

const authenticated = (state, action) => {
    return updateObject(state, {
        accessToken: action.accessToken,
        tokenExpiry: action.expiresIn
    });
}

const authenticationError= (state, action) => {
    return updateObject(state, {
        authError: action.error
    })
}

const fetchingUserInfo = (state, action) => {
    return updateObject(state, {
        fetchingUserInfo: true
    })
}

const fetchedUserInfo = (state, action) => {
    return updateObject(state, {
        fetchingUserInfo: false,
        fecthedUserInfo: action.userInfo
    })
}

const fetchUserInfoError = (state, action) => {
    return updateObject(state, {
        fetchingUserInfo: false,
        fetchUserInfoError: action.error
    })
}

const logOut = (state, action) => {
    return updateObject(state, initialState);
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypes.AUTHENTICATION_SUCCESS: return authenticated(state, action);
        case ActionTypes.AUTHENTICATION_ERROR: return authenticationError(state, action);
        case ActionTypes.FETCHING_USER_INFO: return fetchingUserInfo(state, action);
        case ActionTypes.FETCHED_USER_INFO: return fetchedUserInfo(state, action);
        case ActionTypes.FETCH_USER_INFO_ERROR: return fetchUserInfoError(state, action);
        case ActionTypes.LOGOUT: return  logOut(state, action);
        default: return state
    }
    return state
};

export default reducer;