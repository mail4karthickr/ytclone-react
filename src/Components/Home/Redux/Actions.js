import * as ActionTypes from './ActionTypes';
import Api from '../../../Api/YoutubeApi';

const getMostPopularVideosStart = () => {
    return {
        type: ActionTypes.FETCH_MOST_POPULAR_VIDEOS_START,
    }
}

const getMostPopularVideosSuccess = (videos) => {
    return {
        type: ActionTypes.FETCH_MOST_POPULAR_VIDEOS_SUCCESS,
        videos: videos
    }
}

const getMostPopularVideosError = (error) => {
    return {
        type: ActionTypes.FETCH_MOST_POPULAR_VIDEOS_ERROR,
        error: error
    }
}

const getVideoCategoriesStart = () => {
    return {
        type: ActionTypes.FETCH_VIDEO_CATEGORIES_START
    }
}

const getVideoCategoriesSuccess = (videoCategories) => {
    return {
        type: ActionTypes.FETCH_VIDEO_CATEGORIES_SUCCESS,
        categories: videoCategories
    }
}

const getVideoCategoriesError = (error) => {
    return {
        type: ActionTypes.FETCH_VIDEO_CATEGORIES_ERROR,
        error: error
    }
}

const fetchMostPopularVideos = (regionCode="IN", categoryId=0) => {
    return (dispatch, getState) => {
        let api = new Api();
        dispatch(getMostPopularVideosStart());
        return api.getMostPopularVideos(regionCode, categoryId)
            .then((response) => {
                dispatch(getMostPopularVideosSuccess(response.items));
            })
            .catch((error) => {
                dispatch(getMostPopularVideosError());
            }
        )
    }
}

const fetchVideoCategories = () => {
    return (dispatch, getState) => {
        dispatch(getVideoCategoriesStart());
        let api = new Api();
        return api.getVideoCategories(getState().root.accessToken)
            .then((categories) => {
                dispatch(getVideoCategoriesSuccess(categories.items));
            })
            .catch((error) => {
                dispatch(getVideoCategoriesError(error.response ?? error));
            }
        )
    }
}

export {
    fetchMostPopularVideos,
    fetchVideoCategories
}