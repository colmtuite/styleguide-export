import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { distantBoxShadowCode } from '~/components/CodeSnippets.js';

export default function BoxShadow() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Perspective shadows"} />

                <SectionDescription>
                    Use these shadow effects to give the illusion of perspective. A modal is a good use case for such an effect.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <div
                                className="bg-white borderRadius-m textAlign-center boxShadow-distant"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">Distant</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-white borderRadius-m textAlign-center boxShadow-close"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">Close</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-white borderRadius-m textAlign-center boxShadow-subtle"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">Subtle</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={distantBoxShadowCode} />
        </section>
    );
}
