import React from 'react';

import PageTitle from '~/components/PageTitle.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { scrollbarCode } from '~/components/CodeSnippets.js';

export default function Scrollbar() {
    return (
        <div>
            <PageTitle title="Scrollbar" />

            <section className="marginBottom-m">
                <div className="marginBottom-l">
                    <SectionTitle sectionTitle={"Scrollbar"} />

                    <SectionDescription>
                        Sexy, custom scrollbars for things like popovers, modals, sidebars etc.
                    </SectionDescription>
                </div>

                <SectionExample>
                    <div className="padding-m">
                        <div className="antiscroll-wrap">
                            <div
                                className="antiscroll-inner boxShadow-smoke borderRadius-m"
                                style={{ width: '500px', height: '250px' }}>
                                <div
                                    className="padding-xs"
                                    style={{ width: '800px', height: 'auto' }}>
                                    <p className="padding-xs fontWeight-3 fontSize-m lineHeight-m c-silver">
                                        Give thanks to the most high. Look at the sunset, life is amazing,
                                        life is beautiful, life is what you make it. It’s important to use
                                        cocoa butter. It’s the key to more success, why not live smooth?
                                        Why live rough? The key to success is to keep your head above the
                                        water, never give up. The key to success is to keep your head above
                                        the water, never give up. The weather is amazing, walk with me through
                                        the pathway of more success. Take this journey with me, Lion!
                                    </p>

                                    <p className="padding-xs fontWeight-3 fontSize-m lineHeight-m c-silver">
                                        The key to success is to keep your head above the water, never give up.
                                        Cloth talk. Fan luv. We the best. Always remember in the jungle there’s
                                        a lot of they in there, after you overcome they, you will make it to
                                        paradise. You see the hedges, how I got it shaped up? It’s important
                                        to shape up your hedges, it’s like getting a haircut, stay fresh.
                                        They will try to close the door on you, just open it. You do know,
                                        you do know that they don’t want you to have lunch. I’m keeping it
                                        real with you, so what you going do is have lunch.
                                    </p>

                                    <p className="padding-xs fontWeight-3 fontSize-m lineHeight-m c-silver">
                                        Stay focused. I’m up to something. The key to more success is to
                                        get a massage once a week, very important, major key, cloth talk.
                                        Cloth talk. We the best. The other day the grass was brown, now
                                        it’s green because I ain’t give up. Never surrender. To succeed
                                        you must believe. When you believe, you will succeed. We the best.
                                        Congratulations, you played yourself. Let’s see what Chef Dee got
                                        that they don’t want us to eat. The key is to enjoy life, because
                                        they don’t want you to enjoy life. I promise you, they don’t want
                                        you to jetski, they don’t want you to smile.
                                    </p>

                                    <p className="padding-xs fontWeight-3 fontSize-m lineHeight-m c-silver">
                                        Let’s see what Chef Dee got that they don’t want us to eat.
                                        In life there will be road blocks but we will over come it.
                                        They never said winning was easy. Some people can’t handle
                                        success, I can. Congratulations, you played yourself. They
                                        key is to have every key, the key to open every door. They
                                        key is to have every key, the key to open every door.
                                        Another one. Fan luv. Wraith talk. Let’s see what Chef Dee
                                        got that they don’t want us to eat. Celebrate success right,
                                        the only way, apple. Congratulations, you played yourself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionExample>

                <SectionCode code={scrollbarCode} />
            </section>
        </div>
    );
}
