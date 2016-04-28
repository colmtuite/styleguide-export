import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { transitionsCode } from '~/components/CodeSnippets.js';

export default function Transitions() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Transitions"} />

                <SectionDescription>
                    These are the available values for hover states.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-l">
                            <div
                                className="bg-marvel borderRadius-m scaleUp--hover transitionProperty-transform transitionDuration-l transitionTimingFunction-cb--scaleUp"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>
                        <div className="marginRight-l">
                            <div
                                className="bg-marvel borderRadius-m animation-spin"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>
                        <div className="marginRight-l">
                            <div
                                className="bg-marvel borderRadius-m animation-rotate"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>
                        <div className="marginRight-l">
                            <div
                                className="bg-marvel borderRadius-m animation-bounce"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={transitionsCode} />
        </section>
    );
}
