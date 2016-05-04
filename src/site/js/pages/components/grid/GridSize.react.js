import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { gridSizeCode } from '~/components/CodeSnippets.js';

export default function GridSize() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Grid sizes"} />

                <SectionDescription>
                    There are three grid size options to choose from, specified
                    by a class. The default is <InlineCode>.grid--m</InlineCode>,
                    whereas <InlineCode>.grid--l</InlineCode> and{' '}
                    <InlineCode>.grid--xl</InlineCode> are used mostly in the marketing site.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="grid grid--m grid--2">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>
                </div>
            </SectionExample>

            <div className="borderWidth-0  borderStyle-solid borderColor-smoke borderLeftWidth-1 borderRightWidth-1 borderBottomWidth-1">
                <div className="padding-l">
                    <div className="grid grid--l grid--2">
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                        <div><div className="padding-xs bg-smoke borderRadius-s"></div></div>
                    </div>
                </div>
            </div>

            <SectionCode codeType="language-html" code={gridSizeCode} />
        </section>
    );
}
