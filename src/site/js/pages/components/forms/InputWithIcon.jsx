import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { inputWithIconCode } from '~/components/CodeSnippets.js';

export default function InputSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Input with icon" } />

                <SectionDescription>
                    Use a single class to define an input style.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <label className="componentIcon componentIcon--m componentIcon--input">
                        <input className="input input--default" type="text" placeholder="Placeholder text" />

                        <div className="componentIconContainer">
                            <div className="height-100 display-table">
                                <div className="display-tableCell verticalAlign-middle">
                                    <svg className="svgIcon fill-smoke--d display-block" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="3 -3 24 24" enable-background="new 3 -3 24 24">
                                        <path d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </SectionExample>

            <SectionCode code={ inputWithIconCode } />
        </section>
    );
}
