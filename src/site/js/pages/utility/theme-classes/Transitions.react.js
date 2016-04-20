import React from 'react';

import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { transitionsCode } from '~/components/CodeSnippets.js';

export default function Transitions() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Transitions"} />

                <SectionDescription>
                    These are the available values for hover states.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <div
                                className="bg-marvel borderRadius-m scaleUp--hover transitionProperty-transform transitionDuration-l transitionTimingFunction-cb--scaleUp"
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
