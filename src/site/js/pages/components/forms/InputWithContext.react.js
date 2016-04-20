import React from 'react';

import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { inputWithContextCode } from '~/components/CodeSnippets.js';

export default function InputWithContext() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Input with context"} />

                <SectionDescription>
                    Use a single class to define a size for your button.
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

            <SectionCode code={inputWithContextCode} />
        </section>
    );
}
