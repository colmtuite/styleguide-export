import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { gridSizeCode } from '~/components/CodeSnippets.js';

export default function GridSize() {
    return (
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
    );
}
