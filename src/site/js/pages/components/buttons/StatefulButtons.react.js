import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import ButtonToggle from '~/pages/components/buttons/ButtonToggle.react';

import { statefulButtonsCode } from '~/components/CodeSnippets.js';

export default function StatefulButtons() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Stateful buttons"} />

                <SectionDescription>
                    Stateful buttons have different states and behaviour to the
                    regular ones. The pre-action feedback button, defined with
                    <InlineCode>.is-sad</InlineCode>, will show a sad face on
                    hover and is meant to be used on negative action buttons like
                    deleting an account or downgrading. There are 3 post-click
                    feedback buttons to be used for instant feedback and feedback
                    after contacting a server. Those are defined by
                    <InlineCode>.is-stateful</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--3">
                    <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s">
                            <a
                                className="button button--m button--ghost bg-negative--hover is-sad"
                                role="button">
                                Hover me!
                            </a>
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Pre-click feedback</p>
                    </div>

                    <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s">
                            <ButtonToggle
                                defaultClass="button button--m button--flat button--stateful bg-positive"
                                activeClass="has-succeeded has-responded"
                            />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Positive response</p>
                    </div>

                    <div className="padding-m textAlign-center">
                        <div className="marginTop-xs marginBottom-s">
                            <ButtonToggle
                                defaultClass="button button--m button--flat button--stateful bg-marvel"
                                activeClass="has-failed has-responded"
                            />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Negative response</p>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={statefulButtonsCode} />
        </section>
    );
}
