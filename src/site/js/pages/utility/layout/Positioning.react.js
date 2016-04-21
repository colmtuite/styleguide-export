import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { pinCode } from '~/components/CodeSnippets.js';

export default function Positioning() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Positioning"} />

                <SectionDescription>
                    Pin an element relative to its closet relative parent.
                    Or fix an element relative to the viewport.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div
                        className="position-relative"
                        style={{ height: '300px' }}>
                        <div
                            className="posPinTL bg-smoke borderRadius-m"
                            style={{ height: '100px', width: '100px' }}>
                        </div>

                        <div
                            className="posPinTR bg-smoke borderRadius-m"
                            style={{ height: '100px', width: '100px' }}>
                        </div>

                        <div
                            className="posPinBL bg-smoke borderRadius-m"
                            style={{ height: '100px', width: '100px' }}>
                        </div>

                        <div
                            className="posPinBR bg-smoke borderRadius-m"
                            style={{ height: '100px', width: '100px' }}>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={pinCode} />
        </section>
    );
}
