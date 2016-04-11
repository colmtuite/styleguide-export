import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { orderedListCode } from '~/components/CodeSnippets.js';

export default function Typefaces() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Typefaces" } />

                <SectionDescription>
                    Marvel's primary typeface is Fakt Pro Rounded. We chose Fakt Pro Rounded because we needed a robust typeface with legible numbers that rendered well at small sizes. It needed to be soft and friendly, yet plain enough to get out of the way and let the user's designs shine.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="paddingLeftRight-xxs">
                        <div className="inline marginBottom-xs fontSize-xl lineHeight-xl">
                            <div className="marginRight-xs">A</div>
                            <div className="marginRight-xs">B</div>
                            <div className="marginRight-xs">C</div>
                            <div className="marginRight-xs">D</div>
                            <div className="marginRight-xs">E</div>
                            <div className="marginRight-xs">F</div>
                            <div className="marginRight-xs">G</div>
                            <div className="marginRight-xs">H</div>
                            <div className="marginRight-xs">I</div>
                            <div className="marginRight-xs">J</div>
                            <div className="marginRight-xs">K</div>
                            <div className="marginRight-xs">L</div>
                            <div className="marginRight-xs">M</div>
                            <div className="marginRight-xs">N</div>
                            <div className="marginRight-xs">O</div>
                            <div className="marginRight-xs">P</div>
                            <div className="marginRight-xs">Q</div>
                            <div className="marginRight-xs">R</div>
                            <div className="marginRight-xs">S</div>
                            <div className="marginRight-xs">T</div>
                            <div className="marginRight-xs">U</div>
                            <div className="marginRight-xs">V</div>
                            <div className="marginRight-xs">W</div>
                            <div className="marginRight-xs">X</div>
                            <div className="marginRight-xs">Y</div>
                            <div className="marginRight-xs">Z</div>
                        </div>

                        <div className="inline marginBottom-xs textTransform-lowercase fontSize-xl lineHeight-xl">
                            <div className="marginRight-xs">A</div>
                            <div className="marginRight-xs">B</div>
                            <div className="marginRight-xs">C</div>
                            <div className="marginRight-xs">D</div>
                            <div className="marginRight-xs">E</div>
                            <div className="marginRight-xs">F</div>
                            <div className="marginRight-xs">G</div>
                            <div className="marginRight-xs">H</div>
                            <div className="marginRight-xs">I</div>
                            <div className="marginRight-xs">J</div>
                            <div className="marginRight-xs">K</div>
                            <div className="marginRight-xs">L</div>
                            <div className="marginRight-xs">M</div>
                            <div className="marginRight-xs">N</div>
                            <div className="marginRight-xs">O</div>
                            <div className="marginRight-xs">P</div>
                            <div className="marginRight-xs">Q</div>
                            <div className="marginRight-xs">R</div>
                            <div className="marginRight-xs">S</div>
                            <div className="marginRight-xs">T</div>
                            <div className="marginRight-xs">U</div>
                            <div className="marginRight-xs">V</div>
                            <div className="marginRight-xs">W</div>
                            <div className="marginRight-xs">X</div>
                            <div className="marginRight-xs">Y</div>
                            <div className="marginRight-xs">Z</div>
                        </div>

                        <div className="inline fontSize-xl lineHeight-xl">
                            <div className="marginRight-xs">0</div>
                            <div className="marginRight-xs">1</div>
                            <div className="marginRight-xs">2</div>
                            <div className="marginRight-xs">3</div>
                            <div className="marginRight-xs">4</div>
                            <div className="marginRight-xs">5</div>
                            <div className="marginRight-xs">6</div>
                            <div className="marginRight-xs">7</div>
                            <div className="marginRight-xs">8</div>
                            <div className="marginRight-xs">9</div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ orderedListCode } />
        </section>
    );
}
