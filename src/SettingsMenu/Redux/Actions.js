import * as ActionTypes from './ActionTypes';
import Api from '../../Api/YoutubeApi';

const fetchLanguagesAndRegionsStart = () => {
    return {
        type: ActionTypes.FETCH_LANGUAGES_AND_REGIONS_START
    }
}

const fetchLanguagesAndRegionsSuccess = (languages, regions) => {
    return {
        type: ActionTypes.FETCH_LANGUAGES_AND_REGIONS_SUCCESS,
        languages: languages,
        regions: regions
    }
}

const fetchLanguagesAndRegionsFailed = (error) => {
    return {
        type: ActionTypes.FETCH_LANGUAGES_AND_REGIONS_FAILED,
        error: error
    }
}

const updateCurrentLanguage = (language) => {
    return {
        type: ActionTypes.UPDATE_LANGUAGE,
        language: language
    }
}

const updateCurrentTheme = (theme) => {
    return {
        type: ActionTypes.UPDATE_THEME,
        theme: theme
    }
}

const updateCurrentRegion = (region) => {
    return {
        type: ActionTypes.UPDATE_REGION,
        region: region
    }
}

const fetchLanguagesAndRegions = () => {
    return dispatch => {
        let api = new Api();
        dispatch(fetchLanguagesAndRegionsStart());
        Promise.all([api.getLanguages(), api.getRegions()])
            .then((values) => {
                const languageList = values[0].items.map((item) => item.snippet);
                const locations = values[1].items.map((item) => item.snippet);
                dispatch(fetchLanguagesAndRegionsSuccess(languageList, locations));
            })
            .catch((error) => {
                dispatch(fetchLanguagesAndRegionsFailed(error));
            }
        )
    }
}

export {
    fetchLanguagesAndRegions,
    updateCurrentRegion,
    updateCurrentTheme,
    updateCurrentLanguage
}