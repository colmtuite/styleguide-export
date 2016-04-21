import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { basicAvatarsCode } from '~/components/CodeSnippets.js';

export default function BasicAvatars() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Basic avatar structure"} />

                <SectionDescription>
                    Avatars display an image if the user has uploaded one but
                    if not, initials are shown instead. The background color is
                    pulled from ... and set inline on <InlineCode>.avatar</InlineCode>.
                    The image URL is set inline on <InlineCode>.avatar-img</InlineCode>.
                    Each avatar should have a <InlineCode>title</InlineCode> attribute
                    which displays the user's name.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--m"
                                title="Dean Blacc"
                                style={{ backgroundColor: '#776FB3' }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }} >
                                </div>

                                <div className="avatar-initials">DB</div>
                            </div>
                        </div>

                        <div className="marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--m"
                                title="Dean Blacc"
                                style={{ backgroundColor: '#776FB3' }}>
                                <div className="avatar-img"></div>

                                <div className="avatar-initials">DB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={basicAvatarsCode} />
        </section>
    );
}
