import * as ActionTypes from './ActionTypes'
import Api from '../../Api/YoutubeApi';

const getSubscriptionsStart = () => {
    return {
        type: ActionTypes.GET_SUBSCRIPTIONS_START
    }
}

const getSubscriptionsSuccess = (subscriptions) => {
    return {
        type: ActionTypes.GET_SUBSCRIPTIONS_SUCCESS,
        subscriptions: subscriptions
    }
}

const getSubscriptionsError = (error) => {
    return {
        type: ActionTypes.GET_SUBSCRIPTIONS_ERROR,
        error: error
    }
}

const getPlaylistsStart = () => {
    return {
        type: ActionTypes.GET_PLAYLIST_START
    }
}

const getPlaylistsSuccess = (playlist) => {
    return {
        type: ActionTypes.GET_PLAYLIST_SUCCESS,
        playlist: playlist
    }
}

const getPlaylistsError = (error) => {
    return {
        type: ActionTypes.GET_PLAYLIST_ERROR,
        error: error
    }
}

const getUserSubscriptions = () => {
    return (dispatch, getState) => {
        dispatch(getSubscriptionsStart());
        let api = new Api();
        api.getUserSubscriptions(getState().root.accessToken)
            .then((subscriptions) => {
                dispatch(getSubscriptionsSuccess(subscriptions.items));
            })
            .catch((error) => {
                dispatch(getSubscriptionsError(error.response ?? error));
            })
    }
}

const getPlaylists = () => {
    return (dispatch, getState) => {
        dispatch(getPlaylistsStart());
        let api = new Api();
        api.getPlaylists(getState().root.accessToken)
            .then((playlist) => {
                dispatch(getPlaylistsSuccess(playlist.items));
            })
            .catch((error) => {
                dispatch(getPlaylistsError(error.response ?? error));
            })
    }
}

export {
    getUserSubscriptions,
    getPlaylists
}