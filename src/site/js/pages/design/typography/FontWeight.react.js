import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';

import { fontWeightCode } from '~/components/CodeSnippets.js';

export default function FontWeight() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Font weight"} />

                <SectionDescription>
                    There are three font weights available to use &mdash; Blond,
                    Regular and Medium. These can be applied with <InlineCode>.fontWeight-3</InlineCode>,
                    <InlineCode>.fontWeight-4</InlineCode> and <InlineCode>.fontWeight-5</InlineCode>
                    respectively.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--1 breakPointM-grid--3">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderBottomWidth-0">
                        <div className="marginBottom-xxs">
                            <span
                                className="fontWeight-3"
                                style={{ fontSize: '64px' }}>
                                Aa
                            </span>
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">
                            Fakt Soft Pro Blond
                        </p>
                    </div>

                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderBottomWidth-0 breakPointM-borderLeftWidth-1 breakPointM-borderRightWidth-1">
                        <div className="marginBottom-xxs">
                            <span
                                className="fontWeight-4"
                                style={{ fontSize: '64px' }}>
                                Aa
                            </span>
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">
                            Fakt Soft Pro Regular
                        </p>
                    </div>

                    <div className="padding-m textAlign-center">
                        <div className="marginBottom-xxs">
                            <span
                                className="fontWeight-5"
                                style={{ fontSize: '64px' }}>
                                Aa
                            </span>
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">
                            Fakt Soft Pro Medium
                        </p>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={fontWeightCode} />
        </section>
    );
}
