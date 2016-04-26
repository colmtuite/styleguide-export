import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { buttonGroupCode } from '~/components/CodeSnippets.js';

export default function ButtonGroup() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Button group"} />

                <SectionDescription>
                    Button groups consist of an inline set of ghost buttons.
                    Useful for action bars.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="buttonGroup">
                        <div>
                            <button className="button button--m button--ghost bg-marvel--hover">
                                Button
                            </button>
                        </div>

                        <div>
                            <button className="button button--m button--ghost bg-marvel--hover">
                                Button
                            </button>
                        </div>

                        <div>
                            <button className="button button--m button--ghost bg-marvel--hover">
                                Button
                            </button>
                        </div>

                        <div>
                            <button className="button button--m button--ghost bg-marvel--hover">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={buttonGroupCode} />
        </section>
    );
}
