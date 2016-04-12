import React from 'react';

import { fontSizesCode } from '~/components/CodeSnippets.js';
import FontSize from '~/pages/design/typography/FontSize';
import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

export default function FontSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Font sizes" } />

                <SectionDescription>
                    Use a single class to define a font size.
                </SectionDescription>
            </div>

            <SectionExample>
                <FontSize fontSize="xxxxl" fontDescription="46px &mdash; Extra extra extra extra large" />
                <FontSize fontSize="xxxl" fontDescription="38px &mdash; Extra extra extra large" />
                <FontSize fontSize="xxl" fontDescription="28px &mdash; Extra extra large" />
                <FontSize fontSize="xl" fontDescription="20px &mdash; Extra large" />
                <FontSize fontSize="l" fontDescription="18px &mdash; Large" />
                <FontSize fontSize="m" fontDescription="16px &mdash; Medium" />
                <FontSize fontSize="s" fontDescription="14px &mdash; Small" />
                <FontSize fontSize="xs" fontDescription="12px &mdash; Extra small" />
                <FontSize fontSize="xxs" fontDescription="10px &mdash; Extra extra small" />
            </SectionExample>

            <div style={{ marginTop: '-1px' }}>
                <SectionCode code={ fontSizesCode } />
            </div>
        </section>
    );
}
