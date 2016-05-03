import React from 'react';
import PageTitle from '~/components/PageTitle.react';

export default function NamingConvention() {
    return (
        <div>
            <PageTitle title="Naming convention" />

            <div className="marginBottom-xl">
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3 marginBottom-m">The majority of the styleguide is built using single-purpose classes. Single-purpose classes are CSS classes which declare a single value for a single style property, therefore performing a single purpose. The primary benefit here is that when you see a single-purpose class in HTML, you know exactly how it affects that markup but more importantly, you can change it without affecting any other views.</p>
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3 marginBottom-m">You can use these single-purpose CSS classes anywhere you wish and as often as you wish, whether that means inside a component or directly in a view template.</p>
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3">These single-purpose classes make up about 80% of the syleguide codebase. The rest is made up of a set of reusable utility classes for performing common tasks and inline styles, for non reusable, view specific styles.</p>
            </div>

            <section className="marginBottom-xl">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <div className="marginBottom-xxs">
                        <h3 className="fontSize-xl lineHeight-xl">File naming</h3>
                    </div>
                    <p className="lineHeight-l fontSize-l fontWeight-3 c-silver">All folder names should be plural. All component filenames should be singular.</p>
                </div>
                <div className="padding-m bg-snow borderWidth-1 borderStyle-solid borderColor-smoke borderRadius-m overflow-auto">
                    <pre>
                        <code className="language-html hljs xml">
                            <span className="hljs-comment">&lt;!-- Do --&gt;</span><br />
                            <span className="c-slate">button.scss</span><br />
                            <span className="c-slate">font-size.scss</span><br /><br />

                            <span className="hljs-comment">&lt;!-- Dont --&gt;</span><br />
                            <span className="c-slate">buttons.scss</span><br />
                            <span className="c-slate">font-sizes.scss</span><br />
                        </code>
                    </pre>
                </div>
            </section>

            <section className="marginBottom-xl">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <div className="marginBottom-xxs">
                        <h3 className="fontSize-xl lineHeight-xl">Class naming</h3>
                    </div>
                    <p className="lineHeight-l fontSize-l fontWeight-3 c-silver">Each of our CSS classes adhere to a strict naming convention. Once you take a few minutes to understand the naming convention, you will be able to guess any CSS class name easily.</p>
                </div>
                <div className="padding-m bg-snow borderWidth-1 borderStyle-solid borderColor-smoke borderRadius-m overflow-auto">
                    <pre>
                        <code className="language-html hljs xml">
                            <span className="hljs-comment">&lt;!-- stylePropertyName-valueName --&gt;</span>
                            <br />
                            <span className="hljs-title">.float-left</span> <span className="hljs-attribute">i</span> <span className="hljs-value">float: left;</span> <span className="hljs-attribute">i</span>
                            <br />
                            <span className="hljs-title">.textAlign-center</span> <span className="hljs-attribute">i</span> <span className="hljs-value">text-align: center;</span> <span className="hljs-attribute">i</span>
                            <br />
                            <span className="hljs-title">.verticalAlign-middle</span> <span className="hljs-attribute">i</span> <span className="hljs-value">vertical-align: middle;</span> <span className="hljs-attribute">i</span>
                        </code>
                    </pre>
                </div>
            </section>

            <section className="marginBottom-xl">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <div className="marginBottom-xxs">
                        <h3 className="fontSize-xl lineHeight-xl">Scales</h3>
                    </div>
                    <p className="lineHeight-l fontSize-l fontWeight-3 c-silver">Style properties which accept custom values often adhere to a scale. There are 3 types of scale: size scale, lightness scale and fixed scale.</p>
                </div>
                <div className="padding-m bg-snow borderWidth-1 borderStyle-solid borderColor-smoke borderRadius-m overflow-auto">
                    <pre>
                        <code className="language-html hljs xml">
                            <span className="hljs-comment">&lt;!-- Size scale --&gt;</span><br />
                            <span className="hljs-title">.fontSize-xl</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-size: 40px;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontSize-l</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-size: 32px;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontSize-m</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-size: 16px;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontSize-s</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-size: 14px;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontSize-xs</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-size: 12px;</span> <span className="hljs-attribute">i</span><br /><br />

                            <span className="hljs-comment">&lt;!-- Lightness scale --&gt;</span><br />
                            <span className="hljs-title">.color-blue-xd</span> <span className="hljs-attribute">i</span> <span className="hljs-value">color: ExtraDarkBlue;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.color-blue-d</span> <span className="hljs-attribute">i</span> <span className="hljs-value">color: DarkBlue;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.color-blue</span> <span className="hljs-attribute">i</span> <span className="hljs-value">color: blue;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.color-blue-l</span> <span className="hljs-attribute">i</span> <span className="hljs-value">color: LightBlue;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.color-blue-xl</span> <span className="hljs-attribute">i</span> <span className="hljs-value">color: ExtraLightBlue;</span> <span className="hljs-attribute">i</span><br /><br />

                            <span className="hljs-comment">&lt;!-- Fixed scale --&gt;</span><br />
                            <span className="hljs-title">.fontWeight-1</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 100;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontWeight-2</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 200;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontWeight-3</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 300;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontWeight-4</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 400;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontWeight-5</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 500;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontWeight-6</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 600;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontWeight-7</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 700;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontWeight-8</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 800;</span> <span className="hljs-attribute">i</span><br />
                            <span className="hljs-title">.fontWeight-9</span> <span className="hljs-attribute">i</span> <span className="hljs-value">font-weight: 900;</span> <span className="hljs-attribute">i</span><br />
                        </code>
                    </pre>
                </div>
            </section>

            <section>
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <div className="marginBottom-xxs">
                        <h3 className="fontSize-xl lineHeight-xl">Responsive classes</h3>
                    </div>
                    <p className="lineHeight-l fontSize-l fontWeight-3 c-silver">Most classes have responsive variations. We have 4 responsive breakpoints, so there is a separate class for each breakpoint. These classes follow a simple size scale. To apply a breakpoint to a class, just prefix the class with <code className="bg-snow--d borderRadius-s display-inlineBlock fontSize-xs hljs-string paddingLeftRight-xxs verticalAlign-middle" style={{ lineHeight: '24px', marginLeft: '4px', marginTop: '1px' }}>.breakPointS-</code>, <code className="bg-snow--d borderRadius-s display-inlineBlock fontSize-xs hljs-string paddingLeftRight-xxs verticalAlign-middle" style={{ lineHeight: '24px', marginLeft: '4px', marginTop: '1px' }}>.breakPointM-</code>, <code className="bg-snow--d borderRadius-s display-inlineBlock fontSize-xs hljs-string paddingLeftRight-xxs verticalAlign-middle" style={{ lineHeight: '24px', marginLeft: '4px', marginTop: '1px' }}>.breakPointL-</code> or <code className="bg-snow--d borderRadius-s display-inlineBlock fontSize-xs hljs-string paddingLeftRight-xxs verticalAlign-middle" style={{ lineHeight: '24px', marginLeft: '4px', marginTop: '1px' }}>.breakPointXL-</code>.</p>
                </div>
                <div className="padding-m bg-snow borderWidth-1 borderStyle-solid borderColor-smoke borderRadius-m overflow-auto">
                    <pre>
                        <code className="language-html hljs xml">
                            <span className="hljs-comment">&lt;!-- stylePropertyName-valueName --&gt;</span>
                            <br />
                            <span className="hljs-title">.breakPointS-float-left</span> <span className="hljs-attribute">i</span> <span className="hljs-value">float: left;</span> <span className="hljs-attribute">i</span>
                            <br />
                            <span className="hljs-title">.breakPointM-float-left</span> <span className="hljs-attribute">i</span> <span className="hljs-value">float: left;</span> <span className="hljs-attribute">i</span>
                            <br />
                            <span className="hljs-title">.breakPointL-float-left</span> <span className="hljs-attribute">i</span> <span className="hljs-value">float: left;</span> <span className="hljs-attribute">i</span>
                            <br />
                            <span className="hljs-title">.breakPointXL-float-left</span> <span className="hljs-attribute">i</span> <span className="hljs-value">float: left;</span> <span className="hljs-attribute">i</span>
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    );
}
