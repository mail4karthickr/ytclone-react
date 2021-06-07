import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Root from './Root/Root';
import { store } from './store'
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './Shared/Theme';

const app = (
  <ThemeProvider theme={LightTheme}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Root} />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
  </Provider>
  </ThemeProvider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
