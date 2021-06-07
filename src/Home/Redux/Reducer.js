import { updateObject } from 'Shared/utility';
import * as ActionTypes from './ActionTypes';

const initialState = {
    fetchVideoCategoriesStart: false,
    fetchedVideoCategoriesSuccess: [],
    fetchVideCategoriesError: null,
    fetchMostPopularVideosStart: false,
    fetchMostPopularVideosSuccess: [],
    fetchMostPopularVideosError: null
}

const fetchVideoCategoriesStart = (state, action) => {
    return updateObject(state, {
        fetchVideoCategoriesStart: true
    });
}

const fetchedVideoCategoriesSuccess = (state, action) => {
    const categories = action.categories
        .filter((category) => category.snippet.assignable)
    return updateObject(state, {
        fetchVideoCategoriesStart: false,
        fetchedVideoCategoriesSuccess: categories
    });
}

const fetchVideCategoriesError = (state, action) => {
    return updateObject(state, {
        fetchVideoCategoriesStart: false,
        fetchVideCategoriesError: action.error
    });
}

const fetchMostPopularVideosStart = (state, action) => {
    return updateObject(state, {
        fetchMostPopularVideosStart: true
    });
}

const fetchMostPopularVideosSuccess = (state, action) => {
    return updateObject(state, {
        fetchMostPopularVideosStart: false,
        fetchMostPopularVideosSuccess: action.videos
    });
}

const fetchMostPopularVideosError = (state, action) => {
    return updateObject(state, {
        fetchMostPopularVideosStart: false,
        fetchMostPopularVideosError: action.error
    });
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypes.FETCH_VIDEO_CATEGORIES_START: return fetchVideoCategoriesStart(state, action);
        case ActionTypes.FETCH_VIDEO_CATEGORIES_SUCCESS: return fetchedVideoCategoriesSuccess(state, action);
        case ActionTypes.FETCH_VIDEO_CATEGORIES_ERROR: return fetchVideCategoriesError(state, action);
        case ActionTypes.FETCH_MOST_POPULAR_VIDEOS_START: return fetchMostPopularVideosStart(state, action);
        case ActionTypes.FETCH_MOST_POPULAR_VIDEOS_SUCCESS: return fetchMostPopularVideosSuccess(state, action);
        case ActionTypes.FETCH_MOST_POPULAR_VIDEOS_ERROR: return fetchMostPopularVideosError(state, action);
        default: return state
    }
    return state
};

export default reducer;