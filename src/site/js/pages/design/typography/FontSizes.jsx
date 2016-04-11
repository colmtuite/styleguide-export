import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { orderedListCode } from '~/components/CodeSnippets.js';

export default function FontSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Font sizes" } />

                <SectionDescription>
                    Use a single class to define a font size.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                    <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                        <div className="padding-xxs">
                            <div className="marginBottom-s">
                                <p className="fontSize-xxxxl">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Extra extra extra extra large</p>
                        </div>
                    </div>
                </div>

                <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                    <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                        <div className="padding-xxs">
                            <div className="marginBottom-s">
                                <p className="fontSize-xxxl">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Extra extra extra large</p>
                        </div>
                    </div>
                </div>

                <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                    <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                        <div className="padding-xxs">
                            <div className="marginBottom-s">
                                <p className="fontSize-xxl">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Extra extra large</p>
                        </div>
                    </div>
                </div>

                <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                    <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                        <div className="padding-xxs">
                            <div className="marginBottom-s">
                                <p className="fontSize-xl">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Extra large</p>
                        </div>
                    </div>
                </div>

                <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                    <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                        <div className="padding-xxs">
                            <div className="marginBottom-s">
                                <p className="fontSize-l">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Large</p>
                        </div>
                    </div>
                </div>

                <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                    <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                        <div className="padding-xxs">
                            <div className="marginBottom-s">
                                <p className="fontSize-m">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Medium</p>
                        </div>
                    </div>
                </div>

                <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                    <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                        <div className="padding-xxs">
                            <div className="marginBottom-s">
                                <p className="fontSize-s">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Small</p>
                        </div>
                    </div>
                </div>

                <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                    <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                        <div className="padding-xxs">
                            <div className="marginBottom-s">
                                <p className="fontSize-xs">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Extra small</p>
                        </div>
                    </div>
                </div>

                <div className="padding-m overflowY-hidden overflowX-scroll whiteSpace-nowrap">
                    <div className="padding-xxs">
                        <div className="marginBottom-s">
                            <p className="fontSize-xxs">The quick brown fox jumps over the lazy dog</p>
                        </div>

                        <p className="fontSize-s fontWeight-3 c-silver">46px &mdash; Extra extra small</p>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ orderedListCode } />
        </section>
    );
}
