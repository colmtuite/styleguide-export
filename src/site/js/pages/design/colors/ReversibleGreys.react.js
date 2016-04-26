import React from 'react';

import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

export default function ReversibleGreys() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Reversible grays"} />

                <SectionDescription>
                    The gray colors are reversible. Each light gray color has
                    a complementary dark gray color. This helps keeping the colors
                    well balanced and also makes it easier to implement
                    light/dark themes. Good example of this is the Marvel editor,
                    which is implemented in the dark theme.
                </SectionDescription>
            </div>

            <div className="grid grid--m grid--1 breakPointS-grid--2">
                <div>
                    <div className="position-relative borderRadius-m">
                        <div className="padding-m bg-white borderRadiusTop-s">
                            <div className="marginBottom-xs">
                                <p className="fontSize-xl lineHeight-m">
                                    Light theme
                                </p>
                            </div>

                            <p className="fontWeight-3 fontSize-m lineHeight-m c-silver">
                                This subtle paragraph text color works equally
                                well on a light or dark background.
                            </p>
                        </div>

                        <div className="padding-m bg-snow--d"></div>
                        <div className="padding-m bg-smoke borderRadiusBottom-s"></div>
                        <div className="posPinAll boxShadow-smoke borderRadius-m pointerEvents-none"></div>
                    </div>
                </div>

                <div>
                    <div className="borderRadius-m">
                        <div className="padding-m bg-black borderRadiusTop-s">
                            <div className="marginBottom-xs">
                                <p className="fontSize-xl lineHeight-m c-white">Dark theme</p>
                            </div>

                            <p className="fontWeight-3 fontSize-m lineHeight-m c-silver">
                                This subtle paragraph text color works equally
                                well on a light or dark background.
                            </p>
                        </div>

                        <div className="padding-m bg-steel"></div>
                        <div className="padding-m bg-slate borderRadiusBottom-s"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
