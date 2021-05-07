import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { themeType } from '../../components/ToolBar/TrailingItems/SettingsMenu/DeviceTheme/DeviceTheme';

const initialState = {
    loading: false,
    error: null,
    languages: null,
    locations: null,
    currentLanguage: {hl: 'en', name: 'english'},
    currentLocation:  {gl: 'GB', name: 'United Kingdom'},
    theme: themeType.LightTheme
};

const fetchLanguagesStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const fetchLanguagesError = (state, action) => {
    return updateObject(state, {
        loading: false, 
        error: action.error
    });
}

const fetchLanguagesSuccess = (state, action) => {
    return updateObject(state, {
            loading: false, 
            error: null,
            languages: action.languages,
            locations: action.locations
    });
}

const changeLanguage = (state, action) => {
    console.log('changeLanguage1', action.language)
    return updateObject(state, {
        currentLanguage: action.language
    });
}

const updateLocation = (state, action) => {
    console.log('updateLocation', action.location)
    return updateObject(state, {
        currentLocation: action.location
    });
}

const updateTheme = (state, action) => {
    return updateObject(state, {
        theme: action.theme
    });
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.FETCH_LANGUAGES_AND_REGIONS_START: return fetchLanguagesStart(state, action);
        case actionTypes.FETCH_LANGUAGES_AND_REGIONS_SUCCESS: return fetchLanguagesSuccess(state, action);
        case actionTypes.FETCH_LANGUAGES_AND_REGIONS_FAILED: return fetchLanguagesError(state, action);
        case actionTypes.CHANGE_LANGUAGE: return changeLanguage(state, action);
        case actionTypes.UPDATE_THEME: return updateTheme(state, action);
        case actionTypes.UPDATE_LOCATION: return updateLocation(state, action);
        default: return state
    }
    return state
};

export default reducer;