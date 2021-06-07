import { updateObject } from '../../../Shared/utility'
import { themeType } from '../DeviceTheme/DeviceTheme';
import * as ActionTypes from './ActionTypes';

const initialState = {
    fetchLanguagesAndRegionsStart: false,
    fetchLanguagesAndRegionsFailed: null,
    fetchedLanguages: [],
    fetchedRegions: [],
    currentLanguage: {hl: 'en', name: 'english'},
    currentRegion: {gl: 'GB', name: 'United Kingdom'},
    currentTheme: themeType.LightTheme,
}

const fetchLanguagesAndRegionsStart = (state, action) => {
    return updateObject(state, {
        fetchLanguagesAndRegionsStart: true
    });
}


const fetchLanguagesAndRegionsSuccess = (state, action) => {
    return updateObject(state, {
        fetchLanguagesAndRegionsStart: false, 
        fetchLanguagesAndRegionsFailed: null,
        fetchedLanguages: action.languages,
        fetchedRegions: action.regions
    });
}

const fetchLanguagesAndRegionsError = (state, action) => {
    return updateObject(state, {
        fetchLanguagesAndRegionsStart: false, 
        fetchLanguagesAndRegionsFailed: action.error
    });
}

const updateLanguage = (state, action) => {
    return updateObject(state, {
        currentLanguage: action.language
    });
}

const updateRegion = (state, action) => {
    return updateObject(state, {
        currentRegion: action.region
    });
}

const updateTheme = (state, action) => {
    return updateObject(state, {
        currentTheme: action.theme
    });
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypes.FETCH_LANGUAGES_AND_REGIONS_START: return fetchLanguagesAndRegionsStart(state, action);
        case ActionTypes.FETCH_LANGUAGES_AND_REGIONS_SUCCESS: return fetchLanguagesAndRegionsSuccess(state, action);
        case ActionTypes.FETCH_LANGUAGES_AND_REGIONS_FAILED: return fetchLanguagesAndRegionsError(state, action);
        case ActionTypes.UPDATE_LANGUAGE: return updateLanguage(state, action);
        case ActionTypes.UPDATE_THEME: return updateTheme(state, action);
        case ActionTypes.UPDATE_REGION: return updateRegion(state, action);
        default: return state
    }
    return state
};

export default reducer;