import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { borderRadiusCode } from '~/components/CodeSnippets.js';

export default function BorderRadius() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Border radius"} />

                <SectionDescription>
                    These are the available values for border radius.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <div
                                className="bg-smoke borderRadius-s"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-smoke borderRadius-m"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-smoke borderRadius-l"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div>
                            <div
                                className="bg-smoke borderRadius-circle"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={borderRadiusCode} />
        </section>
    );
}
