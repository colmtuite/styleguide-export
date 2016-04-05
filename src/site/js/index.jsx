require('../../sass/all.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from '~/App';

// Design pages
import ColorScheme from '~/pages/design/ColorScheme';
import Typography from '~/pages/design/Typography';

// Components pages
import Avatars from '~/pages/components/Avatars';
import Buttons from '~/pages/components/Buttons';
import Cards from '~/pages/components/Cards';
import FormElements from '~/pages/components/FormElements';
import Layout from '~/pages/components/Layout';
import Links from '~/pages/components/Links';
import Lists from '~/pages/components/Lists';
import Modals from '~/pages/components/Modals';
import Popovers from '~/pages/components/Popovers';
import Tables from '~/pages/components/Tables';

export function render(container) {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="design/colors" />
            </Route>

            <Route path="/design" component={App}>
                <IndexRedirect to="colors" />
                <Route path="colors" component={ColorScheme} />
                <Route path="typography" component={Typography} />
            </Route>

            <Route path="/components" component={App}>
                <IndexRedirect to="avatars" />
                <Route path="avatars" component={Avatars} />
                <Route path="buttons" component={Buttons} />
                <Route path="cards" component={Cards} />
                <Route path="form-elements" component={FormElements} />
                <Route path="layout" component={Layout} />
                <Route path="links" component={Links} />
                <Route path="lists" component={Lists} />
                <Route path="Modals" component={Modals} />
                <Route path="Popovers" component={Popovers} />
                <Route path="Tables" component={Tables} />
            </Route>
        </Router>,
    container);
}
