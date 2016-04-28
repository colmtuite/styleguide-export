import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { bevelBoxShadowCode } from '~/components/CodeSnippets.js';

export default function BoxShadow() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Box shadow"} />

                <SectionDescription>
                    These are the available values for box shadow.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <div
                                className="bg-white borderRadius-m textAlign-center boxShadow-bevel"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">Bevel</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-white borderRadius-m textAlign-center boxShadow-bevelInverse"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">Inverse</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-white borderRadius-m textAlign-center boxShadow-bevelRaise"
                                style={{ height: '100px', width: '100px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <span className="fontSize-m cursor-default">+ Raise</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={bevelBoxShadowCode} />
        </section>
    );
}
