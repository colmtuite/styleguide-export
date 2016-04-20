require('../../sass/all.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

// App pages
// -------------------------

import App from '~/App';
import NoMatch from '~/pages/404';

// Overview pages
// -------------------------

import Introduction from '~/pages/overview/introduction/Introduction';
import CodeGuidelines from '~/pages/overview/code-guidelines/CodeGuidelines';
import NamingConvention from '~/pages/overview/naming-convention/NamingConvention';

// Design pages
// -------------------------

import ColorScheme from '~/pages/design/colors/ColorScheme';
import Typography from '~/pages/design/typography/Typography';
import ThemeClasses from '~/pages/utility/theme-classes/ThemeClasses';

// Components pages
// -------------------------

import Avatars from '~/pages/components/avatars/Avatars.react';
import Buttons from '~/pages/components/buttons/Buttons';
import Cards from '~/pages/components/cards/Cards';
import FormElements from '~/pages/components/forms/FormElements';
import Grid from '~/pages/components/grid/Grid';
import Links from '~/pages/components/links/Links';
import Lists from '~/pages/components/lists/Lists';
import Modals from '~/pages/components/modals/Modals';
import Popovers from '~/pages/components/popovers/Popovers';

// Utility pages
// -------------------------

import Layout from '~/pages/utility/layout/Layout';
import HideElements from '~/pages/utility/hide-elements/HideElements';
import CenterElements from '~/pages/utility/center-elements/CenterElements';
import TextManipulation from '~/pages/utility/text-manipulation/TextManipulation';
import Scrollbar from '~/pages/utility/scrollbar/Scrollbar';

export function render(container) {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="design/colors" />
            </Route>

            <Route path="/overview" component={App}>
                <IndexRedirect to="introduction" />
                <Route path="introduction" component={Introduction} />
                <Route path="code-guidelines" component={CodeGuidelines} />
                <Route path="naming-convention" component={NamingConvention} />
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
                <Route path="grid" component={Grid} />
                <Route path="links" component={Links} />
                <Route path="lists" component={Lists} />
                <Route path="Modals" component={Modals} />
                <Route path="Popovers" component={Popovers} />
            </Route>

            <Route path="/utility" component={App}>
                <IndexRedirect to="layout" />
                <Route path="theme-classes" component={ThemeClasses} />
                <Route path="layout" component={Layout} />
                <Route path="hide-elements" component={HideElements} />
                <Route path="center-elements" component={CenterElements} />
                <Route path="text-manipulation" component={TextManipulation} />
                <Route path="scrollbar" component={Scrollbar} />
            </Route>

            <Route path="*" component={NoMatch} />
        </Router>,
    container);
}
