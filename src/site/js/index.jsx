require('../../sass/all.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '~/App';

// pages
import ColorScheme from '~/pages/ColorScheme';
import Typography from '~/pages/Typography';

export function render(container) {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                 <IndexRoute component={ColorScheme} />
                 <Route path="typography" component={Typography} />
            </Route>
        </Router>
    , container);
}
