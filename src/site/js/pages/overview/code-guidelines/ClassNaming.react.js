import React from 'react';
import SectionTitle from '~/components/SectionTitle.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionCode from '~/components/SectionCode.react';
import { classNamingCode } from '~/components/CodeSnippets';

export default function ClassNaming() {
    return (
        <div>
            <section className="marginBottom-xl">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <SectionTitle sectionTitle={"Class naming"} />

                    <SectionDescription>
                        Each of our CSS classes adhere to a strict naming convention.
                        Once you take a few minutes to understand the naming convention,
                        you will be able to guess any CSS class name easily.
                    </SectionDescription>
                </div>

                <SectionCode codeType="language-css" code={classNamingCode} topBorder="true" />
            </section>
        </div>
    );
}
