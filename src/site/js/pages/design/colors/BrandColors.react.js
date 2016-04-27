import React from 'react';

import ColorBlock from '~/pages/design/colors/ColorBlock.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

export default function BandColors() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Brand colors"} />

                <SectionDescription>
                    Primary brand colors are used for elements that must reflect
                    Marvel's brand. Each color has a darker and a lighter shade.
                </SectionDescription>
            </div>

            <div className="grid grid--m grid--1 breakPointS-grid--2 breakPointM-grid--3 breakPointL-grid--4">
                <ColorBlock
                    color="marvel"
                    textColor="white"
                    hexValueLight="#85D7FF"
                    hexValue="#1FB6FF"
                    hexValueDark="#009EEB"
                />

                <ColorBlock
                    color="purple"
                    textColor="white"
                    hexValueLight="#A389F4"
                    hexValue="#7E5BEF"
                    hexValueDark="#592DEA"
                />

                <ColorBlock
                    color="pink"
                    textColor="white"
                    hexValueLight="#FF7CE5"
                    hexValue="#FF49DB"
                    hexValueDark="#FF16D1"
                />

                <ColorBlock
                    color="orange"
                    textColor="white"
                    hexValueLight="#FF9E7C"
                    hexValue="#FF7849"
                    hexValueDark="#FF5216"
                />

                <ColorBlock
                    color="green"
                    textColor="white"
                    hexValueLight="#29EB7F"
                    hexValue="#13CE66"
                    hexValueDark="#0F9F4F"
                />

                <ColorBlock
                    color="yellow"
                    textColor="white"
                    hexValueLight="#FFD55F"
                    hexValue="#FFC82C"
                    hexValueDark="#F8B700"
                />
            </div>
        </section>
    );
}
