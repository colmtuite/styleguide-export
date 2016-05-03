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
                <SectionTitle sectionTitle={"Animations"} />

                <SectionDescription>
                    A small collection of predefined and reusable animations, useful for loading spinnys, carousels, validations states etc.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--2 breakPointS-grid--2 breakPointL-grid--5">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-yellow borderRadius-m scaleUp--hover transitionProperty-transform transitionDuration-l transitionTimingFunction-cb--scaleUp centered"
                            style={{ height: '100px', width: '100px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderRightWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-yellow borderRadius-m animation-spin centered"
                            style={{ height: '100px', width: '100px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderRightWidth-1 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-yellow borderRadius-m animation-rotate centered"
                            style={{ height: '100px', width: '100px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderRightWidth-1 breakPointM-borderRightWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-yellow borderRadius-m animation-bounce centered"
                            style={{ height: '100px', width: '100px', webkitAnimationIterationCount: 'infinite', animationIterationCount: 'infinite' }}>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={transitionsCode} />
        </section>
    );
}
