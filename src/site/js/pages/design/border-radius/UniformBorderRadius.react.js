import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { uniformBorderRadiusCode } from '~/components/CodeSnippets.js';

export default function UniformBorderRadius() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Uniform Border radius"} />

                <SectionDescription>
                    Uniform border radius is applied equally to all corners. There
                    are 3 sizes to choose from, <InlineCode>.borderRadius-s</InlineCode>,
                    <InlineCode>.borderRadius-m</InlineCode> or
                    <InlineCode>.borderRadius-l</InlineCode>. Use
                    <InlineCode>.borderRadius-circle</InlineCode> to make an element
                    circular. All classes have responsive options.
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

            <SectionCode codeType="language-html" code={uniformBorderRadiusCode} />
        </section>
    );
}
