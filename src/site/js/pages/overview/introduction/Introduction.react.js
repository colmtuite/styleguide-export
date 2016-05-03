import React from 'react';
import PageTitle from '~/components/PageTitle.react';

export default function Introduction() {
    return (
        <div>
            <PageTitle title="Introduction" />

            <div className="marginBottom-xl">
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3">As Marvel continues to grow, both as a product and a company, one challenge we are faced with is learning how to refine the Marvel brand identity and apply it cohesively to each of our products. We created this styleguide to act as a central location where we house a live inventory of UI components, brand guidelines, brand assets, code snippets, developer guidelines and more. Anyone working on the Marvel product is encouraged to stay familiar with this styleguide and help ensure that it is kept up-to-date.</p>
            </div>

            <div className="marginBottom-l">
                <p className="c-slate lineHeight-xl fontSize-xxl fontWeight-4">Goals</p>
            </div>

            <div className="marginBottom-xl">
                <div className="grid grid--l grid--1 breakPointS-grid--3">
                    <div>
                        <div className="marginBottom-m">
                            <svg className="fill-marvel" width="38" height="44" viewBox="0 0 38 44">
                                <path d="M37.549 2.338c.301.397.451.84.451 1.329v25.667c0 1.314-.966 3.147-2.897 5.5-1.932 2.353-4.117 4.453-6.555 6.302-2.438 1.849-4.338 2.773-5.7 2.773l-.903.046c-.412.031-1.14.046-2.185.046-5.7 0-11.685-.504-17.955-1.512-.507-.122-.934-.382-1.283-.779-.348-.397-.522-.856-.522-1.375v-36.667c0-.519.166-.978.499-1.375.333-.397.768-.657 1.306-.779 6.27-1.008 12.255-1.512 17.955-1.512 3.23 0 6.222.13 8.978.39 2.755.26 4.647.497 5.676.71 1.029.214 1.67.367 1.924.458.507.122.91.382 1.211.779zm-29.549 8.662h22v-3h-22v3zm0 6h22v-3h-22v3zm0 6h22v-3h-22v3zm15 17c.781 0 1.477-.297 2.086-.891.609-.594.914-1.297.914-2.109v-4.5c0-.313.172-.641.516-.984.344-.344.672-.516.984-.516h4.5c.813 0 1.516-.297 2.109-.891.594-.594.891-1.297.891-2.109h-7.5c-1.156 0-2.195.461-3.117 1.383-.922.922-1.383 1.961-1.383 3.117v7.5z" />
                            </svg>
                        </div>

                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Cohesive design language</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">Refine our visual language to be simpler, more fun and more communicative.</p>
                    </div>

                    <div>
                        <div className="marginBottom-m">
                            <svg className="fill-orange" width="32" height="44" viewBox="0 0 32 44">
                                <path d="M31.5 4.904c.333 6.05.5 11.81.5 17.279 0 5.561-.167 11.244-.5 17.05-.061 1.069-.447 1.994-1.159 2.773-.712.779-1.583 1.23-2.614 1.352-3.303.428-7.212.642-11.727.642-4.545 0-8.47-.214-11.773-.642-1.03-.153-1.902-.619-2.614-1.398-.712-.779-1.083-1.688-1.114-2.727-.333-5.714-.5-11.458-.5-17.233 0-6.325.167-12.024.5-17.096.03-1.039.402-1.948 1.114-2.727.712-.779 1.583-1.245 2.614-1.398 4.03-.519 7.955-.779 11.773-.779 3.788 0 7.697.26 11.727.779 1.03.153 1.902.619 2.614 1.398.712.779 1.098 1.688 1.159 2.727zm-15.545 36.096c.818 0 1.53-.295 2.136-.886.606-.591.909-1.311.909-2.159 0-.818-.303-1.515-.909-2.091-.606-.576-1.318-.864-2.136-.864-.848 0-1.553.288-2.114.864-.561.576-.841 1.273-.841 2.091 0 .848.28 1.568.841 2.159.561.591 1.265.886 2.114.886zm9.65-9.627c.264-4.386.396-8.279.396-11.68-.029-3.759-.22-7.921-.571-12.485-.059-.388-.264-.612-.615-.671-3.077-.358-6.022-.537-8.835-.537-2.872 0-5.817.179-8.835.537-.381.06-.601.283-.659.671-.322 4.863-.484 9.338-.484 13.425 0 3.64.103 7.22.308 10.74.059.418.278.627.659.627h18.022c.41 0 .615-.209.615-.627z" />
                            </svg>
                        </div>

                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Platform agnostic system</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">Develop a single, unified system that is transferrable across all platforms and devices.</p>
                    </div>

                    <div>
                        <div className="marginBottom-m">
                            <svg className="fill-yellow" width="44" height="44" viewBox="0 0 44 44">
                                <path d="M.183 41.344c-.305.794-.183 1.465.367 2.015.428.427.886.641 1.374.641.244 0 .489-.046.733-.137 4.154-1.465 9.346-3.205 15.577-5.219.275-.122.565-.305.871-.549l24.237-24.357c.367-.336.58-.763.641-1.282.061-.519-.046-.992-.321-1.419-1.405-2.259-2.978-4.212-4.719-5.86-1.649-1.648-3.726-3.251-6.231-4.807-1.008-.58-1.909-.473-2.703.32l-24.237 24.357c-.275.214-.458.504-.55.87-2.993 9.218-4.673 14.361-5.04 15.429zm10.309-4.624l-3.253-3.251c.916-2.686 1.588-4.701 2.016-6.044l22.633-22.892c.275.214.68.557 1.214 1.03.535.473.909.801 1.122.984l-21.9 21.885c-.397.427-.588.916-.573 1.465.015.549.237 1.038.664 1.465.428.427.886.641 1.374.641.641 0 1.161-.198 1.558-.595l21.992-22.022c.672.702 1.359 1.572 2.062 2.61l-22.633 22.709c-.397.122-1.352.42-2.863.893-1.512.473-2.65.847-3.413 1.122z" />
                            </svg>
                        </div>

                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Expedite the design process</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">By abstracting our base styles layer, now developers can churn out UIs with minimal design input.</p>
                    </div>
                </div>
            </div>

            <div className="marginBottom-l">
                <p className="c-slate lineHeight-xl fontSize-xxl fontWeight-4">Frequently asked questions</p>
            </div>

            <div>
                <div className="grid grid--l grid--1 breakPointS-grid--2">
                    <div>
                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">What is the Marvel styleguide?</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3 marginBottom-l">Our styleguide is a live inventory of UI components, design patterns, brand assets and code guidelines which the whole Marvel team work from, keeping all of our products cohesive.</p>

                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Do Marvel products use this styleguide?</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">This styleguide is built on the exact same codebase as each of our live products. This styleguide is the central hub - new updates are pushed here first, then trickle down to our live products.</p>
                    </div>

                    <div>
                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Will this Marvel styleguide be open-sourced?</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3 marginBottom-l">For the moment, we have not yet open-sourced, mainly because it is still heavily in flux. But yes, at some point in the near future we are planning to package it up and make it easily accessible to everyone.</p>

                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Can I use this styleguide in my own work?</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">Sure, go ahead! We are planning to open-source our styleguide soon, so feel free to use it any way you wish.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
