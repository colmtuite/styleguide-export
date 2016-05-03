import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { easingCode } from '~/components/CodeSnippets.js';

export default function Easing() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Easing"} />

                <SectionDescription>
                    Easing defines the curve on which the animation takes place.
                    Each of the 5 easing options provide a different feel to the animation.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--2 breakPointS-grid--2 breakPointM-grid--3 breakPointL-grid--5">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 borderRightWidth-1 breakPointM-borderRightWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-pink borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-xl transitionTimingFunction-linear"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 borderRightWidth-1 breakPointM-borderRightWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-pink borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-xl transitionTimingFunction-ease"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 borderRightWidth-1 breakPointM-borderRightWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-pink borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-xl transitionTimingFunction-cb--scaleIn"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 borderRightWidth-1 breakPointM-borderRightWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-pink borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-xl transitionTimingFunction-cb--scaleOut"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 borderRightWidth-1 breakPointM-borderRightWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-pink borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-xl transitionTimingFunction-cb--scaleUp"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={easingCode} />
        </section>
    );
}
