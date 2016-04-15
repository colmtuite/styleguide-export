import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { flatButtonCode } from '~/components/CodeSnippets.js';
import Button from '~/../../js/components/Button.react';

export default function FlatButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Flat button" } />

                <SectionDescription>
                    Flat buttons should be used to signify necessary or mandatory actions. There are two color options, specified with an additional class <InlineCode>.bg--marvel</InlineCode> or <InlineCode>.bg--positive</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m inline">
                    <div className="marginRight-m">
                        <Button kind="flat" size="medium" color="green" type="button">
                            Please work
                        </Button>
                    </div>

                    <div className="marginRight-m">
                        <Button type="button">
                            Please work
                        </Button>
                    </div>

                    <div className="marginRight-m">
                        <Button size="medium" color="red" type="button">
                            Fuck you React
                        </Button>
                    </div>

                    <div className="marginRight-m">
                        <a className="button button--m button--flat bg-marvel" href="#" role="button">Default</a>
                    </div>

                    <div>
                        <a className="button button--m button--flat bg-positive" href="#" role="button">Positive</a>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ flatButtonCode } />
        </section>
    );
}
