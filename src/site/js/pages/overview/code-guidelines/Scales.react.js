import React from 'react';
import SectionTitle from '~/components/SectionTitle.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionCode from '~/components/SectionCode.react';
import { classNamingCode } from '~/components/CodeSnippets';

export default function Scales() {
    return (
        <div>
            <section className="marginBottom-xl">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <SectionTitle sectionTitle={"Class naming"} />

                    <SectionDescription>
                        Style properties which accept custom values often adhere
                        to a scale. There are 3 types of scale: size scale,
                        lightness scale and fixed scale.
                    </SectionDescription>
                </div>

                <SectionCode codeType="language-css" code={classNamingCode} topBorder="true" />
            </section>
        </div>
    );
}
