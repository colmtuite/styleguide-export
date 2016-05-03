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
                <div className="breakPointM-display-none" style={{ height: '80px' }}></div>

                <div className="posFixTL zi-chrome bg-white width-100 textAlign-center boxShadow-close breakPointM-display-none" style={{ height: '80px' }}>
                    <div className="display-table width-100 height-100">
                        <div className="display-tableCell verticalAlign-middle">
                            <SidebarLogo />
                        </div>
                    </div>
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
