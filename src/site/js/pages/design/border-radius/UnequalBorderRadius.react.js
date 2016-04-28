import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { unequalBorderRadiusCode } from '~/components/CodeSnippets.js';

export default function UnequalBorderRadius() {
    return (
        <section>
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Unequal Border radius"} />

                <SectionDescription>
                    Unequal border radius affects only a single corner of the element.
                    The other corners remain unaffected. Again, there are 3 sizes
                    to choose from and all classes have responsive options.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <div
                                className="bg-smoke borderRadiusTopLeft-l"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-smoke borderRadiusTopRight-l"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div className="marginRight-m">
                            <div
                                className="bg-smoke borderRadiusBottomRight-l"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>

                        <div>
                            <div
                                className="bg-smoke borderRadiusBottomLeft-l"
                                style={{ height: '100px', width: '100px' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={unequalBorderRadiusCode} />
        </section>
    );
}
