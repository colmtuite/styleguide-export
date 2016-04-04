import React from 'react';

import Navigation from '~/Navigation';

export default function App(props) {
    return (
        <div className="pageWrap pageWrap--s">
            <Navigation />
            {props.children}
        </div>
    );
}

App.propTypes = {
    children: React.PropTypes.node,
};
