import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { timingCode } from '~/components/CodeSnippets.js';

export default function Timing() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Timing"} />

                <SectionDescription>
                    There are 5 available transition durations, which define the
                    speed of the animation. <InlineCode>.transitionDuration-s</InlineCode>,
                    <InlineCode>.transitionDuration-m</InlineCode>,
                    <InlineCode>.transitionDuration-l</InlineCode>, <InlineCode>.transitionDuration-xl</InlineCode> or
                    <InlineCode>.transitionDuration-xxl</InlineCode>. You can also
                    use <InlineCode>.transitionDuration-0</InlineCode>, to reset
                    the duration to 0. Responsive options are available for all durations.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--2 breakPointS-grid--2 breakPointM-grid--3 breakPointL-grid--5">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-marvel borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-s transitionTimingFunction-cb--scaleIn"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-marvel borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-m transitionTimingFunction-cb--scaleIn"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 borderRightWidth-1 breakPointM-borderRightWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-marvel borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-l transitionTimingFunction-cb--scaleIn"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderBottomWidth-0 breakPointM-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div
                            className="bg-marvel borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-xl transitionTimingFunction-cb--scaleIn"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointS-borderBottomWidth-0 breakPointL-borderBottomWidth-0 borderRightWidth-1 breakPointL-borderRightWidth-0">
                        <div
                            className="bg-marvel borderRadius-circle centered scaleUp--hover transitionProperty-transform transitionDuration-xxl transitionTimingFunction-cb--scaleIn"
                            style={{ height: '60px', width: '60px' }}>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={timingCode} />
        </section>
    );
}
