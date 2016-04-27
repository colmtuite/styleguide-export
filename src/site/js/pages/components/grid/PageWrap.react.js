import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { pageWrapCode } from '~/components/CodeSnippets.js';

export default function PageWrap() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Page wrap"} />

                <SectionDescription>
                    Page wrap is a wrapper for the whole page. There are 3
                    different widths, defined by an additional class
                    <InlineCode>.pageWrap--s</InlineCode>,
                    <InlineCode>.pageWrap--m</InlineCode>,
                    <InlineCode>.pageWrap--l</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="pageWrap pageWrap--s marginBottom-m">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>

                    <div className="pageWrap pageWrap--m">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={pageWrapCode} />
        </section>
    );
}
