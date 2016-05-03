import React from 'react';

import Page from '~/pages/Page.react';

export default function NoMatch() {
    return (
        <Page>
            <div>
                <div className="marginTop-l marginBottom-m">
                    <h1 className="fontSize-xxxl">
                        Page not found
                    </h1>
                </div>

                <p className="lineHeight-l fontSize-l fontWeight-3 c-silver">
                    The page you’re looking for could have been deleted or never have existed.
                </p>
            </div>
        </Page>
    );
}
