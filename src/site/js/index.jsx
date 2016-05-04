require('../../sass/all.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect } from 'react-router';
import { createHistory, useBasename } from 'history';

// App pages
// -------------------------
import App from '~/App.react';
import Page from '~/pages/Page.react';
import NoMatch from '~/pages/404.react';

// Overview pages
// -------------------------

import Introduction from '~/pages/overview/introduction/Introduction.react';
import CodeGuidelines from '~/pages/overview/code-guidelines/CodeGuidelines.react';

// Design pages
// -------------------------

import ColorScheme from '~/pages/design/colors/ColorScheme.react';
import Typography from '~/pages/design/typography/Typography.react';
import BorderRadius from '~/pages/design/border-radius/BorderRadius.react';
import BoxShadow from '~/pages/design/box-shadow/BoxShadow.react';
import DesignLayout from '~/pages/design/layout/DesignLayout.react';
import Animation from '~/pages/design/animation/Animation.react';

// Components pages
// -------------------------

import Avatars from '~/pages/components/avatars/Avatars.react';
import Buttons from '~/pages/components/buttons/Buttons.react';
import Cards from '~/pages/components/cards/Cards.react';
import FormElements from '~/pages/components/forms/FormElements.react';
import Grid from '~/pages/components/grid/Grid.react';
import Links from '~/pages/components/links/Links.react';
import Lists from '~/pages/components/lists/Lists.react';
import Modals from '~/pages/components/modals/Modals.react';
import Popovers from '~/pages/components/popovers/Popovers.react';

// Utility pages
// -------------------------

import CenterElements from '~/pages/utility/center-elements/CenterElements.react';
import HideElements from '~/pages/utility/hide-elements/HideElements.react';
import Layout from '~/pages/utility/layout/Layout.react';
import Scrollbar from '~/pages/utility/scrollbar/Scrollbar.react';
import TextManipulation from '~/pages/utility/text-manipulation/TextManipulation.react';

const rootPath = __webpack_require__.p || '/';
const browserHistory = useBasename(createHistory)({
    basename: rootPath,
});
export function render(container) {
    ReactDOM.render(
        <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
            <Route path="/?" component={App}>
                <IndexRedirect to="overview/introduction" />
                <Route path="overview" component={Page}>
                    <IndexRedirect to="introduction" />
                    <Route path="introduction" component={Introduction} />
                    <Route path="code-guidelines" component={CodeGuidelines} />
                </Route>

                <Route path="design" component={Page}>
                    <IndexRedirect to="color-scheme" />
                    <Route path="color-scheme" component={ColorScheme} />
                    <Route path="typography" component={Typography} />
                    <Route path="border-radius" component={BorderRadius} />
                    <Route path="box-shadow" component={BoxShadow} />
                    <Route path="layout" component={DesignLayout} />
                    <Route path="animation" component={Animation} />
                </Route>

                <Route path="components" component={Page}>
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

                <Route path="utility" component={Page}>
                    <IndexRedirect to="layout" />
                    <Route path="layout" component={Layout} />
                    <Route path="hide-elements" component={HideElements} />
                    <Route path="center-elements" component={CenterElements} />
                    <Route path="text-manipulation" component={TextManipulation} />
                    <Route path="scrollbar" component={Scrollbar} />
                </Route>
                <Route path="*" component={NoMatch} />
            </Route>
        </Router>,
    container);
}
