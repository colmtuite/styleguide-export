import React from 'react';
import PageTitle from '~/components/PageTitle';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { pageWrapCode, gridCode, gridSizeCode } from '~/components/CodeSnippets.js';

export default function Layout() {
    return (
        <div>
            <PageTitle title="Layout" />

            <section className="marginBottom-xl">
                <div className="marginBottom-l">
                    <SectionTitle sectionTitle={ "Page wrap" } />

                    <SectionDescription>
                        Page wrap is a wrapper for the whole page. There are 3 different widths, defined by an additional class <InlineCode>.pageWrap--s</InlineCode>, <InlineCode>.pageWrap--m</InlineCode>, <InlineCode>.pageWrap--l</InlineCode>.
                    </SectionDescription>
                </div>

                <SectionExample>
                    <div className="pageWrap pageWrap--s marginBottom-m">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>

                    <div className="pageWrap pageWrap--m">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>
                </SectionExample>

                <SectionCode code={ pageWrapCode } />
            </section>

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

            <section className="marginBottom-m">
                <div className="marginBottom-l">
                    <SectionTitle sectionTitle={ "Grid sizes" } />

                    <SectionDescription>
                        You have three grid size options to choose from, specified by a class. <InlineCode>.grid--m</InlineCode> is the default. <InlineCode>.grid--l</InlineCode> and <InlineCode>.grid--xl</InlineCode> are used mostly in the marketing site.
                    </SectionDescription>
                </div>

                <SectionExample>
                    <div className="grid grid--m grid--2">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>
                </SectionExample>

                <div className="padding-l borderWidth-0  borderStyle-solid borderColor-smoke borderLeftWidth-1 borderRightWidth-1 borderBottomWidth-1">
                    <div className="grid grid--l grid--2">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>
                </div>

                <SectionCode code={ gridSizeCode } />
            </section>
        </div>
    );
}
