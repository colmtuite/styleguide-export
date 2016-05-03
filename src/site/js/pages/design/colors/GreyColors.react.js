import React from 'react';

import ColorBlock from '~/pages/design/colors/ColorBlock.react';
import ColorRow from '~/pages/design/colors/ColorRow.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';

export default function GreyColors() {
    const border = <div className="posPinAll boxShadow-smoke borderRadius-m pointerEvents-none"></div>;

    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Grey colors"} />

                <SectionDescription>
                    Gray colors are used for text, backgrounds, lines and borders. <InlineCode>Smoke</InlineCode> and <InlineCode>Snow</InlineCode> have two darker shades, which are used for icons and backgrounds.
                </SectionDescription>
            </div>

            <div className="grid grid--m grid--1 breakPointS-grid--2 breakPointM-grid--3 breakPointL-grid--4">
                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="black"
                            title="black"
                            textColor="white"
                            hexValue="#1F2D3D"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="steel"
                            title="steel"
                            textColor="white"
                            hexValue="#273444"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="slate"
                            title="slate"
                            textColor="white"
                            hexValue="#3C4858"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="silver"
                            title="silver"
                            textColor="white"
                            hexValue="#8492A6"
                        />
                    </div>
                </div>

                <ColorBlock
                    color="smoke"
                    textColor="slate"
                    lightColor="1"
                    hexValue="#E0E6ED"
                    hexValueDark="#D3DCE6"
                    hexValueExtraDark="#C0CCDA"
                />

                <ColorBlock
                    color="snow"
                    textColor="slate"
                    lightColor="1"
                    hexValue="#F9FAFC"
                    hexValueDark="#EFF2F7"
                    hexValueExtraDark="#E5E9F2"
                    border={border}
                />
            </div>
        </section>
    );
}
