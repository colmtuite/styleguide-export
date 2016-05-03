import React from 'react';

import Sidebar from '~/Sidebar.react';

export default function NoMatch() {
    return (
        <div>
            <Sidebar />

            <div style={{ paddingLeft: '20%' }}>
                <div
                    className="padding-xl marginLeftRight-m"
                    style={{ maxWidth: '960px' }}>
                    <div className="marginTop-l marginBottom-m">
                        <h1 className="fontSize-xxxl">
                            Page not found
                        </h1>
                    </div>

                    <p className="lineHeight-l fontSize-l fontWeight-3 c-silver">
                        The page you’re looking for could have been deleted or never have existed.
                    </p>
                </div>
            </div>
        </div>
    );
}
