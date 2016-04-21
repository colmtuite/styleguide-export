import React from 'react';

import ColorBlock from '~/pages/design/colors/ColorBlock.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

export default function BandColors() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Brand colors"} />

                <SectionDescription>
                    Primary brand colors, used for elements that must reflect Marvel's brand.
                </SectionDescription>
            </div>

            <div className="grid grid--m grid--2 breakPointM-grid--3 breakPointL-grid--4">
                <ColorBlock color="marvel" textColor="white" />
                <ColorBlock color="purple" textColor="white" />
                <ColorBlock color="pink" textColor="white" />
                <ColorBlock color="orange" textColor="white" />
                <ColorBlock color="green" textColor="white" />
                <ColorBlock color="yellow" textColor="white" />
            </div>
        </section>
    );
}
