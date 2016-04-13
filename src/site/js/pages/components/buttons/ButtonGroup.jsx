import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { buttonGroupCode } from '~/components/CodeSnippets.js';

export default function ButtonGroup() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Button group" } />

                <SectionDescription>
                    Group multiple buttons inline. Useful for action bars. Only ghost buttons should be placed in a button group.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="buttonGroup">
                        <div>
                            <button className="button button--m button--ghost bg-marvel--hover">Button</button>
                        </div>

                        <div>
                            <button className="button button--m button--ghost bg-marvel--hover">Button</button>
                        </div>

                        <div>
                            <button className="button button--m button--ghost bg-marvel--hover">Button</button>
                        </div>

                        <div>
                            <button className="button button--m button--ghost bg-marvel--hover">Button</button>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ buttonGroupCode } />
        </section>
    );
}
