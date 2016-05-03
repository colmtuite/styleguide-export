import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { gridCode } from '~/components/CodeSnippets.js';

export default function BasicGrid() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Basic grid"} />

                <SectionDescription>
                    We use grids exclusively for layouts which require a number
                    of columns of equal width. Grids can have 1-6 columns,
                    specified by a class <InlineCode>.grid--1</InlineCode>,
                    <InlineCode>.grid--2</InlineCode>, <InlineCode>.grid--3</InlineCode>,
                    <InlineCode>.grid--4</InlineCode>, <InlineCode>.grid--5</InlineCode>
                    or <InlineCode>.grid--6</InlineCode>. There are also two special case
                    grids with uneven widths which can be initialized by using classes
                    <InlineCode>.grid--6-4</InlineCode> and <InlineCode>.grid--7-3</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="grid grid--m grid--1">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>

                    <div className="grid grid--m grid--2">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>

                    <div className="grid grid--m grid--3">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>

                    <div className="grid grid--m grid--4">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>

                    <div className="grid grid--m grid--5">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>

                    <div className="grid grid--m grid--6">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={gridCode} />
        </section>
    );
}
