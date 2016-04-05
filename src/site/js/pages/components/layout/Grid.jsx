import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { gridCode } from '~/components/CodeSnippets.js';

export default function Grid() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Basic grid" } />

                <SectionDescription>
                    We use grids exclusively for layouts which require a number of columns of equal width. Grids can have 1-6 columns, specified by a class <InlineCode>.grid--1</InlineCode>, <InlineCode>.grid--2</InlineCode>, <InlineCode>.grid--3</InlineCode>, <InlineCode>.grid--4</InlineCode>, <InlineCode>.grid--5</InlineCode> or <InlineCode>.grid--6</InlineCode>. If you need more than 6 columns, try taking a long, hard look in the mirror. There are also two grids with uneven widths which can be specified by using classes <InlineCode>.grid--6-4</InlineCode> and <InlineCode>.grid--7-3</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
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
            </SectionExample>

            <SectionCode code={ gridCode } />
        </section>
    );
}
