import React from 'react';

import ColorBlock from '~/pages/design/colors/ColorBlock.react';
import ColorRow from '~/pages/design/colors/ColorRow.react';
import SectionDescription from '~/components/SectionDescription';
import SectionTitle from '~/components/SectionTitle';

export default function GreyColors() {
    const border = <div className="posPinAll boxShadow-smoke borderRadius-m pointerEvents-none"></div>;

    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Grey colors"} />

                <SectionDescription>
                    Primary brand colors, used for elements that must reflect Marvel's brand.
                </SectionDescription>
            </div>

            <div className="grid grid--m grid--2 breakPointM-grid--3 breakPointL-grid--4">
                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="black"
                            title="black"
                            textColor="white"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="steel"
                            title="steel"
                            textColor="white"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="slate"
                            title="slate"
                            textColor="white"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="silver"
                            title="silver"
                            textColor="white"
                        />
                    </div>
                </div>

                <ColorBlock
                    color="smoke"
                    textColor="slate"
                    lightColor="1"
                />

                <ColorBlock
                    color="snow"
                    textColor="slate"
                    lightColor="1"
                    border={border}
                />
            </div>
        </section>
    );
}
