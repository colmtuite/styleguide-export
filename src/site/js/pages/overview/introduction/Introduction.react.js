import React from 'react';
import PageTitle from '~/components/PageTitle.react';

export default function Introduction() {
    return (
        <div>
            <PageTitle title="Introduction" />

            <div className="marginBottom-xl">
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3 marginBottom-m paddingBottom-s">As Marvel continues to grow, both as a product and a company, one challenge we are faced with is learning how to refine the Marvel brand identity and apply it cohesively to each of our products. We created this styleguide to act as a central location where we house a live inventory of UI components, brand guidelines, brand assets, code snippets, developer guidelines and more. Anyone working on the Marvel product is encouraged to stay familiar with this styleguide and help ensure that it is kept up-to-date.</p>
            </div>

            <div className="marginBottom-l">
                <p className="c-slate lineHeight-xl fontSize-xxl fontWeight-4">Goals</p>
            </div>
            <div className="marginBottom-xl">
                <div className="grid grid--l grid--1 breakPointS-grid--3">
                    <div>
                        <p className="c-slate lineHeight-m fontSize-m fontWeight-5">Cohesive design language</p>
                        <p className="c-silver lineHeight-m fontSize-m fontWeight-3">Refine our visual language to be more communicative, more .</p>
                    </div>
                    <div>
                        <p className="c-slate lineHeight-m fontSize-m fontWeight-5">Platform agnostic system</p>
                        <p className="c-silver lineHeight-m fontSize-m fontWeight-3">Develop a single, unified system that is transferrable across all platforms and devices.</p>
                    </div>
                    <div>
                        <p className="c-slate lineHeight-m fontSize-m fontWeight-5">Expedite the design process</p>
                        <p className="c-silver lineHeight-m fontSize-m fontWeight-3">By abstracting our base styles layer, now developers can churn out UIs with minimal design input.</p>
                    </div>
                </div>
            </div>

            <div className="marginBottom-l">
                <p className="c-slate lineHeight-xl fontSize-xxl fontWeight-4">Frequently asked questions</p>
            </div>
            <div className="">
                <div className="grid grid--l grid--1 breakPointS-grid--2">
                    <div>
                        <p className="c-slate lineHeight-l fontSize-l fontWeight-5">What is the Marvel styleguide?</p>
                        <p className="c-silver lineHeight-m fontSize-m fontWeight-3 marginBottom-l">Our styleguide is a live inventory of UI components, design patterns, brand assets and code guidelines which the whole Marvel team work from, keeping all of our products cohesive.</p>

                        <p className="c-slate lineHeight-l fontSize-l fontWeight-5">Will this Marvel styleguide be open-sourced?</p>
                        <p className="c-silver lineHeight-m fontSize-m fontWeight-3">For the moment, we have not yet open-sourced, mainly because it is still heavily in flux. But yes, at some point in the near future we are planning to package it up and make it easily accessible to everyone.</p>
                    </div>
                    <div>
                        <p className="c-slate lineHeight-l fontSize-l fontWeight-5">Can I use this styleguide in my own work?</p>
                        <p className="c-silver lineHeight-m fontSize-m fontWeight-3 marginBottom-l">Sure, go ahead! We are planning to open-source our styleguide soon, so feel free to use it any way you wish.</p>

                        <p className="c-slate lineHeight-l fontSize-l fontWeight-5">Do Marvel products use this styleguide?</p>
                        <p className="c-silver lineHeight-m fontSize-m fontWeight-3">This styleguide is built on the exact same codebase as each of our live products. This styleguide is the central hub - new updates are pushed here first, then trickle down to our live products.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
