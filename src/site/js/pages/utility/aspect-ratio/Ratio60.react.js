import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';

import { aspectRatio60Code } from '~/components/CodeSnippets.js';

export default function Ratio60() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"60% aspect ratio"} />

                <SectionDescription>
                    To be used with classes <InlineCode>.aspectRatio</InlineCode>{' '}
                    and <InlineCode>.aspectRatio--60</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="aspectRatio aspectRatio--60 centered bg-smoke borderRadius-m" style={{ width: '250px' }}>
                        <div className="aspecRatio-content"></div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={aspectRatio60Code} />
        </section>
    );
}
