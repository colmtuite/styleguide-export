import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { inlineCode } from '~/components/CodeSnippets.js';

export default function Inline() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Inline"} />

                <SectionDescription>
                    Place multiple elements inline. If you need to space the
                    elements apart, handle that with additional margin classes.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline marginBottom-m">
                        <div>
                            <div
                                className="bg-snow--d borderRadiusLeft-m"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div>
                            <div
                                className="bg-smoke--d"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div>
                            <div
                                className="bg-silver borderRadiusRight-m"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>
                    </div>

                    <div className="inline">
                        <div className="marginRight-m">
                            <div
                                className="bg-snow--d borderRadius-m"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-smoke--d borderRadius-m"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-silver borderRadius-m"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={inlineCode} />
        </section>
    );
}
