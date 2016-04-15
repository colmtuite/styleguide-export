import React from 'react';

import Sidebar from '~/Sidebar';

export default function App(props) {
    App.propTypes = {
        children: React.PropTypes.node,
    };

    return (
        <div>
            <Sidebar />

            <div style={{ paddingLeft: '20%' }}>
                <div className="padding-xl centered" style={{ maxWidth: '960px' }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
