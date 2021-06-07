import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import root from './Root/Redux/Reducer';
import settingsMenu from './SettingsMenu/Redux/Reducer';
import sideDrawer from './SideDrawer/Redux/Reducer';
import home from './Home/Redux/Reducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  root: root,
  settingsMenu: settingsMenu,
  sideDrawer: sideDrawer,
  home: home
});

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));