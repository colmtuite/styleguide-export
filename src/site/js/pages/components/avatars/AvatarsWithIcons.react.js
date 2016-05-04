import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { avatarsWithIconsCode } from '~/components/CodeSnippets.js';

const teamDemoLogo = require('images/team-demo-logo.png');
export default function AvatarsWithIcons() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Avatars with team icons"} />

                <SectionDescription>
                    Append an optional <InlineCode>.avatar-team</InlineCode>{' '}
                    into the avatar and set its background image in order to
                    show that a user belongs to a team. Team icons automatically
                    respond according to the parent avatar size.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="textAlign-center breakPointM-inline breakPointM-textAlign-left">
                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-xs breakPointL-marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--xl"
                                title="Dean Blacc"
                                style={{
                                    backgroundColor: '#776FB3',
                                    margin: '0 auto',
                                }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>

                                <div
                                    className="avatar-team"
                                    style={{ backgroundImage: `url(${teamDemoLogo})` }}>
                                </div>
                            </div>
                        </div>

                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-xs breakPointL-marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--l"
                                title="Dean Blacc"
                                style={{
                                    backgroundColor: '#776FB3',
                                    margin: '0 auto',
                                }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>

                                <div
                                    className="avatar-team"
                                    style={{ backgroundImage: `url(${teamDemoLogo})` }}>
                                </div>
                            </div>
                        </div>

                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-xs breakPointL-marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--m"
                                title="Dean Blacc"
                                style={{
                                    backgroundColor: '#776FB3',
                                    margin: '0 auto',
                                }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>

                                <div
                                    className="avatar-team"
                                    style={{ backgroundImage: `url(${teamDemoLogo})` }}>
                                </div>
                            </div>
                        </div>

                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-xs breakPointL-marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--s"
                                title="Dean Blacc"
                                style={{
                                    backgroundColor: '#776FB3',
                                    margin: '0 auto',
                                }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>

                                <div
                                    className="avatar-team"
                                    style={{ backgroundImage: `url(${teamDemoLogo})` }}>
                                </div>
                            </div>
                        </div>

                        <div className="marginBottom-m breakPointM-marginBottom-0 verticalAlign-middle">
                            <div
                                className="avatar avatar--xs"
                                title="Dean Blacc"
                                style={{
                                    backgroundColor: '#776FB3',
                                    margin: '0 auto',
                                }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>

                                <div
                                    className="avatar-team"
                                    style={{ backgroundImage: `url(${teamDemoLogo})` }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={avatarsWithIconsCode} />
        </section>
    );
}
