import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { hoverBoxShadowCode } from '~/components/CodeSnippets.js';

export default function BoxShadow() {
    return (
        <section>
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Hover shadows"} />

                <SectionDescription>
                    These shadow effects are applied on hover. Good example use cases include buttons, text inputs and other interactive UI elements.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <div
                                className="bg-white borderRadius-m borderWidth-1 borderStyle-solid borderColor-smoke textAlign-center boxShadow-deboss--hover"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">Deboss</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="marginRight-m">
                            <div
                                className="bg-white borderRadius-m borderWidth-1 borderStyle-solid borderColor-smoke textAlign-center boxShadow-emboss--hover"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">Emboss</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="bg-white borderRadius-m borderWidth-1 borderStyle-solid borderColor-smoke textAlign-center boxShadow-raise--hover"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">Raise</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={hoverBoxShadowCode} />
        </section>
    );
}
