import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { checkboxCode } from '~/components/CodeSnippets.js';

export default function Checkbox() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Checkbox"} />

                <SectionDescription>
                    Checkboxes come in two sizes which are applied with
                    <InlineCode>.form-control--m</InlineCode> and
                    <InlineCode>.form-control--s</InlineCode> on the
                    <InlineCode>.form-control</InlineCode> wrapper element.
                    Original implementation from <a className="link link--blue" href="http://wtfforms.com/" target="blank">WTF, forms?</a> by <a className="link link--blue" href="https://twitter.com/mdo" target="blank">@mdo</a>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--1 breakPointL-grid--2">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointL-borderBottomWidth-0 breakPointL-borderRightWidth-1">
                        <label className="form-control form-control--m checkbox c-silver c-slate--hover userSelect-none">
                            <input type="checkbox" />

                            <span className="form-control-indicator">
                                <svg
                                    className="checkbox-tick"
                                    viewBox="0 0 30 30">
                                    <path d="M13.08,16.53l-2.08-2a1.7,1.7,0,0,0-2.48,0,1.88,1.88,0,0,0,0,2.59L12,20.46a1.71,1.71,0,0,0,1.27.54,1.75,1.75,0,0,0,1.3-.55l6.91-8.23a2,2,0,0,0,0-2.66,1.73,1.73,0,0,0-2.54,0l-5.85,7h0Z" />
                                </svg>
                            </span>

                            <span className="link fontWeight-3 fontSize-m">Check this custom checkbox</span>
                        </label>
                    </div>

                    <div className="padding-m textAlign-center">
                        <label className="form-control form-control--s checkbox marginTopBottom-xxs c-silver c-slate--hover userSelect-none">
                            <input type="checkbox" />

                            <span className="form-control-indicator">
                                <svg
                                    className="checkbox-tick"
                                    viewBox="0 0 30 30">
                                    <path d="M13.08,16.53l-2.08-2a1.7,1.7,0,0,0-2.48,0,1.88,1.88,0,0,0,0,2.59L12,20.46a1.71,1.71,0,0,0,1.27.54,1.75,1.75,0,0,0,1.3-.55l6.91-8.23a2,2,0,0,0,0-2.66,1.73,1.73,0,0,0-2.54,0l-5.85,7h0Z" />
                                </svg>
                            </span>

                            <span className="link fontWeight-3 fontSize-m">Check this custom checkbox</span>
                        </label>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={checkboxCode} />
        </section>
    );
}
