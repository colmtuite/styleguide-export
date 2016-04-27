import React from 'react';

import Sidebar from '~/Sidebar.react';
import SidebarLogo from '~/components/SidebarLogo.react';

export default function App(props) {
    App.propTypes = {
        children: React.PropTypes.node,
    };

    return (
        <div>
            <Sidebar />

            <div className="main-content">
                <div className="bg-white width-100 textAlign-center boxShadow-close breakPointM-display-none">
                    <SidebarLogo />
                </div>

                <div
                    className="padding-m breakPointS-padding-l breakPointM-padding-xl centered"
                    style={{ maxWidth: '960px' }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
