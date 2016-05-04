import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';

import { inputWithContextCode } from '~/components/CodeSnippets.js';

export default function InputWithContext() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Input with context"} />

                <SectionDescription>
                    Sometimes there might be the need for pre-set context to inputs,
                    for example when requesting a website &mdash; it should always start with{' '}
                    <InlineCode>http://</InlineCode> or just <InlineCode>www</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="marginBottom-m">
                        <div className="inputGroup inputGroup--m">
                            <div>
                                <div className="inputGroup-context">http://</div>
                            </div>

                            <div>
                                <input
                                    className="input input--m input--default"
                                    type="text"
                                    placeholder="Enter something"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="marginBottom-m">
                        <div className="inputGroup inputGroup--m">
                            <div>
                                <input
                                    className="input input--m input--default"
                                    type="text"
                                    placeholder="Enter something"
                                />
                            </div>

                            <div>
                                <div className="inputGroup-context">@marvelapp.com</div>
                            </div>
                        </div>
                    </div>

                    <div className="inputGroup inputGroup--m">
                        <div>
                            <div className="inputGroup-context">http://</div>
                        </div>

                        <div>
                            <input
                                className="input input--m input--default borderRadius-0"
                                type="text"
                                placeholder="Enter something"
                            />
                        </div>

                        <div>
                            <div className="inputGroup-context">@marvelapp.com</div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={inputWithContextCode} />
        </section>
    );
}
