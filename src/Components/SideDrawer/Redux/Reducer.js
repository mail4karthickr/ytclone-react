import * as ActionTypes from './ActionTypes';
const { updateObject } = require("Shared/utility");

const initialState = {
    fetchSubscriptionsStart: false,
    fetchSubscriptionsSuccess: [],
    fetchSubscriptionsError: null,
    fetchPlaylistStart: false,
    fetchPlaylistSuccess: [],
    fetchPlaylistError: null,
}

const getSubscriptionsStart = (state, action) => {
    return updateObject(state, {
        fetchSubscriptionsStart: true
    });
}

const getSubscriptionsCompleted = (state, action) => {
    return updateObject(state, {
        fetchSubscriptionsStart: false,
        fetchSubscriptionsSuccess: action.subscriptions,
    });
}

const getSubscriptionsError = (state, action) => {
    return updateObject(state, {
        fetchSubscriptionsStart: false,
        fetchSubscriptionsError: action.error,
    });
}

const getPlaylistStart = (state, action) => {
    return updateObject(state, {
        fetchPlaylistStart: true
    });
}

const getPlaylistSuccess = (state, action) => {
    return updateObject(state, {
        fetchPlaylistStart: false,
        fetchPlaylistSuccess: action.playlist
    });
}

const getPlaylistError = (state, action) => {
    return updateObject(state, {
        fetchPlaylistStart: false,
        fetchPlaylistError: action.error
    });
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypes.GET_SUBSCRIPTIONS_START: return getSubscriptionsStart(state, action);
        case ActionTypes.GET_SUBSCRIPTIONS_SUCCESS: return getSubscriptionsCompleted(state, action);
        case ActionTypes.GET_SUBSCRIPTIONS_ERROR: return getSubscriptionsError(state, action);
        case ActionTypes.GET_PLAYLIST_START: return getPlaylistStart(state, action);
        case ActionTypes.GET_PLAYLIST_SUCCESS: return getPlaylistSuccess(state, action);
        case ActionTypes.GET_PLAYLIST_ERROR: return getPlaylistError(state, action);
        default: return state
    }
    return state
};

export default reducer;