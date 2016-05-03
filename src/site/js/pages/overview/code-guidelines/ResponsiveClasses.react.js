import React from 'react';
import SectionTitle from '~/components/SectionTitle.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionCode from '~/components/SectionCode.react';
import InlineCode from '~/components/InlineCode.react';
import { responsiveClassesCode } from '~/components/CodeSnippets';

export default function ResponsiveClasses() {
    return (
        <div>
            <section className="marginBottom-m">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <SectionTitle sectionTitle={"Responsive classes"} />

                    <SectionDescription>
                        Most classes have responsive variations. We have 4
                        responsive breakpoints, so there is a separate class for
                        each breakpoint. These classes follow a simple size scale.
                        To apply a breakpoint to a class, just prefix the class with <InlineCode>.breakPointS-</InlineCode>, <InlineCode>.breakPointM-</InlineCode>, <InlineCode>.breakPointL-</InlineCode> or <InlineCode>.breakPointXL-</InlineCode>.
                    </SectionDescription>
                </div>

                <SectionCode codeType="language-css" code={responsiveClassesCode} topBorder="true" />
            </section>
        </div>
    );
}
