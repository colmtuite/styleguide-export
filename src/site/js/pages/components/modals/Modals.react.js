import React from 'react';

import PageTitle from '~/components/PageTitle.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import classNames from 'classnames';

import { modalsCode } from '~/components/CodeSnippets.js';

export default class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    click = () => {
        this.setState({ active: !this.state.active });
    }

    render() {
        const { active } = this.state;
        const instantFeedbackClasses = classNames('marginTop-xs marginBottom-s display-none', { ['display-block']: active });

        return (
            <div>
                <PageTitle title="Modals" />

                <section className="marginBottom-m">
                    <div className="marginBottom-l">
                        <SectionTitle sectionTitle={"Default modal"} />

                        <SectionDescription>
                            Some description goes here.
                        </SectionDescription>
                    </div>

                    <SectionExample>
                        <div className="grid grid--3">
                            <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke">
                                <div className="marginTop-xs marginBottom-s">
                                    <button className="button button--m button--flat button--stateful bg-marvel" onClick={this.click}>
                                        Click me!
                                    </button>
                                </div>

                                <div className={instantFeedbackClasses}>
                                    <div className="lineHeight-s fontSize-s fontWeight-3 c-silver">Response</div>
                                </div>

                                <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Default modal</p>
                            </div>

                            <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke">
                                <div className="marginTop-xs marginBottom-s">
                                    <button className="button button--m button--flat button--stateful bg-marvel">
                                        Click me!
                                    </button>
                                </div>

                                <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Modal with subtext</p>
                            </div>

                            <div className="padding-m textAlign-center">
                                <div className="marginTop-xs marginBottom-s">
                                    <button className="button button--m button--flat button--stateful bg-marvel">
                                        Click me!
                                    </button>
                                </div>

                                <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Modal with title</p>
                            </div>
                        </div>
                    </SectionExample>

                    <SectionCode code={modalsCode} />
                </section>
            </div>
        );
    }
}
