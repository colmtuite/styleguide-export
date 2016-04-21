import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { fontWeightCode } from '~/components/CodeSnippets.js';

export default function FontWeight() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Font weight"} />

                <SectionDescription>
                    Use a single class to define a font size.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--3">
                    <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke">
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

                    <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke">
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

            <SectionCode code={fontWeightCode} />
        </section>
    );
}
