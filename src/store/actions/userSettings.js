import * as actionTypes from './actionTypes';
import api from '../Api';

export const fetchLanguagesAndRegions = () => {
    return dispatch => {
        dispatch(fetchLanguagesAndregionsStart());
        Promise.all([fetchLanguages(), fetchRegions()])
            .then((values) => {
                const languageList = values[0].data.items.map((item) => item.snippet);
                dispatch(fetchLanguagesAndRegionsSuccess(languageList, values[1].data));
            })
            .catch((error) => {
                dispatch(fetchLanguagesAndRegionsFailed(error));
            })
    }
}

// Languages
export const fetchLanguagesAndregionsStart = () => {
    return {
        type: actionTypes.FETCH_LANGUAGES_AND_REGIONS_START
    }
}

export const fetchLanguagesAndRegionsSuccess = (languages, regions) => {
    return {
        type: actionTypes.FETCH_LANGUAGES_AND_REGIONS_SUCCESS,
        languages: languages,
        regions: regions
    }
}

export const fetchLanguagesAndRegionsFailed = (error) => {
    return {
        type: actionTypes.FETCH_LANGUAGES_AND_REGIONS_FAILED,
        error: error
    }
}

export const changeLanguage = (language) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        language: language
    }
}

export const fetchLanguages = () => {
    return api.get('i18nLanguages', {
        params: {
            part: 'snippet',
            h1: 'en'
        }
    })
}

export const fetchRegions = () => {
    return api.get('i18nRegions')
}

// Theme update
export const updateTheme = (theme) => {
    return {
        type: actionTypes.UPDATE_THEME,
        theme: theme
    }
}