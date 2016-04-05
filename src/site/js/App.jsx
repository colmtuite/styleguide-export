import React from 'react';

import Sidebar from '~/Sidebar';

export default function App(props) {
    return (
        <div>
            <Sidebar />

            <div style={{ paddingLeft: '20%' }}>
                <div className="padding-xl marginLeftRight-m" style={{ maxWidth: '960px' }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

App.propTypes = {
    children: React.PropTypes.node,
};
